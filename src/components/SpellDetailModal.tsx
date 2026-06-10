import React from 'react';
import { Spell } from '../models/spell';
import { CHARACTER_CLASS_LABELS } from '../models/types';

interface SpellDetailModalProps {
  spell: Spell;
  isOpen: boolean;
  onClose: () => void;
  onTranscribe: (spell: Spell) => void;
  isAlreadyLearned: boolean;
}

export const SpellDetailModal: React.FC<SpellDetailModalProps> = ({
  spell,
  isOpen,
  onClose,
  onTranscribe,
  isAlreadyLearned,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4">
      <div className="spellbook-page flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-[#b39b63]/60 shadow-[0_20px_60px_rgba(0,0,0,0.55)] bg-linear-to-b from-[#f8edcd] to-[#ede8d3]">
        {/* Header */}
        <div className="relative flex items-start gap-4 border-b border-[#8a6f2d]/25 bg-linear-to-r from-[#f8edcd] to-[#f4e4bc] px-5 py-4 pr-14 shrink-0">
          <div className="flex-1 min-w-0">
            <p className="font-label text-[9px] uppercase tracking-[0.4em] text-[#6e5a2d]/75">Página de Inscrição</p>
            <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-[#1b1408]">{spell.name}</h2>
            <p className="mt-1 text-sm italic text-[#5d4a25]">Escola de {spell.school}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#8a6f2d]/35 bg-[#1b1408] text-lg font-bold text-[#f4e4bc] transition hover:brightness-110"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-hidden p-5 sm:p-6">
          <div className="flex h-full min-h-0 flex-col gap-4">
            {/* Descrição */}
            <div className="min-h-0 flex-1">
              <h4 className="font-label mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#6e5a2d]">
                Descrição do Efeito
              </h4>
              <div className="h-full min-h-44 rounded-2xl border border-[#8a6f2d]/18 bg-[#f8edcd]/90 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
                <div className="hide-scrollbar h-full overflow-y-auto pr-1">
                  <p className="text-sm leading-relaxed text-[#2a2110]">{spell.description}</p>
                </div>
              </div>
            </div>

            {/* Classes */}
            <div>
              <h4 className="font-label mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#6e5a2d]">
                Classes Aptas
              </h4>
              <div className="flex flex-wrap gap-2">
                {spell.classes.map((characterClass) => (
                  <span
                    key={characterClass}
                    className="rounded-full border border-[#8a6f2d]/25 bg-[#1b1408] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f4e4bc]"
                  >
                    {CHARACTER_CLASS_LABELS[characterClass]}
                  </span>
                ))}
              </div>
            </div>

            {/* Atributos */}
            <div>
              <h4 className="font-label mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#6e5a2d]">
                Especificações Técnicas
              </h4>
              <div className="grid gap-2.5 sm:grid-cols-2">
                <div className="flex flex-col justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-3 text-[#f4e4bc]">
                  <p className="font-label text-[9px] uppercase tracking-[0.3em] text-[#d0bcff]">Conjuração</p>
                  <p className="mt-1.5 text-sm font-bold">{spell.castingTime}</p>
                </div>
                <div className="flex flex-col justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-3 text-[#f4e4bc]">
                  <p className="font-label text-[9px] uppercase tracking-[0.3em] text-[#d0bcff]">Alcance</p>
                  <p className="mt-1.5 text-sm font-bold">{spell.range}</p>
                </div>
                <div className="flex flex-col justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-3 text-[#f4e4bc]">
                  <p className="font-label text-[9px] uppercase tracking-[0.3em] text-[#d0bcff]">Componentes</p>
                  <p className="mt-1.5 text-sm font-bold">
                    {spell.components.verbal && 'V'}{spell.components.somatic && ' S'}
                    {spell.components.material && ' M'}
                  </p>
                </div>
                <div className="flex flex-col justify-center rounded-2xl border border-[#8a6f2d]/18 bg-[#1b1408] p-3 text-[#f4e4bc]">
                  <p className="font-label text-[9px] uppercase tracking-[0.3em] text-[#d0bcff]">Origem</p>
                  <p className="mt-1.5 text-sm font-bold">{spell.originalDamageType}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 border-t border-[#8a6f2d]/25 bg-linear-to-r from-[#f8edcd] to-[#f4e4bc] p-4 shrink-0 sm:p-5">
          <button
            type="button"
            disabled={isAlreadyLearned}
            onClick={() => {
              onTranscribe(spell);
              onClose();
            }}
            className={`flex-1 rounded-full px-4 py-3 text-sm font-bold uppercase tracking-[0.22em] transition border-2 ${
              isAlreadyLearned
                ? 'cursor-not-allowed border-[#8a6f2d]/20 bg-[#1b1408]/60 text-[#f4e4bc]/50'
                : 'border-[#8a6f2d]/40 bg-linear-to-r from-[#8b0000] to-[#700000] text-[#ffe088] hover:from-[#a00000] hover:to-[#800000] hover:shadow-[0_4px_12px_rgba(139,0,0,0.4)]'
            }`}
          >
            {isAlreadyLearned ? '✓ Já Transcrita' : 'Transcrever'}
          </button>
        </div>
      </div>
    </div>
  );
};
