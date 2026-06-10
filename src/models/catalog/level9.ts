import { Spell } from '../spell';

export const level9Spells: Spell[] = [
  {
    "id": "alterar-forma",
    "name": "Alterar Forma",
    "level": 9,
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
      "material": true,
      "materialDescription": "uma argola de jade, que você deve colocar na sua cabeça antes de conjurar a magia,"
    },
    "description": "Você assume a forma de uma criatura diferente, pela duração. A nova forma pode ser qualquer criatura com um nível de desafio igual ao seu nível ou menor. A criatura não pode ser nem um constructo nem um morto-vivo e você deve ter visto esse tipo de criatura pelo menos uma vez. Você se transforma num exemplar médio da criatura, um sem quaisquer níveis de classe nem característica Conjuração. Suas estatísticas de jogo são substituídas pelas estatísticas da forma escolhida, no entanto, você mantem sua tendência e valores de Inteligência, Sabedoria e Carisma. Você também mantem suas proficiências em testes de resistência, além de ganhar as da nova criatura. Se a criatura tiver a mesma proficiência que você e o bônus listado nas estatísticas dela for maior que o seu, use os bônus da criatura no lugar do seu. Você não pode usar qualquer ação lendária ou de covil da nova forma. Você assume os pontos de vida e Dados de Vida da sua nova forma. Quando você reverter a sua forma normal, você retorna à quantidade de pontos de vida que tinha antes da transformação. Se você reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da sua forma normal a 0, você não cairá inconsciente. Você mantem os benefícios de qualquer característica da sua classe, raça ou outra fonte e pode usa-las, considerando que sua nova forma é fisicamente capaz de fazê-lo. Você não pode usar quaisquer sentidos especiais que você possua (por exemplo, visão no escuro) a não ser que a nova forma também possua o sentido. Você só poderá falar se a nova forma, normalmente, puder falar. Quando você se transforma, você pode escolher se o seu equipamento cai no chão, é assimilado a sua nova forma ou é usado por ela. Equipamentos vestidos e carregados funcionam normalmente. O Mestre decide qual equipamento é viável para a nova forma vestir ou usar, baseado na forma e tamanho da criatura. O seu equipamento não muda de forma ou tamanho para se adaptar à nova forma e, qualquer equipamento que a nova forma não possa vestir deve, ou cair no chão ou ser assimilado por ela. Equipamentos assimilados não terão efeito nesse estado. Pela duração da magia, você pode usar sua ação para assumir uma forma diferente, seguindo as mesmas restrições e regras da forma anterior, com uma exceção: se sua nova forma tiver mais pontos de vida que sua forma atual, seus pontos de vida mantem o valor atual.",
    "classes": [
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "aprisionamento",
    "name": "Aprisionamento",
    "level": 9,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "9 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pergaminho de representação ou uma estatueta esculpida para se parecer com o alvo e um componente especial, que varia de acordo com a versão da magia que você escolher, por Dado de Viva,"
    },
    "description": "Você cria um impedimento mágico para imobilizar uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou será vinculado à magia; se ele for bem sucedido, ele será imune a essa magia se você conjura-la novamente. Enquanto estiver sob efeito dessa magia, a criatura não precisará respirar, comer ou beber e não envelhece. Magias de adivinhação não podem localizar ou perceber o alvo. Quando você conjura essa magia, você escolhe uma das seguintes formas de aprisionamento. Enterrar. O alvo é sepultado bem fundo na terra em uma esfera de energia mágica que é grande o suficiente para conter o alvo. Nada pode atravessar a esfera e nenhuma criatura pode se teletransportar ou usar viagem plantar para entrar ou sair dela. O componente especial para essa versão da magia é um pequeno globo de mitral. Acorrentar. Pesadas correntes, firmemente presas ao solo, matem o alvo no lugar. O alvo está impedido até a magia acabar e ele não pode se mover ou ser movido por nenhum meio, até lá. O componente especial para essa versão da magia é uma fina corrente de metal precioso. Prisão Cercada. A magia transporta o alvo para dentro de um pequeno semiplano que é protegido contra teletransporte e viagem planar. O semiplano pode ser um labirinto, uma jaula, uma torre ou qualquer estrutura ou área confinada similar, à sua escolha. O componente material especial para essa versão da magia é uma representação em miniatura da prisão, feita de jade. Contenção Reduzida. O alvo é reduzido até o tamanho de 30 centímetros [1 foot] e é aprisionado dentro de uma gema ou objeto similar. A luz pode passar através da gema normalmente (permitindo que o alvo veja o exterior e outras criaturas vejam o interior), mas nada mais pode atravessa-la, mesmo por meios de teletransporte ou viagem planar. A gema não pode ser partida ou quebrada enquanto a magia estiver efetiva. O componente especial para essa versão da magia é uma gema transparente grande, como um coríndon, diamante ou rubi. Torpor. O alvo cai no sono e não pode ser acordado. O componente especial para essa versão da magia consiste em ervas soporíferas raras. Terminando a Magia. Durante a conjuração da magia, em quaisquer das versões, você pode especificar uma condição que irá fazer a magia terminar e libertará o alvo. A condição pode ser o quão especifica ou elaborada quanto você quiser, mas o Mestre deve concordar que a condição é razoável e tem uma probabilidade de acontecer. As condições podem ser baseadas no nome, identidade ou divindade da criatura mas, no mais, devem ser baseadas em ações ou qualidades observáveis e não em valores intangíveis tais como nível, classe e pontos de vida. A magia dissipar magia pode terminar a magia apenas se for conjurada como uma magia de 9° nível, tendo como alvo ou a prisão ou o componente especial usado para cria-la. Você pode usar um componente especial em particular para criar apenas uma prisão por vez. Se você conjurar essa magia novamente usando o mesmo componente, o alvo da primeira conjuração é, imediatamente, liberado do vínculo.",
    "classes": [
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "chuva-de-meteoros",
    "name": "Chuva De Meteoros",
    "level": 9,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Esferas de fogo incandescentes atingem o solo em quatro pontos diferentes que você possa ver, dentro do alcance. Cada criatura numa esfera de 12 metros de raio [40-foot radius], centrada em cada ponto escolhido por você, deve realizar um teste de resistência de Destreza. A esfera se espalha, dobrando esquinas. Uma criatura sofre 20d6 de dano de fogo e 20d6 de dano de concussão se falhar na resistência ou metade desse dano se obtiver sucesso. Uma criatura na área de mais de uma explosão de chamas é afetada apenas uma vez. A magia causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "cura-completa-em-massa",
    "name": "Cura Completa Em Massa",
    "level": 9,
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
      "material": false
    },
    "description": "Uma inundação de energia curativa emerge de você para as criaturas feridas ao seu redor. Você restaura até 700 pontos de vida, divididos, à sua escolha, entre qualquer quantidade de criaturas que você possa ver, dentro do alcance. As criaturas curadas por essa magia também são curadas de todas as doenças e qualquer efeito que as deixou cegas ou surdas. Essa magia não afeta mortos-vivos ou constructos.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "desejo",
    "name": "Desejo",
    "level": 9,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Necrótico",
    "currentDamageType": "Necrótico",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Desejo é o feitiço mais poderoso que uma criatura mortal pode lançar. Simplesmente falando em voz alta, você pode alterar os próprios fundamentos da realidade de acordo com seus desejos. O uso básico dessa magia é de copiar qualquer magia de 8° nível ou inferior. Você não precisa atender a qualquer pré-requisito da magia copiada, incluindo os componentes dispendiosos. A magia simplesmente acontece. Alternativamente, você pode criar um dos seguintes efeitos, à sua escolha:  Você pode forçar que a nova jogada seja feita com vantagem ou desvantagem e você pode escolher se irá usar o resultado da nova jogada ou da jogada original. Você é capaz de fazer coisas além do alcance dos exemplos acima. Apresente seu desejo ao Mestre o mais precisamente possível. O Mestre tem grande amplitude em definir o que ocorre em tais circunstâncias; quanto maior o desejo, maior será a possibilidade de que algo dê errado. Essa magia pode simplesmente falhar, o efeito do seu desejo pode ser apenas parcialmente atendido ou você pode sofrer consequências imprevistas como resultado da forma que você formulou o desejo. Por exemplo, desejar que um vilão esteja morto pode impulsionar você para um período no tempo em que o vilão não esteja mais vivo, efetivamente removendo você do jogo. Similarmente, desejar um item mágico lendário ou um artefato poderia, instantaneamente, transportar você para a presença do dono atual do item. O estresse da conjuração dessa magia para produzir qualquer efeito diferente de copiar outra magia enfraquece você. Após enfrentar esse estresse, a cada vez que você conjurar uma magia, antes de terminar um descanso longo, você sofrerá 1d10 de dano necrótico por nível da magia. Esse dano não pode ser reduzido ou prevenido de forma alguma. Além disso, sua Força cai para 3, se ela já não for 3 ou inferior, por 2d4 dias. Para cada dia desses que você permanecer descansando e não fizer nada além de atividades leves, seu tempo de recuperação é reduzido em 2 dias. Finalmente, existe 33 por cento de chance de você se tornar incapaz de conjurar desejo novamente se você sofrer esse estresse.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "encarnacao-fantasmagorica",
    "name": "Encarnação Fantasmagórica",
    "level": 9,
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
    "description": "Baseado nos mais profundos medos de um grupo de criaturas, você cria criaturas ilusórias nas mentes delas, visíveis apenas por elas. Cada criatura numa esfera com 9 metros de raio [30-foot radius] centrada num ponto, à sua escolha, dentro do alcance, deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, uma criatura ficará amedrontada pela duração. A ilusão invoca os medos mais profundos da criatura, manifestando seus piores pesadelos como uma ameaça implacável. No final de cada turno da criatura amedrontada, ela deve ser bem sucedida num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se obtiver sucesso na resistência, a magia termina para essa criatura.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "metamorfose-verdadeira",
    "name": "Metamorfose Verdadeira",
    "level": 9,
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
      "materialDescription": "uma gota de mercúrio, uma porção de goma arábica e um pouco de fumaça"
    },
    "description": "Escolha uma criatura ou objeto não-mágico que você possa ver, dentro do alcance. Você transforma a criatura em uma criatura diferente, a criatura em um objeto ou o objeto em uma criatura (o objeto não pode nem estar sendo vestido nem carregado por outra criatura). A transformação permanece pela duração ou até o alvo cair a 0 pontos de vida ou morrer. Se você se concentrar nessa magia por toda a duração, a transformação será permanente. Metamorfos não são afetados por essa magia. Uma criatura involuntária pode realizar um teste de resistência de Constituição e, se for bem sucedida, não será afetada por essa magia. Criatura em Criatura. Se você transformar uma criatura em outro tipo de criatura, a nova forma pode ser de qualquer tipo que você desejar, contanto que o nível de desafio seja igual ou menor que o do alvo (ou o nível dele, caso o alvo não possua nível de desafio). As estatísticas de jogo do alvo, incluindo seus valores de habilidades mentais, são substituídas pelas estatísticas da nova forma. Ele mantem sua tendência e personalidade. O alvo assume os pontos de vida da sua nova forma e, quando ela reverter a sua forma normal, a criatura retorna à quantidade de pontos de vida que ela tinha antes da transformação. Se ela reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. Essa magia não pode afetar um alvo com 0 pontos de vida. A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar, conjurar magias ou realizar qualquer outra ação que precise de mãos ou de vocalização, a não ser que a nova forma seja capaz de tais ações. O equipamento do alvo mescla-se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos. Objeto em Criatura. Você pode transformar um objeto em um tipo de criatura, contanto que o tamanho da criatura não seja maior que o tamanho do objeto e, o nível de desafio da criatura será 9 ou menor. A criatura é amigável a você e aos seus companheiros. Ela age em cada um dos seus turnos. Você decide qual ação ela realizará e como ela se move. O Mestre tem as estatísticas da criatura e resolve todas as ações e movimentos dela. Se a magia se tornar permanente, você não terá mais controle sobre a criatura. Ele pode continuar amigável a você, dependendo da forma como você a tratou. Criatura em Objeto. Se você transformar uma criatura em um objeto, ela se transformará, junto com tudo que estiver vestindo ou carregando, nessa forma. As estatísticas da criatura tornam-se as do objeto e a criatura não se lembrará do tempo que passou nessa forma, depois da magia acabar e ela retornar a sua forma normal.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "muralha-prismatica",
    "name": "Muralha Prismática",
    "level": 9,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma plano cintilante multicolorido de luzes forma uma parede vertical opaca – de até 27 metros [90 feet] de comprimento, 9 metros [30 feet] de altura e 2,5 centímetros [1 inch] de espessura – centrada num ponto que você possa ver, dentro do alcance. Alternativamente, você pode moldar a muralha numa esfera de 9 metros [30 feet] de diâmetro centrada num ponto, à sua escolha, dentro do alcance. A muralha permanece no lugar pela duração. Se você posicionar a muralha de forma que ela passaria através do espaço ocupado por uma criatura, a magia falha e sua ação e o espaço de magia são desperdiçados. A muralha emite luz plena num raio de 30 metros [100-foot radius] e penumbra por 30 metros [100 feet] adicionais. Você e as criaturas designadas, no momento que você conjurou a magia, podem passar através e permanecer perto da muralha sem se ferirem. Se outra criatura que puder ver a muralha se aproximar mais de 6 metros [20 feet] dela ou começar seu turno lá, a criatura deve realizar um teste de resistência de Constituição ou ficará cega por 1 minuto. A muralha consiste em sete camadas, cada uma de uma cor diferente. Quando uma criatura tenta tocar ou passar através da muralha, ela atravessa uma camada de cada vez, até atravessar todas as camadas da muralha. À medida que ela passa ou toca cada camada, a criatura realiza um teste de resistência de Destreza ou será afetada pelas propriedades daquela camada, como descrito abaixo. A muralha pode ser destruída, também, uma camada por vez, em ordem de vermelho à violeta, pelos meios especificados em cada camada. Quando uma camada é destruída, ela permanece assim pela duração da magia. Um bastão do cancelamento destrói uma muralha prismática, mas um campo antimagia não produz efeito nela. 1. Vermelho. O alvo sofre 10d6 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso. Enquanto essa camada estiver no lugar, ataques à distância não-mágicos não podem atravessar a muralha. A camada pode ser destruída causando, pelo menos, 25 de dano de frio a ela. 2. Laranja. O alvo sofre 10d6 de dano de ácido se falhar na resistência ou metade desse dano se obtiver sucesso. Enquanto essa camada estiver no lugar, ataques à distância mágicos não podem atravessar a muralha. A camada pode ser destruída por um vento forte. 3. Amarelo. O alvo sofre 10d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso. A camada pode ser destruída causando, pelo menos, 60 de dano de energia a ela. 4. Verde. O alvo sofre 10d6 de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso. A magia criar passagem ou outra magia de nível igual ou superior que possam abrir um portal em uma superfície sólida, destroem essa camada. 5. Azul. O alvo sofre 10d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso. A camada pode ser destruída causando, pelo menos, 25 de dano de fogo a ela. 6. Anil. Se falhar na resistência, o alvo ficará impedido. Ele deve então, fazer um teste de resistência de Constituição ao final de cada um dos turnos dele. Se obtiver sucesso três vezes, a magia termina. Se falhar na resistência três vezes, ela se torna pedra é afetada pela condição petrificado. Os sucessos e falhas não precisam ser consecutivos; anote ambos os resultados até o alvo acumular três de mesmo tipo. Enquanto essa camada estiver no lugar, magias não podem ser conjuradas através da muralha. A camada pode ser destruída por luz plena emitida pela magia luz do dia ou uma magia similar de nível equivalente ou superior. 7. Violeta. Se falhar na resistência, o alvo ficará cego. Ele deve realizar um teste de resistência de Sabedoria no início do seu próximo turno. Um sucesso na resistência acaba com a cegueira. Se falhar na resistência, a criatura é transportada para outro plano de existência, escolhido pelo Mestre, e não estará mais cego. (Tipicamente, uma criatura que esteja em um plano que não seja o seu plano natal é banida para lá, enquanto que outras criaturas geralmente são enviadas para os Planos Astral ou Etéreo.) Essa camada é destruída pela magia dissipar magia ou por uma magia similar de nível equivalente ou superior que possa acabar com magias e efeitos mágicos.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "palavra-de-poder-matar",
    "name": "Palavra De Poder Matar",
    "level": 9,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você profere uma palavra de poder que pode compelir uma criatura que você possa ver, dentro do alcance, a morrer instantaneamente. Se o alvo escolhido estiver com 100 pontos de vida ou menos, ele morre. Do contrário, essa magia não produz efeito.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "parar-o-tempo",
    "name": "Parar O Tempo",
    "level": 9,
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
    "description": "Você, por um breve momento, para o fluxo do tempo pra tudo, menos pra você. Nenhum tempo se passa para as outras criaturas, enquanto você realiza 1d4 + 1 turnos de uma vez, durante os quais você pode usar ações e se mover normalmente. Essa magia termina se uma das ações que você fizer durante esse período ou qualquer efeito que você criar, afetar uma criatura diferente de você ou um objeto que esteja sendo vestido ou carregado por outro que não você. Além disso, a magia termina se você se mover para um lugar a mais de 300 metros do local onde você conjurou essa magia.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "portal",
    "name": "Portal",
    "level": 9,
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
      "materialDescription": "um diamante"
    },
    "description": "Você conjura um portal conectando um espaço desocupado que você possa ver, dentro do alcance, a uma localização precisa em um plano de existência diferente. O portal é uma abertura circular, que você pode fazer ter de 1,5 metro [5 feet] a 6 metros [20 feet] de diâmetro. Você pode orientar o portal em qualquer direção, à sua escolha. O portal permanece pela duração. O portal terá uma frente e um fundo em cada plano que ele aparecer. Viajar pelo portal só é possível ao atravessa-lo pela frente. Qualquer coisa que o fizer, é instantaneamente transportado para o outro plano, aparecendo no espaço desocupado mais próximo do portal. Divindades e outros soberanos planares podem impedir que portais criados através dessa magia se abram na presença deles ou em qualquer parte dos seus domínios. Quando você conjurar essa magia, você pode falar o nome de uma criatura especifica (um pseudônimo, título ou apelido não funcionará). Se essa criatura estiver em um plano diferente do que você está, o portal se abre na vizinhança imediata da criatura nomeada e suga a criatura para dentro do portal, fazendo-a aparecer no espaço desocupado mais próximo do seu lado do portal. Você não adquire qualquer poder especial sobre a criatura e ela está livre para agir como o Mestre julgar apropriado. Ela pode ir embora, atacar você ou ajudar você.",
    "classes": [
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "projecao-astral",
    "name": "Projeção Astral",
    "level": 9,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Horas",
    "range": "3 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "para cada criatura que você afeta com este feitiço, você deve fornecer um jacinto no valor de pelo menos 1 gp e uma barra de prata com ornamentos esculpidos no valor de pelo menos 100 gp"
    },
    "description": "Você e até oito criaturas voluntárias dentro do alcance, projetam seus corpos astrais para o Plano Astral (a magia falha e a conjuração é perdida se você já estiver no plano). O corpo material que você deixa para trás ficará inconsciente e em estado de animação suspensa; ele não precisa de comida ou ar e não envelhece. Seu corpo astral assemelhasse à sua forma mortal em praticamente tudo, copiando suas estatísticas de jogo e posses. A principal diferença é a adição de um cordão prateado que se estende de trás da sua omoplata e traça um caminho atrás de você, sumindo após 30 centímetros [1 foot]. Esse cordão é a sua corrente com o seu corpo material. Enquanto sua corrente permanecer intacta, você pode encontrar seu caminho de volta pra casa. Se o cordão for cortado – algo que só pode acontecer se um efeito dizer especificamente que faz isso – sua alma e corpo estão separados, matando você instantaneamente. Sua forma astral pode viajar livremente dentro do Plano Astral e pode passar através de portais que levam a qualquer outro plano. Se você entrar em um novo portal ou retornar para o plano que você estava quando conjurou a magia, seu corpo e posses são transportados ao longo do cordão de prata, permitindo que você reentre no seu corpo ao entrar no novo plano. Sua forma astral é uma encarnação separada. Qualquer dano ou outros efeitos que se aplicarem a ela, não terão efeito no seu corpo físico, nem persistem quando você voltar. A magia termina para você e seus companheiros quando você usar sua ação para dissipa-la. Quando a magia termina, as criaturas afetadas voltam para seus corpos físicos e acordam. A magia também pode terminar prematuramente para você ou um dos seus companheiros. Uma magia dissipar magia, bem sucedida, usada contra um corpo astral ou físico termina a magia para a criatura. Se o corpo original de uma criatura ou sua forma astral caírem a 0 pontos de vida, a magia termina para essa criatura. Se a magia terminar e o cordão prateado estiver intacto, o cordão puxa a forma astral da criatura de volta para seu corpo, terminando seu estado de animação suspensa. Se você retornar para o seu corpo prematuramente, seus companheiros permanecem nas suas formas astrais e devem encontrar seus próprios meios de voltar para seus corpos, geralmente caindo a 0 pontos de vida.",
    "classes": [
      "Bruxo",
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "ressurreicao-verdadeira",
    "name": "Ressurreição Verdadeira",
    "level": 9,
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
      "materialDescription": "um borrifo de água benta e diamantes"
    },
    "description": "Você toca uma criatura morta que não esteja assim a mais de 200 anos e que tenha morrido por qualquer motivo, exceto velhice. Se a alma da criatura estiver disposta e livre, o alvo volta a vida com todos os seus pontos de vida. Essa magia fecha todos os ferimentos, neutraliza quaisquer venenos, cura todas as doenças e suspende quaisquer maldições que afligiam a criatura quando ela morreu. A magia recupera órgão e membros danificados ou perdidos. Essa magia pode, até mesmo, prover um novo corpo, se o original não existir mais, nesse caso, você deve falar o nome da criatura. Ela aparece em um espaço desocupado, à sua escolha, a até 3 metros [10 feet] de você.",
    "classes": [
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "sexto-sentido",
    "name": "Sexto Sentido",
    "level": 9,
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
      "materialDescription": "uma pena de colibri"
    },
    "description": "Você toca uma criatura voluntária e a abençoa com uma habilidade limitada de ver o futuro iminente. Pela duração, o alvo não pode ser surpreendido e tem vantagem nas jogadas de ataque, testes de habilidade e testes de resistência. Além disso, outras criaturas tem desvantagem nas jogadas de ataque contra o alvo, pela duração. Essa magia termina imediatamente, se você conjura-la novamente antes da duração acabar.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "tempestade-da-vinganca",
    "name": "Tempestade Da Vingança",
    "level": 9,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Ácido",
    "currentDamageType": "Ácido",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma agitada nuvem tempestuosa se forma, centrada num ponto que você possa ver e se espalha num raio de 108 metros [360 feet]. Relâmpagos riscam a área, trovões ressoam e ventos fortes silvam. Cada criatura embaixo da nuvem (a não mais de 1.500 metros [5.000 feet] abaixo da nuvem) quando ela aparece deve realizar um teste de resistência de Constituição. Com uma falha na resistência, uma criatura sofre 2d6 de dano trovejante e ficará surda por 5 minutos. A cada rodada que você mantiver a concentração nessa magia, a tempestade produzirá efeitos adicionais no seu turno. Rodada 2. Chuva ácida cai da nuvem. Cada criatura e objeto abaixo dela nuvem sofre 1d6 de dano ácido. Rodada 3. Você convoca seis relâmpagos da nuvem para atingir seis criaturas ou objetos, à sua escolha, abaixo da nuvem. Uma mesma criatura ou objeto não pode ser atingido por mais de um raio. Uma criatura atingida deve realizar um teste de resistência de Destreza. A criatura sofrerá 10d6 de dano elétrico se falhar na resistência ou metade desse dano se passar. Rodada 4. Granizo chove da nuvem. Cada criatura abaixo da nuvem sofre 2d6 de dano de concussão. Rodada 5–10. Ventos e chuva gelados atacam a área abaixo da nuvem. A área se torna terreno difícil e de escuridão densa. Cada criatura sofre 1d6 de dano de frio. Ataques com armas à distância na área são impossíveis. O vento e chuva contam como uma distração grave com os propósitos de manter a concentração em magias. Finalmente, ventos fortes (entre 30 [20 miles] e 75 quilômetros [50 miles] por hora) automaticamente dispersam nevoa, neblina e fenômenos similares na área, independentemente de serem mundanos ou mágicos.",
    "classes": [
      "Druida"
    ]
  }
];
