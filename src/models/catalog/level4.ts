import { Spell } from '../spell';

export const level4Spells: Spell[] = [
  {
    "id": "adivinhacao",
    "name": "Adivinhação",
    "level": 4,
    "school": "Adivinhação",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um incenso e uma oferenda apropriada para sacrifício à sua religião"
    },
    "description": "Sua magia e uma oferenda colocam você em contato com um deus ou servo divino. Você faz uma única pergunta a respeito de um objetivo, evento ou atividade específico que irá ocorrer dentro de 7 dias. O Mestre oferece uma resposta confiável. A resposta deve ser uma frase curta, uma rima enigmática ou um presságio. A magia não leva em consideração qualquer possível circunstância que possa mudar o que está por vir, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro. Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "arca-secreta",
    "name": "Arca Secreta",
    "level": 4,
    "school": "Conjuração",
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
      "materialDescription": "um baú requintado, de 90 cm por 60 cm por 60 cm [3 feet by 2 feet by 2 feet], construído com materiais raros valendo e uma réplica Miúda feita do mesmo material,"
    },
    "description": "Você esconde um baú, e todo o seu conteúdo, no Plano Etéreo. Você deve tocar o baú e a réplica em miniatura que serve como componente material para a magia. O baú pode acomodar até 3,6 metros cúbicos [12 cubic feet] de matéria inorgânica (90 cm por 60 cm por 60 cm) [3 feet by 2 feet by 2 feet]. Enquanto o baú permanecer no Plano Etéreo, você pode usar uma ação e tocar a réplica para revocar o baú. Ele aparece em um espaço desocupado no chão a 1,5 metro [5 feet] de você. Você pode enviar o baú de volta ao Plano Etéreo usando uma ação e tocando tanto no baú quanto na réplica. Após 60 dias, existe 5 por cento de chance, cumulativa, por dia do efeito da magia terminar. Esse efeito termina se você conjurar essa magia novamente, se a pequena réplica do baú for destruída ou se você decidir terminar a magia usando uma ação. Se a magia terminar enquanto o baú maior estiver no Plano Etéreo, ele estará irremediavelmente perdido.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "assassino-fantasmagorico",
    "name": "Assassino Fantasmagórico",
    "level": 4,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "Psíquico",
    "currentDamageType": "Psíquico",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você mexe com os pesadelos de uma criatura que você possa ver, dentro do alcance, e cria uma manifestação ilusória dos seus medos mais profundos, visível apenas para a criatura. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele ficará amedrontado pela duração. No final de cada turno do alvo, antes da magia acabar, ele deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se passar na resistência, a magia acaba. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 4°.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "banimento",
    "name": "Banimento",
    "level": 4,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um item desagradável ao alvo"
    },
    "description": "Você tenta enviar uma criatura que você pode ver dentro do alcance para outro plano de existência. O alvo precisa ser bem sucedido em um teste de resistência de Carisma ou será banido. Se o alvo for nativo do plano de existência que você está, você bane o alvo para um semiplano inofensivo. Enquanto estiver lá, a criatura estará incapacitada. Ela permanece lá até a magia acabar, a partir desse ponto, o alvo reaparece no espaço em que ela deixou ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado. Se o alvo for nativo de um plano de existência diferente do que você está, o alvo é banido em um lampejo sutil, retornando para o seu plano natal. Se a magia acabar antes de 1 minuto se passar, o alvo reaparece no lugar em que estava ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado. Do contrário, o alvo não retorna. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 4°.",
    "classes": [
      "Bruxo",
      "Clérigo",
      "Feiticeiro",
      "Mago",
      "Paladino"
    ]
  },
  {
    "id": "cao-fiel",
    "name": "Cão Fiel",
    "level": 4,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Perfurante",
    "currentDamageType": "Perfurante",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um minúsculo apito de prata, um pedaço de osso e um fio"
    },
    "description": "Você conjura um cão de guarda fantasma em um espaço desocupado que você possa ver, dentro do alcance, que permanece pela duração, até você dissipa-lo com uma ação ou até você se mover para mais de 30 metros [100 feet] dele. O cão é invisível para todas as criaturas, exceto para você, e não pode ser ferido. Quando uma criatura Pequena ou maior se aproximar a 9 metros [30 feet] sem, primeiramente, falar a senha que você especifica quando conjura a magia, o cão começa a latir muito alto. O cão vê criaturas invisíveis e pode ver no Plano Etéreo. Ele ignora ilusões. No começo de cada um dos seus turnos, o cão tenta morder uma criatura a 1,5 metro [5 feet] dele que seja hostil a você. O bônus de ataque do cão é igual ao seu modificador de habilidade de conjuração + seu bônus de proficiência. Se atingir, ele causa 4d8 de dano perfurante.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "compulsao",
    "name": "Compulsão",
    "level": 4,
    "school": "Encantamento",
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
    "description": "Criaturas à sua escolha que você puder ver dentro do alcance e que puderem ouvir você, devem realizar um teste de resistência de Sabedoria. Um alvo passa automaticamente nesse teste de resistência se ele não puder ser enfeitiçado. Se falhar no teste, um alvo é afetado por essa magia. Até a magia acabar, você pode usar uma ação bônus em cada um dos seus turnos, para designar uma direção horizontal a você. Cada criatura afetada deve se mover, da melhor forma possível, para essa direção no próximo turno dela. Ela pode realizar sua ação antes de se mover. Depois de se mover dessa forma, ela pode realizar outra resistência de Sabedoria para tentar acabar com o efeito. Um alvo não é obrigado a se mover em direção de um perigo obviamente mortal, como uma fogueira ou abismo, mas ele vai provocar ataques de oportunidade por se mover na direção designada.",
    "classes": [
      "Bardo"
    ]
  },
  {
    "id": "confusao",
    "name": "Confusão",
    "level": 4,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "27 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "três cascas de noz"
    },
    "description": "Essa magia ataca e embaralha as mentes das criaturas, gerando delírios e provocando ações descontroladas. Cada criatura em uma esfera com 3 metros de raio [10-foot radius], centrada num ponto, à sua escolha, dentro do alcance, deve ser bem sucedida num teste de resistência de Sabedoria, quando você conjurar essa magia ou for afetada por ela. Um alvo afetado não pode realizar reações e deve rolar um d10 no início de cada um dos seus turnos para determinar seu comportamento nesse turno.  Ao final de cada um dos seus turnos, um alvo afetado pode realizar um teste de resistência de Sabedoria. Se for bem sucedido, esse efeito acaba nesse alvo. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o raio da esfera aumenta em 1,5 metro [5 feet] para cada nível do espaço acima do 4°.",
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "conjurar-elementais-menores",
    "name": "Conjurar Elementais Menores",
    "level": 4,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "27 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você invoca elementais que aparecem em espaços desocupados, que você possa ver dentro do alcance. Você escolhe uma das opções a seguir para aparecer:  Um elemental invocado através dessa magia desaparece quando cair a 0 pontos de vida ou quando a magia acabar. As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação. O Mestre possui as estatísticas das criaturas. | Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 6° nível e o triplo delas com um espaço de 8° nível.",
    "classes": [
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "conjurar-seres-da-floresta",
    "name": "Conjurar Seres Da Floresta",
    "level": 4,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um fruto sagrado por criatura invocada"
    },
    "description": "Você invoca criaturas feéricas que aparecem em espaços desocupados, que você possa ver dentro do alcance. Escolha uma das opções a seguir para aparecer:  Uma criatura invocado desaparece quando cair a 0 pontos de vida ou quando a magia acabar. As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação. O Mestre possui as estatísticas das criaturas. | Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 6° nível e o triplo delas com um espaço de 8° nível.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "controlar-a-agua",
    "name": "Controlar A Água",
    "level": 4,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "90 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma gota de água e uma pitada de poeira"
    },
    "description": "Até o fim da magia, você controla qualquer corpo de água dentro da área que você escolher, que é um cubo de 30 metros [100 feet] quadrados. Você pode escolher dentre quaisquer dos efeitos seguintes, quando você conjurar essa magia. Com uma ação no seu turno, você pode repetir o mesmo efeito ou escolher um diferente. Inundação. Você faz com que o nível da água de toda área afetada suba até 6 metros [20 feet]. Se a área incluir uma margem, a inundação ira transbordar para a terra seca. Se você escolher uma área em um extenso corpo de água, ao invés disso, você cria uma onda com 6 metros de altura [20-foot-tall] que irá de um lado ao outro da área e então desaba. Qualquer veículo Enorme ou menor no caminho da onda será carregado por ela até o outro lado. Qualquer veículo Enorme ou menor atingido pela onda tem uma chance de 25 por cento de emborcar. O nível da água se mantem elevado até a magia acabar ou você escolher um efeito diferente. Se esse efeito produzir uma onda, a onda se repete no início do seu próximo turno enquanto o efeito de inundação durar. Dividir Água. Você faz com que a água na área se divida e crie uma trincheira. A trincheira se estende por toda área da magia e a água separada forma uma parede de cada lado. A trincheira permanece até a magia acabar ou você escolher um efeito diferente. A água, então, lentamente preenche a trincheira ao longo do curso da próxima rodada até o nível normal da água ser restaurado. Redirecionar Fluxo. Você faz com que o fluxo da água na área se mova na direção que você escolher, mesmo que a água tenha que fluir através de obstáculos, subir muros ou em outra direção improvável. A água na área se move na direção ordenada, mas uma vez que tenha se movido além da área da magia, ela conclui seu fluxo baseado nas condições do terreno. A água continua a se mover na direção que você escolheu até a magia acabar ou você escolher um efeito diferente. Redemoinho. Esse efeito requer um corpo de água de, pelo menos, 15 metros [50 feet] quadrados [50 feet square] e 7,5 metros [25 feet] de profundidade. Você faz com que um redemoinho se forme no centro da área. O redemoinho forma um vórtice com 1,5 metro [5 feet] de largura na base, chegando a 15 metros [50 feet] [50 feet] de largura no topo e 7,5 metros [25 feet] de altura. Qualquer criatura ou objeto na água a até 7,5 metros [25 feet] do vórtice é puxado 3 metros [10 feet] na direção dele. Uma criatura pode tentar nadar para longe do vórtice com um teste de Força (Atletismo) contra a CD da magia. Quando uma criatura entrar no vórtice pela primeira vez no turno dela ou começar seu turno dentro dele, ela deve realizar um teste de resistência de Força. Se falhar, a criatura sofre 2d8 de dano de concussão e estará presa no vórtice até a magia acabar. Se passar na resistência, a criatura sofre metade do dano e não estará presa no vórtice. Uma criatura presa no vórtice pode usar sua ação para tentar nadar para fora do vórtice como descrito acima, mas terá desvantagem no teste de Força (Atletismo) para fazer isso. A primeira vez a cada turno que um objeto entrar no vórtice, o objeto sofre 2d8 de dano de concussão; esse dano se repete a cada rodada que ele permanecer no vórtice.",
    "classes": [
      "Clérigo",
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "dominar-besta",
    "name": "Dominar Besta",
    "level": 4,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você tenta seduzir uma besta que você possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ela, ela terá vantagem no teste de resistência. Enquanto a besta estiver enfeitiçada, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como “Ataque aquela criatura”, “Corra até ali”, ou “Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder. Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também. Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível, a duração será concentração, até 10 minutos. Quando você usar um espaço de magia de 6° nível, a duração será concentração, até 1 hora. Quando você usar um espaço de magia de 7° nível, a duração será concentração, até 8 horas.",
    "classes": [
      "Druida",
      "Feiticeiro"
    ]
  },
  {
    "id": "escudo-de-fogo",
    "name": "Escudo De Fogo",
    "level": 4,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de fósforo ou um vaga-lume"
    },
    "description": "Finas e discretas chamas rodeiam seu corpo pela duração, emitindo luz plena em 3 metros de raio [10-foot radius] e penumbra por mais 3 metros [10 feet] adicionais. Você pode terminar a magia prematuramente usando sua ação para dissipa-la. As chamas lhe conferem um escudo quente ou um escudo frio, à sua escolha. O escudo quente lhe garante resistência a dano de frio e o escudo frio lhe concede resistência a dano de fogo. Além disso, sempre que uma criatura a 1,5 metro [5 feet] de você atingir você com um ataque corpo-a-corpo, o escudo expele chamas. O atacante sofre 2d8 de dano de fogo do escudo quente ou 2d8 de dano de frio do escudo frio.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "esfera-resiliente",
    "name": "Esfera Resiliente",
    "level": 4,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma peça hemisférica de cristal transparente e uma peça hemisférica que combine de goma arábica"
    },
    "description": "Uma esfera de energia brilhante engloba uma criatura ou objeto de tamanho Grande ou menor, dentro do alcance. Uma criatura involuntária deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura estará enclausurada pela duração. Nada – nem objetos físicos, energia ou outros efeitos mágicos – pode passar através da barreira, para dentro ou para fora, apesar da criatura na esfera poder respirar lá dentro. A esfera é imune a todos os danos e a criatura ou objeto dentro não pode sofrer dano de ataques ou efeitos originados de fora, nem a criatura dentro da esfera, pode causar dano a nada fora dela. A esfera não tem peso e é grande o suficiente apenas para conter a criatura ou objeto dentro. Uma criatura enclausurada pode usar sua ação para empurrar a parede da esfera e, assim, rolar a esfera a metade do deslocamento da criatura. Similarmente, o globo pode ser erguido e movido por outras criaturas. A magia desintegrar lançada no globo o destruirá sem causar ferimentos a nada dentro dele.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "fabricar",
    "name": "Fabricar",
    "level": 4,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você converte matéria-prima em produtos do mesmo material. Por exemplo, você pode construir uma ponte de madeira usando um amontoado de árvores, uma corda de um pedaço de cânhamo e roupas usando linho ou lã. Escolha matérias-primas que você possa ver, dentro do alcance. Você pode fabricar um objeto Grande ou menor (contido em 3 metros cúbicos [10-foot cube] ou em oito cubos de 1,5 metro [5 feet] conectados), tendo uma quantidade suficiente de matéria-prima. Se você estiver trabalhando com metal, pedra ou outra substância mineral, no entanto, o objeto fabricado não pode ser maior que Médio (contido em apenas 1,5 metro cúbico [5-foot cube]). A quantidade de objetos feitos por essa magia é proporcional com a quantidade de matéria-prima. Criaturas ou itens mágicos não podem ser criados ou transmutados por essa magia. Você também não pode usá-la para criar itens que, geralmente, requerem um alto grau de perícia, como joalheria, armas, vidros ou armaduras, a não ser que você tenha proficiência com o tipo de ferramenta de artesanato usada para construir tais objetos.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "guardiao-da-fe",
    "name": "Guardião Da Fé",
    "level": 4,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Radiante",
    "currentDamageType": "Radiante",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Um guardião espectral Grande aparece e flutua, pela duração, em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. O guardião ocupa esse espaço e é indistinto, exceto por uma espada reluzente e um escudo brasonado com o símbolo da sua divindade. Qualquer criatura hostil a você que se mover para um espaço a até 3 metros [10 feet] do guardião pela primeira vez em um turno, deve ser bem sucedida num teste de resistência de Destreza. A criatura sofre 20 de dano radiante se falhar na resistência ou metade desse dano se obtiver sucesso. O guardião desaparece após ter causado um total de 60 de dano.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "inseto-gigante",
    "name": "Inseto Gigante",
    "level": 4,
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
    "description": "Você transforma até dez centopeias, três aranhas, cinco vespas ou um escorpião, dentro do alcance, em versões gigantes das suas formas naturais, pela duração. Uma centopeia se torna uma centopeia gigante, uma aranha se torna uma aranha gigante, uma vespa se torna uma vespa gigante e um escorpião se torna um escorpião gigante. Cada criatura obedece aos seus comando verbais e, em combate, elas agem no seu turno a cada rodada. O Mestre possui as estatísticas dessas criaturas e determina suas ações e movimentação. Uma criatura permanece no tamanho gigante pela duração, ou até cair a 0 pontos de vida ou até você usar sua ação para dissipar o efeito nela. O Mestre pode permitir que você escolha alvos diferentes. Por exemplo, se você transformar uma abelha, sua versão gigante poderia ter as mesmas estatísticas da vespa gigante.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "invisibilidade-maior",
    "name": "Invisibilidade Maior",
    "level": 4,
    "school": "Ilusão",
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
    "description": "Você ou uma criatura que você possa tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo estiver vestindo ou carregando fica invisível enquanto estiver de posse do alvo.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "localizar-criatura",
    "name": "Localizar Criatura",
    "level": 4,
    "school": "Adivinhação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de pelo de um cão de caça"
    },
    "description": "Descreva ou nomeie uma criatura que seja familiar a você. Você sente a direção da localização da criatura, contanto que a criatura esteja a até 300 metros de você. Se a criatura se mover, você saberá a direção do movimento dela. A magia pode localizar uma criatura especifica que você conheça ou a criatura mais próxima de um tipo especifico (como um humano ou um unicórnio), desde que você já tenha visto tal criatura de perto – a até 9 metros [30 feet] – pelo menos uma vez. Se a criatura que você descreveu ou nomeou estiver em uma forma diferente, como se estiver sob efeito da magia metamorfose, essa magia não localizará a criatura. Essa magia não pode localizar uma criatura se água corrente de, pelo menos 3 metros [10 feet] de largura, bloquear o caminho direito entre você e a criatura.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Mago",
      "Paladino",
      "Patrulheiro"
    ]
  },
  {
    "id": "malogro",
    "name": "Malogro",
    "level": 4,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Necrótico",
    "currentDamageType": "Necrótico",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Energia necromântica inunda uma criatura à sua escolha que você possa ver dentro do alcance, drenando sua umidade e vitalidade. O alvo deve realizar um teste de resistência de Constituição. O alvo sofre 8d8 de dano necrótico se falhar no teste, ou metade desse dano se obtiver sucesso. Essa magia não surte efeito em mortos-vivos ou construtos. Se você afetar uma criatura do tipo planta ou planta mágica, ela faz seu teste de resistência com desvantagem, e a magia causa o máximo de dano a ela. Se você afetar uma planta não-mágica que não seja uma criatura, como uma árvore ou arbusto, ele não faz um teste de resistência; ela simplesmente seca e morre. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°.",
    "classes": [
      "Bruxo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "metamorfose",
    "name": "Metamorfose",
    "level": 4,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um casulo de lagarta"
    },
    "description": "Essa magia transforma uma criatura que você possa ver, dentro do alcance, em uma nova forma. Uma criatura involuntária deve realizar um teste de resistência de Sabedoria para evitar o efeito. Um metamorfo obtém sucesso automaticamente nesse teste de resistência. A transformação permanece pela duração, ou até o alvo cair a 0 pontos de vida ou morrer. A nova forma pode ser qualquer besta a qual o nível de desafio seja igual ou menor que o do alvo (ou o nível do alvo, se ele não possuir um nível de desafio). As estatísticas de jogo do alvo, incluindo seus valores de habilidades mentais, são substituídas pelas estatísticas da besta escolhida. Ele mantem sua tendência e personalidade. O alvo assume os pontos de vida da sua nova forma. Quando ele reverter a sua forma normal, a criatura retorna à quantidade de pontos de vida que ela tinha antes da transformação. Se ela reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. Essa magia não pode afetar um alvo com 0 pontos de vida. A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar, conjurar magias ou realizar qualquer outra ação que precise de mãos ou de vocalização. O equipamento do alvo mescla-se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.",
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "moldar-rochas",
    "name": "Moldar Rochas",
    "level": 4,
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
      "materialDescription": "barro mole, que deve ser trabalhado aproximadamente com a forma desejada para o objeto de pedra"
    },
    "description": "Você toca um objeto de pedra de tamanho Médio ou menor, ou uma seção de rocha com não mais de 1,5 metro [5 feet] em qualquer dimensão e modela-a em qualquer forma que sirva aos seus propósitos. Então, por exemplo, você poderia modelar uma pedra grande em uma arma, ídolo ou caixão, ou fazer uma pequena passagem através de um muro, contanto que o muro não tenha mais de 1,5 metro [5 feet] de espessura. Você poderia, também, modelar uma porta de pedra ou sua moldura para selar a porta. O objeto que você cria pode ter até duas dobradiças e um trinco, mas detalhes mecânicos mais complexos não são possíveis.",
    "classes": [
      "Clérigo",
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "movimentacao-livre",
    "name": "Movimentação Livre",
    "level": 4,
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
      "materialDescription": "uma fita de couro, enrolada no braço ou apêndice similar"
    },
    "description": "Você toca uma criatura voluntária. Pela duração, os movimentos do alvo não são afetados por terreno difícil e magias e outros efeitos mágicos também não podem reduzir o deslocamento do alvo ou fazer com que o alvo fique paralisado ou impedido. O alvo também pode gastar 1,5 metro [5 feet] de deslocamento para escapar, automaticamente, de impedimentos não-mágicos, como algemas ou o agarrão de uma criatura. Finalmente, estar submerso não impõe penalidades no deslocamento ou ataques do alvo.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "muralha-de-fogo",
    "name": "Muralha De Fogo",
    "level": 4,
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
      "material": true,
      "materialDescription": "um pequeno pedaço de fósforo"
    },
    "description": "Você cria uma muralha de fogo numa superfície sólida dentro do alcance. Você pode fazer uma muralha de até 18 metros [60 feet] de comprimento, 6 metros de altura [20-foot-tall] e 30 centímetros [1 foot] de espessura ou uma muralha anelar de até 6 metros [20 feet] de diâmetro, 6 metros de altura [20-foot-tall] e 30 centímetros [1 foot] de espessura. A muralha é opaca e permanece pela duração. Quando a muralha aparece, cada criatura dentro da área dela deve realizar um teste de resistência de Destreza. Se falhar na resistência, uma criatura sofrerá 5d8 de dano, ou metade desse dano se passar na resistência. Um lado da muralha, escolhido por você no momento da conjuração da magia, causa 5d8 de dano de fogo a cada criatura que terminar o turno dela a até 3 metros [10 feet] desse lado ou dentro da muralha. Uma criatura sofre o mesmo dano quando entra na muralha pela primeira vez num turno ou termina seu turno nela. O outro lado da muralha não causa dano algum. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "olho-arcano",
    "name": "Olho Arcano",
    "level": 4,
    "school": "Adivinhação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um punhado de pelo de morcego"
    },
    "description": "Você cria um olho mágico invisível, dentro do alcance, que flutua no ar pela duração. Você mentalmente recebe informações visuais do olho, que possui visão normal e visão no escuro com alcance de 9 metros [30 feet]. O olho pode ver em todas as direções. Com uma ação, você pode mover o olho até 9 metros [30 feet] em qualquer direção. Não existe limite de quão longe de você o olho pode se mover, mas ele não pode entrar em outro plano de existência. Uma barreira solida bloqueia o movimento do olho, mas o olho pode passar através de aberturas de até 3 centímetros de diâmetro.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "pele-de-pedra",
    "name": "Pele De Pedra",
    "level": 4,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Cortante",
    "currentDamageType": "Cortante",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "pó de diamante"
    },
    "description": "Essa magia transforma a pele de uma criatura voluntária que você tocar em rocha sólida. Até a magia acabar, o alvo tem resistência a dano de concussão, cortante e perfurante não-mágico.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "porta-dimensional",
    "name": "Porta Dimensional",
    "level": 4,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "150 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você se teletransporte da sua posição atual para qualquer local dentro do alcance. Você aparece exatamente no local desejado. Pode ser um lugar que você possa ver, um que você possa visualizar ou um que você possa descrever indicando a distância e direção, como “60 metros [200 feet] diretamente pra baixo” ou “90 metros [300 feet], subindo para noroeste num ângulo de 45 graus”. Você pode levar objetos com você, contanto que o peso deles não exceda o que você pode carregar. Você também pode levar uma criatura voluntária do seu tamanho ou menor, que esteja carregando equipamento até o limite da capacidade de carga dela. A criatura deve estar a 1,5 metro [5 feet] de você quando você conjurar a magia. Se você aparecer em um lugar que já esteja ocupado por um objeto ou uma criatura, você e qualquer criatura viajando com você, sofrem 4d6 de dano de energia cada um e a magia falha em teletransportar vocês.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "protecao-contra-a-morte",
    "name": "Proteção Contra A Morte",
    "level": 4,
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
      "material": false
    },
    "description": "Você toca uma criatura e concede a ela uma certa proteção contra a morte. A primeira vez que o alvo cair a 0 pontos de vida, como resultado de ter sofrido dano, o alvo, ao invés disso, cai a 1 ponto de vida e a magia termina. Se a magia ainda estiver funcionando quando o alvo for afetado por um efeito que poderia mata-lo instantaneamente sem causar dano, o efeito, ao invés disso, não funciona no alvo e a magia termina.",
    "classes": [
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "santuario-particular",
    "name": "Santuário Particular",
    "level": 4,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma folha de chumbo, um pedaço de vidro opaco, um chumaço de algodão ou pano e pó de crisólita"
    },
    "description": "Você deixa uma área, dentro do alcance, magicamente segura. A área é um cubo que pode ser tão pequeno quanto 1,5 metro [5 feet] ou tão grande quanto 30 metros [100 feet] de cada lado. A magia permanece pela duração ou até você usar uma ação para dissipa-la. Quando você conjura essa magia, você decide que tipo de segurança ela fornecerá, escolhendo qualquer ou todas as propriedades a seguir:  Conjurar essa magia no mesmo lugar, a cada dia, por um ano, torna o efeito permanente. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, você pode aumentar o tamanho do cubo em 30 metros [100 feet] de cada lado para cada nível do espaço acima do 4°. Então, você poderia proteger um cubo de até 60 metros [200 feet] de lado usando um espaço de magia de 5° nível.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "tempestade-de-gelo",
    "name": "Tempestade De Gelo",
    "level": 4,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Gelo",
    "currentDamageType": "Gelo",
    "castingTime": "1 Ação",
    "range": "90 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de poeira e algumas gotas de água"
    },
    "description": "Uma rajada de pedras de gelo batem no chão em um cilindro de 6 metros de raio [20-foot radius] por 12 metros de altura [40-foot-high], centrado num ponto dentro do alcance. Cada criatura no cilindro deve realizar um teste de resistência de Destreza. Uma criatura sofre 2d8 de dano de concussão e 4d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso. O granizo torna a área da tempestade em terreno difícil até o final do seu próximo turno. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano de concussão aumenta em 1d8 para cada nível do espaço acima do 4°.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "tentaculos-negros",
    "name": "Tentáculos Negros",
    "level": 4,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "27 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pedaço de tentáculo de um polvo gigante ou lula gigante"
    },
    "description": "Tentáculos negros retorcidos preenchem um quadrado de 6 metros [20-foot square] no chão, que você possa ver dentro do alcance. Pela duração, esses tentáculos transformam o solo na área em terreno difícil. Quando uma criatura adentrar a área afetada pela primeira vez em um turno ou começar o turno dela lá, a criatura deve ser bem sucedida num teste de resistência de Destreza ou sofrerá 3d6 de dano de concussão e estará impedida pelos tentáculos até o fim da magia. Uma criatura que começar seu turno na área e já estiver impedida pelos tentáculos sofre 3d6 de dano de concussão. Uma criatura impedida pelos tentáculos pode usar sua ação para realizar um teste de Força ou Destreza (à escolha dela) contra a CD da sua magia. Se ela obtiver sucesso, ela se libertará.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "terreno-alucinogeno",
    "name": "Terreno Alucinógeno",
    "level": 4,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "90 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma pedra, um galho e um pouco de planta verde"
    },
    "description": "Você faz com que um terreno natural num cubo de 45 metros (150-foot cube) dentro do alcance, pareça, soe e cheire com outro tipo de terreno natural. Portanto, campos abertos ou uma estrada podem ser modificados para se assemelharem a um pântano, colina, fenda ou algum outro tipo de terreno difícil ou intransponível. Uma lagoa pode ser modificada para se parecer com um prado, um precipício com um declive suave ou um barranco pedregoso com uma estrada larga e lisa. Estruturas manufaturadas, equipamentos e criaturas dentro da área não tem suas aparências modificadas. As características táteis do terreno são inalteradas, portanto, as criaturas que adentrarem na área estão susceptíveis de ver através da ilusão. Se a diferença não for obvia ao toque, uma criatura que examine a ilusão cuidadosamente, pode realizar um teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Uma criatura que discernir a ilusão do que ela é, a enxerga como uma imagem vaga sobrepondo o terreno.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Druida",
      "Mago"
    ]
  }
];
