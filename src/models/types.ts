export type DamageType = 
  | 'Energia' | 'Fogo' | 'Gelo' | 'Raio' | 'Trovão' 
  | 'Ácido' | 'Veneno' | 'Psíquico' | 'Radiante' | 'Necrótico' 
  | 'Cortante' | 'Perfurante' | 'Contundente' | 'None'
  | 'Frio' | 'Trovejante' | 'Força';

export type SchoolType =
  | 'Abjuração' | 'Conjuração' | 'Adivinhação' | 'Encantamento'
  | 'Evocação'  | 'Ilusão' | 'Necromancia' | 'Transmutação';

export type CharacterClass = 
  | 'Artifice'
  | 'Bardo' 
  | 'Bruxo' 
  | 'Clérigo' 
  | 'Druida'
  | 'Feiticeiro' 
  | 'Mago' 
  | 'Paladino' 
  | 'Patrulheiro';

export type HabilityType =
  | 'Força' | 'Destreza' | 'Constituição' | 'Inteligência' 
  | 'Sabedoria' | 'Carisma';

export const CHARACTER_CLASS_LABELS: Record<CharacterClass, string> = {
  Artifice: 'Artífice',
  Bardo: 'Bardo',
  Bruxo: 'Bruxo',
  Clérigo: 'Clérigo',
  Druida: 'Druida',
  Feiticeiro: 'Feiticeiro',
  Mago: 'Mago',
  Paladino: 'Paladino',
  Patrulheiro: 'Patrulheiro',

};

export const HABILITY_LABELS: Record<HabilityType, string> = {
  'Força': 'FOR',
  'Destreza': 'DES',
  'Constituição': 'CON',
  'Inteligência': 'INT',
  'Sabedoria': 'SAB',
  'Carisma': 'CAR',
};

export const DAMAGE_ELEMENT_STYLES: Record<string, string> = {
  'dano de fogo': 'bg-orange-500/10 text-orange-700 border border-orange-500/20 px-1 rounded font-medium',
  'dano ígneo': 'bg-orange-500/10 text-orange-700 border border-orange-500/20 px-1 rounded font-medium',

  'dano de frio': 'bg-cyan-500/10 text-cyan-700 border border-cyan-500/20 px-1 rounded font-medium',
  'dano de gelo': 'bg-cyan-500/10 text-cyan-700 border border-cyan-500/20 px-1 rounded font-medium',
  'dano congelante': 'bg-cyan-500/10 text-cyan-700 border border-cyan-500/20 px-1 rounded font-medium',

  'dano elétrico': 'bg-sky-500/15 text-sky-700 border border-sky-400/40 px-1 rounded font-bold',
  'dano de raio': 'bg-sky-500/15 text-sky-700 border border-sky-400/40 px-1 rounded font-bold',
  'dano de eletricidade': 'bg-sky-500/15 text-sky-700 border border-sky-400/40 px-1 rounded font-bold',

  'dano de trovão': 'bg-indigo-650/10 text-indigo-800 border border-indigo-500/20 px-1 rounded font-medium',
  'dano trovejante': 'bg-indigo-650/10 text-indigo-800 border border-indigo-500/20 px-1 rounded font-medium',

  'dano de ácido': 'bg-lime-500/15 text-lime-800 border border-lime-500/30 px-1 rounded font-medium',
  'dano ácido': 'bg-lime-500/15 text-lime-800 border border-lime-500/30 px-1 rounded font-medium',

  'dano de veneno': 'bg-emerald-800/10 text-emerald-800 border border-emerald-600/20 px-1 rounded font-medium',
  'dano venenoso': 'bg-emerald-800/10 text-emerald-800 border border-emerald-600/20 px-1 rounded font-medium',

  'dano psíquico': 'bg-pink-500/10 text-pink-700 border border-pink-500/20 px-1 rounded font-medium',

  'dano radiante': 'bg-amber-500/10 text-amber-700 border border-amber-500/30 px-1 rounded font-medium',
  'dano sagrado': 'bg-amber-500/10 text-amber-700 border border-amber-500/30 px-1 rounded font-medium',

  'dano necrótico': 'bg-purple-600/15 text-purple-700 border border-purple-500/30 px-1 rounded font-medium',

  'dano de força': 'bg-fuchsia-500/10 text-fuchsia-700 border border-fuchsia-500/20 px-1 rounded font-medium',
  'dano de energia': 'bg-fuchsia-500/10 text-fuchsia-700 border border-fuchsia-500/20 px-1 rounded font-medium',

  'dano cortante': 'bg-slate-500/10 text-slate-700 border border-slate-500/20 px-1 rounded font-medium',
  'dano perfurante': 'bg-slate-500/10 text-slate-700 border border-slate-500/20 px-1 rounded font-medium',
  'dano contundente': 'bg-slate-500/10 text-slate-700 border border-slate-500/20 px-1 rounded font-medium',
};

export interface AreaOfEffect {
  type: 'Esfera' | 'Cone' | 'Cubo' | 'Cilindro' | 'Linha';
  size: string;
}
