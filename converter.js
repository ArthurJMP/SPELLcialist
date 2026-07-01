const fs = require('fs');
const path = require('path');

// 1. Carrega o seu arquivo JSON original
const rawData = fs.readFileSync(path.join(__dirname, 'spells.json'), 'utf-8');
const spells = JSON.parse(rawData);

// 2. Dicionários de Tradução e Mapeamento para o nosso Padrão
const schoolMap = {
  'abjuração': 'Abjuração',
  'conjuração': 'Conjuração',
  'adivinhação': 'Adivinhação',
  'encantamento': 'Encantamento',
  'evocação': 'Evocação',
  'ilusão': 'Ilusão',
  'necromancia': 'Necromancia',
  'transmutação': 'Transmutação'
};

const damageKeywords = {
  'fogo': 'Fogo',
  'ácido': 'Ácido',
  'veneno': 'Veneno',
  'radiante': 'Radiante',
  'necrótico': 'Necrótico',
  'trovejante': 'Trovão',
  'elétrico': 'Elétrico',
  'psíquico': 'Psíquico',
  'força': 'Força',
  'cortante': 'Cortante',
  'perfurante': 'Perfurante',
  'concussão': 'Concussão'
};

// Separador de magias por nível (0 a 9)
const buckets = Array.from({ length: 10 }, () => []);

console.log(`🔮 Analisando ${spells.length} magias...`);

spells.forEach((oldSpell) => {
  // Gerar ID limpo
  const id = oldSpell.name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

  // Detectar Tipo de Dano com base na descrição da magia
  let detectedDamage = 'None';
  const fullText = (oldSpell.body?.description || []).map(d => d.description).join(' ').toLowerCase();
  
  for (const [key, value] of Object.entries(damageKeywords)) {
    if (fullText.includes(key)) {
      detectedDamage = value;
      break; // Pega o primeiro que encontrar
    }
  }
  // Exceções conhecidas de nome/dano
  if (oldSpell.name.toLowerCase().includes('gelo') || oldSpell.name.toLowerCase().includes('frigido')) detectedDamage = 'Gelo';

  // Tratar Alcance (Pés para Metros)
  let rangeStr = "Toque";
  if (oldSpell.range && oldSpell.range.unit === 'pés' && oldSpell.range.value) {
    rangeStr = `${Math.round(oldSpell.range.value * 0.3)} metros`;
  } else if (oldSpell.range && oldSpell.range.unit === 'pessoal') {
    rangeStr = "Pessoal";
  } else if (oldSpell.range && oldSpell.range.unit === 'toque') {
    rangeStr = "Toque";
  }

  // Tratar Alvo / Área
  let targetStr = "Uma criatura";
  if (fullText.includes('cone de')) targetStr = "Cone";
  if (fullText.includes('esfera de')) targetStr = "Esfera";
  if (fullText.includes('cubo de')) targetStr = "Cubo";
  if (oldSpell.range && oldSpell.range.unit === 'pessoal' && targetStr !== "Uma criatura") {
    targetStr = `${targetStr} a partir de você`;
  }

  // Juntar as descrições em texto corrido limpo
  let descText = (oldSpell.body?.description || []).map(d => d.description).join(' ');
  if (oldSpell.body?.higherLevels) {
    descText += ` | ${oldSpell.body.higherLevels}`;
  }

  // Montar o Componente no novo padrão tipado
  const compData = {
    verbal: oldSpell.components?.isVerbal || false,
    somatic: oldSpell.components?.isSomatic || false,
    material: oldSpell.components?.isMaterial || false
  };
  if (oldSpell.components?.material?.description) {
    compData.materialDescription = oldSpell.components.material.description;
  }

  // Formatar as classes com a primeira letra Maiúscula
  const classesFormated = (oldSpell.classes || []).map(c => c.charAt(0).toUpperCase() + c.slice(1));

  // Criar o objeto final idêntico ao nosso Model Spell
  const finalSpell = {
    id,
    name: oldSpell.name,
    level: oldSpell.level,
    school: schoolMap[oldSpell.school?.toLowerCase()] || 'Evocação',
    isRitual: oldSpell.isRitual || false,
    originalDamageType: detectedDamage,
    currentDamageType: detectedDamage,
    castingTime: oldSpell.casting?.unit ? `1 ${oldSpell.casting.unit.charAt(0).toUpperCase() + oldSpell.casting.unit.slice(1)}` : '1 Ação',
    range: rangeStr,
    target: targetStr,
    components: compData,
    description: descText,
    classes: classesFormated
  };

  // Guarda no balde do nível correspondente
  if (oldSpell.level >= 0 && oldSpell.level <= 9) {
    buckets[oldSpell.level].push(finalSpell);
  }
});

// 3. Salvar os arquivos na pasta correta automaticamente
const targetDir = path.join(__dirname, 'src', 'models', 'catalog');

// Garante que a pasta existe
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Escreve do level0.ts ao level9.ts
buckets.forEach((list, level) => {
  const fileContent = `import { Spell } from '../spell';\n\nexport const level${level}Spells: Spell[] = ${JSON.stringify(list, null, 2)};\n`;
  fs.writeFileSync(path.join(targetDir, `level${level}.ts`), fileContent, 'utf-8');
  console.log(`✅ Arquivo level${level}.ts gerado com ${list.length} magias!`);
});

console.log("\n🚀 OPERAÇÃO CONCLUÍDA! Seu grimório modular foi gerado automaticamente.");