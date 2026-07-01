import React from 'react';
import { CharacterClass } from '../models/types';

interface SpellFiltersProps {
  selectedClass: CharacterClass | 'Todas';
  selectedLevel: number | 'Todos';
  onClassChange: (value: CharacterClass | 'Todas') => void;
  onLevelChange: (value: number | 'Todos') => void;
}

export const SpellFilters: React.FC<SpellFiltersProps> = ({
  selectedClass,
  selectedLevel,
  onClassChange,
  onLevelChange,
}) => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 rounded-3xl border border-[#8a6f2d]/18 bg-[#1b1408]/92 p-4 text-[#f4e4bc] sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-[#f4e4bc]/65">
          Filtrar por Lista de Classe
        </label>
        <select
          value={selectedClass}
          onChange={(e) => onClassChange(e.target.value as any)}
          className="rounded-2xl border border-[#8a6f2d]/25 bg-[#f4e4bc] px-3 py-3 text-sm text-[#1b1408] outline-none transition focus:border-[#d0bcff]"
        >
          <option value="Todas">Todas as Classes</option>
          <option value="Artifice">Artifice</option>
          <option value="Bardo">Bardo</option>
          <option value="Bruxo">Bruxo</option>
          <option value="Clérigo">Clérigo</option>
          <option value="Druida">Druida</option>
          <option value="Feiticeiro">Feiticeiro</option>
          <option value="Mago">Mago</option>
          <option value="Paladino">Paladino</option>
          <option value="Patrulheiro">Patrulheiro</option>          

        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-[#f4e4bc]/65">
          Filtrar por Círculo / Nível
        </label>
        <select
          value={selectedLevel}
          onChange={(e) => onLevelChange(e.target.value === 'Todos' ? 'Todos' : Number(e.target.value))}
          className="rounded-2xl border border-[#8a6f2d]/25 bg-[#f4e4bc] px-3 py-3 text-sm text-[#1b1408] outline-none transition focus:border-[#d0bcff]"
        >
          <option value="Todos">Todos os Níveis</option>
          <option value="0">Nível 0 (Truques)</option>
          <option value="1">1º Nível</option>
          <option value="2">2º Nível</option>
          <option value="3">3º Nível</option>
          <option value="4">4º Nível</option>
          <option value="5">5º Nível</option>
          <option value="6">6º Nível</option>
          <option value="7">7º Nível</option>
          <option value="8">8º Nível</option>
          <option value="9">9º Nível</option>
        </select>
      </div>
    </div>
  );
};