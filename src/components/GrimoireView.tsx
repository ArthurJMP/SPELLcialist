import React, { useEffect, useMemo, useState } from 'react';
import { Spell } from '../models/spell';
import { DamageType, HabilityType, HABILITY_LABELS, DAMAGE_ELEMENT_STYLES } from '../models/types';
import { GrimoireController } from '../controllers/grimoireController';
import { CastModal } from './CastModal';
import { DeleteSpellModal } from './DeleteSpellModal';

interface GrimoireViewProps {
  spells: Spell[];
  onCast: (spellName: string, damage: DamageType) => void;
  onNavigateToCatalog: () => void;
  spellSlots: Record<number, { current: number; max: number }>;
  onUpdateSpellSlot: (level: number, field: 'current' | 'max', delta: number) => void;
  onSelectedSpellChange?: (spell: Spell | null) => void;
}

const highlightKeywords = (text: string) => {
  // Ordena as chaves por tamanho (maiores primeiro) para evitar conflitos com sub-strings
  const sortedKeys = Object.keys(DAMAGE_ELEMENT_STYLES).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`\\b(${sortedKeys.join('|')}|\\d+d\\d+(?:\\+\\d+)?)\\b`, 'gi');

  return text.split(regex).map((part, i) => {
    const lower = part.toLowerCase();
    if (DAMAGE_ELEMENT_STYLES[lower]) return <span key={i} className={DAMAGE_ELEMENT_STYLES[lower]}>{part}</span>;
    if (/\d+d\d+/.test(part)) return <span key={i} className="bg-red-500/10 text-red-800 border border-red-500/20 px-1 rounded font-bold font-mono">{part}</span>;
    return part;
  });
};

