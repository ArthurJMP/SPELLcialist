import React from 'react';
import { Spell } from '../models/spell';

interface DeleteSpellModalProps {
  spell: Spell;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteSpellModal: React.FC<DeleteSpellModalProps> = ({
  spell,
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4">
      <div className="spellbook-page flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-red-900/40 bg-linear-to-b from-[#f8edcd] to-[#ede8d3] shadow-[0_20px_60px_rgba(139,0,0,0.25)]">
        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-red-950/15 bg-linear-to-r from-[#ffe8e8] to-[#f4e4bc] px-5 py-4 shrink-0">
          <div>
            <span className="font-label text-[9px] font-bold uppercase tracking-[0.4em] text-red-900">Expurgar Registro</span>
            <h2 className="font-heading mt-1 text-2xl font-bold leading-tight text-[#1b1408]">Aviso de Desmaterialização</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-red-900/20 bg-red-950/10 text-base font-bold text-red-900 transition hover:bg-red-950/20"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 text-[#1b1408] space-y-4">
          <p className="text-sm leading-relaxed">
            Deseja mesmo expurgar a magia <strong className="text-red-900 font-bold">{spell.name}</strong> de seu grimório? A gravação rúnica desta fórmula será perdida.
          </p>

          <div className="rounded-2xl border border-red-900/15 bg-red-950/5 p-3 text-xs space-y-1">
            <p><strong>Círculo:</strong> {spell.level === 0 ? 'Truque' : `${spell.level}º Círculo`}</p>
            <p><strong>Escola:</strong> Escola de {spell.school}</p>
            <p><strong>Dano Base:</strong> {spell.originalDamageType}</p>
          </div>
        </div>

        {/* Footer / Actions */}
        <div className="flex gap-3 border-t border-red-950/15 bg-linear-to-r from-[#f8edcd] to-[#f4e4bc] p-4 shrink-0 sm:p-5">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border border-[#8a6f2d]/35 bg-[#1b1408] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#f4e4bc]/80 transition hover:bg-[#f4e4bc] hover:text-[#1b1408]"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 rounded-full border border-red-900/40 bg-linear-to-r from-[#8b0000] to-[#5a0000] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#ffe088] transition hover:brightness-110 active:scale-[0.99] hover:shadow-[0_4px_12px_rgba(139,0,0,0.4)]"
          >
            Confirmar Exclusão
          </button>
        </div>
      </div>
    </div>
  );
};
