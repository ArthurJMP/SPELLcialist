import { DamageType, SchoolType, CharacterClass, AreaOfEffect } from './types';

export interface ComponentData {
  verbal: boolean;
  somatic: boolean;
  material: boolean;
  materialDescription?: string;
  goldCost?: number;
}

export interface Spell {
  id: string;
  name: string;
  level: number;
  school: SchoolType;
  isRitual: boolean;
  originalDamageType: DamageType;
  currentDamageType?: DamageType;
  castingTime: string;
  range: string; 
  areaOfEffect?: AreaOfEffect;               
  target: string;               
  components: ComponentData;
  description: string;
  classes: CharacterClass[];
  isPrepared?: boolean;
}