export const GrimoireView: React.FC<GrimoireViewProps> = ({
  spells,
  onCast,
  onNavigateToCatalog,
  spellSlots,
  onUpdateSpellSlot,
  onSelectedSpellChange,
}) => {
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');
  const [expandedLevels, setExpandedLevels] = useState<Set<number>>(new Set([]));
  const [spellToDelete, setSpellToDelete] = useState<Spell | null>(null);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [selectedCircleForSlots, setSelectedCircleForSlots] = useState<number | null>(null);
  const [ability, setAbility] = useState<HabilityType | ''>('');
  const [bp, setBp] = useState<number | ''>('');
  const [modConj, setModConj] = useState<number | ''>('');

  useEffect(() => {
    const savedAbility = localStorage.getItem('spell_ability') as HabilityType | null;
    if (savedAbility) setAbility(savedAbility);

    const savedBp = localStorage.getItem('spell_bp');
    if (savedBp !== null) setBp(Number(savedBp));

    const savedMod = localStorage.getItem('spell_mod');
    if (savedMod !== null) setModConj(Number(savedMod));
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (selectedSpell && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedSpell]);

  useEffect(() => {
    onSelectedSpellChange?.(selectedSpell);
  }, [selectedSpell, onSelectedSpellChange]);

  // Cálculos dinâmicos tratando o estado zerado/nulo
  const spellCD = (bp !== '' && modConj !== '') ? 8 + bp + modConj : '--';
  const spellAttack = (bp !== '' && modConj !== '') ? bp + modConj : '--';

  // Função para salvar a matriz e gravar no localStorage
  const handleSaveStats = (newAbility: HabilityType | '', newBp: number | '', newMod: number | '') => {
    setAbility(newAbility);
    setBp(newBp);
    setModConj(newMod);
    if (newAbility) localStorage.setItem('spell_ability', newAbility);
    else localStorage.removeItem('spell_ability');
    if (newBp !== '') localStorage.setItem('spell_bp', String(newBp));
    else localStorage.removeItem('spell_bp');
    if (newMod !== '') localStorage.setItem('spell_mod', String(newMod));
    else localStorage.removeItem('spell_mod');
    setIsStatsModalOpen(false);
  };

  const spellsByLevel = useMemo(
    () => Array.from({ length: 10 }, (_, level) => spells.filter((spell) => spell.level === level)),
    [spells]
  );

  useEffect(() => {
    if (selectedSpell) {
      const updated = spells.find((s) => s.id === selectedSpell.id);
      setSelectedSpell(updated ?? null);
    }
  }, [spells]);

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
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setSelectedSpell(spell);
      setMobileView('detail');
    } else {
      setSelectedSpell((current) => (current?.id === spell.id ? null : spell));
    }
  };

  const handleTogglePrepared = async (spell: Spell) => {
    if (!spell) {
      return;
    }

    const nextPreparedState = !spell.isPrepared;
    await GrimoireController.setSpellPrepared(spell.name, nextPreparedState);

    setSelectedSpell((current) => {
      if (!current || current.id !== spell.id) {
        return current;
      }

      return { ...current, isPrepared: nextPreparedState };
    });
  };

  const handleDeleteSpell = (spell: Spell) => {
    setSpellToDelete(spell);
  };

  const handleConfirmDeleteSpell = async () => {
    if (!spellToDelete) {
      return;
    }

    await GrimoireController.deleteSpell(spellToDelete.name);
    setSelectedSpell((current) => {
      if (!current || current.id !== spellToDelete.id) {
        return current;
      }

      const nextSpell = spells.find((currentSpell) => currentSpell.id !== spellToDelete.id) ?? null;
      return nextSpell;
    });
    setSpellToDelete(null);
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
      <div className="border-b border-[#8a6f2d]/20 pb-3 flex flex-col gap-1.5">
        <div>
          <p className="font-label text-[10px] uppercase tracking-[0.35em] text-[#6e5a2d]">Índice do Grimório</p>
          <h2 className="font-heading text-2xl font-bold text-[#1b1408] leading-tight">Magias Conhecidas</h2>
        </div>

        {/* Tag minimalista posicionada abaixo do título */}
        <div className="flex">
          <button 
            type="button" 
            onClick={() => setIsStatsModalOpen(true)}
            className="flex items-center gap-3 font-mono text-xs font-bold bg-[#1b1408]/5 border border-[#8a6f2d]/15 px-3 py-1.5 rounded-lg text-[#1b1408] hover:bg-[#f8f0d7] transition shadow-sm"
          >
            <span className="text-[#6e5a2d] flex items-center gap-1">
              <span className="text-sm">🔮</span> {ability ? HABILITY_LABELS[ability] : '--'}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-sm">⚔️</span> {spellAttack !== '--' ? `+${spellAttack}` : '--'}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-sm">🛡️</span> CD {spellCD}
            </span>
          </button>
        </div>
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
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleLevel(level)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleLevel(level);
                    }
                  }}
                  className="w-full flex items-center justify-between gap-3 border-b border-[#8a6f2d]/15 p-3 hover:bg-[#f8f0d7] transition cursor-pointer select-none"
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
                            e.stopPropagation(); // Impede o colapso do círculo ao clicar
                            setSelectedCircleForSlots(level); // Abre o modal dinâmico para o círculo atual
                          }}
                          className="w-12 h-6 bg-[#1b1408] text-[#f4e4bc] hover:bg-[#2a2110] active:scale-95 rounded-full font-mono text-[11px] font-bold transition flex items-center justify-center shadow-sm"
                          title="Clique para alterar o limite máximo"
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
                </div>

                {isExpanded && (
                  <div className="p-3 space-y-2">
                    {spellsInLevel.map((spell) => {
                      const isSelected = selectedSpell?.id === spell.id;

                      return (
                        <div
                          key={spell.id}
                          onClick={() => handleSelectSpell(spell)}
                          className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border px-3 py-2 text-left transition text-sm ${isSelected
                              ? 'border-[#8a6f2d]/40 bg-[#1b1408] text-[#f4e4bc]'
                              : 'border-[#8a6f2d]/15 bg-[#f4e4bc]/80 text-[#1b1408] hover:border-[#8a6f2d]/30 hover:bg-[#f8f0d7]'
                            }`}
                        >
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-heading font-bold leading-tight">{spell.name}</p>
                            <p className={`text-[9px] uppercase tracking-[0.24em] ${isSelected ? 'text-[#d0bcff]' : 'text-[#6e5a2d]'}`}>
                              {spell.school} · {spell.isRitual ? 'Ritual' : 'Matriz'}
                            </p>
                          </div>

                          <div className="flex shrink-0 items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                            {spell.level >= 1 && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  void handleTogglePrepared(spell);
                                }}
                                className={`flex h-7 w-7 items-center justify-center rounded-md border text-[10px] font-bold transition ${spell.isPrepared
                                    ? 'border-[#d0bcff]/40 bg-[#6d3bd7] text-white'
                                    : 'border-[#8a6f2d]/30 bg-[#1b1408]/10 text-[#1b1408]/70'
                                  }`}
                              >
                                P
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                void handleDeleteSpell(spell);
                              }}
                              className="flex h-7 w-7 items-center justify-center rounded-md border border-red-900/20 bg-red-950/10 text-[10px] font-bold text-red-900"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
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

  const renderSpellDetail = (compact: boolean, showBackButton: boolean) => {
    const content = selectedSpell ? (
      <div className="flex h-full min-h-0 flex-col justify-between gap-4">
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

        <div className="min-h-0 flex-1 overflow-y-auto pr-1 space-y-4 hide-scrollbar">
          {/* 1. Cabeçalho */}
          <div className="relative flex justify-between items-start w-full pr-16 border-b border-[#8a6f2d]/20 pb-3 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-[#1b1408]">{selectedSpell.name}</h2>
              <p className="text-xs italic text-[#8a6f2d] mt-0.5">{selectedSpell.school}</p>
            </div>

            {/* Novo Botão Compacto / Selo Místico no Topo Direito */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="absolute top-0 right-0 w-7 h-7 bg-[#661111] hover:bg-[#4a0c0c] active:scale-90 rounded-full border-2 border-double border-[#8a6f2d]/40 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_4px_rgba(0,0,0,0.2)] transition-all cursor-pointer group"
              title="Selo de Autenticação Arcana"
            >
              {/* Símbolo místico discreto no centro do selo */}
              <span className="text-[#f4e4bc]/60 text-[10px] font-serif group-hover:text-[#f4e4bc] transition-colors select-none">
                ✦
              </span>
            </button>
          </div>

          {/* 3 e 4. Informações de Combate Rápido primeiro */}
          <div className="space-y-3 mb-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Bloco Execução */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-3 text-[#f4e4bc]">
                <span className="text-xs">⏱️</span>
                <p className="text-[9px] uppercase tracking-wider text-[#d0bcff] font-bold">Execução</p>
                <p className="text-xs font-bold mt-0.5">{selectedSpell.castingTime}</p>
              </div>
              {/* Bloco Alcance / Área */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-3 text-[#f4e4bc]">
                <span className="text-xs">📏</span>
                <p className="text-[9px] uppercase tracking-wider text-[#d0bcff] font-bold">Alcance / Área</p>
                <p className="text-xs font-bold mt-0.5 text-center leading-tight">
                  {selectedSpell.range}
                  {selectedSpell.areaOfEffect && (
                    <span className="block text-[10px] text-amber-300 font-normal mt-0.5">
                      {selectedSpell.areaOfEffect.type === 'Esfera' && '🔴'}
                      {selectedSpell.areaOfEffect.type === 'Cone' && '📐'}
                      {selectedSpell.areaOfEffect.type === 'Cubo' && '📦'}
                      {selectedSpell.areaOfEffect.type === 'Linha' && '⚡'}
                      {' '}{selectedSpell.areaOfEffect.type} ({selectedSpell.areaOfEffect.size})
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Bloco Componentes & Materiais */}
            <div className="rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-4 text-[#f4e4bc] flex flex-col items-center gap-3">
              <p className="text-[9px] uppercase tracking-wider text-[#d0bcff] font-bold">Componentes</p>
              <div className="flex justify-center gap-2">
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${selectedSpell.components.verbal ? 'bg-indigo-900/40 text-indigo-200 border-indigo-500/30' : 'opacity-30 border-neutral-700'}`}>VERBAL</span>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${selectedSpell.components.somatic ? 'bg-amber-900/40 text-amber-200 border-amber-500/30' : 'opacity-30 border-neutral-700'}`}>SOMÁTICO</span>
                <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${selectedSpell.components.material ? 'bg-emerald-900/40 text-emerald-200 border-emerald-500/30' : 'opacity-30 border-neutral-700'}`}>MATERIAL</span>
              </div>
              {selectedSpell.components.material && selectedSpell.components.materialDescription && (
                <div className="w-full pt-3 border-t border-[#8a6f2d]/20 mt-1 text-left">
                  <p className="text-sm text-[#f4e4bc]/90 leading-relaxed">
                    <strong className="text-[#d0bcff] font-mono tracking-wide uppercase text-[11px] block mb-1">🎒 Materiais Necessários:</strong>
                    <span className="italic">{selectedSpell.components.materialDescription}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 5. Descrição da Magia agora por último na base */}
          <div className="bg-[#1b1408]/5 border border-[#8a6f2d]/10 rounded-2xl p-4 shadow-inner">
            <div className="max-h-[280px] overflow-y-auto pr-1 text-xs text-[#1b1408] leading-relaxed text-justify scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {highlightKeywords(selectedSpell.description)}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex min-h-112 flex-col items-center justify-center rounded-3xl border border-dashed border-[#8a6f2d]/25 bg-[#f4e4bc]/55 px-6 py-12 text-center text-[#4b3c1f]">
        <p className="font-heading text-3xl font-bold text-[#1b1408]">Abra uma inscrição</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed">
          Toque numa magia da lista para revelar os seus detalhes completos.
        </p>
      </div>
    );

    return content;
  };

  return (
    <>
      {/* VERSÃO MOBILE */}
      <div className="md:hidden">
        {!selectedSpell ? (
          <div className="p-4 pb-24">
            {renderSpellList(true)}
          </div>
        ) : (
          /* MODAL MOBILE CLÁSSICO: Tela cheia, por cima do menu (z-50) e com scroll isolado */
          <div className="fixed inset-0 z-50 bg-[#16120a] p-3 overflow-y-auto">
            {/* O card de pergaminho agora ganha bordas arredondadas e não fica colado na tela */}
            <div className="min-h-full bg-[#f4e4bc] rounded-[24px] p-5 pb-8 flex flex-col justify-start relative shadow-xl border border-[#8a6f2d]/20">
              {/* Botão de Voltar Otimizado */}
              <button 
                type="button" 
                onClick={() => setSelectedSpell(null)}
                className="self-start mb-6 px-4 py-2 bg-[#1b1408] text-[#f4e4bc] text-xs font-mono font-bold uppercase tracking-wider rounded-xl border border-[#8a6f2d]/30 shadow-sm transition active:scale-95"
              >
                ← Voltar para a lista
              </button>

              {renderSpellDetail(true, false)}
            </div>
          </div>
        )}
      </div>

      {/* VERSÃO PC */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 p-6 items-start">
        {/* Coluna da Esquerda (Índice): col-span-1 */}
        <div className="col-span-1 w-full space-y-4">
          {renderSpellList(false)}
        </div>

        {/* Coluna da Direita (Detalhes): col-span-1 */}
        <div className="col-span-1 w-full">
          {selectedSpell && (
            <div className="w-full bg-[#f4e4bc] rounded-2xl p-5 border border-[#8a6f2d]/20 shadow-sm">
              {renderSpellDetail(false, false)}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedSpell && (
        <CastModal spell={selectedSpell} allSpells={spells} onClose={() => setIsModalOpen(false)} onConfirmCast={onCast} />
      )}

      {spellToDelete && (
        <DeleteSpellModal
          spell={spellToDelete}
          isOpen={!!spellToDelete}
          onClose={() => setSpellToDelete(null)}
          onConfirm={handleConfirmDeleteSpell}
        />
      )}

      {isStatsModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-mono"
          onClick={() => setIsStatsModalOpen(false)}
        >
          <div className="w-full max-w-xs bg-[#f4e4bc] border-2 border-[#8a6f2d]/40 rounded-2xl p-4 shadow-xl text-[#1b1408]" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-heading font-bold text-lg border-b border-[#8a6f2d]/20 pb-2 text-center">Matriz de Atributos</h3>
            <div className="space-y-3 mt-3 text-xs">
              <div className="flex flex-col gap-1">
                <label className="font-bold text-[#6e5a2d] uppercase text-[9px]">Atributo de Conjuração</label>
                <select value={ability} onChange={(e) => setAbility(e.target.value as HabilityType | '')} className="bg-white/50 border border-[#8a6f2d]/30 rounded px-2 py-1 font-bold">
                  <option value="">Selecione...</option>
                  {(Object.keys(HABILITY_LABELS) as HabilityType[]).map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold text-[#6e5a2d] uppercase text-[9px]">Bônus de Proficiência (BP)</label>
                <input type="number" value={bp} onChange={(e) => setBp(e.target.value === '' ? '' : Number(e.target.value))} className="bg-white/50 border border-[#8a6f2d]/30 rounded px-2 py-1 font-bold" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-bold text-[#6e5a2d] uppercase text-[9px]">Mod. de Conjuração</label>
                <input type="number" value={modConj} onChange={(e) => setModConj(e.target.value === '' ? '' : Number(e.target.value))} className="bg-white/50 border border-[#8a6f2d]/30 rounded px-2 py-1 font-bold" />
              </div>
            </div>
            <button type="button" onClick={() => handleSaveStats(ability, bp, modConj)} className="w-full mt-4 bg-[#1b1408] text-[#f4e4bc] font-bold text-xs py-2 rounded-xl border border-[#8a6f2d]/30 uppercase tracking-wider">
              Salvar Matriz
            </button>
          </div>
        </div>
      )}

      {selectedCircleForSlots !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-mono"
          onClick={() => setSelectedCircleForSlots(null)} // Fecha ao clicar fora sem alterar nada
        >
          <div 
            className="w-full max-w-[240px] bg-[#f4e4bc] border-2 border-[#8a6f2d]/40 rounded-2xl p-4 shadow-xl text-[#1b1408]"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="font-bold text-center text-xs uppercase tracking-wider text-[#6e5a2d]">
              {selectedCircleForSlots === 0 ? 'Truques' : `${selectedCircleForSlots}º Círculo`}
            </h3>
            <p className="text-[10px] text-center text-neutral-500 mt-1 mb-3">Defina o limite máximo de slots</p>
            
            <div className="flex items-center justify-center gap-2">
              <input 
                type="number" 
                min={0}
                value={spellSlots[selectedCircleForSlots]?.max || 0}
                onChange={(e) => onUpdateSpellSlot(selectedCircleForSlots, 'max', Number(e.target.value) - (spellSlots[selectedCircleForSlots]?.max || 0))}
                className="w-20 bg-white/50 border border-[#8a6f2d]/30 rounded-lg p-1.5 text-center font-bold text-sm" 
                autoFocus
              />
            </div>

            <button 
              type="button" 
              onClick={() => setSelectedCircleForSlots(null)} 
              className="w-full mt-4 bg-[#1b1408] text-[#f4e4bc] font-bold text-[11px] py-2 rounded-xl border border-[#8a6f2d]/30 uppercase tracking-wider"
            >
              Confirmar
            </button>
          </div>
        </div>
      )}
    </>
  );
};