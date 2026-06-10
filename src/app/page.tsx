'use client';

import React, { useEffect, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { GrimoireController } from '../controllers/grimoireController';
import { GrimoireView } from '../components/GrimoireView';
import { CatalogView } from '../components/CatalogView';
import { DamageType } from '../models/types';
import { Spell } from '../models/spell';

type TabType = 'grimoire' | 'sanctuary' | 'skills' | 'chronicles';

type SpellSlotInfo = {
  current: number;
  max: number;
};

const INITIAL_SPELL_SLOTS: Record<number, SpellSlotInfo> = {
  1: { current: 4, max: 4 },
  2: { current: 3, max: 3 },
  3: { current: 3, max: 3 },
  4: { current: 2, max: 2 },
  5: { current: 1, max: 1 },
  6: { current: 0, max: 1 },
  7: { current: 0, max: 1 },
  8: { current: 0, max: 1 },
  9: { current: 0, max: 1 },
};

export default function MainOrchestrator() {
  const [activeTab, setActiveTab] = useState<TabType>('grimoire');
  const [spellSlots, setSpellSlots] = useState<Record<number, SpellSlotInfo>>(INITIAL_SPELL_SLOTS);
  const learnedSpells = useLiveQuery(() => GrimoireController.getAllSpells()) || [];
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    void GrimoireController.resetLegacyGrimoireIfNeeded();
  }, []);

  const handleCast = (spellName: string, damage: DamageType) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ✨ COMPILADO: ${spellName} -> Matriz [${damage}]`, ...prev].slice(0, 3));
  };

  const handleLearnSpell = async (spell: Spell) => {
    const result = await GrimoireController.addSpell(spell);
    if (result === 'SUCCESS') {
      const timestamp = new Date().toLocaleTimeString();
      setLogs((prev) => [`[${timestamp}] 📜 INSCRITO: ${spell.name} guardado na memória.`, ...prev].slice(0, 3));
    }
  };

  const updateSpellSlot = (level: number, field: 'current' | 'max', delta: number) => {
    setSpellSlots((prev) => {
      const slotInfo = prev[level] ?? { current: 0, max: 0 };
      const nextValue = Math.max(0, slotInfo[field] + delta);

      if (field === 'max') {
        const nextCurrent = Math.min(slotInfo.current, nextValue);
        return {
          ...prev,
          [level]: { current: nextCurrent, max: nextValue },
        };
      }

      return {
        ...prev,
        [level]: { ...slotInfo, current: Math.min(nextValue, slotInfo.max) },
      };
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#16121a] px-3 pb-28 pt-4 text-[#e9dfeb] sm:px-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 2xl:max-w-[88rem]">
        {(activeTab === 'skills' || activeTab === 'chronicles') && (
          <header className="spellbook-shell overflow-hidden rounded-[30px] border border-[#4a3d23]/70 px-4 py-4 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-label text-[10px] uppercase tracking-[0.35em] text-[#f4e4bc]/70">SPELLcialist // Grimório Ancestral</p>
                <h1 className="font-heading mt-1 text-3xl font-bold leading-none text-[#f4e4bc] sm:text-4xl">
                  {activeTab === 'skills' && 'Habilidades Seladas'}
                  {activeTab === 'chronicles' && 'Crônicas Seladas'}
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#e9dfeb]/75">
                  Um livro de feitiços vivo, pensado para mobile-first, com cada tela tratada como uma página do mesmo manuscrito.
                </p>
              </div>

              <div className="hidden rounded-2xl border border-[#8a6f2d]/60 bg-[#1b1408]/70 px-3 py-2 text-right text-[10px] uppercase tracking-[0.25em] text-[#f4e4bc]/80 sm:block">
                <div>Memória Arcana</div>
                <div className="mt-1 text-[#d0bcff]">{learnedSpells.length} inscrições</div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-full border border-[#8a6f2d]/35 bg-[#1b1408]/55 px-3 py-2 text-[10px] text-[#f4e4bc]/75">
              <span className="h-2 w-2 rounded-full bg-[#e9c349] shadow-[0_0_0_4px_rgba(233,195,73,0.15)]" />
              <p className="truncate font-mono">
                {logs.length > 0 ? logs[0] : '// Páginas do manuscrito sincronizadas com a Ordem dos Escribas'}
              </p>
            </div>
          </header>
        )}

        <section className="spellbook-page overflow-hidden rounded-[30px] border border-[#b39b63]/70 p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),0_25px_60px_rgba(0,0,0,0.35)] sm:p-4">
          {activeTab === 'grimoire' && (
            <GrimoireView
              spells={learnedSpells}
              onCast={handleCast}
              onNavigateToCatalog={() => setActiveTab('sanctuary')}
              spellSlots={spellSlots}
              onUpdateSpellSlot={updateSpellSlot}
            />
          )}

          {activeTab === 'sanctuary' && (
            <CatalogView
              learnedSpells={learnedSpells}
              onLearnSpell={handleLearnSpell}
            />
          )}

          {(activeTab === 'skills' || activeTab === 'chronicles') && (
            <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[26px] border border-[#8a6f2d]/30 bg-[#f4e4bc]/70 px-6 py-20 text-center text-[#1b1408] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#8a6f2d]/40 bg-[#1b1408] text-2xl text-[#f4e4bc] shadow-[inset_0_0_18px_rgba(0,0,0,0.35)]">
                🔒
              </div>
              <h3 className="font-heading text-3xl font-bold text-[#1b1408]">Página selada</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#4b3c1f]">
                Esta folha do manuscrito ainda não foi revelada. Por agora, o livro concentra-se no grimório e no santuário.
              </p>
            </div>
          )}
        </section>

        <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-6xl justify-center px-3 pb-3 2xl:max-w-[88rem]">
          <div className="spellbook-shell flex w-full items-stretch justify-between gap-2 rounded-[26px] border border-[#4a3d23]/80 p-2 shadow-[0_-20px_50px_rgba(0,0,0,0.35)] backdrop-blur">
            <button
              onClick={() => setActiveTab('grimoire')}
              className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-[18px] px-3 py-2 transition-all ${
                activeTab === 'grimoire'
                  ? 'bg-[#f4e4bc] text-[#1b1408] shadow-[inset_0_0_0_1px_rgba(126,99,35,0.18)]'
                  : 'text-[#f4e4bc]/65 hover:bg-[#1b1408]/55 hover:text-[#f4e4bc]'
              }`}
            >
              <span className="text-xl">📖</span>
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.22em]">Grimório</span>
            </button>

            <button
              onClick={() => setActiveTab('sanctuary')}
              className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-[18px] px-3 py-2 transition-all ${
                activeTab === 'sanctuary'
                  ? 'bg-[#f4e4bc] text-[#1b1408] shadow-[inset_0_0_0_1px_rgba(126,99,35,0.18)]'
                  : 'text-[#f4e4bc]/65 hover:bg-[#1b1408]/55 hover:text-[#f4e4bc]'
              }`}
            >
              <span className="text-xl">⛪</span>
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.22em]">Santuário</span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-[18px] px-3 py-2 transition-all ${
                activeTab === 'skills'
                  ? 'bg-[#f4e4bc] text-[#1b1408] shadow-[inset_0_0_0_1px_rgba(126,99,35,0.18)]'
                  : 'text-[#f4e4bc]/45 hover:bg-[#1b1408]/55 hover:text-[#f4e4bc]'
              }`}
            >
              <span className="text-xl opacity-70">🛡️</span>
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.22em] opacity-80">Habilidades</span>
            </button>

            <button
              onClick={() => setActiveTab('chronicles')}
              className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-[18px] px-3 py-2 transition-all ${
                activeTab === 'chronicles'
                  ? 'bg-[#f4e4bc] text-[#1b1408] shadow-[inset_0_0_0_1px_rgba(126,99,35,0.18)]'
                  : 'text-[#f4e4bc]/45 hover:bg-[#1b1408]/55 hover:text-[#f4e4bc]'
              }`}
            >
              <span className="text-xl opacity-70">⏳</span>
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.22em] opacity-80">Crônicas</span>
            </button>
          </div>
        </nav>
      </div>
    </main>
  );
}