import React, { useState } from 'react';
import { Spell } from '../models/spell';
import { UNIVERSAL_SPELLS_CATALOG } from '../models/catalog/universalSpellsCatalog';
import { SpellDetailModal } from './SpellDetailModal';

interface CatalogViewProps {
  learnedSpells: Spell[];
  onLearnSpell: (spell: Spell) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ learnedSpells, onLearnSpell }) => {
  const [expandedLevels, setExpandedLevels] = useState<Set<number>>(new Set([]));
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const learnedSpellNames = new Set(learnedSpells.map((spell) => spell.name));

  const toggleLevel = (level: number) => {
    setExpandedLevels((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(level)) {
        newSet.delete(level);
      } else {
        newSet.add(level);
      }
      return newSet;
    });
  };

  const levelLabel = (level: number) => (level === 0 ? 'Truques' : `${level}º Círculo`);

  const spellsByLevel = Array.from({ length: 10 }, (_, level) =>
    UNIVERSAL_SPELLS_CATALOG.filter((spell) => spell.level === level)
  );

  return (
    <div className="spellbook-page hide-scrollbar h-[calc(100vh-220px)] lg:h-[calc(100vh-200px)] 2xl:h-[calc(100vh-180px)] overflow-hidden rounded-[1.75rem] border border-[#b39b63]/60 bg-linear-to-b from-[#f8edcd] via-[#f4e4bc] to-[#ede8d3] p-4 sm:p-5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.5),inset_0_-1px_3px_rgba(0,0,0,0.1)] flex flex-col">
      <div className="flex items-start justify-between gap-4 border-b border-[#8a6f2d]/25 pb-4 mb-5 shrink-0">
        <div>
          <p className="font-label text-[9px] uppercase tracking-[0.4em] text-[#6e5a2d]/75">⚔️ Santuário Arcano ⚔️</p>
          <h2 className="font-heading mt-2 text-4xl font-bold leading-tight text-[#1b1408] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
            Tomo de Feitiços
          </h2>
          <p className="mt-2 text-sm text-[#5d4a25]/85 leading-relaxed">
            Compêndio completo das magias arcanas disponíveis para transcrição em seu grimório
          </p>
        </div>
      </div>

      <div className="min-h-0 flex-1 hide-scrollbar overflow-y-auto pr-2">
        <div className="space-y-3.5">
          {spellsByLevel.map((spellsInLevel, level) => {
            if (spellsInLevel.length === 0) {
              return null;
            }

            const isExpanded = expandedLevels.has(level);
            const gradientColor = level === 0 ? '#d0bcff' : level <= 3 ? '#c5b8e8' : level <= 6 ? '#b8a8d8' : '#a898c8';

            return (
              <div
                key={level}
                className="rounded-3xl border-2 border-[#8a6f2d]/28 bg-linear-to-r from-[#f8edcd] to-[#f4e4bc] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.6)]"
              >
                <button
                  type="button"
                  onClick={() => toggleLevel(level)}
                  className="w-full flex items-center justify-between gap-3 border-b-2 border-[#8a6f2d]/18 p-4 hover:bg-[#f9f1dd] active:bg-[#f8ead0] transition-all duration-200"
                >
                  <div className="text-left flex-1 min-w-0">
                    <p className="font-label text-[8px] uppercase tracking-[0.4em] text-[#6e5a2d]/60">
                      {level === 0 ? '✨ Truques Mágicos' : `⚡ Nível ${level}`}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-[#1b1408] leading-tight mt-1">
                      {levelLabel(level)}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className="rounded-full px-3 py-1.5 text-[10px] font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                      style={{
                        backgroundColor: gradientColor,
                        boxShadow: `0 0 12px ${gradientColor}40, 0 2px 6px rgba(0,0,0,0.25)`
                      }}
                    >
                      {spellsInLevel.length}
                    </span>
                    <span className={`text-[#1b1408] transition-all duration-300 transform text-lg font-bold
                     ${ isExpanded ? 'rotate-180 scale-110' : 'scale-100'}`}> ▼ </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-4 space-y-2 bg-linear-to-b from-[#f8edcd]/30 to-transparent animate-in fade-in duration-300">
                    {spellsInLevel.map((spell) => {
                      const isLearned = learnedSpellNames.has(spell.name);

                      return (
                        <button
                          key={spell.id}
                          type="button"
                          onClick={() => {
                            setSelectedSpell(spell);
                            setIsModalOpen(true);
                          }}
                          className={`w-full rounded-xl px-4 py-3 text-left transition-all duration-200 border-1.5 flex items-center justify-between gap-3 group ${
                            isLearned
                              ? 'border-[#8a6f2d]/15 bg-[#f4e4bc]/60 text-[#6e5a2d] cursor-default'
                              : 'border-[#8a6f2d]/25 bg-[#1b1408] text-[#f4e4bc] hover:bg-[#2a1f18] hover:border-[#8a6f2d]/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]'
                          }`}
                          disabled={isLearned}
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className={`font-heading font-bold leading-tight text-sm ${
                              isLearned ? 'text-[#6e5a2d]' : 'text-[#f4e4bc] group-hover:text-[#ffe088]'
                            }`}>
                              {spell.name}
                            </h4>
                          </div>
                          {isLearned && (
                            <span className="text-xs font-bold text-[#6e5a2d] shrink-0">✓</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selectedSpell && (
        <SpellDetailModal
          spell={selectedSpell}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onTranscribe={onLearnSpell}
          isAlreadyLearned={learnedSpellNames.has(selectedSpell.name)}
        />
      )}
    </div>
  );
};