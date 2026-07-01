export type DamageType = 
  | 'Força' | 'Fogo' | 'Gelo' | 'Raio' | 'Trovão' 
  | 'Ácido' | 'Veneno' | 'Psíquico' | 'Radiante' | 'Necrótico' 
  | 'Cortante' | 'Perfurante' | 'Contundente' | 'None';

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