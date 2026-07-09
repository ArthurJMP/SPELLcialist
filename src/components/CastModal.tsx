import React from 'react';
import { Spell } from '../models/spell';
import { DamageType } from '../models/types';

interface CastModalProps {
  spell: Spell;
  allSpells: Spell[];
  onClose: () => void;
  onConfirmCast: (spellName: string, finalDamage: DamageType) => void;
}

export const CastModal: React.FC<CastModalProps> = ({ spell, allSpells, onClose, onConfirmCast }) => {
  // 🔮 GERADOR ARCANE KERNEL v2.0 (Flavour Hacker Arcane de Roleplay)
  const generateArcaneCode = () => {
    const formatName = spell.id.toUpperCase().replace(/-/g, '_');
    const bindingSlot = spell.isRitual ? "SlotLevel.Ritual_Binding" : `SlotLevel.Circle_${spell.level}`;
    
    return `/* **************************************************
 * ANCESTRAL_KERNEL v2.0 // RUNTIME_CONJURATION
 * SCHOOL_MODULE: ${spell.school.toUpperCase()}
 * IS_RITUAL_CAPABLE: ${spell.isRitual ? "TRUE" : "FALSE"}
 * **************************************************/

import { ${formatName} } from 'Weave/${spell.school}';
import { Ancestors } from 'Core/Lineage';

async function compile_arcane_payload() {
  const socket = await Ancestors.requestManaSocket(${bindingSlot});
  
  if (socket.status === "AUTHORIZED") {
    const spellInstance = new ${formatName}({
      range: "${spell.range}",
      target: "${spell.target}"
    });

    spellInstance.setDamagePayload(DamageType.${spell.originalDamageType});
    
    return await spellInstance.deploy();
  }
}

export default compile_arcane_payload();`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-4">
      <div className="spellbook-page flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#b39b63]/60 shadow-[0_20px_60px_rgba(0,0,0,0.55)] bg-linear-to-b from-[#f8edcd] via-[#f4e4bc] to-[#ede8d3]">
        <div className="flex items-center justify-between gap-4 border-b border-[#8a6f2d]/18 bg-[#1b1408] px-5 py-4 text-[#f4e4bc]">
          <div>
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-[#d0bcff]">Instância de Execução</span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#f4e4bc]">{spell.name}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="rounded-full border border-[#8a6f2d]/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f4e4bc]/80 transition hover:bg-[#f4e4bc] hover:text-[#1b1408]"
          >
            Cancelar
          </button>
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto p-5 sm:p-6">
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-[#8a6f2d]/18 bg-[#f8edcd]/90 p-4 text-xs text-[#1b1408] sm:grid-cols-4">
            <div>
              <span className="font-label mb-0.5 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#6e5a2d]">Alcance</span>
              <span className="font-bold">{spell.range}</span>
            </div>
            <div>
              <span className="font-label mb-0.5 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#6e5a2d]">Alvo / Área</span>
              <span className="font-bold">{spell.target}</span>
            </div>
            <div>
              <span className="font-label mb-0.5 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#6e5a2d]">Conjuramento</span>
              <span className="font-bold">{spell.castingTime}</span>
            </div>
            <div>
              <span className="font-label mb-0.5 block text-[9px] font-bold uppercase tracking-[0.24em] text-[#6e5a2d]">Componentes</span>
              <span className="font-bold">
                {spell.components.verbal && 'V '}{spell.components.somatic && 'S '}{spell.components.material && 'M'}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-label mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#6e5a2d]">Efeito Descritivo</h4>
            <p className="rounded-3xl border border-[#8a6f2d]/18 bg-[#f8edcd]/90 p-4 text-sm leading-relaxed text-[#2a2110] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
              {spell.description}
            </p>
          </div>

          <div>
            <h4 className="font-label mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#6e5a2d]">Compilação no Grimório (Roleplay)</h4>
            <pre className="overflow-x-auto rounded-3xl border border-[#1b1408] bg-[#0d0b10] p-4 font-mono text-[11px] leading-normal text-[#9ef7a7] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] select-all">
              <code>{generateArcaneCode()}</code>
            </pre>
          </div>
        </div>

        <div className="flex gap-3 border-t border-[#8a6f2d]/18 bg-[#1b1408] p-4">
          <button
            type="button"
            onClick={() => {
              onConfirmCast(spell.name, spell.originalDamageType);
              onClose();
            }}
            className="flex-1 rounded-full border border-[#d0bcff]/30 bg-linear-to-r from-[#8b0000] to-[#5a0000] px-4 py-3 text-sm font-bold uppercase tracking-[0.22em] text-[#ffe088] transition hover:brightness-110 active:scale-[0.99]"
          >
            Compilar & Injetar Magia ⚡
          </button>
        </div>

      </div>
    </div>
  );
};