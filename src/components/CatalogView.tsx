import React, { useState } from 'react';
import { Spell } from '../models/spell';
import { UNIVERSAL_SPELLS_CATALOG } from '../models/catalog/universalSpellsCatalog';
import { SpellDetailModal } from './SpellDetailModal';
import { SpellFilters } from './SpellFilters';
import { CharacterClass } from '../models/types';
import { CreateSpellModal } from './CreateSpellModal';

interface CatalogViewProps {
  learnedSpells: Spell[];
  onLearnSpell: (spell: Spell) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ learnedSpells, onLearnSpell }) => {
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<CharacterClass | 'Todas'>('Todas');
  const [selectedLevel, setSelectedLevel] = useState<number | 'Todos'>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [allSpells, setAllSpells] = useState<Spell[]>(UNIVERSAL_SPELLS_CATALOG);

  const learnedSpellNames = new Set(learnedSpells.map((spell) => spell.name));

  const handleLevelChange = (level: number | 'Todos') => {
    setSelectedLevel(level);
  };

  const handleSelectSpell = (spell: Spell) => {
    setSelectedSpell(spell);
    setIsModalOpen(true);
  };

  const handleSaveToSantuario = (newSpellFormData: any) => {
    const newSpell: Spell = {
      id: `custom-${Date.now()}`,
      name: newSpellFormData.name,
      level: newSpellFormData.level,
      school: newSpellFormData.school || 'Evocação',
      isRitual: newSpellFormData.isRitual || false,
      originalDamageType: 'None',
      castingTime: newSpellFormData.castingTime,
      range: newSpellFormData.range,
      target: 'Nenhum',
      components: {
        verbal: newSpellFormData.components.verbal,
        somatic: newSpellFormData.components.somatic,
        material: newSpellFormData.components.material,
        materialDescription: newSpellFormData.materialDescription,
      },
      description: newSpellFormData.description,
      classes: ['Mago'],
    };
    setAllSpells((prev) => [newSpell, ...prev]);
  };

  const filteredSpells = allSpells.filter((spell) => {
    const matchesClass = selectedClass === 'Todas' || spell.classes.includes(selectedClass);
    const matchesLevel = selectedLevel === 'Todos' || spell.level === selectedLevel;
    const matchesSearch = spell.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClass && matchesLevel && matchesSearch;
  });

  return (
    <div className="spellbook-page hide-scrollbar w-full h-[calc(100vh-5rem)] md:h-auto bg-linear-to-b from-[#f8edcd] via-[#f4e4bc] to-[#ede8d3] rounded-3xl md:rounded-2xl p-4 md:p-6 border border-[#b39b63]/60 shadow-[inset_0_1px_3px_rgba(255,255,255,0.5),inset_0_-1px_3px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden relative shadow-lg">
      <div className="space-y-6 flex-1 flex flex-col min-h-0">
        {/* Área Superior: Títulos e o Componente de Filtro Integrado */}
        <div className="flex flex-col gap-4 border-b border-[#8a6f2d]/10 pb-6 shrink-0">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[#8a6f2d]/60 font-serif">Santuário Arcano</p>
              <h1 className="text-3xl font-bold text-[#1b1408] font-heading mt-1">Tomo de Feitiços</h1>
              <p className="text-xs italic text-[#8a6f2d]/80 mt-1 font-sans">Compêndio completo das magias arcanas disponíveis para transcrição.</p>
            </div>
            <button 
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-[#1b1408] text-[#f4e4bc] px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#1b1408]/90 transition"
            >
              + Inscrever Feitiço
            </button>
          </div>

          <SpellFilters
            selectedClass={selectedClass}
            selectedLevel={selectedLevel}
            onClassChange={setSelectedClass}
            onLevelChange={handleLevelChange}
          />

          {/* Campo de Busca por Texto */}
          <div className="w-full">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#8a6f2d]/60 text-xs">
                🔍
              </span>
              <input
                type="text"
                placeholder="Buscar magia pelo nome..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1b1408]/5 border border-[#8a6f2d]/20 rounded-xl pl-9 pr-4 py-2 text-xs text-[#1b1408] placeholder-[#1b1408]/40 focus:outline-none focus:border-[#8a6f2d]/60 font-sans transition-colors"
              />
            </div>
          </div>
        </div>

      {/* Área Inferior: Grid de Magias Dinâmico */}
      <div className="w-full flex-1 min-h-0 mt-4 pb-4">
        {/* O h-full combinado com flex-1 força o grid a calcular o espaço exato que sobrou na tela do celular e travar o scroll ali dentro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-y-auto pr-1 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {filteredSpells.map((spell) => {
            const isLearned = learnedSpellNames.has(spell.name);
            return (
              <div
                key={spell.id}
                onClick={() => handleSelectSpell(spell)}
                className={`border rounded-2xl p-4 hover:shadow-md cursor-pointer transition flex flex-col justify-between h-24 ${
                  isLearned
                    ? 'border-[#8a6f2d]/15 bg-[#f4e4bc]/60 text-[#6e5a2d] cursor-default'
                    : 'border-[#8a6f2d]/25 bg-[#1b1408] text-[#f4e4bc] hover:bg-[#2a1f18] hover:border-[#8a6f2d]/40'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-1">
                    <h3 className="text-sm font-bold truncate line-clamp-1">{spell.name}</h3>
                    {isLearned && <span className="text-xs font-bold text-[#6e5a2d] shrink-0">✓</span>}
                  </div>
                  <p className={`text-[10px] italic mt-0.5 ${isLearned ? 'text-[#8a6f2d]/90' : 'text-[#8a6f2d]'}`}>{spell.school}</p>
                </div>
                <div className={`flex justify-between items-center mt-2 pt-2 border-t text-[10px] font-mono ${
                  isLearned ? 'border-[#8a6f2d]/10 text-[#6e5a2d]/60' : 'border-[#8a6f2d]/15 text-[#f4e4bc]/60'
                }`}>
                  <span>⏱️ {spell.castingTime}</span>
                  <span>📏 {spell.range}</span>
                </div>
              </div>
            );
          })}
        </div>
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

      <CreateSpellModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
        onSave={(newSpell) => {
          handleSaveToSantuario(newSpell); 
        }}
      />
    </div>
  );
};