import { Spell } from '../spell';

export const level7Spells: Spell[] = [
  {
    "id": "bola-de-fogo-controlavel",
    "name": "Bola De Fogo Controlável",
    "level": 7,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma minúscula bola de guano de morcego e enxofre"
    },
    "description": "Um feixe de luz amarelada é disparado da ponta do seu dedo, então se condensa e aguarda no ponto escolhido, dentro do alcance, como uma conta brilhante, pela duração. Quando a magia termina, seja por sua concentração ter sido interrompida ou por você ter decidido terminá-la, a conta eclode com um estampido baixo, explodindo em chamas que se espalhando, dobrando esquinas. Cada criatura numa esfera, com 6 metros de raio [20-foot radius], centrada na conta, deve realizar um teste de resistência de Destreza. Uma criatura sofre dano igual ao total de dano acumulado se falhar na resistência, ou metade do total se obtiver sucesso. O dano base da magia é 12d6. Se até o final do seu turno, a conta ainda não tiver sido detonada, o dano aumenta em 1d6. Se a conta brilhante for tocada antes do intervalo expirar, a criatura que a tocou deve realizar um teste de resistência de Destreza. Se falhar na resistência, a magia termina imediatamente, fazendo a conta explodir em chamas. Se obtiver sucesso na resistência, a criatura pode arremessar a conta a até 12 metros [40 feet]. Quando ela atinge uma criatura ou objeto solido, a magia termina e a conta explode. O fogo danifica objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 8° nível ou superior, o dano base aumenta e 1d6 para cada nível do espaço acima do 7°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "conjurar-celestial",
    "name": "Conjurar Celestial",
    "level": 7,
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
    "description": "Você invoca um celestial de nível de desafio 4 ou inferior, que aparece num espaço desocupado, que você possa ver dentro do alcance. O celestial desaparece se cair a 0 pontos de vida ou quando a magia acabar. O celestial é amigável a você e a seus companheiros pela duração. Role a iniciativa para o celestial, que age no seu próprio turno. Ele obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua), contanto que não violem sua tendência. Se você não emitir nenhum comando a ele, ele se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação. O Mestre possui as estatísticas do celestial. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 9° nível, você invoca um celestial de nível de desafio 5 ou inferior.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "dedo-da-morte",
    "name": "Dedo Da Morte",
    "level": 7,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Necrótico",
    "currentDamageType": "Necrótico",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você envia energia negativa na direção de uma criatura que você possa ver, dentro do alcance, causando dores severas nela. O alvo deve realizar um teste de resistência de Constituição. Ele sofre 7d8 + 30 de dano necrótico se falhar na resistência, ou metade desse dano se obtiver sucesso. Um humanoide morto por essa magia, se ergue no início do seu próximo turno como um zumbi que está permanentemente sob seu controle, seguindo suas ordens verbais da melhor forma possível.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "espada-arcana",
    "name": "Espada Arcana",
    "level": 7,
    "school": "Evocação",
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
      "materialDescription": "uma espada de platina em miniatura com cabo e punho de cobre e zinco"
    },
    "description": "Você cria um plano de energia em formato de espada que flutua dentro do alcance. Ela permanece pela duração. Quando a espada aparece, você realiza um ataque com magia contra um alvo, à sua escolha, a 1,5 metro [5 feet] da espada. Se atingir, o alvo sofre 3d10 de dano de energia. Até a magia acabar, você pode usar uma ação bônus, em cada um dos seus turnos, para mover a espada até 6 metros [20 feet] para um local que você possa ver e repetir esse ataque contra o mesmo alvo ou um diferente.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "forma-eterea",
    "name": "Forma Etérea",
    "level": 7,
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
    "description": "Você dá um passo para dentro das fronteiras do Plano Etéreo, na área em que ele se sobrepõem com o seu plano atual. Você se mantem na Fronteira Etérea pela duração ou até você usar sua ação para dissipar a magia. Durante esse período, você pode se mover para qualquer direção. Se você se mover para cima ou para baixo, cada passo de deslocamento custa um passo extra. Você pode ver e ouvir o plano que você se originou, mas tudo parece cinzento e você não pode ver nada além de 18 metros [60 feet] de você. Enquanto estiver no Plano Etéreo, você pode afetar e ser afetado apenas por criaturas nesse plano. As criaturas que não estiverem no Plano Etéreo não podem notar sua presença e não podem interagir com você, a menos que uma habilidade especial ou magia dê a elas a capacidade de fazê-lo. Você ignora todos os objetos e efeitos que não estiverem no Plano Etéreo, permitindo que você se mova através de objetos que você perceba no plano de onde você veio. Quando a magia acabar, você imediatamente retorna para o plano de onde você se originou, no lugar que você está ocupando atualmente. Se você estiver ocupando o mesmo espaço de um objeto sólido ou de uma criatura quando isso ocorrer, você é, imediatamente, desviado para o espaço desocupado mais próximo que você puder ocupar e sofre dano de energia igual a dez vezes a quantidade de quadrados de 1,5 metro [5 feet] que você foi movido. Essa magia não tem efeito se você conjura-la enquanto estiver no Plano Etéreo ou um plano que não faça fronteira com ele, como um dos Planos Exteriores. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 8° nível ou superior, você pode afetar até três criaturas voluntária (incluindo você) para cada nível do espaço acima do 7°. As criaturas devem estar a até 3 metros [10 feet] de você quando você conjurar a magia.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "inverter-a-gravidade",
    "name": "Inverter A Gravidade",
    "level": 7,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "30 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um ímã e limalhas de ferro"
    },
    "description": "Essa magia inverte a gravidade num cilindro de 15 metros de raio [50-foot radius] por 30 metros [100 feet] de altura, centrado num ponto dentro do alcance. Todas as criaturas e objetos que não esteja, de alguma forma, presos ao solo na área, caem para cima e alcançam o topo da área, quando você conjura essa magia. Uma criatura pode fazer um teste de resistência de Destreza para se agarrar em algum objeto fixo que ela possa alcançar, assim, evitando a queda. Se algum objeto sólido (como um teto) for encontrado durante essa queda, objetos e criaturas caindo atingem ele, exatamente como fariam durante uma queda normal. Se um objeto ou criatura alcançar o topo da área sem atingir nada, ele permanecerá lá, oscilando ligeiramente, pela duração No final da duração, objetos e criaturas afetadas caem de volta para baixo.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "isolamento",
    "name": "Isolamento",
    "level": 7,
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
      "materialDescription": "um composto de pós de diamante, esmeralda, rubi e safira"
    },
    "description": "Através dessa magia, uma criatura voluntária ou um objeto, pode ser escondido, seguro contra detecção pela duração. Quando você conjura essa magia e toca o alvo, ele fica invisível e não pode ser alvo de magias de adivinhação ou percebido através de sensores de vidência criados por magias de adivinhação. Se o alvo for uma criatura, ela entra num estado de animação suspensa. O tempo para de fluir para ela e ela não envelhece. Você pode determinar uma condição para que a magia termine prematuramente. A condição pode ser qualquer coisa, à sua escolha, mas deve ocorrer ou ser visível a até 1,5 quilômetro [1 mile] do alvo. Exemplos incluem “depois de 1.000 anos” ou “quando o tarrasque despertar”. Essa magia também acaba se o alvo sofrer qualquer dano.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "mansao-magnifica",
    "name": "Mansão Magnífica",
    "level": 7,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "90 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um portal em miniatura esculpido em marfim, um pedaço de mármore polido e uma pequena colher de prata"
    },
    "description": "Você conjura uma residência extradimensional, dentro do alcance, que permanece pela duração. Você escolhe onde sua única entrada é localizada. A entrada brilha discretamente e tem 1,5 metro [5 feet] de largura por 3 metros [10 feet] de altura. Você e qualquer criatura que você designou, quando conjurou a magia, pode entrar na residência extradimensional enquanto o portal permanecer aberto. Você pode abrir ou fechar o portal se estiver a até 9 metros [30 feet] dele. Enquanto estiver fechado, o portal é invisível. Além do portal existe um magnifico salão com inúmeros aposentos. A atmosfera é limpa, fresca e morna. Você pode criar qualquer projeto de piso que quiser, mas o espaço não pode exceder 50 cubos, cada cubo tendo 3 metros [10 feet] de cada lado. O local é mobiliado e decorado como você desejar. Ele contém comida suficiente para servir nove banquetes para até 100 pessoas. Uma equipe de 100 servos quase-transparentes atende todos que entrarem. Você decide a aparência visual dos servos e o vestuário deles. Eles são completamente obedientes as suas ordens. Cada servo pode realizar qualquer tarefa que um servo humano comum poderia fazer, mas eles não podem atacar ou realizar qualquer ação que poderia causar maleficio direto a outra criatura. Portanto, os servos podem buscar coisas, limpar, remendar, dobrar roupas, acender lareiras, servir comida, despejar vinho e assim por diante. Os servos podem ir a qualquer lugar na mansão, mas não podem deixá-la. Mobília e outros objetos criados por essa magia viram fumaça se forem removidos da mansão. Quando a magia acabar, qualquer criatura dentro do espaço extradimensional é expelida para o espaço vago mais próximo da entrada.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "miragem",
    "name": "Miragem",
    "level": 7,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você faz um terreno em uma área de até 1,5 quilômetro [1 mile] quadrados pareça, soe, cheire e, até, sinta com outro tipo de terreno natural. Os formatos gerais do terreno permanecem os mesmos, no entanto. Campos abertos ou uma estrada podem ser modificados para se assemelharem a um pântano, colina, fenda ou algum outro tipo de terreno difícil ou intransponível. Uma lagoa pode ser modificada para se parecer com um prado, um precipício com um declive suave ou um barranco pedregoso com uma estrada larga e lisa. Similarmente, você pode alterar a aparência de estruturas ou adiciona-las onde nenhuma existia. A magia não disfarça, esconde ou adiciona criaturas. A ilusão inclui elementos audíveis, visuais, táteis e olfativos, portanto, ela pode transformar solo limpo em terreno difícil (ou vice-versa) ou, de outra forma, impedir o movimento através da área. Qualquer porção de terreno ilusório (como uma rocha ou galho) que seja removida da área da magia desaparece imediatamente. Criaturas com visão verdadeira podem ver através da ilusão a verdadeira forma do terreno; porém, todos os outros elementos da ilusão permanecem, então, mesmo que a criatura esteja ciente da presença da ilusão, ela ainda interage fisicamente com a ilusão.",
    "classes": [
      "Bardo",
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "palavra-divina",
    "name": "Palavra Divina",
    "level": 7,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação bonus",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você profere uma palavra divina, imbuída com o poder que moldou o mundo na aurora da criação. Escolha qualquer quantidade de criaturas que você possa ver dentro do alcance. Cada criatura que puder ouvir você deve realizar um teste de resistência de Carisma. Ao falhar na resistência, uma criatura sofre um efeito baseado nos seus pontos de vida atuais:  Independentemente dos seus pontos de vida atuais, um celestial, corruptor, elemental ou fada que falhar na sua resistência é obrigado a voltar para o plano de origem dele (se já não for aqui) e não pode retornar para o plano atual por 24 horas através de nenhum meio inferior à magia desejo.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "prisao-de-energia",
    "name": "Prisão De Energia",
    "level": 7,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "30 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "pó de rubi"
    },
    "description": "Uma prisão em formato cúbico, imóvel e invisível, composta de energia mágica brota do nada, em volta de uma área, à sua escolha, dentro do alcance. A prisão pode ser uma cela ou uma caixa sólida, à sua escolha. Uma prisão em formato de cela pode ter até 6 metros [20 feet] quadrados e é feita de barras com 1,5 centímetro [1/2-inch] de diâmetro espaçadas a 1,5 centímetro [1/2 inch] umas das outras. Uma prisão em formato de caixa pode ter até 3 metros [10 feet] quadrados, criando uma barreira sólida que impede qualquer matéria de atravessa-la e bloqueia qualquer magia conjurada de entrar ou sair da área. Quando você conjura a magia, qualquer criatura que estiver completamente dentro da área da prisão ficará presa. As criaturas que estiverem apenas parcialmente na área, ou as grandes demais para caber dentro da área, são empurradas do centro da área, até estarem completamente fora dela. Uma criatura dentro da prisão não pode sair dela por meios não-mágicos. Se a criatura tentar usar teletransporte ou viagem entre planos para abandonar a prisão, ela deve, primeiro, realizar um teste de resistência de Carisma. Se obtiver sucesso, a criatura pode usar a magia e sair da prisão. Se falhar, a criatura não pode sair da prisão e desperdiça o uso da magia ou efeito. A prisão também se estende ao Plano Etéreo, bloqueando viagem etérea. Essa magia não pode ser dissipada por dissipar magia.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "projetar-imagem",
    "name": "Projetar Imagem",
    "level": 7,
    "school": "Ilusão",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "150 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma pequena réplica sua feita com materiais"
    },
    "description": "Você cria uma cópia ilusória de si mesmo, que permanece pela duração. A cópia pode aparecer em qualquer lugar, dentro do alcance, que você já tenha visto antes, independentemente da intervenção de obstáculos. A ilusão se parece e fala como você, mas é intangível. Se a ilusão sofrer qualquer dano, ela desaparece e a magia acaba. Você pode ver através dos olhos e ouvir através dos ouvidos da cópia como se você estivesse no lugar dela. Em cada um dos seus turnos, com uma ação bônus, você pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto você está usando os sentidos dela, você fica cego e surdo ao que está a sua volta. Interação física com a imagem revelará ela como sendo uma ilusão, já que as coisas podem atravessa-la. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão sendo bem sucedida num teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Se a criatura discernir a ilusão como ela é, a criatura poderá ver através da imagem e qualquer barulho que ela fizer soará oco para a criatura.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "rajada-prismatica",
    "name": "Rajada Prismática",
    "level": 7,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Cone a partir de você",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Oito raios de luz multicoloridos lampejam da sua mão. Cada raio é uma cor diferente e tem poderes e propósitos diferentes. Cada criatura em um cone de 18 metros [60-foot cone] deve realizar um teste de resistência de Destreza. Para cada alvo, role um d8 para determinar qual cor de raio afetou ele. 1. Vermelho. O alvo sofre 10d6 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso. 2. Laranja. O alvo sofre 10d6 de dano de ácido se falhar na resistência ou metade desse dano se obtiver sucesso. 3. Amarelo. O alvo sofre 10d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso. 4. Verde. O alvo sofre 10d6 de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso. 5. Azul. O alvo sofre 10d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso. 6. Anil. Se falhar na resistência, o alvo ficará impedido. Ele deve então, fazer um teste de resistência de Constituição ao final de cada um dos turnos dele. Se obtiver sucesso três vezes, a magia termina. Se falhar na resistência três vezes, ela se torna pedra é afetada pela condição petrificado. Os sucessos e falhas não precisam ser consecutivos; anote ambos os resultados até o alvo acumular três de mesmo tipo. 7. Violeta. Se falhar na resistência, o alvo ficará cego. Ele deve realizar um teste de resistência de Sabedoria no início do seu próximo turno. Um sucesso na resistência acaba com a cegueira. Se falhar na resistência, a criatura é transportada para outro plano de existência, escolhido pelo Mestre, e não estará mais cego. (Tipicamente, uma criatura que esteja em um plano que não seja o seu plano natal é banida para lá, enquanto que outras criaturas geralmente são enviadas para os Planos Astral ou Etéreo.) 8. Especial. O alvo é atingido por dois raios. Role mais duas vezes e jogue novamente qualquer 8.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "regeneracao",
    "name": "Regeneração",
    "level": 7,
    "school": "Transmutação",
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
      "materialDescription": "uma conta de oração e água benta"
    },
    "description": "Você toca uma criatura e estimula sua habilidade de cura natural. O alvo recupera 4d8 + 15 pontos de vida. Pela duração da magia o alvo recupera 1 ponto de vida no início de cada turno dela (10 pontos de vida por minuto). Os membro decepados do corpo do alvo (dedos, pernas, rabos e assim por diante), se tiver algum, são restaurados após 2 minutos. Se você tiver a parte decepada e segura-la contra o topo, a magia, instantaneamente, faz com que o membro se grude ao toco.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "ressurreicao",
    "name": "Ressurreição",
    "level": 7,
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
    "description": "Você toca uma criatura morta que não esteja assim a mais de um século, que não tenha morrido por velhice e que não seja um morto-vivo. Se a alma da criatura estiver disposta e livre, o alvo volta a vida com todos os seus pontos de vida. Essa magia neutraliza quaisquer venenos e cura doenças normais que afetavam a criatura no momento da morte. Essa magia, no entanto, não remove doenças mágicas, maldições ou efeitos similares; se eles não tiverem sido removidos antes da conjuração da magia, eles voltam a afetar a criatura quando ela volta a viver. Essa magia fecha todos os ferimentos mortais e restaura partes do corpo perdidas. Voltar dos mortos é um calvário. O alvo sofre –4 de penalidade em todas as suas jogadas de ataque, testes de resistência e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades são reduzidas em 1, até desaparecerem. Conjurar essa magia para trazer de volta a vida uma criatura que tenha morrido a um ano ou mais tempo é extremamente desgastante para você. Até você terminar um descanso longo, você não pode conjurar magias novamente e terá desvantagem em todas as jogadas de ataque, testes de habilidade e testes de resistência.",
    "classes": [
      "Bardo",
      "Clérigo"
    ]
  },
  {
    "id": "simbolo",
    "name": "Símbolo",
    "level": 7,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Necrótico",
    "currentDamageType": "Necrótico",
    "castingTime": "1 Minutos",
    "range": "Toque",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "mercúrio, fósforo e pó de diamante e opala"
    },
    "description": "Quando você conjura essa magia, você inscreve um glifo nocivo, tanto sobre uma superfície (como uma secção de piso, uma parede ou mesa) quanto dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou um baú de tesouro). Se você escolher uma superfície, o glifo pode cobrir uma área da superfície não superior a 3 metros [10 feet] de diâmetro. Se você escolher um objeto, o objeto deve permanecer no seu local; se ele for movido mais de 3 metros [10 feet] de onde você conjurou essa magia, o glifo será quebrado e a magia termina sem ser ativada. O glifo é quase invisível e requer um teste de Inteligência (Investigação) contra a CD da magia para ser encontrado. Você define o que ativa o glifo quando você conjura a magia. Para glifos inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou ficar sobre o glifo, remover outro objeto cobrindo o glifo, aproximar-se a uma certa distância do glifo ou manipular um objeto onde o glifo esteja inscrito. Para glifos inscritos dentro de objetos, os gatilhos mais comuns incluem abrir o objeto, aproximar-se a uma certa distância do objeto ou ver ou ler o glifo. Você pode, posteriormente, aperfeiçoar o gatilho para que a magia se ative apenas sob certas circunstâncias ou de acordo com as características físicas (como altura ou peso), tipo de criatura (por exemplo, a proteção poderia ser definida para afetar aberrações ou drow) ou tendência. Você pode, também, definir condições para criaturas não ativarem o glifo, como aqueles que falarem determinada senha. Quando você inscreve o glifo, escolha uma das opções abaixo para seu efeito. Uma vez ativado, o glifo brilha, preenchendo uma esfera de 18 metros [60 feet] de raio com penumbra por 10 minutos, após esse tempo, a magia termina. Cada criatura na esfera, quando o glifo é ativado, é afetada por seu efeito, assim como uma criatura que entrar na esfera a primeira vez num turno ou termina seu turno nela. Atordoamento. Cada alvo deve realizar um teste de resistência de Sabedoria e ficará atordoada por 1 minuto se falhar na resistência. Desespero. Cada alvo deve realizar um teste de resistência de Carisma. Com uma falha na resistência, o alvo será consumido pelo desespero por 1 minuto. Durante esse período, ele não poderá atacar ou afetar qualquer criatura com habilidades, magias ou outros efeitos mágicos nocivos. Discórdia. Cada alvo deve realizar um teste de resistência de Sabedoria. Com uma falha na resistência, um alvo irá brigar e discutir com outras criaturas por 1 minuto. Durante esse período, ele será incapaz de se comunicar compreensivamente e terá desvantagem nas jogadas de ataque e testes de habilidade. Dor. Cada alvo deve realizar um teste de resistência de Constituição e ficará incapacitada com dores excruciantes por 1 minuto se falhar na resistência. Insanidade. Cada alvo deve realizar um teste de resistência de Inteligência. Com uma falha na resistência, o alvo é levado a loucura por 1 minuto. Uma criatura insana, não pode realizar ações, não entende o que as outras criaturas dizem, não pode ler e fala apenas coisas sem sentido. O Mestre controla seus movimentos, que serão erráticos. Medo. Cada alvo deve realizar um teste de resistência de Sabedoria e ficará amedrontado por 1 minuto se falhar na resistência. Enquanto estiver amedrontado, o alvo largará o que quer que esteja segurando e deve se afastar, pelo menos 9 metros [30 feet] do glifo em cada um dos seus turnos, se for capaz. Morte. Cada alvo deve realizar um teste de resistência de Constituição, sofrendo 10d10 de dano necrótico se falhar na resistência ou metade desse dano se passar na resistência. Sono. Cada alvo deve realizar um teste de resistência de Sabedoria e cairá inconsciente por 10 minutos se falhar na resistência. Uma criatura acorda se sofrer dano ou se alguém usar sua ação para sacudi-la e estapeá-la até ela acordar.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "simulacro",
    "name": "Simulacro",
    "level": 7,
    "school": "Ilusão",
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
      "materialDescription": "neve ou gelo em quantidade suficiente para fazer uma cópia em tamanho real da criatura duplicada; algum cabelo, recortes de unha ou outro pedaço do corpo da criatura, colocado dentro da neve ou gelo; e polvilhadar sobre a duplicata pó de rubi"
    },
    "description": "Você modela uma duplicata ilusória de uma besta ou humanoide, dentro do alcance, durante todo tempo de conjuração da magia. A duplicada é uma criatura, parcialmente real, formada de gelo ou neve e pode realizar ações e, no mais, ser tratada como uma criatura normal. Ela aparenta ser igual a original, mas tem metade do máximo de pontos de vida da criatura e é formada sem qualquer equipamento. No mais, a ilusão usa todas as estatísticas da criatura que ela copiou. O simulacro é amigável a você e às criaturas que você designar. Ele obedece aos seus comandos verbais, se movendo e agindo de acordo com seus desejos, agindo no seu turno em combate. O simulacro não possui capacidade de aprender ou de se tornar mais poderoso, portanto, ele nunca subirá de nível ou ganhará outras habilidades, nem poderá recuperar espaços de magia gastos. Se o simulacro sofrer dano, você pode repara-lo em um laboratório alquímico, usando ervas e minerais raros no valor de 100 po por ponto de vida recuperado. O simulacro dura até cair a 0 pontos de vida, no momento em que ele volta a ser neve e derrete instantaneamente. Se você conjurar essa magia novamente, qualquer duplicata atualmente ativa, que você criou com essa magia, é instantaneamente destruída.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "teletransporte",
    "name": "Teletransporte",
    "level": 7,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "3 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Essa magia, instantaneamente, transporta você e até oito criaturas voluntárias, à sua escolha, que você possa ver dentro do alcance ou um único objeto que você possa ver no alcance, para um destino que você selecionou. Se você for afetar um objeto, ele deve ser capaz de caber inteiro dentro de um cubo de 3 metros [10-foot cube] e não pode estar sendo empunhado ou carregado por uma criatura involuntária. O destino que você escolher deve ser conhecido por você e deve ser no mesmo plano de existência que você está. Sua familiaridade com o destino determina se você chegará nele com sucesso. O Mestre rola um d100 e consulta a tabela.  Familiaridade. “Círculo permanente” significa um círculo de teletransporte permanente o qual você conhece a sequência de selos. “Objeto associado” significa que você possui um objeto retirado do destino desejado nos últimos seis meses, como um livro da biblioteca do mago, roupa de cama de uma suíte real ou um pedaço de mármore da tumba secreta do lich. “Muito familiar” é um lugar que você já tenha ido muitas vezes, um lugar que você estudou cuidadosamente ou um local que você possa ver enquanto conjura a magia. “Visto casualmente” é algum lugar que você tenha visto mais de uma vez, mas que não seja muito familiar. “Visto uma vez” é um lugar que você só viu uma vez, possivelmente através de magia. “Descrição” é um lugar cuja localização e aparência você conhece através da descrição de outrem, talvez através de um mapa. “Destino falso” é um local que não existe. Talvez você tenha tentado espionar o santuário de um inimigo, mas, ao invés, viu uma ilusão ou você está tentando se teletransportar para um local familiar que não existe mais. No Alvo. Você e seu grupo (ou objeto alvo) aparecem onde você queria. Fora do Alvo. Você e seu grupo (ou objeto alvo) aparecem a uma distância aleatória fora do destino em uma direção aleatória. A distância do alvo é 1d10 x 1d10 por cento da distância que você viajou. Por exemplo, se você tentou viajar 180 quilômetros [120 miles], mas apareceu fora do alvo e rolou um 5 e um 3 nos dois d10s, então você saiu do alvo 15 por cento ou 27 quilômetros [18 miles]. O Mestre determina a direção de fora do alvo aleatoriamente rolando um d8 e designando 1 como norte, 2 como nordeste, 3 como leste e assim por diante ao redor dos pontos cardeais. Se você seria teletransportado para uma cidade costeira, podendo cair a 27 quilômetros [18 miles] dela, no mar, você poderia ter problemas. Área Similar. Você e seu grupo (ou objeto alvo) aparecem em uma área diferente que, visualmente ou tematicamente, é similar a área alvo. Se você estava indo para o laboratório na sua casa, por exemplo, você pode parar em outro laboratório de mago ou em uma loja de suprimentos alquímicos que terá muitas ferramentas iguais às encontradas no seu laboratório. Geralmente, você aparecerá no local similar mais próximo, mas já que a magia não tem limite de alcance, você pode, concebivelmente, viajar para qualquer lugar no plano. Fiasco. A mágica imprevisível da magia resulta em uma jornada difícil. Cada criatura teletransportada (ou o objeto alvo) sofrem 3d10 de dano de energia e o Mestre rola novamente a tabela para ver onde você foi parar (fiascos múltiplos podem ocorrer, causando dano a cada vez).",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "tempestade-de-fogo",
    "name": "Tempestade De Fogo",
    "level": 7,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma tempestade feita de camadas de chamas crepitantes aparece num local, à sua escolha, dentro do alcance. A área da tempestade consiste de até dez cubos de 3 metros [10-foot cubes], que você pode organizar como desejar. Cada cubo deve ter, pelo menos, uma face adjacente a face de outro cubo. Cada criatura na área deve realizar um teste de resistência de Destreza. Ela sofre 7d10 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso. O fogo causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados. Se desejar, a vida vegetal na área pode não ser afetada por essa magia.",
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro"
    ]
  },
  {
    "id": "viagem-planar",
    "name": "Viagem Planar",
    "level": 7,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma haste metálica bifurcada valendo, sintonizada com um plano de existência em particular,"
    },
    "description": "Você e até oito criaturas voluntárias, que estejam de mãos dadas em um círculo, são transportadas para um plano de existência diferente. Você pode especificar o destino alvo em termos gerais, como a Cidade de Bronze do Plano Elemental do Fogo ou o palácio de Dispater na segunda camada dos Nove Infernos e você aparece no ou perto do destino. Se você estiver tentando chegar a Cidade de Bronze, por exemplo, você poderia chegar na Estrada de Aço dela, em frente aos Portões de Cinzas ou contemplando a cidade do outro lado do Mar de Fogo, à critério do Mestre. Alternativamente, se você conhecer a sequência de selos do círculo de teletransporte em outro plano de existência, essa magia pode leva-lo para esse círculo. Se o círculo de teletransporte for muito pequeno para comportar as criaturas que você está transportando, elas aparecerão no espaço desocupado mais próximo do círculo. Você pode usar essa magia para banir uma criatura involuntária para outro plano. Escolha uma criatura ao seu alcance e realize um ataque corpo-a-corpo com magia contra ela. Se atingir, a criatura deve realizar um teste de resistência de Carisma. Se a criatura falhar na resistência, ela é transportada para um local aleatório no plano de existência que você especificou. Uma criatura, uma vez transportada, deve encontrar seu próprio meio de retornar para seu plano de existência atual.",
    "classes": [
      "Bruxo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  }
];
