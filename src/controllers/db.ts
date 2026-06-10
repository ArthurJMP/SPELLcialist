import Dexie, { type Table } from 'dexie';
import { Spell } from '../models/spell';

class GrimoireDatabase extends Dexie {
 
  spells!: Table<Spell>;

  constructor() {
    super('GrimoireAncestralDB');
    
    this.version(1).stores({
      spells: 'name, level' 
    });
  }
}

export const db = new GrimoireDatabase();