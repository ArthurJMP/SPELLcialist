import { Spell } from '../spell';

export const level5Spells: Spell[] = [
  {
    "id": "ancora-planar",
    "name": "Âncora Planar",
    "level": 5,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Horas",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma joia"
    },
    "description": "Com essa magia, você tenta obrigar um celestial, corruptor, elemental ou fada a servi-lo. A criatura deve estar dentro do alcance durante toda a conjuração da magia. (Tipicamente, a criatura, primeiramente, é invocada dentro de um círculo mágico invertido para mantê-la presa enquanto a magia é conjurada.) Ao completar a conjuração, o alvo deve realizar um teste de resistência de Carisma. Se falhar na resistência, ela é obrigada a servir você pela duração. Se a criatura foi invocada ou criada por outra magia, a duração da magia é estendida para se equiparar a dessa magia. Uma criatura obrigada deve seguir suas instruções da melhor forma que puder. Você poderia comandar a criatura a acompanhar você em uma aventura, a guardar um local ou a enviar uma mensagem. A criatura obedece ao pé da letra suas instruções, mas se a criatura for hostil a você, ela se esforçará para distorcer suas palavras para atingir seus próprios objetivos. Se a criatura atender suas instruções completamente antes da magia acabar, ela viajará até você para relatar esse fato se você estiver no mesmo plano de existência. Se você estiver em um plano de existência diferente, ela retornará para o lugar onde você a contatou e permanecerá lá até a magia acabar. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de nível superior, a duração aumenta para 10 dias com um espaço de 6° nível, para 30 dias com um espaço de 7° nível, para 180 dias com um espaço de 8° nível e para um ano com um espaço de magia de 9° nível.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "animar-objetos",
    "name": "Animar Objetos",
    "level": 5,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Objetos ganham vida ao seu comando. Escolha até dez objetos não-mágicos dentro do alcance, que não estejam sendo vestidos ou carregados. Alvos Médios contam como dois objetos, alvos Grandes contam como quatro objetos e alvos Enormes contam como oito objetos. Você não pode animar um objeto maior que Enorme. Cada alvo se anima e torna-se uma criatura sob seu controle até o final da magia ou até ser reduzido a 0 pontos de vida. Com uma ação bônus, você pode comandar mentalmente qualquer criatura que você criar com essa magia se a criatura estiver a até 150 metros [300 feet] de você (se você controla várias criaturas, você pode comandar qualquer ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui-la até a tarefa estar concluída.  Um objeto animado é um constructo com CA, pontos de vida, ataques, Força e Destreza determinados pelo seu tamanho. Sua Constituição é 10 e sua Inteligência e Sabedoria são 3 e seu Carisma é 1. Seu deslocamento é 9 metros [30 feet]; se o objeto não tiver pernas ou outros apêndices que ele possa usar para locomoção, ao invés, ele terá deslocamento de voo 9 metros [30 feet] e poderá planar. Se o objeto estiver firmemente preso a uma superfície ou objeto maior, como uma corrente presa a uma parede, seu deslocamento será 0. Ele tem percepção às cegas num raio de 9 metros [30-foot radius] e é cego além dessa distância. Quando o objeto animado cair a 0 pontos de vida, ele reverte a sua forma normal de objeto e qualquer dano restante é transferido para sua forma de objeto original. Se você ordenar a um objeto que ataque, ele pode realizar um único ataque corpo-a-corpo contra uma criatura a até 1,5 metro [5 feet] dele. Ele realiza um ataque de pancada com um bônus de ataque e dano de concussão determinado pelo seu tamanho. O Mestre pode definir que um objeto especifico inflige dano cortante ou perfurante, baseado na forma dele. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode animar dois objetos adicionais para cada nível do espaço acima do 5°.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "caminhar-em-arvores",
    "name": "Caminhar Em Árvores",
    "level": 5,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você adquire a habilidade de entrar em uma árvore e se mover de dentro dela para dentro de outra árvore do mesmo tipo a até 150 metros [500 pés]. Ambas as árvores precisam estar vivas e ter pelo menos o mesmo tamanho que você. Você precisa usar 1,5 metros [5 pés] de movimento para entrar em uma árvore. Você instantaneamente sabe a localização de todas as outras árvores do mesmo tipo dentro de 150 metros [500 pés] e, como parte do movimento usado para entrar na árvore, pode ou passa para uma destas árvores ou pisar para fora da árvore em que você está. Você aparece em um ponto a sua escolha dentro de 1,5 metros [5 pés] da árvore de destino, usando outros 1,5 metros [5 pés] de movimento. Se você não tiver nenhum movimento sobrando, você aparece dentro de 1,5 metros [5 pés] da árvore em que você entrou. Você pode usar esse habilidade de transporte uma vez por rodada pela duração. Você deve terminar cada turno fora da árvore.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "circulo-de-teletransporte",
    "name": "Círculo De Teletransporte",
    "level": 5,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "3 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": true,
      "materialDescription": "giz e tintas raros infundidos com pedras preciosas"
    },
    "description": "À medida que você conjura essa magia, você desenha um círculo de 3 metros [10 feet] de diâmetro no chão, inscrevendo selos que conectam sua localização a um círculo de teletransporte permanente, à sua escolha, cuja sequência de selos você conheça e esteja no mesmo plano de existência que você. Um portal cintilante se abre dentro do círculo que você desenhou e permanece aberto até o final do seu próximo turno. Qualquer criatura que entrar no portal, instantaneamente, aparecerá a 1,5 metro [5 feet] do círculo de destino ou no espaço desocupado mais próximo, se o espaço estiver ocupado. Muitos templos principais, guildas e outros locais importantes possuem círculos de teletransporte permanentes inscritos em algum lugar dos seus confins. Cada círculo desse inclui uma sequência única de selos – uma sequência de runas mágicas dispostas em um padrão específico. Quando você adquire a capacidade de conjurar essa magia pela primeira vez, você aprende a sequência de selos de dois destinos no Plano Material, determinadas pelo Mestre. Você pode aprender sequências de selos adicionais durante suas aventuras. Você pode consignar uma nova sequência de selos a memória após estuda-la por 1 minuto. Você pode criar um círculo de teletransporte permanente ao conjurar essa magia no mesmo local a cada dia por um ano. Você não precisa usar o círculo para se teletransportar quando você conjurar a magia desse modo.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "coluna-de-chamas",
    "name": "Coluna De Chamas",
    "level": 5,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma pitada de enxofre"
    },
    "description": "Uma coluna vertical de fogo divino emerge de baixo para os céus, no local que você especificar. Cada criatura num cilindro de 3 metros de raio [10-foot radius] por 12 metros de altura [40-foot-high], centrado num ponto dentro do alcance, deve realizar um teste de resistência de Destreza. Uma criatura sofre 4d6 de dano de fogo e 4d6 de dano radiante se falhar na resistência, ou metade desse dano se obtiver sucesso. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano de fogo ou o dano radiante (à sua escolha) aumenta em 1d6 por nível do espaço acima do 5°.",
    "classes": [
      "Clérigo",
    ]
  },
  {
    "id": "comunhao",
    "name": "Comunhão",
    "level": 5,
    "school": "Adivinhação",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "incenso e um frasco de água benta ou profana"
    },
    "description": "Você contata sua divindade ou um representante divino e faz até três perguntas que podem ser respondidas com um sim ou não. Você deve fazer suas perguntas antes da magia terminar. Você recebe uma resposta correta para cada pergunta. Seres divinos não são necessariamente oniscientes, portanto, você pode receber “incerto” como uma resposta se uma pergunta que diga respeito a uma informação além do conhecimento da divindade. Em caso de uma resposta de única palavra puder levar ao engano ou contrariar os interesses da divindade, o Mestre pode oferecer uma frase curta como resposta, no lugar. Se você conjurar essa magia duas ou mais vezes antes de terminar um descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "comunhao-com-a-natureza",
    "name": "Comunhão Com A Natureza",
    "level": 5,
    "school": "Adivinhação",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você, momentaneamente, se torna uno com a natureza e ganha conhecimento do território ao seu redor. Ao ar livre, a magia lhe oferece conhecimento do terreno a até 4,5 quilômetros [3 miles] de você. Em cavernas e outros formações subterrâneas naturais, o raio é limitado a 150 metros [300 feet]. A magia não funciona onde a natureza foi substituída por construções, como em masmorras ou cidades. Você, instantaneamente, adquire conhecimento de até três fatos, à sua escolha, sobre qualquer dos assuntos a seguir, relacionados a área:  Por exemplo, você poderia determinar a localização de um morto-vivo poderoso na área, a localização da maior fonte de água potável e a localização de quaisquer cidades próximas.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "cone-de-frio",
    "name": "Cone De Frio",
    "level": 5,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Cone a partir de você",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pequeno cristal ou cone de vidro"
    },
    "description": "Uma explosão de ar frio irrompe de suas mãos. Cada criatura em um cone de 18 metros [60 pés] deve fazer um teste de resistência da Constituição. Uma criatura recebe 8d8 de dano de frio em um teste falhado, ou metade do dano em um bem sucedido. Uma criatura morta por essa magia se torna uma estátua congelada até derreter. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 5°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "conhecimento-lendario",
    "name": "Conhecimento Lendário",
    "level": 5,
    "school": "Adivinhação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "incenso, quatro tiras de marfim"
    },
    "description": "Nomeie ou descreva uma pessoa, lugar ou objeto. A magia traz à sua mente um breve resumo do conhecimento significativo sobre a coisa que você nomeou. O conhecimento pode consistir de contos atuais, histórias esquecidas, ou até conhecimentos secretos que nunca foram amplamente conhecidos. Se a coisa que você nomeou não é de importância lendária, você não recebe nenhuma informação. Quanto mais informação você já tem sobre a coisa, mais precisa e detalhada é a informação recebida. As informações que você aprende são precisas, mas podem ser apresentadas em linguagem figurada. Por exemplo, se você tem um machado mágico misterioso em mãos, a magia pode oferecer a informação: \"Ai do malfeitor cuja mão toca o machado, pois até o punho corta a mão dos malignos. Somente um verdadeiro Filho de Pedra, amante e amado de Moradin, pode despertar os verdadeiros poderes do machado, e somente com a palavra sagrada Rudnogg nos lábios.\"",
    "classes": [
      "Bardo",
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "conjurar-elemental",
    "name": "Conjurar Elemental",
    "level": 5,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Minutos",
    "range": "27 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um incenso aceso para ar, argila macia para terra, enxofre e fósforo para fogo, ou água e areia para água"
    },
    "description": "Você invoca um servo elemental. Escolha uma área de ar, água, fogo ou terra que preencha 3 metros cúbicos [10-foot cube] dentro do alcance. Um elemental de nível de desafio 5 ou inferior, adequado a área que você escolheu, aparece em um espaço desocupado a até 3 metros [10 feet] dela. Por exemplo, um elemental do fogo emerge de uma fogueira e um elemental da terra erguer-se-ia do solo. O elemental desaparece quando cair a 0 pontos de vida ou quando a magia acabar. O elemental é amigável a você e a seus companheiros pela duração. Role a iniciativa para o elemental, que age no seu próprio turno. Ele obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a ele, ele se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação. Se sua concentração for interrompida, o elemental não desaparece. Ao invés disso, você perde o controle sobre o elemental e ele se torna hostil a você e aos seus companheiros, e os pode atacar. Um elemental fora de controle não pode ser dispensado e desaparece 1 hora depois de você ter o invocado. O mestre tem as estatísticas do elemental. Em Leveis Superiores. Quando você conjura esta magia usando um espaço de magia de 6° nível ou superior, o nível de desafio aumenta em 1 para cada nível do slot acima do 5°.",
    "classes": [
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "consagrar",
    "name": "Consagrar",
    "level": 5,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Cortante",
    "currentDamageType": "Cortante",
    "castingTime": "1 Horas",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "ervas, óleos e incenso"
    },
    "description": "Você toca um ponto e infunde uma área ao redor com poder sagrado (ou profano). A área pode ter até 18 metros [60 feet] de raio e a magia falha se o raio incluir uma área já sob efeito da magia consagrar. A área afetada está sujeita aos seguintes efeitos. Primeiro, celestiais, corruptores, elementais, fadas e mortos-vivos não conseguem entrar na área, nem, tais criaturas, podem enfeitiçar, amedrontar ou possuir criaturas dentro da área. Qualquer criatura enfeitiçada, amedrontada ou possuída por uma criatura dessas, não estará mais enfeitiçada, amedrontada ou possuída ao adentrar a área. Você pode excluir um ou mais desses tipos de criaturas desse efeito. Segundo, você pode vincular um efeito extra a área. Escolha o efeito da lista a seguir, ou escolha um efeito oferecido pelo Mestre. Alguns desses efeitos se aplicam a criaturas na área; você pode definir seu o efeito se aplica a todas as criaturas, criaturas que seguem uma divindade ou líder especifico ou criaturas de uma espécie especifica, como orcs ou trolls. Quando uma criatura que seria afetada entrar na área da magia pela primeira vez em um turno, ou começar seu turno nela, ela pode fazer um teste de resistência de Carisma. Se obtiver sucesso, a criatura ignora o efeito extra até sair da área. Coragem. As criaturas afetadas não podem ser amedrontadas enquanto estiverem na área. Descanso Eterno. Cadáveres enterrados na área não podem ser transformados em mortos-vivos. Escuridão. Escuridão preenche a área. Luz normal, assim como luz mágica criada por magias de nível inferior ao nível do espaço usado para conjurar essa magia, não podem iluminar a área. Idiomas. As criaturas afetadas podem se comunicar com qualquer outra criatura na área, mesmo que elas não partilhem um idioma em comum. Interferência Extradimensional. As criaturas afetadas não podem se mover ou viajar usando teletransporte ou por meios extradimensionais ou interplanares. Luz do Dia. Luz plena preenche a área. Escuridão mágica criada por magias de nível inferior ao nível do espaço usado para conjurar essa magia, não podem extinguir a luz. Medo. As criaturas afetadas ficam amedrontadas enquanto estiverem na área. Proteção contra Energia. As criaturas afetadas na área tem resistência a um tipo de dano, à sua escolha, exceto de concussão, cortante ou perfurante. Silêncio. Nenhum som pode ser emitido de dentro da área e nenhum som pode adentra-la. Vulnerabilidade à Energia. As criaturas afetadas na área tem vulnerabilidade a um tipo de dano, à sua escolha, exceto de concussão, cortante ou perfurante.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "contato-extraplanar",
    "name": "Contato Extraplanar",
    "level": 5,
    "school": "Adivinhação",
    "isRitual": true,
    "originalDamageType": "Psíquico",
    "currentDamageType": "Psíquico",
    "castingTime": "1 Minutos",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você contata mentalmente um semideus, o espírito de um sábio morto há muito tempo ou alguma outra entidade misteriosa de outro plano. Contatar esse extraplanar inteligente pode distorcer ou até mesmo arruinar com sua mente. Quando você conjurar essa magia, faça um teste de resistência de Inteligência CD 15. Se falhar, você sofre 6d6 de dano psíquico e fica insano até terminar um descanso longo. Enquanto estiver insano, você não pode realizar ações, não entende o que as outras criaturas dizem, não pode ler e fala apenas coisas sem sentido. Conjurar a magia restauração maior em você acaba com esse efeito. Se obtiver sucesso no teste de resistência, você pode fazer até cinco perguntas à entidade. Você deve fazer suas perguntas antes da magia acabar. O Mestre responde cada pergunta com uma única palavra, como “sim”, “não”, “talvez”, “nunca”, “irrelevante” ou “incerto” (se a entidade não souber a resposta para a pergunta). Em caso de uma resposta de única palavra puder levar ao engano, o Mestre pode, ao invés disso, oferecer uma frase curta como resposta.",
    "classes": [
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "criacao",
    "name": "Criação",
    "level": 5,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "9 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pequeno pedaço de material do mesmo tipo do item que você planeja criar"
    },
    "description": "Você puxa fragmentos de material sombrio do Shadowfell para criar um objeto inanimado de matéria vegetal dentro do alcance: produtos macios, corda, madeira ou algo semelhante. Você também pode usar este feitiço para criar objetos minerais como pedra, cristal ou metal. O objeto criado não deve ser maior do que um cubo de 1,5 metros [5 feet cube], e o objeto deve ter a forma e o material que você já viu. A duração depende do material do objeto. Se o objeto for composto por diversos materiais, use o de menor duração.  Usar qualquer material criado por essa magia como componente material de outra magia faz com que a magia falhe. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o tamanho do cubo aumenta em 1,5 metro [5 feet] para cada nível do espaço de magia acima do 5°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "criar-passagem",
    "name": "Criar Passagem",
    "level": 5,
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
      "material": true,
      "materialDescription": "algumas sementes de gergelim"
    },
    "description": "Uma passagem aparece em um ponto, à sua escolha, que você possa ver em uma superfície de madeira, gesso ou rocha (como um muro, um teto ou um piso) dentro do alcance e permanece pela duração. Você escolhe as dimensões da passagem: até 1,5 metro [5 feet] de largura, 2,10 metros [8 feet] de altura e 6 metros [20 feet] de profundidade. A passagem não provoca instabilidade na estrutura ao seu redor. Quando a abertura desaparecer, qualquer criatura ou objeto que ainda estiver dentro da passagem criada pela magia é ejetada em segurança para o espaço desocupado mais próximo da superfície onde a magia foi conjurada.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "cupula-antivida",
    "name": "Cúpula Antivida",
    "level": 5,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma barreira cintilante se estende de você até 3 metros de raio [10-foot radius], e se move com você, permanecendo centrada em você e restringindo criaturas diferentes de mortos-vivos e constructos. A barreira mantem-se pela duração. A barreira previna uma criatura afetada de atravessa-la ou alcançar através dela. Uma criatura afetada pode conjurar magias ou realizar ataques à distância ou ataques com armas de haste através da barreira. Se você se mover forçando uma criatura afetada a atravessar a barreira, a magia termina.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "curar-ferimentos-em-massa",
    "name": "Curar Ferimentos Em Massa",
    "level": 5,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma onda de energia curativa emerge de um ponto, à sua escolha, dentro do alcance. Escolha até seis criaturas numa esfera de 9 metros de raio [30-foot radius], centrada nesse ponto. Cada alvo recupera uma quantidade de pontos de vida igual a 3d8 + seu modificador de habilidade de conjuração. A magia não afeta mortos-vivos ou constructos. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 5°.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "despertar",
    "name": "Despertar",
    "level": 5,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Horas",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma ágata"
    },
    "description": "Depois de gastar o tempo de conjuração traçando runas mágicas com uma gema preciosa, você toca uma besta ou planta Enorme ou menor. O alvo deve ter ou um valor de Inteligência nulo, ou Inteligência 3 ou menor. O alvo ganha Inteligência 10. O alvo também ganha a capacidade de falar um idioma que você conheça. Se o alvo for uma planta, ela ganha a habilidade de mover seus membros, raízes, vinhas, trepadeiras e assim por diante, e ganha sentidos similares ao de um humano. Seu Mestre escolhe as estatísticas apropriadas para o arbusto desperto ou árvore desperta. A besta ou planta desperta estará enfeitiçada por você por 30 dias ou até você ou seus companheiros fazerem qualquer coisa nociva contra ela. Quando a condição enfeitiçado terminar, a criatura desperta pode escolher permanecer amigável a você, baseado em como ela foi tratada enquanto estava enfeitiçada.",
    "classes": [
      "Bardo",
      "Druida"
    ]
  },
  {
    "id": "despistar",
    "name": "Despistar",
    "level": 5,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": false
    },
    "description": "Você fica invisível ao mesmo tempo que uma cópia ilusória sua aparece onde você estava. A cópia permanece pela duração, mas a invisibilidade acaba se você atacar ou conjurar uma magia. Você pode usar sua ação para mover a cópia ilusória até o dobro do seu deslocamento e fazê-la gesticular, falar e se comportar da forma que você quiser. Você pode ver através dos olhos e ouvir através dos ouvidos da cópia como se você estivesse localizado onde ela está. Em cada um dos seus turnos, com uma ação bônus, você pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto você está usando os sentidos dela, você fica cego e surdo ao que está a sua volta.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "dissipar-o-bem-e-mal",
    "name": "Dissipar O Bem E Mal",
    "level": 5,
    "school": "Abjuração",
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
      "materialDescription": "água benta ou pó de prata e ferro"
    },
    "description": "Energia cintilante envolve e protege você de fadas, mortos-vivos e criaturas originarias além do Plano Material. Pela duração, celestiais, corruptores, elementais, fadas e mortos-vivos tem desvantagem nas jogadas de ataque contra você. Você pode terminar a magia prematuramente usando uma das funções especiais a seguir. Cancelar Encantamento. Com sua ação, você toca uma criatura que você possa alcançar que esteja enfeitiçada, amedrontada ou possuída por um celestial, corruptor, elemental, fada ou morto-vivo. A criatura tocada não estará mais enfeitiçada, amedrontada ou possuída por tais criaturas. Demissão. Com sua ação, faça um ataque corpo-a-corpo com magia contra um celestial, corruptor, elemental, fada ou morto-vivo que você possa alcançar. Se atingir, você pode tentar guiar a criatura de volta ao seu plano natal. A criatura deve ser bem sucedida num teste de resistência de Carisma ou será enviada de volta ao seu plano natal (se já não for aqui). Se elas não estiverem em seus planos de origem, mortos-vivos serão enviados para Umbra e fadas serão enviadas para Faéria.",
    "classes": [
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "dominar-pessoa",
    "name": "Dominar Pessoa",
    "level": 5,
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
    "description": "Você tenta seduzir um humanoide que você possa ver dentro do alcance. Ele deve ser bem sucedido num teste de resistência de Sabedoria ou ficará enfeitiçado por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ele, ele terá vantagem no teste de resistência. Enquanto o alvo estiver enfeitiçado, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como “Ataque aquela criatura”, “Corra até ali”, ou “Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder. Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também. Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível, a duração será concentração, até 10 minutos. Quando você usar um espaço de magia de 7° nível, a duração será concentração, até 1 hora. Quando você usar um espaço de magia de 8° nível, a duração será concentração, até 8 horas.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "imobilizar-monstro",
    "name": "Imobilizar Monstro",
    "level": 5,
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
      "materialDescription": "uma pequena peça de ferro reta"
    },
    "description": "Escolha uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou ficará paralisado pela duração. Essa magia não tem efeito em mortos-vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina no alvo. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode afetar uma criatura adicional para cada nível de magia acima do 5°. As criaturas devem estar a 9 metros [30 feet] entre si para serem afetadas.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "ligacao-telepatica",
    "name": "Ligação Telepática",
    "level": 5,
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
      "materialDescription": "pedaços de cascas de ovos de dois tipos diferentes de criatura"
    },
    "description": "Você forja uma ligação telepática entre até oito criaturas voluntárias, à sua escolha, dentro do alcance, ligando psiquicamente cada criatura a todas as outras, pela duração. Criaturas com valores de Inteligência 2 ou menos não são afetadas por essa magia. Até a magia acabar, os alvos podem se comunicar telepaticamente através do elo, independentemente de terem ou não um idioma em comum. A comunicação é possível a qualquer distância, apesar de não se estender a outros planos de existência.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "loquacidade",
    "name": "Loquacidade",
    "level": 5,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Até o fim da magia, quando você realizar um teste de Carisma, você pode substituir o número rolado por você por um 15. Além disso, não importa o que você diga, magias que determinam se você está dizendo a verdade indicarão que você está sendo sincero.",
    "classes": [
      "Bardo",
      "Bruxo"
    ]
  },
  {
    "id": "mao-arcana",
    "name": "Mão Arcana",
    "level": 5,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma casca de ovo e uma luva de couro de cobra"
    },
    "description": "Você cria uma mão Grande de energia cintilante e translucida em um espaço desocupado que você possa ver dentro do alcance. A mão permanece pela duração da magia e ela se move ao seu comando, imitando os movimentos da sua própria mão. A mão é um objeto com CA 20 e pontos de vida igual ao seu máximo de pontos de vida. Se ela cair a 0 pontos de vida, a magia termina. Ela tem Força 26 (+8) e Destreza 10 (+0). A mão não preenche o espaço dela. Quando você conjura essa magia você pode, com uma ação bônus, nos seus turnos subsequentes, mover a mão até 18 metros [60 feet] e então causar um dos seguintes efeitos com ela. Mão Esmagadora. A mão tenta agarrar uma criatura Enorme ou menor a 1,5 metro [5 feet] dela. Você usa o valor de Força da mão para determinar o agarrão. Se o alvo for Médio ou menor, você terá vantagem no teste. Enquanto a mão estiver agarrando o alvo, você pode usar uma ação bônus para fazer a mão esmaga-lo. Quando o fizer, o alvo sofre dano de concussão igual a 2d6 + seu modificador de habilidade de conjuração. Mão Interposta. A mão se interpõe entre você e uma criatura a sua escolha até você lhe dar um comando diferente. A mão se move para ficar entre você e o alvo, concedendo a você meia-cobertura contra o alvo. O alvo não pode se mover através do espaço da mão se o valor de Força dele for menor ou igual ao valor de Força da mão. Se o valor de Força dele for maior que o valor de Força da mão, o alvo pode se mover até você através do espaço da mão, mas aquele espaço será considerado terreno difícil para o alvo. Mão Poderosa. A mão tenta empurrar uma criatura a 1,5 metro [5 feet] dela em uma direção a sua escolha. Realize um teste com a Força da mão, resistido por um teste de Força (Atletismo) do alvo. Se o alvo for Médio ou menor, você tem vantagem no teste. Se você for bem sucedido, a mão empurra o alvo até 1,5 metro [5 feet] mais uma quantidade de metros igual ao modificador da sua habilidade de conjuração multiplicado por 1,5. A mão se move com o alvo, permanecendo a 1,5 metro [5 feet] dele. Punho Cerrado. A mão golpeia uma criatura ou objeto a 1,5 metro [5 feet] dela. Realize uma jogada de ataque corpo-a-corpo com magia para a mão usando suas estatísticas de jogo. Se atingir, o alvo sofre 4d8 de dano de energia. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano da opção punho cerrado aumenta em 2d8 e o dano da mão esmagadora aumenta em 2d6 para cada nível do espaço acima do 5°.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "missao",
    "name": "Missão",
    "level": 5,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "Psíquico",
    "currentDamageType": "Psíquico",
    "castingTime": "1 Minutos",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você impõe um comando mágico a uma criatura que você possa ver, dentro do alcance, forçando-a a fazer algum serviço ou reprimindo-a por alguma ação ou curso de atividade, como você decidir. Se a criatura puder compreender você, ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Enquanto a criatura estiver enfeitiçada por você, ela sofrerá 5d6 de dano psíquico toda vez que ela agir de maneira diretamente contrária às suas instruções, mas não mais de uma vez por dia. Uma criatura que não puder compreender você não é afetada por essa magia. Você pode emitir qualquer comando que escolher, exceto uma atividade que resulte em morte certa. Se você emitir um comando suicida, a magia termina. Você pode terminar a magia prematuramente usando uma ação para dissipa-la. As magias remover maldição, restauração maior ou desejo também podem terminá-la. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° ou 8° nível, a duração será 1 ano. Quando você conjurar essa magia usando um espaço de magia de 9° nível, a magia dura até ser terminada por uma das magias mencionadas acima.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Mago",
      "Paladino"
    ]
  },
  {
    "id": "modificar-memoria",
    "name": "Modificar Memória",
    "level": 5,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "Ácido",
    "currentDamageType": "Ácido",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você tenta modelar as memórias de outra criatura. Uma criatura que você possa ver, deve realizar um teste de resistência de Sabedoria. Se você estiver lutando com a criatura, ela terá vantagem no teste de resistência. Se falhar na resistência, o alvo fica enfeitiçado por você pela duração. O alvo enfeitiçado está incapacitado e não sabe o que está acontecendo seu redor, apesar de ainda poder ouvir você. Se ele sofrer qualquer dano ou for alvo de outra magia, essa magia acaba, e nenhuma das memórias do alvo é modificada. Enquanto esse feitiço durar, você pode afetar a memória sobre um evento que o alvo participou nas últimas 24 horas e que não tenha durado mais de 10 minutos. Você pode, permanentemente, eliminar todas as memórias desse evento, permitir que o alvo relembre do evento com perfeita clareza e riqueza de detalhes, mudar sua memória sobre os detalhes do evento ou criar uma memória de outro evento qualquer. Você deve falar ao alvo para descrever como sua memória é afetada e ele deve ser capaz de compreender seu idioma para que as memórias modificadas se enraízem. A mente dele preenche qualquer lacuna nos detalhes da sua descrição. Se a magia terminar antes de você ter finalizado a descrição das memórias modificadas, a memória da criatura não será alterada. Do contrário, as memórias modificadas tomam lugar quando a magia acabar. Uma memória modificada não afeta, necessariamente, como uma criatura se comporta, particularmente se a memória contradiz as inclinações, tendência ou crenças naturais da criatura. Uma modificação ilógica na memória, como implantar uma memória de como a criatura gosta de se encharcar de ácido, é repudiada, talvez como um sonho ruim. O Mestre pode considerar uma modificação na memória muito absurda para afetar uma criatura de uma forma significativa. Uma magia remover maldição ou restauração maior, conjurada no alvo, restaura a verdadeira memória da criatura. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode alterar a memória do alvo de um evento que aconteceu a até 7 dias atrás (6° nível), 30 dias atrás (7° nível), 1 ano atrás (8° nível) ou em qualquer momento do passado da criatura (9° nível).",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "muralha-de-energia",
    "name": "Muralha De Energia",
    "level": 5,
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
      "materialDescription": "um pouco de pó feito de uma gema transparente esmagada"
    },
    "description": "Uma muralha invisível de energia aparece do nada em um ponto à sua escolha dentro do alcance. A muralha aparece em qualquer orientação que você escolher, como uma barreira horizontal ou vertical ou em uma angulação. Ela pode estar flutuando no ar ou apoiada em uma superfície sólida. Você pode formá-la em uma cúpula hemisférica ou uma esfera com um raio de até 3 metros [10 feet], ou você pode moldar uma superfície plana composta de dez painéis de 3 metros por 3 metros [10-foot-by-10-foot]. Cada painel deve ser contíguo com outro painel. Em qualquer formato, a muralha terá 0,6 centímetros [1/4 inch] de espessura. Ela permanece pela duração. Se a muralha passar pelo espaço ocupado por uma criatura, quando ela surgir, a criatura será empurrada para um dos lados da muralha (você escolhe qual lado). Nada pode passar fisicamente através da muralha. Ela é imune a todos os danos e não pode ser dissipada por dissipar magia. A magia desintegrar destrói a muralha instantaneamente, no entanto. A muralha também se estende ao Plano Etéreo, bloqueando a viagem etérea através dela.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "muralha-de-pedra",
    "name": "Muralha De Pedra",
    "level": 5,
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
      "materialDescription": "um pequeno bloco de granito"
    },
    "description": "Uma muralha não-mágica de rocha sólida surge do nada num ponto, à sua escolha, dentro do alcance. A muralha tem 15 centímetros [6 inches] de espessura e é composta por dez painéis de 3 metros [10 feet] por 3 metros [10 feet]. Cada painel deve ser contíguo com, pelo menos, outro painel. Alternativamente, você pode criar painéis de 3 metros [10 feet] por 6 metros [20 feet] com apenas 7,5 centímetros [3 inches] de espessura. Se a muralha passar pelo espaço ocupado por uma criatura quando ela surgir, a criatura será empurrada para um dos lados da muralha (você escolhe qual lado). Se a criatura fosse ser rodeada por todos os lados da muralha (ou pela muralha e outra superfície sólida), a criatura pode realizar um teste de resistência de Destreza. Se obtiver sucesso, ela pode usar sua reação para se mover até seu deslocamento, assim não ficando mais cercada pela muralha. A muralha pode ter qualquer formato que você desejar, no entanto, ela não pode ocupar o mesmo espaço de uma criatura ou objeto. A muralha não precisa ser vertical ou se apoiar em qualquer fundação estável. Ela deve, no entanto, se fundir e estar solidamente suportada por rocha existente. Então, você pode usar essa magia para criar uma ponte sobre um abismo ou criar uma rampa. Se você criar um vão com mais de 6 metros [20 feet] de comprimento, você deve reduzir o tamanho de cada painel à metade para criar suportes. Você pode moldar grosseiramente a parede para criar merlões, ameias e assim por diante. A muralha é um objeto feito de pedra que pode ser danificado e então, partido. Cada painel tem CA 15 e 30 pontos de vida para cada 2,5 centímetros [1 inch] de espessura. Reduzir os pontos de vida de um painel a 0, o destruirá e pode fazer painéis conectados desmoronarem, à critério do Mestre. Se você mantiver sua concentração nessa magia por toda a duração, a muralha se tornará permanente e não poderá ser dissipada. Do contrário, a muralha desaparece quando a magia acabar.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "nevoa-mortal",
    "name": "Névoa Mortal",
    "level": 5,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você cria uma esfera de nevoeiro venenoso de cor amarelo-esverdeado, com 6 metros de raio [20-foot radius], centrado em um ponto, à sua escolha, dentro do alcance. O nevoeiro se espalha, dobrando esquinas. Ele permanece pela duração ou até um vento forte dispersar o nevoeiro, terminando a magia. Sua área é de escuridão densa. Quando uma criatura entra na área da magia pela primeira vez no turno dela ou começa seu turno lá, essa criatura deve realizar um teste de resistência de Constituição. A criatura sofre 5d8 de dano de veneno, ou metade desse dano, se passar no teste. As criaturas serão afetadas mesmo se prenderem a respiração ou não precisarem respirar. O nevoeiro se afasta 3 metros [10 feet] de você no começo de cada um dos seus turnos, deslizando pela superfície do solo. Os vapores são mais pesados que o ar, mantendo-se nos níveis mais baixos do terreno, até mesmo caindo em aberturas. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 5°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "praga",
    "name": "Praga",
    "level": 5,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Seu toque inflige uma doença. Faça um ataque de magia corpo-a-corpo contra uma criatura ao seu alcance. Se atingir, você aflige a criatura com uma doença, de sua escolha, entre qualquer um das descritas abaixo. No final de cada turno do alvo, ele deve realizar um teste de resistência de Constituição. Após obter três falhas nesses testes de resistência, o efeito da doença permanece pela duração e a criatura para de fazer testes de resistência. Após obter três sucessos nesses testes de resistência, a criatura se recupera da doença e a magia termina. Já que essa magia induz uma doença natural no alvo, qualquer efeito que remova uma doença, ou de outra forma, melhore os efeitos de uma doença, se aplica a ela. Ardência Mental. A mente da criatura fica febril. A criatura tem desvantagem em testes de Inteligência, testes de resistência de Inteligência e a criatura age como se estivesse sob efeito da magia confusão durante um combate. Enjoo Cegante. A dor se agarra a mente da criatura e seus olhos ficam branco-leitosos. A criatura tem desvantagem em testes de Sabedoria e testes de resistência de Sabedoria e está cega. Febre do Esgoto. Uma febre voraz se espalha pelo corpo da criatura. A criatura tem desvantagem em testes de Força, testes de resistência de Força e jogadas de ataque que usem Força. Necrose da Carne. A carne da criatura se decompõe. A criatura tem desvantagem em testes de Carisma e vulnerabilidade a todos os danos. Perdição Pegajosa. A criatura começa a sangrar incontrolavelmente. A criatura tem desvantagem em testes de Constituição e testes de resistência de Constituição. Além disso, sempre que a criatura sofrer dano, ela ficará atordoada até o fim do seu próximo turno. Tremedeira. A criatura é acometida por espasmos. A criatura tem desvantagem em testes de Destreza, testes de resistência de Destreza e jogadas de ataque que usem Destreza.",
    "classes": [
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "praga-de-insetos",
    "name": "Praga De Insetos",
    "level": 5,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Perfurante",
    "currentDamageType": "Perfurante",
    "castingTime": "1 Ação",
    "range": "90 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "alguns grãos de açúcar, alguns miolos de grão e uma mancha de gordura"
    },
    "description": "Um enxame voraz de gafanhotos preenche uma esfera de 6 metros de raio [20-foot radius], centrada no ponto que você escolher, dentro do alcance. A esfera se espalha dobrando esquinas. A esfera permanece pela duração e sua área é de escuridão leve. A área da esfera é de terreno difícil. Quando a área aparece, cada criatura dentro dela deve realizar um teste de resistência de Constituição. Uma criatura sofre 4d10 de dano perfurante se falhar na resistência ou metade desse dano se passar. Uma criatura deve, também, realizar um teste de resistência quando entrar na área da magia pela primeira vez num turno ou terminar seu turno nela. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 5°.",
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro"
    ]
  },
  {
    "id": "reencarnacao",
    "name": "Reencarnação",
    "level": 5,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Horas",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "óleos e unguentos raros"
    },
    "description": "Você toca um humanoide morto ou um pedaço de um humanoide morto. Considerando que a criatura não esteja morta a mais de 10 dias, a magia forma um novo corpo adulto para ele e então, chama a alma para entrar no corpo. Se a alma do alvo não estiver livre ou deseje fazê-lo, a magia falha. A magia forma um novo corpo para que a criatura habite, o que, provavelmente, fará com que a raça da criatura mude. O Mestre rola um d100 e consulta a tabela seguinte para determinar qual forma a criatura terá quando voltar a vida, ou o Mestre pode escolher uma forma.  A criatura reencarnada lembra-se da sua vida e experiências anteriores. Ela mantem as capacidades que a sua forma original tinha, exceto por trocar sua raça original pela nova e mudar suas características raciais adequadamente.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "restauracao-maior",
    "name": "Restauração Maior",
    "level": 5,
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
      "materialDescription": "pó de diamante"
    },
    "description": "Você imbui uma criatura que você toca, com energia positiva para desfazer um efeito debilitante. Você pode reduzir a exaustão do alvo em um nível ou remover um dos seguintes do alvo: ",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "reviver-os-mortos",
    "name": "Reviver Os Mortos",
    "level": 5,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Horas",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um diamante"
    },
    "description": "Você traz uma criatura morta que você tocar de volta a vida, considerando que ela não esteja morta a mais de 10 dias. Se a alma da criatura estiver tanto disposta quando livre para juntar-se ao corpo dela, a criatura volta a vida com 1 ponto de vida. Essa magia também neutraliza quaisquer venenos e cura doenças não-mágicas que afetavam a criatura no momento da morte. Essa magia, no entanto, não remove doenças mágicas, maldições ou efeitos similares; se eles não tiverem sido removidos antes da conjuração da magia, eles voltam a afetar a criatura quando ela volta a viver. A magia não pode trazer uma criatura morta-viva de volta à vida. Essa magia fecha todos os ferimentos mortais, mas ela não restaura partes do corpo perdidas. Se a criatura não tiver uma parte do corpo ou órgão fundamental para sua sobrevivência – sua cabeça, por exemplo – a magia falha automaticamente. Voltar dos mortos é um calvário. O alvo sofre –4 de penalidade em todas as suas jogadas de ataque, testes de resistência e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades são reduzidas em 1, até desaparecerem.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "similaridade",
    "name": "Similaridade",
    "level": 5,
    "school": "Ilusão",
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
    "description": "Essa magia permite que você mude a aparência de qualquer quantidade de criaturas que você possa ver, dentro do alcance. Você dá a cada alvo que você escolheu uma nova aparência ilusória. Um alvo involuntário pode realizar um teste de resistência de Carisma, se for bem sucedido, a magia não o afetará. A magia disfarça a aparência física, assim como roupa, armadura, armas e equipamentos. Você pode fazer com que cada criatura pareça 30 centímetros [1 foot] mais baixa ou alta e aparente ser magra, gorda ou entre. Você não pode mudar o tipo do seu corpo, portanto, você deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da sua ilusão cabe a você. A magia permanece pela duração, a menos que você usa sua ação para dissipa-la precocemente. As mudanças criadas por essa magia não conseguem se sustentar perante uma inspeção física. Por exemplo, se você usar essa magia para adicionar um chapéu ao seu visual, objetos que passarem pelo chapéu e qualquer um que tocá-lo não sentirá nada ou sentirá sua cabeça e cabelo. Se você usar essa magia para aparentar ser mais magro do que é, a mão de alguém que a erguer para tocar em você, irá esbarrar em você enquanto ainda está, aparentemente, está no ar. Uma criatura pode usar a ação dela para inspecionar um alvo e fazer um teste de Inteligência (Investigação) contra a CD da sua magia. Se for bem sucedido, ele estará ciente de que o alvo está disfarçado.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "sonho",
    "name": "Sonho",
    "level": 5,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "Psíquico",
    "currentDamageType": "Psíquico",
    "castingTime": "1 Minutos",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um punhado de areia, um pouco de tinta e uma pena de escrita arrancada de um pássaro adormecido"
    },
    "description": "Essa magia molda os sonhos de uma criatura. Escolha uma criatura que você conheça como alvo dessa magia. O alvo deve estar no mesmo plano de existência que você. Criaturas que não dormem, como elfos, não podem ser contatados por essa magia. Você, ou uma criatura voluntária que você tocar, entram em um estado de transe. Enquanto estiver em transe, o mensageiro está ciente dos seus arredores, mas não pode realizar ações ou se mover. Se o alvo estiver dormindo, o mensageiro aparece no sonho do alvo e pode conversar com o alvo enquanto ele estiver dormindo, até o limite da duração da magia. O mensageiro também pode modificar o meio ambiente do sonho, criando paisagens, objetos e outras imagens. O mensageiro pode sair do transe a qualquer momento, terminando o efeito da magia prematuramente. O alvo se lembra do sonho perfeitamente quando acorda. Se o alvo estiver acordado quando a magia for conjurada, o mensageiro saberá disso e pode, tanto terminar o transe (e a magia) quando esperar o alvo cair no sono, no momento em que o mensageiro aparecerá nos sonhos do alvo. Você pode fazer o mensageiro parecer monstruoso e aterrorizante para o alvo. Se o fizer, o mensageiro pode enviar uma mensagem de não mais que dez palavras, então o alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ecos da monstruosidade fantasmagórica criarão um pesadelo que permanecerá pela duração do sono do alvo e impede o alvo de ganhar qualquer benefício do descanso. Além disso, quando o alvo acordar, ele sofrerá 3d6 de dano psíquico. Se você tiver uma parte do corpo, mecha de cabelo, recorte de unha ou porção similar do corpo do alvo, o alvo realiza seu teste de resistência com desvantagem.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "telecinesia",
    "name": "Telecinésia",
    "level": 5,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você adquire a habilidade de mover ou manipular criaturas ou objetos através do pensamento. Quando você conjura a magia e, com sua ação a cada turno, pela duração, você pode exercer sua vontade sobre uma criatura ou objeto que você possa ver, dentro do alcance, causando os efeitos apropriados abaixo. Você pode afetar o mesmo alvo rodada após rodada, ou escolher um novo a qualquer momento. Se você mudar de alvos, o alvo anterior não será mais afetado pela magia. Criatura. Você pode tentar mover uma criatura Enorme ou menor. Faça um teste de habilidade com sua habilidade de conjuração resistido por um teste Força da criatura. Se você vencer a disputa, você move a criatura até 9 metros [30 feet] em qualquer direção, incluindo para cima, mas não além do alcance da magia. Até o final do seu próximo turno, a criatura estará impedida pelo seu agarrão telecinético. Uma criatura erguida para cima estará suspensa no ar. Em rodadas subsequente, você pode usar sua ação para tentar manter seu agarrão telecinético na criatura repetindo o teste resistido. Objeto. Você pode tentar mover um objeto pesando até 500 quilos. Se o objeto não estiver sendo vestido ou carregado, você o move, automaticamente, até 9 metros [30 feet] em qualquer direção, mas não além do alcance dessa magia. Se o objeto estiver sendo vestido ou carregado por uma criatura, você deve realizar um teste de habilidade com sua habilidade de conjuração resistido por um teste de Força da criatura. Se você for bem sucedido, você arranca o objeto da criatura e o move até 9 metros [30 feet], em qualquer direção, mas não além do alcance dessa magia. Você pode exercer um controle refinado sobre os objetos com seu agarrão telecinético, como manipular ferramentas simples, abrir uma porta ou um recipiente, guardar ou recuperar um item de um recipiente aberto ou derramar o conteúdo de um frasco.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "videncia",
    "name": "Vidência",
    "level": 5,
    "school": "Adivinhação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um foco valendo, como uma bola de cristal, espelho de prata ou fonte cheia de água benta,"
    },
    "description": "Você pode ver e ouvir uma criatura em particular à sua escolha que esteja no mesmo plano de existência que você. O alvo deve realizar um teste de resistência de Sabedoria, que é modificador de acordo com o quão bem você conhece o alvo e o tipo de conexão física que você tem com ele. Se um alvo souber que você está conjurando essa magia, ele pode falhar no teste de resistência voluntariamente se ele quiser ser observado.   Com um sucesso na resistência, o alvo não é afetado e você não pode usar essa magia contra ele novamente por 24 horas. Se falhar na resistência, a magia cria um sensor invisível a até 3 metros [10 feet] do alvo. Você pode ver e ouvir através do sensor, como se você estivesse onde ele está. O sensor se move com o alvo, permanecendo a 3 metros [10 feet] dele pela duração. Uma criatura que possa ver objetos invisíveis vê o sensor como um globo luminoso do tamanho de um punho. Ao invés de focar em uma criatura, você pode escolher um local que você já tenha visto antes como alvo dessa magia. Quando fizer isso, o sensor aparece no local e não se move.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Clérigo",
      "Druida",
      "Mago"
    ]
  }
];
