import { db } from './db';
import { Spell } from '../models/spell';
import { DamageType } from '../models/types';

export const GrimoireController = {

  async resetLegacyGrimoireIfNeeded(): Promise<void> {
    if (typeof window === 'undefined') {
      return;
    }

    const storageKey = 'spellcialist-grimoire-reset-v1';
    const alreadyReset = window.localStorage.getItem(storageKey);

    if (alreadyReset === 'true') {
      return;
    }

    await db.spells.clear();
    window.localStorage.setItem(storageKey, 'true');
  },
  
  async addSpell(spell: Spell): Promise<string> {
    try {

      const exists = await db.spells.get(spell.name);
      if (exists) {
        return 'ERROR_DUPLICATE_SPELL';
      }

      await db.spells.add({
        ...spell,
        isPrepared: spell.isPrepared ?? false,
      });
      return 'SUCCESS';
    } catch (error) {
      console.error('Erro ao salvar magia no disco ancestral:', error);
      return 'ERROR_STORAGE_FAILED';
    }
  },

  async getAllSpells(): Promise<Spell[]> {
    try {
      return await db.spells.orderBy('level').toArray();
    } catch (error) {
      console.error('Erro ao ler grimório offline:', error);
      return [];
    }
  },

  async hotSwapDamage(spellToCastName: string, catalystSpellName: string): Promise<string> {
    try {
      const spellToCast = await db.spells.get(spellToCastName);
      const catalyst = await db.spells.get(catalystSpellName);

      if (!spellToCast) return 'ERROR_SPELL_NOT_FOUND';
      if (!catalyst) return 'ERROR_CATALYST_NOT_FOUND';

      if (spellToCast.level !== catalyst.level) {
        return 'VALIDATION_FAILED_LEVEL_MISMATCH';
      }

      await db.spells.update(spellToCastName, {
        currentDamageType: catalyst.originalDamageType
      });

      return 'SUCCESS';
    } catch (error) {
      console.error('Falha no override de dados do Escriba:', error);
      return 'ERROR_PATCH_FAILED';
    }
  },

  async resetSpellDamage(spellName: string): Promise<void> {
    const spell = await db.spells.get(spellName);
    if (spell) {
      await db.spells.update(spellName, {
        currentDamageType: spell.originalDamageType
      });
    }
  },

  async deleteSpell(spellName: string): Promise<void> {
    await db.spells.delete(spellName);
  },

  async setSpellPrepared(spellName: string, isPrepared: boolean): Promise<void> {
    await db.spells.update(spellName, {
      isPrepared,
    });
  }
};