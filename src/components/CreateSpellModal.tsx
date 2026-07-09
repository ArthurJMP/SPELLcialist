import React, { useState } from 'react';

interface CreateSpellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newSpell: any) => void;
}

export const CreateSpellModal: React.FC<CreateSpellModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    level: 0,
    castingTime: '',
    range: '',
    isRitual: false, // Nova opção adicionada!
    components: { verbal: false, somatic: false, material: false },
    materialDescription: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envia o objeto estruturado de volta para o Santuário
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-0 md:p-4">
      {/* Estrutura do Modal: Tela cheia no Mobile (inset-0) e Centralizado no PC */}
      <div className="w-full h-full md:h-auto md:max-w-2xl bg-[#f4e4bc] md:rounded-2xl p-6 flex flex-col overflow-y-auto shadow-xl text-[#1b1408]">
        
        <div className="flex justify-between items-center border-b border-[#8a6f2d]/20 pb-3 mb-4">
          <h2 className="text-xl font-bold font-heading">✨ Inscrever Novo Feitiço</h2>
          <button onClick={onClose} className="text-sm font-bold hover:text-red-700">Fechar</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 flex-1">
          {/* CAMPOS DO FORMULÁRIO */}
          <div>
            <label className="block text-xs font-bold mb-1">Nome da Magia</label>
            <input 
              type="text" 
              required
              className="w-full bg-[#1b1408]/5 border border-[#8a6f2d]/20 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#8a6f2d]"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-1">Escola de Magia</label>
              <select 
                className="w-full bg-[#1b1408]/5 border border-[#8a6f2d]/20 rounded-xl px-3 py-2 text-sm focus:outline-none"
                value={formData.school}
                onChange={e => setFormData({...formData, school: e.target.value})}
              >
                <option value="Evocação">Evocação</option>
                <option value="Conjuração">Conjuração</option>
                <option value="Abjuração">Abjuração</option>
                <option value="Transmutação">Transmutação</option>
                <option value="Ilusão">Ilusão</option>
                <option value="Necromancia">Necromancia</option>
                <option value="Adivinhação">Adivinhação</option>
                <option value="Encantamento">Encantamento</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold mb-1">Círculo / Nível</label>
              <select 
                className="w-full bg-[#1b1408]/5 border border-[#8a6f2d]/20 rounded-xl px-3 py-2 text-sm focus:outline-none"
                value={formData.level}
                onChange={e => setFormData({...formData, level: Number(e.target.value)})}
              >
                <option value={0}>Truque</option>
                {[1,2,3,4,5,6,7,8,9].map(n => (
                  <option key={n} value={n}>{n}º Círculo</option>
                ))}
              </select>
            </div>
          </div>

          {/* CHECKBOX DE RITUAL */}
          <div className="flex items-center gap-2 py-2">
            <input 
              type="checkbox" 
              id="ritual"
              className="w-4 h-4 accent-[#8a6f2d]"
              checked={formData.isRitual}
              onChange={e => setFormData({...formData, isRitual: e.target.checked})}
            />
            <label htmlFor="ritual" className="text-xs font-bold cursor-pointer select-none">
              📜 Esta magia pode ser conjurada como Ritual?
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-1">Tempo de Execução</label>
              <input 
                type="text" 
                placeholder="Ex: 1 Ação, 1 minuto"
                className="w-full bg-[#1b1408]/5 border border-[#8a6f2d]/20 rounded-xl px-3 py-2 text-sm"
                value={formData.castingTime}
                onChange={e => setFormData({...formData, castingTime: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-1">Alcance / Área</label>
              <input 
                type="text" 
                placeholder="Ex: 18 metros, Toque"
                className="w-full bg-[#1b1408]/5 border border-[#8a6f2d]/20 rounded-xl px-3 py-2 text-sm"
                value={formData.range}
                onChange={e => setFormData({...formData, range: e.target.value})}
              />
            </div>
          </div>

          {/* COMPONENTES */}
          <div>
            <label className="block text-xs font-bold mb-2">Componentes</label>
            <div className="flex gap-4">
              {['verbal', 'somatic', 'material'].map((comp) => (
                <label key={comp} className="flex items-center gap-1 text-xs capitalize cursor-pointer">
                  <input 
                    type="checkbox"
                    className="accent-[#8a6f2d]"
                    checked={(formData.components as any)[comp]}
                    onChange={e => setFormData({
                      ...formData,
                      components: { ...formData.components, [comp]: e.target.checked }
                    })}
                  />
                  {comp === 'verbal' ? 'Verbal (V)' : comp === 'somatic' ? 'Somático (S)' : 'Material (M)'}
                </label>
              ))}
            </div>
          </div>

          {formData.components.material && (
            <div>
              <label className="block text-xs font-bold mb-1">Materiais Necessários</label>
              <input 
                type="text"
                placeholder="Ex: um pedaço de ferro"
                className="w-full bg-[#1b1408]/5 border border-[#8a6f2d]/20 rounded-xl px-3 py-2 text-sm"
                value={formData.materialDescription}
                onChange={e => setFormData({...formData, materialDescription: e.target.value})}
              />
            </div>
          )}

          <div className="flex-1 flex flex-col min-h-[120px]">
            <label className="block text-xs font-bold mb-1">Descrição da Magia</label>
            <textarea 
              required
              className="w-full flex-1 bg-[#1b1408]/5 border border-[#8a6f2d]/20 rounded-xl px-3 py-2 text-sm resize-none min-h-[100px]"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[#8a6f2d]/20 mt-auto">
            <button type="button" onClick={onClose} className="px-4 py-2 text-xs font-bold hover:underline">
              Cancelar
            </button>
            <button type="submit" className="bg-[#1b1408] text-[#f4e4bc] px-5 py-2 rounded-xl text-xs font-bold hover:opacity-90">
              Gravar no Santuário
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};