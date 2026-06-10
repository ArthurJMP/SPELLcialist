import { Spell } from '../spell';

export const level3Spells: Spell[] = [
  {
    "id": "ampliar-plantas",
    "name": "Ampliar Plantas",
    "level": 3,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Especial",
    "range": "45 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Essa magia canaliza vitalidade nas plantas dentro de uma área especifica. Existem dois usos possíveis para essa magia, concedendo ou benefícios imediatos ou a longo prazo. Se você conjurar essa magia usando 1 ação, escolha um ponto dentro do alcance. Todas as plantas normais num raio de 30 metros [100-foot radius] centrado no ponto, tornam-se espessas e carregadas. Uma criatura se movendo na área deve gastar 6 metros [20 feet] de movimento para cada 1,5 metro [5 feet] que se mover. Você pode excluir uma ou mais áreas de qualquer tamanho, dentro da área da magia, para não ser afetada. Se você conjurar essa magia ao longo de 8 horas, você fertiliza a terra. Todas as plantas num raio de 800 metros [0,5 mile radius], centrado no ponto dentro do alcance, ficam enriquecidas por 1 ano. As plantas fornecerão o dobro da quantidade normal de comida quando colhidas.",
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "andar-na-agua",
    "name": "Andar Na Água",
    "level": 3,
    "school": "Transmutação",
    "isRitual": true,
    "originalDamageType": "Ácido",
    "currentDamageType": "Ácido",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma rolha"
    },
    "description": "Essa magia concede a habilidade de se mover através de qualquer superfície líquida – como água, ácido, lama, neve, arreia movediça ou lava – como se ela fosse chão sólido inofensivo (as criaturas atravessando lava derretida ainda podem sofrer dano do calor). Até dez criaturas voluntárias que você possa ver, dentro do alcance, ganham essa habilidade pela duração. Se você afetar uma criatura submersa em um líquido, a magia ergue o alvo para a superfície do líquido a uma taxa de 18 metros [60 feet] por rodada.",
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Patrulheiro"
    ]
  },
  {
    "id": "animar-mortos",
    "name": "Animar Mortos",
    "level": 3,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma gota de sangue, um pedaço de carne e uma pitada de pó de osso"
    },
    "description": "Essa magia cria um servo morto-vivo. Escolha uma pilha de ossos ou um corpo de um humanoide Médio ou Pequeno dentro do alcance. Sua magia imbui o alvo com uma imitação corrompida de vida, erguendo-o como uma criatura morta-viva. O alvo se torna um esqueleto, se você escolheu ossos, ou um zumbi, se você escolheu um corpo (o Mestre tem as estatísticas de jogo da criatura). Em cada um dos seus turnos, você pode usar uma ação bônus para comandar mentalmente qualquer criatura que você criou com essa magia, se a criatura estiver a até 18 metros [60 feet] de você (se você controla diversas criaturas, você pode comandar qualquer uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui-la até a tarefa estar concluída. A criatura fica sob seu controle por 24 horas, depois disso ela para de obedecer aos seus comandos. Para manter o controle da criatura por mais 24 horas, você deve conjurar essa magia na criatura novamente, antes das 24 horas atuais terminarem. Esse uso da magia recupera seu controle sobre até quatro criaturas que você tenha animado com essa magia, ao invés de animar uma nova. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode animar ou recuperar o controle de duas criaturas mortas-vivas para cada nível do espaço acima do 3°. Cada uma dessas criaturas deve vir de um corpo ou pilha de ossos diferente.",
    "classes": [
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "bola-de-fogo",
    "name": "Bola De Fogo",
    "level": 3,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma minúscula bola de guano de morcego e enxofre"
    },
    "description": "Um veio brilhante lampeja na ponta do seu dedo em direção a um ponto que você escolher, dentro do alcance, e então eclode com um estampido baixo, explodindo em chamas. Cada criatura em uma esfera de 6 metros de raio [20-foot radius], centrada no ponto, deve realizar um teste de resistência de Destreza. Um alvo sofre 8d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso. O fogo se espalha, dobrando esquinas. Ele incendeia objetos inflamáveis na área que não estejam sendo vestidos ou carregados. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "circulo-magico",
    "name": "Círculo Mágico",
    "level": 3,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "3 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "água benta ou pó de prata e ferro"
    },
    "description": "Você cria um cilindro de energia mágica de 3 metros de raio [10-foot radius] por 6 metros de altura [20-foot-tall], centrado num ponto no solo que você possa ver, dentro do alcance. Runas brilhantes aparecem toda vez que o cilindro toca o chão ou outra superfície. Escolha um ou mais dos tipos de criaturas seguintes: celestiais, corruptores, elementais, fadas ou mortos-vivos. O círculo afeta uma criatura do tipo escolhido das seguintes maneiras:  Quando você conjurar essa magia, você pode decidir que a mágica dela opere na direção reversa, prevenindo que uma criatura de um tipo especifico saia do cilindro e protegendo os alvos fora dele. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a duração aumenta em 1 hora para cada nível do espaço acima do 3°.",
    "classes": [
      "Bruxo",
      "Clérigo",
      "Mago",
      "Paladino"
    ]
  },
  {
    "id": "clarividencia",
    "name": "Clarividência",
    "level": 3,
    "school": "Adivinhação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um chifre cravejado de joias para ouvir ou um olho de vidro para ver"
    },
    "description": "Você cria um sensor invisível, dentro do alcance, em um local familiar a você (um local que você tenha visitado ou visto antes) ou em um local obvio que não seja familiar a você (como atrás de uma porta, ao redor de um canto ou em um bosque de árvores). O sensor se mantem no local pela duração e não pode ser atacado ou manipulado de outra forma. Quando você conjurar essa magia, escolhe visão ou audição. Você pode escolher sentir através do sensor como se você estivesse no espaço dele. Com sua ação, você pode trocar entre visão e audição. Uma criatura que puder ver o sensor (como uma criatura beneficiada por ver o invisível ou visão verdadeira) vê um globo luminoso e intangível do tamanho do seu olho.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "conjurar-animais",
    "name": "Conjurar Animais",
    "level": 3,
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
      "material": false
    },
    "description": "Você convoca espíritos feéricos que assumem a forma de bestas e aparecem em espaços desocupados que você pode ver dentro do alcance. Escolha uma das seguintes opções para o que aparece:  Cada besta é também considerada uma fada e desaparece quando cair a 0 pontos de vida ou quando a magia acabar. As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação. O Mestre possui as estatísticas das criaturas. | Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 5° nível, o triplo delas com um espaço de 7° nível e o quadruplo delas com um espaço de 9° nível.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "contramagica",
    "name": "Contramágica",
    "level": 3,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Reação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": false
    },
    "description": "Você tenta interromper uma criatura no processo de conjuração de uma magia. Se a criatura estiver conjurando uma magia de 3° nível ou inferior, a magia falha e não gera nenhum efeito. Se ela estiver conjurando uma magia de 4° nível ou superior, faça um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Caso seja bem sucedido, a magia da criatura falha e não gera nenhum efeito. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a magia interrompida não vai gerar efeito se o nível dela for menor ou igual ao nível do espaço de magia que você usar.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "convocar-relampagos",
    "name": "Convocar Relâmpagos",
    "level": 3,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Raio",
    "currentDamageType": "Raio",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma nuvem tempestuosa aparece em formato cilíndrico com 3 metros [10 feet] de altura e 18 metros [60 feet] de raio, centrada num ponto que você possa ver, 30 metros [100 feet] acima de você. A magia falha se você não puder ver um ponto no ar em que a nuvem possa aparecer (por exemplo, se você estiver em uma sala que não possa comportar a nuvem). Quando você conjurar a magia, escolha um ponto que você possa ver dentro do alcance. Um raio de eletricidade é disparado da nuvem no ponto. Cada criatura a 1,5 metro [5 feet] desse ponto deve realizar um teste de resistência de Destreza. Uma criatura sofre 3d10 de dano elétrico se falhar no teste, ou metade desse dano se passar. Em cada um dos seus turnos, até a magia acabar, você pode usar sua ação para convocar um relâmpago dessa forma novamente, afetando o mesmo ponto ou um diferente. Se você estiver a céu aberto em condições tempestuosas quando conjurar essa magia, a magia lhe dá controle sobre a tempestade existente ao invés de criar uma nova. Sob tais condições, o dano da magia aumenta em 1d10. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 3°.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "criar-alimentos",
    "name": "Criar Alimentos",
    "level": 3,
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
    "description": "Você cria 25 quilos [45 pounds] de comida e 100 litros [30 gallons] de água no solo ou em um recipiente dentro do alcance, suficiente para sustentar até quinze humanoide ou cinco montarias por 24 horas. A comida é insossa, porém, nutritiva e estraga se não for consumida após 24 horas. A água é limpa e não fica ruim.",
    "classes": [
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "dificultar-deteccao",
    "name": "Dificultar Detecção",
    "level": 3,
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
      "materialDescription": "polvilhar sobre o alvo um pouco de pó de diamante"
    },
    "description": "Pela duração, você esconde um alvo que você tocar de magias de adivinhação. O alvo pode ser uma criatura voluntária, um local ou um objeto com não mais de 3 metros [10 feet] em qualquer dimensão. O alvo não pode ser alvo de magias de adivinhação ou percebido através de sensores mágicos de vidência.",
    "classes": [
      "Bardo",
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "dissipar-magia",
    "name": "Dissipar Magia",
    "level": 3,
    "school": "Abjuração",
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
    "description": "Escolha uma criatura, objeto ou efeito mágico dentro do alcance. Qualquer magia de 3° nível ou inferior no alvo, termina. Para cada magia de 4° nível ou superior no alvo, realize um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Se obtiver sucesso, a magia termina. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você dissipa automaticamente os efeitos de magias no alvo se o nível da magia for igual ou inferior ao nível do espaço de magia que você usar.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Mago",
      "Paladino"
    ]
  },
  {
    "id": "enviar-mensagem",
    "name": "Enviar Mensagem",
    "level": 3,
    "school": "Evocação",
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
      "materialDescription": "um pequeno e fino pedaço de fio de cobre"
    },
    "description": "Você envia uma mensagem curta, de vinte e cinco palavras ou menos, para uma criatura que seja familiar a você. A criatura ouve a mensagem na sua mente, reconhecendo que foi enviada por você, se ela te conhecer, e pode responder da mesma maneira, imediatamente. A magia permite que criaturas com valores de Inteligência de no mínimo 1, compreendam o sentido da sua mensagem. Você pode enviar a mensagem através de qualquer distância e, até mesmo, para outro plano de existência, mas se o alvo estiver em um plano diferente do seu, existe 5 por cento de chance da mensagem não chegar.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "espiritos-guardioes",
    "name": "Espíritos Guardiões",
    "level": 3,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Radiante",
    "currentDamageType": "Radiante",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um símbolo sagrado"
    },
    "description": "Você evoca espíritos para protege-lo. Eles flutuam a seu redor, a uma distância de 4,5 metros [15 feet], pela duração. Se você for bom ou neutro, as formas espectrais deles aparenta ser angelical ou feérica (à sua escolha). Se você for mau, eles pareceram demoníacos. Quando você conjura essa magia, você pode designar qualquer quantidade de criaturas que você possa ver para não serem afetadas por ela. O deslocamento de uma criatura afetada é reduzido à metade na área e, quando a criatura entrar na área pela primeira vez num turno ou começar seu turno nela, ela deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura sofrerá 3d8 de dano radiante (se você for bom ou neutro) ou 3d8 de dano necrótico (se você for mau). Com um sucesso na resistência, a criatura sofre metade desse dano. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 3°.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "falar-com-os-mortos",
    "name": "Falar Com Os Mortos",
    "level": 3,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "3 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "incenso aceso"
    },
    "description": "Você concede o aspecto de vida e inteligência a um corpo, à sua escolha, dentro do alcance, permitindo que ele responda as perguntas que você fizer. O corpo ainda deve possuir uma boca e não pode ser um morto-vivo. A magia falha se o corpo já tiver sido alvo dessa magia nos últimos 10 dias. Até a magia acabar, você pode fazer ao corpo até cinco perguntas. O corpo sabe apenas o que ele sabia em vida, incluindo o idioma que ele conhecia. As respostas normalmente são breves, enigmáticas ou repetitivas e o corpo não está sob nenhuma compulsão que o obrigue a oferecer respostas verdadeiras se você for hostil a ele ou se ele reconhecer você como um inimigo. Essa magia não traz a alma da criatura de volta ao corpo, apenas anima seu espírito. Portanto, o corpo não pode aprender novas informações, não compreende nada que tenha acontecido depois da sua morte e não pode especular sobre eventos futuros.",
    "classes": [
      "Bardo",
      "Clérigo"
    ]
  },
  {
    "id": "falar-com-plantas",
    "name": "Falar Com Plantas",
    "level": 3,
    "school": "Transmutação",
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
    "description": "Você imbui plantas dentro de 9 metros [30 feet] de você com senciência e animação limitadas, dando a elas a capacidade de se comunicar com você e seguir seus comandos simples. Você pode questionar as plantas sobre eventos do último dia na área da magia, obtendo informações sobre criaturas que passaram, tempo e outras circunstâncias. Você também pode tornar terreno difícil causado pelo crescimento de plantas (como arbustos e vegetação rasteira) em terreno normal, permanecendo assim pela duração. Ou você pode tornar terreno normal onde as plantas estiverem presentes, em terreno difícil, permanecendo assim pela duração, fazendo as vinhas e ramos atrasarem perseguidores, por exemplo. As plantas podem ser capazes de realizar outras tarefas em seu favor, à critério do Mestre. A magia não permite que as plantas desenraizem-se e se movam, mas elas podem mover, livremente, seus ramos, galhos e caules. Se uma criatura planta estiver na área, você pode se comunicar com ela se você partilhar um idioma em comum, mas você não recebe qualquer habilidade mágica para influencia-la. Essa magia pode fazer as plantas criadas pela magia constrição soltarem uma criatura impedida.",
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "forma-gasosa",
    "name": "Forma Gasosa",
    "level": 3,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de gaze e um pouco de fumaça"
    },
    "description": "Você transforma uma criatura voluntária que você tocar, junto com tudo que ela estiver vestindo e carregando, em uma nuvem nebulosa, pela duração. A magia termina se a criatura cair a 0 pontos de vida. Uma criatura incorpórea não pode ser afetada. Enquanto estiver nessa forma, o único meio de movimentação do alvo é 3 metros [10 feet] de deslocamento de voo. O alvo pode entrar e ocupar o espaço de outra criatura. O alvo tem resistência a dano não-mágico e tem vantagem em testes de resistência de Força, Destreza e Constituição. O alvo pode passar através de pequenos buracos, aberturas estreitas e, até mesmo, meras rachaduras, embora ele trate líquidos como se fossem superfícies sólidas. O alvo não pode cair e se mantem flutuando no ar, mesmo se estiver atordoado ou incapacitado de alguma outra forma. Enquanto estiver na forma de uma nuvem nebulosa, o alvo não pode falar ou manipular objetos e, quaisquer objetos que ele estava carregando ou segurando não pode ser derrubado, usado ou, de outra forma, interagido. O alvo não pode atacar ou conjurar magias.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "fundir-em-pedra",
    "name": "Fundir Em Pedra",
    "level": 3,
    "school": "Transmutação",
    "isRitual": true,
    "originalDamageType": "Contundente",
    "currentDamageType": "Contundente",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você entra em um objeto ou superfície rochoso, grande o suficiente para comportar seu corpo inteiro, mesclando-se, junto com todo o equipamento que você esteja carregando, com a rocha pela duração. Usando seu movimento, você entra na rocha num ponto que você possa tocar. Nada da sua presença ficará visível ou, de outra forma, detectável por sentidos não-mágicos. Enquanto estiver imerso na rocha, você não pode ver o que está ocorrendo do lado de fora e, qualquer teste de Sabedoria (Percepção) que você fizer para ouvir os sons do lado de fora são feitos com desvantagem. Você continua consciente do tempo transcorrido e pode conjurar magias em você enquanto estiver imerso na rocha. Você pode usar seu movimento para sair da rocha onde você entrou, o que termina a magia. Do contrário, você não pode se mover. Pequenos danos físicos a rocha não ferem você, mas destruição parcial ou uma mudança no formato (fazendo que você já não caiba mais dentro dela) expelirá você causando-lhe 6d6 de dano de concussão. A destruição completa da rocha (ou transmutação em uma substância diferente) expelirá você causando-lhe 50 de dano de concussão. Se você for expelido, você ficará caído no chão em um espaço desocupado perto de onde você entrou da primeira vez.",
    "classes": [
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "glifo-de-vigilancia",
    "name": "Glifo De Vigilância",
    "level": 3,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Horas",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "incenso e pó de diamante"
    },
    "description": "Quando você conjura essa magia, você inscreve um glifo que fere outras criaturas, tanto sobre uma superfície (como uma mesa ou uma secção de piso ou parede) quanto dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou um baú de tesouro) para ocultar o glifo. Se você escolher uma superfície, o glifo pode cobrir uma área da superfície não superior a 3 metros [10 feet] de diâmetro. Se você escolher um objeto, o objeto deve permanecer no seu local; se ele for movido mais de 3 metros [10 feet] de onde você conjurou essa magia, o glifo será quebrado e a magia termina sem ser ativada. O glifo é quase invisível e requer um teste de Inteligência (Investigação) contra a CD da magia para ser encontrado. Você define o que ativa o glifo quando você conjura a magia. Para glifos inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou ficar sobre o glifo, remover outro objeto cobrindo o glifo, aproximar-se a uma certa distância do glifo ou manipular um objeto onde o glifo esteja inscrito. Para glifos inscritos dentro de objetos, os gatilhos mais comuns incluem abrir o objeto, aproximar-se a uma certa distância do objeto ou ver ou ler o glifo. Uma vez que o glifo seja ativado, a magia termina. Você pode, posteriormente, aperfeiçoar o gatilho para que a magia se ative apenas sob certas circunstâncias ou de acordo com as características físicas (como altura ou peso), tipo de criatura (por exemplo, a proteção poderia ser definida para afetar aberrações ou drow) ou tendência. Você pode, também, definir condições para criaturas não ativarem o glifo, como aqueles que falarem determinada senha. Quando você inscreve o glifo, escolha runas explosivas ou glifo de magia. Runas Explosivas. Quando ativado, o glifo irrompe com energia mágica numa esfera com 6 metros de raio [20-foot radius], centrada no glifo. A esfera se espalha, dobrando esquinas. Cada criatura na área deve realizar um teste de resistência de Destreza. Uma criatura sofre 5d8 de dano de ácido, elétrico, fogo, frio ou trovejante se falhar no teste de resistência (você escolhe o tipo quando cria o glifo) ou metade desse dano se obtiver sucesso. Glifo de Magia. Você pode armazenar uma magia preparada de 3° nível ou inferior no glifo ao conjura-la como parte da criação do glifo. A magia a ser armazenada não tem efeito imediato quando conjurada dessa forma. Quando o glifo for ativado, a magia armazenada é conjurada. Se a magia tiver um alvo, esse alvo será a criatura que ativou o glifo. Se a magia afetar uma área, a área será centrada na criatura. Se a magia invocar criaturas hostis ou criar objetos ou armadilhas nocivos, eles aparecerão o mais próximo possível do intruso e o atacarão. Se a magia precisar de concentração, ela dura o máximo possível da sua duração. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano do glifo de runas explosivas aumenta em 1d8 para cada nível do espaço acima do 3°. Se você criar um glifo de magia, você pode armazenar qualquer magia do mesmo nível, ou inferior, do espaço que você usar para o glifo de vigilância.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "idiomas",
    "name": "Idiomas",
    "level": 3,
    "school": "Adivinhação",
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
      "materialDescription": "uma pequena estátua de argila de um zigurate"
    },
    "description": "Essa magia garante a criatura que você tocar a habilidade de compreender e falar o idioma que ela ouvir. Além disso, quando o alvo fala, qualquer criatura que saiba, pelo menos, um idioma pode ouvir o alvo e compreender o que ele diz.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "imagem-maior",
    "name": "Imagem Maior",
    "level": 3,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "Trovão",
    "currentDamageType": "Trovão",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pedaço de lã"
    },
    "description": "Você cria uma imagem de um objeto, uma criatura ou algum outro fenômeno visível que não tenha mais de 6 metros cúbicos [20-foot cube]. A imagem aparece em um local que você possa ver, dentro do alcance e permanece pela duração. Ela parece completamente real, incluindo sons, cheiros e temperatura apropriados para a coisa retratada. Você não pode criar calor ou frio suficiente para causar dano, um som alto o suficiente para causar dano trovejante ou ensurdecer uma criatura ou um cheiro que poderia nausear uma criatura (como o fedor de um troglodita). Enquanto você estiver dentro do alcance da ilusão, você pode usar sua ação pra fazer a imagem se mover para qualquer outro local dentro do alcance. À medida que a imagem muda de lugar, você pode alterar a aparência dela para que seu movimento pareça ser o natural para a imagem. Por exemplo, se você criar uma imagem de uma criatura e move-la, você pode alterar a imagem para que ela pareça estar andando. Similarmente, você pode fazer a ilusão emitir sons diferentes em momentos diferentes, sendo possível até mesmo manter uma conversa, por exemplo. Interação física com a imagem, revelará que ela é uma ilusão, já que as coisas podem passar através dela. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão com um teste de Inteligência (Investigação) bem sucedido contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a criatura verá através da imagem e suas outras qualidades sensoriais se tornaram suaves para a criatura. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, a magia irá durar até ser dissipada, sem necessitar da sua concentração.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "lentidao",
    "name": "Lentidão",
    "level": 3,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma gota de melaço"
    },
    "description": "Você altera o tempo ao redor de até seis criaturas, à sua escolha, num cubo de 12 metros [40 feet], dentro do alcance. Cada criatura deve ser bem sucedida num teste de resistência de Sabedoria ou será afetada por essa magia pela duração. O deslocamento de um alvo afetado é reduzido à metade, ele sofre –2 de penalidade na CA e nos testes de resistência de Destreza e não pode usar reações. No turno dele, ele pode usar ou uma ação ou uma ação bônus, mas não ambas. Independentemente das habilidades ou itens mágicos da criatura, ela não poderá realizar mais de um ataque corpo-a-corpo ou à distância durante o turno dela. Se a criatura tentar conjurar uma magia com tempo de conjuração maior que 1 rodada, jogue um d20. Se cair 11 ou maior, a magia não surte efeito até o próximo turno da criatura e a criatura deve usar sua ação nesse turno para completar a magia. Se ela não puder, a magia é perdida. Uma criatura afetada por essa magia faz outro teste de resistência de Sabedoria no final do turno dela. Se passar na resistência, o efeito acaba nela.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "luz-do-dia",
    "name": "Luz Do Dia",
    "level": 3,
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
    "description": "Uma esfera de luz, com 18 metros [60 feet] de raio, se espalha a partir de um ponto, à sua escolha, dentro do alcance. A esfera produz luz plena num raio de 18 metros [60 feet] e penumbra por 18 metros [60 feet] adicionais. Se você escolher um ponto em um objeto que você esteja segurando, ou um que não esteja sendo vestido ou carregado, a luz brilha a partir do objeto e se move com ele. Cobrir completamente o objeto afetado com um objeto opaco, como uma vasilha ou um elmo, bloqueará a luz. Se qualquer área dessa magia sobrepor uma área de escuridão criada por uma magia de 3° ou inferior, a magia que criou a escuridão será dissipada.",
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Paladino",
      "Patrulheiro"
    ]
  },
  {
    "id": "medo",
    "name": "Medo",
    "level": 3,
    "school": "Ilusão",
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
      "materialDescription": "uma pena branca ou o coração de uma galinha"
    },
    "description": "Você projeta uma imagem fantasmagórica dos piores medos de uma criatura. Cada criatura num cone de 9 metros [30-foot cone] deve ser bem sucedida num teste de resistência de Sabedoria ou largara o que quer que esteja segurando e ficará amedrontada pela duração. Enquanto estiver amedrontada por essa magia, uma criatura deve usar a ação de Disparada e fugir de você pela rota mais curta disponível em cada um dos turnos dela, a não ser que não haja lugar para onde se mover. Se a criatura terminar o turno dela em um local onde ela não tenha linha de visão sua, a criatura pode realizar um teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina naquela criatura.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "montaria-fantasmagorica",
    "name": "Montaria Fantasmagórica",
    "level": 3,
    "school": "Ilusão",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma criatura Grande, quase-real, similar a um cavalo, aparece no solo em um espaço desocupado, à sua escolha, dentro do alcance. Você decide a aparência da criatura, mas ela é equipada com sela, estribo e arreio. Qualquer equipamento criado por essa magia vira fumaça caso se afaste a mais de 3 metros [10 feet] da montaria. Pela duração, você ou a criatura que você escolher, pode cavalgar a montaria. A criatura usa as estatísticas de um cavalo de montaria, exceto por seu deslocamento ser de 30 metros [100 feet] e poder viajar 15 quilômetros [10 miles] em uma hora, ou 20 quilômetros [13 miles] em um ritmo rápido. Quando a magia acaba, a montaria desaparece gradualmente, dando ao cavaleiro 1 minuto para desmontar. A magia acaba se você usar uma ação para dissipa-la ou se a montaria sofrer qualquer dano.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "muralha-de-vento",
    "name": "Muralha De Vento",
    "level": 3,
    "school": "Abjuração",
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
      "materialDescription": "um leque minúsculo e uma pena de origem exótica"
    },
    "description": "Uma muralha de ventos fortes ergue-se do chão num ponto, à sua escolha, dentro do alcance. Você pode fazer a muralha ter até 15 metros [50 feet] de comprimento, 4,5 metros [15 feet] de altura e 30 centímetros [1 foot] de espessura. Você pode moldar a muralha em qualquer forma que desejar, contanto que ela faça um caminho contínuo pelo solo. A muralha permanece pela duração. Quando a muralha aparece, cada criatura dentro da área dela deve realizar um teste de resistência de Força. Uma criatura sofre 3d8 de dano de concussão se falhar na resistência, ou metade desse dano se obtiver sucesso. Os ventos fortes mantem névoa, fumaça e outros gases afastados. Criaturas ou objetos voadores Pequenos ou menores, não podem atravessar a muralha. Materiais leves e soltos trazidos para a muralha são arremessados para cima. Flechas, virotes e outros projéteis ordinários disparados contra alvos além da muralha são defletidos para cima e erram automaticamente. (Pedras arremessadas por gigantes ou armas de cerco e projéteis similares, não são afetados.) As criaturas em forma gasosa não podem atravessá-la.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "nevasca",
    "name": "Nevasca",
    "level": 3,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um punhado de poeira e algumas gotas de água"
    },
    "description": "Até a magia acabar, uma chuva congelante e neve caem num cilindro de 6 metros de altura [20-foot-tall] por 12 metros de raio [40-foot radius], centrado num ponto, à sua escolha, dentro do alcance. A área é de escuridão densa e, chamas expostas na área são extintas. O solo na área é coberto por gelo escorregadio, tornando-o terreno difícil. Quando uma criatura entrar na área da magia pela primeira vez num turno ou começar seu turno nela, ela deve realizar um teste de resistência de Destreza. Se falhar, cairá no chão. Se um, criatura estiver se concentrando na área da magia, a criatura deve realizar um teste de resistência de Constituição contra a CD da magia, ou perderá a concentração.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "nevoa-fetida",
    "name": "Névoa Fétida",
    "level": 3,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Ação",
    "range": "27 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um ovo podre ou várias folhas de repolho"
    },
    "description": "Você cria uma esfera, de 6 metros de raio [20-foot radius], de gás amarelado nauseante, centrada num ponto dentro do alcance. A névoa se espalha, dobrando esquinas, e sua área é de escuridão densa. A névoa perdura no ar pela duração. Cada criatura que estiver completamente dentro da névoa no início do seu turno deve realizar um teste de resistência de Constituição contra veneno. Se falhar na resistência, a criatura gastará sua ação nesse turno tentando vomitar e cambaleando. Um vento moderado (pelo menos 15 quilômetros [10 miles] por hora) dispersará a névoa depois de 4 rodadas. Um vento forte (pelo menos 30 quilômetros [20 miles] por hora) dispersará a névoa após 1 rodada.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "padrao-hipnotico",
    "name": "Padrão Hipnótico",
    "level": 3,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Cubo",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": true,
      "materialDescription": "uma vareta brilhante de incenso ou um frasco de cristal cheio de material fosforescente"
    },
    "description": "Você cria um padrão retorcido de cores que se entrelaça através do ar dentro de um cubo de 9 metros [30-foot cube], dentro do alcance. O padrão aparece por um momento depois desaparece. Cada criatura na área que ver o padrão, deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura fica enfeitiçada pela duração. Enquanto estiver enfeitiçada por essa magia, a criatura está incapacitada e tem deslocamento 0. A magia acaba em uma criatura afetada se ela sofrer dano ou se alguém usar uma ação para agitar a criatura para tira-la de seu estupor.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "palavra-curativa-em-massa",
    "name": "Palavra Curativa Em Massa",
    "level": 3,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação bonus",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "À medida que você brada palavras de restauração, até seis criaturas, à sua escolha, que você possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não afeta mortos-vivos ou constructos. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 3°.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "pequena-cabana",
    "name": "Pequena Cabana",
    "level": 3,
    "school": "Evocação",
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
      "materialDescription": "uma pequena conta de cristal"
    },
    "description": "Um domo de energia imóvel, de 3 metros de raio [10-foot radius], aparece do nada, ao seu redor e acima de você e permanece parado pela duração. A magia termina se você deixar a área. Nove criaturas de tamanho Médio ou menor podem caber dentro do domo com você. A magia falha se a área incluir criaturas maiores ou mais de nove criaturas. Criaturas e objetos dentro do domo quando você conjurou essa magia, podem se mover através dele livremente. Todas as outras criaturas e objetos são bloqueados ao tentarem atravessa-lo. Magias e outros efeitos mágicos não podem se estender através do domo ou serem conjurados através dele. A atmosfera dentro do espaço é confortável e seca, independente do clima do lado de fora. Até a magia acabar, você pode comandar o interior para que fique mal iluminado ou escuro. O domo é opaco do lado de fora, de qualquer cor que você desejar, mas é transparente do lado de dentro.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "piscar",
    "name": "Piscar",
    "level": 3,
    "school": "Transmutação",
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
    "description": "Role um d20 no final de cada um dos seus turnos pela duração da magia. Com um resultado de 11 ou maior, você desaparece do seu plano de existência atual e reaparece no Plano Etéreo (a magia falha e a conjuração é perdida se você já estiver nesse plano). No início do seu próximo turno e quando a magia terminar, se você estiver no Plano Etéreo, você retorna a um espaço desocupado de sua escolha que você possa ver a até 3 metros [10 feet] do espaço em que você desapareceu. Se não houver um espaço disponível dentro do alcance, você reaparece no espaço desocupado mais próximo (escolhido aleatoriamente, se existir mais de um espaço a mesma distância). Você pode dissipar a magia com uma ação. Quando estiver no Plano Etéreo, você pode ver e ouvir o plano de onde você veio, que aparece em tons de cinza, e você não pode ver nada além de 18 metros [60 feet]. Você só pode afetar ou ser afetado por outras criaturas no Plano Etéreo. As criaturas que não estiverem lá não podem notar você nem interagir com você, a não ser que elas tenham uma habilidade que as permita.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "protecao-contra-energia",
    "name": "Proteção Contra Energia",
    "level": 3,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Pela duração, a criatura voluntária que você tocar terá resistência a um tipo de dano de sua escolha: ácido, elétrico, fogo, frio ou trovejante.",
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "relampago",
    "name": "Relâmpago",
    "level": 3,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Raio",
    "currentDamageType": "Raio",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de pelo e uma haste de âmbar, cristal ou vidro"
    },
    "description": "Um relâmpago forma uma linha de 30 metros [100 feet] de comprimento e 1,5 metro [5 feet] de largura que é disparado por você em uma direção, à sua escolha. Cada criatura na linha deve realizar um teste de resistência de Destreza. Uma criatura sofre 8d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso. O relâmpago incendeia objetos inflamáveis na área que não estejam sendo vestidos ou carregados. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "remover-maldicao",
    "name": "Remover Maldição",
    "level": 3,
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
    "description": "Ao seu toque, todas as maldições afetando uma criatura ou objeto terminam. Se o objeto for um item mágico amaldiçoado, sua maldição persiste, mas a magia rompe a sintonia do portador com o objeto, então permitindo que ele o remova ou descarte.",
    "classes": [
      "Bruxo",
      "Clérigo",
      "Mago",
      "Paladino"
    ]
  },
  {
    "id": "respirar-na-agua",
    "name": "Respirar Na Água",
    "level": 3,
    "school": "Transmutação",
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
      "materialDescription": "um pedaço de cana ou palha"
    },
    "description": "Essa magia concede a até dez criaturas voluntária que você possa ver, dentro do alcance, a habilidade de respirar embaixo d'água até a magia acabar. As criaturas afetadas também mantem sua forma normal de respiração.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "revivificar",
    "name": "Revivificar",
    "level": 3,
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
      "material": true,
      "materialDescription": "diamantes"
    },
    "description": "Você toca uma criatura que tenha morrido dentro do último minuto. Essa criatura volta a vida com 1 ponto de vida. Essa magia não pode trazer de volta a vida criaturas que tenham morrido de velhice nem pode restaurar quaisquer partes do corpo perdidas.",
    "classes": [
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "rogar-maldicao",
    "name": "Rogar Maldição",
    "level": 3,
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
    "description": "Você toca uma criatura e a criatura deve ser bem sucedida em um teste de resistência de Sabedoria ou será amaldiçoada pela duração da magia. Quando você conjura essa magia, escolha a natureza da maldição dentre as seguintes opções:  Uma magia remover maldição termina esse efeito. Com a permissão do Mestre, você pode escolher um efeito alternativo de maldição, mas ele não deve ser mais poderoso que os descritos acima. O Mestre tem a palavra final sobre o efeito de uma maldição. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível, a duração da concentração sobe para 10 minutos. Se você usar um espaço de magia de 5° ou 6° nível, a duração será de 8 horas. Se você usar um espaço de magia de 7° ou 8° nível, a duração será de 24 horas. Se você usar um espaço de magia de 9° nível, a magia dura até ser dissipada. Usar um espaço de magia de 5° nível ou superior faz com que a duração não necessite de concentração.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "sinal-de-esperanca",
    "name": "Sinal De Esperança",
    "level": 3,
    "school": "Abjuração",
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
    "description": "Essa magia confere esperança e vitalidade. Escolha qualquer quantidade de criaturas dentro do alcance. Pela duração, cada alvo tem vantagem em testes de resistência de Sabedoria e testes de resistência contra a morte e recuperam o máximo de pontos de vida possível em qualquer cura.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "toque-vampirico",
    "name": "Toque Vampírico",
    "level": 3,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Necrótico",
    "currentDamageType": "Necrótico",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "O toque da sua mão coberta de sombras pode drenar a força vital dos outros para curar seus ferimentos. Realize um ataque corpo-a-corpo com magia contra uma criatura ao seu alcance. Se atingir, o alvo sofre 3d6 de dano necrótico e você recupera pontos de vida igual à metade do dano necrótico causado. Até a magia acabar, você pode realizar o ataque novamente, no seu turno, com uma ação. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°.",
    "classes": [
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "velocidade",
    "name": "Velocidade",
    "level": 3,
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
      "materialDescription": "uma raspa de raiz de alcaçuz"
    },
    "description": "Escolha uma criatura voluntária que você possa ver, dentro do alcance. Até a magia acabar, o deslocamento do alvo é dobrado, ele ganha +2 de bônus na CA, ele tem vantagem em testes de resistência de Destreza e ganha uma ação adicional em cada um dos turnos dele. A ação pode ser usada apenas para realizar as ações de Atacar (um ataque com arma, apenas), Disparada, Desengajar, Esconder ou Usar um Objeto. Quando a magia acabar, o alvo não poderá se mover ou realizar ações até depois do seu próximo turno, à medida que uma onda de letargia toma conta dele.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "voo",
    "name": "Voo",
    "level": 3,
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
      "materialDescription": "uma pena da asa de qualquer pássaro"
    },
    "description": "Você toca uma criatura voluntária. O alvo ganha deslocamento de voo de 18 metros [60 feet], pela duração. Quando a magia acabar, o alvo cai se ainda estiver no ar, a não ser que ele possa impedir a queda. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 3°.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  }
];
