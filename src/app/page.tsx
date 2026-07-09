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

};const INITIAL_SPELL_SLOTS: Record<number, SpellSlotInfo> = {
  1: { current: 0, max: 0 },
  2: { current: 0, max: 0 },
  3: { current: 0, max: 0 },
  4: { current: 0, max: 0 },
  5: { current: 0, max: 0 },
  6: { current: 0, max: 0 },
  7: { current: 0, max: 0 },
  8: { current: 0, max: 0 },
  9: { current: 0, max: 0 },
};

export default function MainOrchestrator() {

  const [activeTab, setActiveTab] = useState<TabType>('grimoire');
  const [spellSlots, setSpellSlots] = useState<Record<number, SpellSlotInfo>>(INITIAL_SPELL_SLOTS);
  const learnedSpells = useLiveQuery(() => GrimoireController.getAllSpells()) || [];
  const [logs, setLogs] = useState<string[]>([]);
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

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
              onSelectedSpellChange={setSelectedSpell}
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

        <nav className={`fixed bottom-0 left-0 right-0 z-50 h-16 bg-[#110d06] border-t border-[#8a6f2d]/15 flex items-center justify-around px-4 pb-safe shadow-[0_-4px_12px_rgba(0,0,0,0.5)] transition-all duration-200 ${
          selectedSpell && activeTab === 'grimoire' ? 'hidden md:flex' : 'flex'
        }`}>
          <button
            onClick={() => setActiveTab('grimoire')}
            className={`flex flex-col items-center justify-center w-full h-full transition-all ${
              activeTab === 'grimoire' ? 'text-[#d0bcff]' : 'text-[#cbc3d7]/50'
            }`}
          >
            <span className="text-2xl mb-0.5">📖</span>
            <span className="text-[9px] font-bold tracking-wide uppercase font-label">Grimório</span>
          </button>

          <button
            onClick={() => setActiveTab('sanctuary')}
            className={`flex flex-col items-center justify-center w-full h-full transition-all ${
              activeTab === 'sanctuary' ? 'text-[#d0bcff]' : 'text-[#cbc3d7]/50'
            }`}
          >
            <span className="text-2xl mb-0.5">⛪</span>
            <span className="text-[9px] font-bold tracking-wide uppercase font-label">Santuário</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex flex-col items-center justify-center w-full h-full transition-all ${
              activeTab === 'skills' ? 'text-[#d0bcff]' : 'text-[#cbc3d7]/50'
            }`}
          >
            <span className="text-2xl mb-0.5">🛡️</span>
            <span className="text-[9px] font-bold tracking-wide uppercase font-label">Habilidades</span>
          </button>

          <button
            onClick={() => setActiveTab('chronicles')}
            className={`flex flex-col items-center justify-center w-full h-full transition-all ${
              activeTab === 'chronicles' ? 'text-[#d0bcff]' : 'text-[#cbc3d7]/50'
            }`}
          >
            <span className="text-2xl mb-0.5">⏳</span>
            <span className="text-[9px] font-bold tracking-wide uppercase font-label">Crônicas</span>
          </button>
        </nav>
      </div>
    </main>
  );
}