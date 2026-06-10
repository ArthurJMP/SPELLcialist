import React, { useEffect, useMemo, useState } from 'react';
import { Spell } from '../models/spell';
import { DamageType } from '../models/types';
import { GrimoireController } from '../controllers/grimoireController';
import { CastModal } from './CastModal';

interface GrimoireViewProps {
  spells: Spell[];
  onCast: (spellName: string, damage: DamageType) => void;
  onNavigateToCatalog: () => void;
  spellSlots: Record<number, { current: number; max: number }>;
  onUpdateSpellSlot: (level: number, field: 'current' | 'max', delta: number) => void;
}

export const GrimoireView: React.FC<GrimoireViewProps> = ({
  spells,
  onCast,
  onNavigateToCatalog,
  spellSlots,
  onUpdateSpellSlot,
}) => {
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(spells[0] ?? null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');
  const [expandedLevels, setExpandedLevels] = useState<Set<number>>(new Set([]));

  const spellsByLevel = useMemo(
    () => Array.from({ length: 10 }, (_, level) => spells.filter((spell) => spell.level === level)),
    [spells]
  );

  useEffect(() => {
    setSelectedSpell((currentSelectedSpell) => {
      if (!currentSelectedSpell) {
        return spells[0] ?? null;
      }

      return spells.find((spell) => spell.id === currentSelectedSpell.id) ?? spells[0] ?? null;
    });
  }, [spells]);

  useEffect(() => {
    if (spells.length > 0 && !selectedSpell) {
      setSelectedSpell(spells[0]);
    }
  }, [selectedSpell, spells]);

  const handleSetSpellSlotMax = (level: number) => {
    const currentMax = spellSlots[level]?.max ?? 0;
    const nextValue = window.prompt(`Definir o máximo de magias para o nível ${level}`, String(currentMax));

    if (nextValue === null) {
      return;
    }

    const parsedValue = Number.parseInt(nextValue, 10);

    if (Number.isNaN(parsedValue) || parsedValue < 0) {
      return;
    }

    onUpdateSpellSlot(level, 'max', parsedValue - currentMax);
  };

  const handleSelectSpell = (spell: Spell) => {
    setSelectedSpell(spell);
    setMobileView('detail');
  };

  const handleTogglePrepared = async () => {
    if (!selectedSpell) {
      return;
    }

    const nextPreparedState = !selectedSpell.isPrepared;
    await GrimoireController.setSpellPrepared(selectedSpell.name, nextPreparedState);
    setSelectedSpell({ ...selectedSpell, isPrepared: nextPreparedState });
  };

  const handleDeleteSpell = async () => {
    if (!selectedSpell) {
      return;
    }

    const confirmed = window.confirm(`Excluir ${selectedSpell.name} do grimório?`);
    if (!confirmed) {
      return;
    }

    await GrimoireController.deleteSpell(selectedSpell.name);
    setSelectedSpell((current) => {
      if (!current || current.id !== selectedSpell.id) {
        return current;
      }

      const nextSpell = spells.find((spell) => spell.id !== selectedSpell.id) ?? null;
      return nextSpell;
    });
  };

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

  const renderSpellList = (compact: boolean) => (
    <aside className={`spellbook-page hide-scrollbar ${compact ? 'h-full overflow-hidden' : 'max-h-[calc(100vh-240px)] 2xl:max-h-[calc(100vh-200px)] overflow-y-auto'} rounded-[1.75rem] border border-[#b39b63]/60 p-3 sm:p-4`}>
      <div className="border-b border-[#8a6f2d]/20 pb-3">
        <p className="font-label text-[10px] uppercase tracking-[0.35em] text-[#6e5a2d]">Índice do Grimório</p>
        <h2 className="font-heading mt-1 text-2xl font-bold text-[#1b1408]">Magias Conhecidas</h2>
        <p className="mt-1 text-xs leading-relaxed text-[#4b3c1f]">
          EPSUM LOREM IPSUM EPSUM LOREM IPSUM EPSUM.
        </p>
      </div>

      {spells.length === 0 ? (
        <div className="mt-4 flex min-h-112 flex-col items-center justify-center rounded-3xl border border-dashed border-[#8a6f2d]/25 bg-[#f4e4bc]/55 px-6 py-12 text-center text-[#4b3c1f]">
          <p className="font-heading text-3xl font-bold text-[#1b1408]">Grimório vazio</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed">
            Ainda não há magias inscritas nesta memória ancestral.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {spellsByLevel.map((spellsInLevel, level) => {
            if (spellsInLevel.length === 0) {
              return null;
            }

            const slotInfo = spellSlots[level] ?? null;
            const isCantrip = level === 0;
            const isExpanded = expandedLevels.has(level);

            return (
              <div key={level} className="rounded-[1.25rem] border border-[#8a6f2d]/22 bg-[#f8edcd]/70 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleLevel(level)}
                  className="w-full flex items-center justify-between gap-3 border-b border-[#8a6f2d]/15 p-3 hover:bg-[#f8f0d7] transition"
                >
                  <div className="text-left flex-1">
                    <h3 className="font-heading text-xl font-bold text-[#1b1408] leading-tight">
                      {isCantrip ? 'Truques' : `${level}º Círculo`}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {!isCantrip && slotInfo && (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onUpdateSpellSlot(level, 'current', -1);
                          }}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#8a6f2d]/35 bg-[#1b1408] text-[10px] font-bold text-[#f4e4bc] transition hover:brightness-110"
                          aria-label={`Diminuir espaços atuais do nível ${level}`}
                        >
                          −
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSetSpellSlotMax(level);
                          }}
                          className="min-w-16 rounded-full border border-[#8a6f2d]/25 bg-[#1b1408] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#f4e4bc] transition hover:brightness-110"
                          aria-label={`Definir o máximo de magias do nível ${level}`}
                        >
                          {slotInfo.current}/{slotInfo.max}
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onUpdateSpellSlot(level, 'current', 1);
                          }}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#8a6f2d]/35 bg-[#1b1408] text-[10px] font-bold text-[#f4e4bc] transition hover:brightness-110"
                          aria-label={`Aumentar espaços atuais do nível ${level}`}
                        >
                          +
                        </button>
                      </div>
                    )}
                    <span className={`text-[#1b1408] transition transform ${isExpanded ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-3 space-y-2">
                    {spellsInLevel.map((spell) => {
                      const isSelected = selectedSpell?.id === spell.id;

                      return (
                        <button
                          key={spell.id}
                          type="button"
                          onClick={() => handleSelectSpell(spell)}
                          className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-3 py-2 text-left transition text-sm ${
                            isSelected
                              ? 'border-[#8a6f2d]/40 bg-[#1b1408] text-[#f4e4bc]'
                              : 'border-[#8a6f2d]/15 bg-[#f4e4bc]/80 text-[#1b1408] hover:border-[#8a6f2d]/30 hover:bg-[#f8f0d7]'
                          }`}
                        >
                          <div className="min-w-0">
                            <p className="truncate font-heading font-bold leading-tight">{spell.name}</p>
                            <p className={`text-[9px] uppercase tracking-[0.24em] ${isSelected ? 'text-[#d0bcff]' : 'text-[#6e5a2d]'}`}>
                              {spell.school} · {spell.isRitual ? 'Ritual' : 'Matriz'}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );

  const renderSpellDetail = (compact: boolean, showBackButton: boolean) => (
    <div className={`spellbook-page ${compact ? 'h-full overflow-hidden' : 'h-[calc(100vh-220px)] lg:h-[calc(100vh-200px)] 2xl:h-[calc(100vh-180px)] overflow-hidden'} rounded-[1.75rem] border border-[#b39b63]/60 p-4 sm:p-5`}>
      {selectedSpell ? (
        <div className="flex h-full min-h-0 flex-col gap-4">
          {showBackButton && (
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setMobileView('list')}
                className="rounded-full border border-[#8a6f2d]/25 bg-[#1b1408] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f4e4bc] transition hover:brightness-110"
              >
                Voltar para a lista
              </button>
            </div>
          )}

          <div className="min-h-0 flex-1">
            <div className="flex items-start gap-4 border-b border-[#8a6f2d]/20 pb-3">
              <div className="flex shrink-0 flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => void handleTogglePrepared()}
                  aria-label={selectedSpell.isPrepared ? 'Desmarcar magia preparada' : 'Marcar magia como preparada'}
                  className={`flex h-9 w-9 items-center justify-center rounded-md border text-[11px] font-bold uppercase tracking-[0.18em] transition active:scale-[0.98] ${
                    selectedSpell.isPrepared
                      ? 'border-[#d0bcff]/40 bg-[#d0bcff] text-[#1b1408] shadow-[0_0_0_1px_rgba(208,188,255,0.25)]'
                      : 'border-[#8a6f2d]/30 bg-[#1b1408] text-[#f4e4bc]/75 hover:brightness-110'
                  }`}
                >
                  P
                </button>
                <button
                  type="button"
                  onClick={() => void handleDeleteSpell()}
                  aria-label="Excluir magia do grimório"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-[#8a6f2d]/30 bg-[#3a1717] text-[14px] font-bold text-[#ffd6d6] transition hover:brightness-110 active:scale-[0.98]"
                >
                  ×
                </button>
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="font-heading mt-1 text-4xl font-bold leading-tight text-[#1b1408]">{selectedSpell.name}</h2>
                <p className="mt-1 text-sm italic text-[#5d4a25]">Escola de {selectedSpell.school}</p>
              </div>
            </div>

            <div className="mt-4 h-52 lg:h-48 2xl:h-60 rounded-[1.2rem] border border-[#8a6f2d]/18 bg-[#f8edcd]/90 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
              <div className="h-full hide-scrollbar overflow-y-auto pr-1">
                <p className="text-sm leading-relaxed text-[#2a2110]">{selectedSpell.description}</p>
              </div>
            </div>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:mt-3 lg:gap-2">
              <div className="flex min-h-16 flex-col justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-2.5 text-[#f4e4bc] lg:min-h-14 lg:p-2">
                <p className="font-label text-[9px] uppercase tracking-[0.3em] text-[#d0bcff]">Conjuração</p>
                <p className="mt-1 text-sm font-bold">{selectedSpell.castingTime}</p>
              </div>
              <div className="flex min-h-16 flex-col justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-2.5 text-[#f4e4bc] lg:min-h-14 lg:p-2">
                <p className="font-label text-[9px] uppercase tracking-[0.3em] text-[#d0bcff]">Alcance</p>
                <p className="mt-1 text-sm font-bold">{selectedSpell.range}</p>
              </div>
              <div className="flex min-h-16 flex-col justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-2.5 text-[#f4e4bc] lg:min-h-14 lg:p-2">
                <p className="font-label text-[9px] uppercase tracking-[0.3em] text-[#d0bcff]">Componentes</p>
                <p className="mt-1 text-sm font-bold">
                  {selectedSpell.components.verbal && 'V'}{selectedSpell.components.somatic && ' S'}{selectedSpell.components.material && ' M'}
                </p>
              </div>
              <div className="flex min-h-16 flex-col justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-2.5 text-[#f4e4bc] lg:min-h-14 lg:p-2">
                <p className="font-label text-[9px] uppercase tracking-[0.3em] text-[#d0bcff]">Origem</p>
                <p className="mt-1 text-sm font-bold">{selectedSpell.originalDamageType}</p>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 rounded-full border border-[#8a6f2d]/35 bg-[#8b0000] px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#ffe088] transition hover:brightness-110 active:scale-[0.99]"
            >
              Preparar Matriz
            </button>
          </div>
        </div>
      ) : (
        <div className="flex min-h-112 flex-col items-center justify-center rounded-3xl border border-dashed border-[#8a6f2d]/25 bg-[#f4e4bc]/55 px-6 py-12 text-center text-[#4b3c1f]">
          <p className="font-heading text-3xl font-bold text-[#1b1408]">Abra uma inscrição</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed">
            Toque numa magia da lista para revelar os seus detalhes completos.
          </p>
        </div>
      )}
    </div>
  );

  return (
    <>
      <section className="grid gap-4 md:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] md:gap-5 md:min-h-[calc(100vh-240px)]">
        <div className="hidden md:block">{renderSpellList(false)}</div>
        <div className="hidden md:block">{renderSpellDetail(false, false)}</div>

        <div className="md:hidden">{mobileView === 'list' ? renderSpellList(true) : renderSpellDetail(true, true)}</div>
      </section>

      {isModalOpen && selectedSpell && (
        <CastModal spell={selectedSpell} allSpells={spells} onClose={() => setIsModalOpen(false)} onConfirmCast={onCast} />
      )}
    </>
  );
};