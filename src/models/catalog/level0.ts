import { Spell } from '../spell';

export const level0Spells: Spell[] = [
  {
  "id": "teste-de-matrizes",
  "name": "Laboratório de Elementos",
  "level": 0,
  "school": "Evocação",
  "isRitual": false,
  "originalDamageType": "None",
  "currentDamageType": "None",
  "castingTime": "1 Ação",
  "range": "Auto",
  "target": "Inspecionar Cores",
  "components": {
    "verbal": true,
    "somatic": true,
    "material": false
  },
  "description": "Este truque serve para testar as cores. Dispara uma esfera oscilante que causa 1d4 de dano de fogo, seguido por um estilhaço que causa 2d6 de dano de gelo. Logo após, uma faísca causa 3d8 de dano de raio ou dano elétrico. O impacto gera uma onda de som de 4d10 de dano de trovão, uma poça corrosiva de 1d12 de dano de ácido e uma nuvem gasosa de 2d4 de dano de veneno. Na mente do alvo, causa 3d6 de dano psíquico. Por fim, evoca uma explosão estelar de 4d8 de dano radiante, uma emanação murcha de 5d10 de dano necrótico e um feixe puro de 8d6 de dano de força. O efeito colateral cria lâminas que causam 1d6 de dano cortante, espinhos que causam 1d6 de dano perfurante e uma onda de choque que causa 1d6 de dano contundente.",
  "classes": [
    "Mago"
  ]
},
  {
    "id": "ataque-certeiro",
    "name": "Ataque Certeiro",
    "level": 0,
    "school": "Adivinhação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": false
    },
    "description": "Você estende sua mão e aponta o dedo para um alvo no alcance. Sua magia garante a você uma breve intuição sobre as defesas do alvo. No seu próximo turno, você terá vantagem na primeira jogada de ataque contra o alvo, considerando que essa magia não tenha acabado.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "bordao-mistico",
    "name": "Bordão Místico",
    "level": 0,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Energia",
    "currentDamageType": "Energia",
    "castingTime": "1 Ação bonus",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "visco, uma folha de trevo e uma clava ou bordão"
    },
    "description": "A madeira de uma clava ou bordão, que você esteja segurando, é imbuída com o poder da natureza. Pela duração, você pode usar sua habilidade de conjuração ao invés da sua Força para as jogadas de ataque e dano corpo-a-corpo usando essa arma, e o dado de dano da arma se torna um d8. A arma também se torna mágica, se ela já não for. A magia acaba se você conjura-la novamente ou se você soltar a arma.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "chama-sagrada",
    "name": "Chama Sagrada",
    "level": 0,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Radiante",
    "currentDamageType": "Radiante",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Radiação similar a uma chama desce sobre uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Destreza ou sofrerá 1d8 de dano radiante. O alvo não recebe qualquer benefício de cobertura contra esse teste de resistência. O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "consertar",
    "name": "Consertar",
    "level": 0,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "dois ímãs"
    },
    "description": "Essa magia repara um única quebra ou fissura em um objeto que você tocar, como um elo quebrado de uma corrente, duas metades de uma chave partida, um manto rasgado ou o vazamento em um odre. Contanto que a quebra ou fissura não tenha mais de 30 centímetros [1 foot] em qualquer dimensão, você pode remenda-la, não deixando qualquer vestígio do dano anterior. Essa magia pode reparar fisicamente um item mágico ou constructo, mas a magia não irá restaurar a magia em tais objetos.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "criar-chamas",
    "name": "Criar Chamas",
    "level": 0,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma chama tremulante aparece na sua mão. A chama permanece ai pela duração e não machuca nem você nem seu equipamento. A chama emite luz plena num raio de 3 metros [10-foot radius] e penumbra por 3 metros [10 feet] adicionais. A magia acaba se você dissipa-la usando uma ação ou se conjura-la novamente. Você pode, também, atacar com a chama, no entanto, fazer isso acaba com a magia. Quando você conjura essa magia ou com uma ação em um turno posterior, você pode arremessar a chama numa criatura a até 9 metros [30 feet] de você. Faça um ataque à distância com magia. Se atingir, o alvo sofre 1d8 de dano de fogo. O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "druidismo",
    "name": "Druidismo",
    "level": 0,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Sussurrando para os espíritos da natureza, você cria um dos seguintes efeitos dentro do alcance: ",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "espirro-acido",
    "name": "Espirro Ácido",
    "level": 0,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Ácido",
    "currentDamageType": "Ácido",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você arremessa uma bolha de ácido. Escolha uma criatura dentro do alcance, ou escolha duas criaturas dentro do alcance que estejam a 1,5 metro [5 feet] uma da outra. Um alvo deve ser bem sucedido num teste de resistência de Destreza ou sofrerá 1d6 de dano ácido. O dano dessa magia aumenta em 1d6 quando você alcança o 5° nível (2d6), 11° nível (3d6) e 17° nível (4d6).",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "estabilizar",
    "name": "Estabilizar",
    "level": 0,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você toca uma criatura viva que esteja com 0 pontos de vida. A criatura é estabilizada. Essa magia não afeta mortos-vivos ou constructos.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "globos-de-luz",
    "name": "Globos De Luz",
    "level": 0,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de fósforo ou wychwood ou um inseto luminoso"
    },
    "description": "Você cria até quatro luzes do tamanho de tochas dentro do alcance, fazendo-as parecerem tochas, lanternas ou esferas luminosas que flutuam no ar pela duração. Você também pode combinar as quatro luzes em uma forma luminosa, vagamente humanoide, de tamanho Médio. Qualquer que seja a forma que você escolher, cada luz produz penumbra num raio de 3 metros [10-foot radius]. Com uma ação bônus, no seu turno, você pode mover as luzes, até 18 metros [60 feet], para um novo local dentro do alcance. Uma luz deve estar a, pelo menos, 6 metros [20 feet] de outra luz criada por essa magia e uma luz some se exceder o alcance da magia.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "ilusao-menor",
    "name": "Ilusão Menor",
    "level": 0,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de lã"
    },
    "description": "Você cria um som ou uma imagem de um objeto, dentro do alcance, que permanece pela duração. A ilusão também termina se você dissipa-la usando uma ação ou conjurar essa magia novamente. Se você criar um som, seu volume pode variar entre um sussurro até um grito. Pode ser a sua voz, a voz de outrem, o rugido de um leão, batidas de tambor ou qualquer outro som que você quiser. O som permanece no mesmo volume durante toda duração ou você pode fazer sons distintos em momentos diferentes, antes da magia acabar. Se você criar uma imagem de um objeto – como uma cadeira, pegadas de lama ou um pequeno baú – ela não pode ter mais de 1,5 metro cúbico [5-foot cube]. A imagem não pode produzir som, luz, cheiro ou qualquer outro efeito sensorial. Interação física com a imagem revelará que ela é uma ilusão, já que as coisas podem atravessa-la. Se uma criatura usar sua ação para examinar a imagem, ela pode determinar que ela é uma ilusão se obtiver sucesso num teste de Inteligência (Investigação) contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a ilusão se tornará suave para a criatura.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "luz",
    "name": "Luz",
    "level": 0,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": true,
      "materialDescription": "um vaga-lume ou musgo fosforescente"
    },
    "description": "Você toca um objeto que não tenha mais 3 metros [10 feet] em qualquer dimensão. Até a magia acabar, o objeto emite luz plena num raio de 6 metros [20 feet] e penumbra por 6 metros [20 feet] adicionais. Cobrir o objeto completamente com alguma coisa opaca bloqueará a luz. A magia termina se você conjura-la novamente ou dissipa-la com uma ação. Se você tentar afetar um objeto segurado ou vestido por uma criatura hostil, a criatura deve ser bem sucedida num teste de Destreza para evitar a magia.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "maos-magicas",
    "name": "Mãos Mágicas",
    "level": 0,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma mão espectral flutuante aparece num ponto, à sua escolha, dentro do alcance. A mão permanece pela duração ou até você dissipa-la com uma ação. A mão some se estiver a mais de 9 metros [30 feet] de você ou se você conjurar essa magia novamente. Você pode usar sua ação para controlar a mão. Você pode usar a mão para manipular um objeto, abrir uma porta ou recipiente destrancado, guardar ou pegar um item de um recipiente aberto ou derramar o conteúdo de um frasco. Você pode mover a mão até 9 metros [30 feet] a cada vez que a usa. A mão não pode atacar, ativar itens mágicos ou carregar mais de 5 quilos [10 pounds].",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "mensagem",
    "name": "Mensagem",
    "level": 0,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pedaço curto de fio de cobre"
    },
    "description": "Você aponta seu dedo para uma criatura dentro do alcance e sussurra uma mensagem. O alvo (e apenas ele) ouvi a mensagem e pode responder com um sussurro que apenas você pode ouvir. Você pode conjurar essa magia através de objetos sólidos se você tiver familiaridade com o alvo. Silêncio mágico, 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra bloqueiam a magia. A magia não precisa seguir uma linha reta e pode viajar livremente, dobrando esquinas ou através de aberturas.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "orientacao",
    "name": "Orientação",
    "level": 0,
    "school": "Adivinhação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o número rolado a um teste de habilidade a escolha dele. Ele pode rolar o dado antes ou depois de realizar o teste de habilidade. Após isso, a magia termina.",
    "classes": [
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "prestidigitacao",
    "name": "Prestidigitação",
    "level": 0,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "3 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Este feitiço é um pequeno truque mágico que conjuradores novatos usam para praticar. Você cria um dos seguintes efeitos mágicos dentro do alcance:  Se você conjurar essa magia diversas vezes, você pode ter até três dos seus efeitos não-instantâneos ativos, ao mesmo tempo, e você pode dissipar um desses efeitos com uma ação.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "raio-de-fogo",
    "name": "Raio De Fogo",
    "level": 0,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você arremessa um cisco de fogo em uma criatura ou objeto dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de fogo. Um objeto inflamável atingido por essa magia incendeia se não estiver sendo vestido ou carregado. O dano dessa magia aumenta em 1d10 quando você alcança o 5° nível (2d10), 11° nível (3d10) e 17° nível (4d10).",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "raio-de-gelo",
    "name": "Raio De Gelo",
    "level": 0,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Gelo",
    "currentDamageType": "Gelo",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Um raio frigido de luz azul clara parte em direção de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, ele sofre 1d8 de dano de frio e seu deslocamento é reduzido em 3 metros [10 feet] até o começo do seu próximo turno. O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "rajada-de-veneno",
    "name": "Rajada De Veneno",
    "level": 0,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Ação",
    "range": "3 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você ergue sua mão em direção de uma criatura que você possa ver, dentro do alcance e projeta um sopro de gás tóxico da sua palma. A criatura deve ser bem sucedida num teste de resistência de Constituição ou sofrerá 1d12 de dano de veneno. O dano dessa magia aumenta em 1d12 quando você alcança o 5° nível (2d12), 11° nível (3d12) e 17° nível (4d12).",
    "classes": [
      "Bruxo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "rajada-mistica",
    "name": "Rajada Mística",
    "level": 0,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Um feixe de energia crepitante vai em direção a uma criatura dentro do alcance. Realize uma jogada de ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de energia. A magia cria mais de um feixe quando você alcança níveis elevados: dois feixes no 5° nível, três feixes no 11° nível e quatro feixes no 17° nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Realize jogadas de ataque separadas para cada feixe.",
    "classes": [
      "Bruxo"
    ]
  },
  {
    "id": "resistencia",
    "name": "Resistência",
    "level": 0,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um manto em miniatura"
    },
    "description": "Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o valor jogado a um teste de resistência de sua escolha. Ele pode rolar o dado antes ou depois de realizar o teste de resistência. Então, a magia termina.",
    "classes": [
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "taumaturgia",
    "name": "Taumaturgia",
    "level": 0,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você manifesta pequenas maravilhas, um sinal de poder sobrenatural, dentro do alcance. Você cria um dos seguintes efeitos mágicos dentro do alcance:  Se você conjurar essa magia diversas vezes, você pode ter até três dos efeitos de 1 minuto ativos por vez, e você pode dissipar um desses efeitos com uma ação.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "toque-arrepiante",
    "name": "Toque Arrepiante",
    "level": 0,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Necrótico",
    "currentDamageType": "Necrótico",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você cria uma mão esquelética fantasmagórica no espaço de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra a criatura para afetá-la com o frio sepulcral. Se atingir, a criatura sofre 1d8 de dano necrótico e não poderá recuperar pontos de vida até o início do seu próximo turno. Até lá, a mão ficará presa ao alvo. Se você atingir um alvo morto-vivo, ele terá desvantagem nas jogadas de ataque contra você até o final do seu próximo turno. O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "toque-chocante",
    "name": "Toque Chocante",
    "level": 0,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Raio",
    "currentDamageType": "Raio",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Eletricidade surge da sua mão para transmitir um choque em uma criatura que você tentar tocar. Faça um ataque corpo-a-corpo com magia contra o alvo. Você tem vantagem na jogada de ataque se o alvo estiver vestindo qualquer armadura de metal. Se atingir, o alvo sofre 1d8 de dano elétrico e não pode usar reações até o início do próximo turno dele. O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8).",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "zombaria-viciosa",
    "name": "Zombaria Viciosa",
    "level": 0,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "Psíquico",
    "currentDamageType": "Psíquico",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você libera uma série de insultos atados com encantamentos sutis numa criatura que você possa ver, dentro do alcance. Se o alvo puder ouvir você (apesar de não precisar compreendê-lo), ele deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 1d4 de dano psíquico e terá desvantagem na próxima jogada de ataque que ele fizer antes do final do próximo turno dele. O dano dessa magia aumenta em 1d4 quando você alcança o 5° nível (2d4), 11° nível (3d4) e 17° nível (4d4).",
    "classes": [
      "Bardo"
    ]
  }
];
