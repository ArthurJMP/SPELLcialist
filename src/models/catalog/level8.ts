import { Spell } from '../spell';

export const level8Spells: Spell[] = [
  {
    "id": "antipatia-simpatia",
    "name": "Antipatia/Simpatia",
    "level": 8,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Horas",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pedaço de alume embebido em vinagre para o efeito antipático ou uma gota de mel para o efeito simpático"
    },
    "description": "Essa magia atrai ou repele as criaturas de sua escolha. Você escolhe um alvo dentro do alcance, tanto um objeto ou criatura Enorme ou menor ou uma área que não seja maior que 60 metros cúbicos [200-foot cube]. Então, especifica um tipo de criatura inteligente, como dragões vermelhos, goblins ou vampiros. Você envolve o alvo com uma aura que pode atrair ou repelir as criaturas especificas pela duração. Escolha antipatia ou simpatia como efeito da aura. Antipatia. O encantamento faz com que criaturas do tipo designado por você sintam-se fortemente impelidos em deixar a área e evitar o alvo. Quando uma dessas criaturas puder ver o alvo ou ficar a 18 metros [60 feet] dele, a criatura deve ser bem sucedida num teste de resistência de Sabedoria ou ficará amedrontada. A criatura continuará amedrontada enquanto puder ver o alvo ou permanecer a 18 metros [60 feet] dele. Enquanto estiver amedrontada pelo alvo, a criatura deve usar seu deslocamento para se mover para o local seguro mais próximo o qual ela não possa ver o alvo. Se a criatura se mover para mais de 18 metros [60 feet] do alvo e não puder vê-lo, a criatura não estará mais amedrontada, mas ela ficará amedrontada novamente se voltar a ver o alvo ou ficar a 18 metros [60 feet] dele. Simpatia. O encantamento faz com que as criaturas especificadas sintam-se fortemente impelidos a se aproximar do alvo enquanto estiverem a 18 metros [60 feet] dele ou puderem vê-lo. Quando uma dessas criaturas puder ver o alvo ou ficar a 18 metros [60 feet] dele, a criatura deve ser bem sucedida num teste de resistência de Vontade ou usará seu deslocamento em cada um dos seus turnos para entrar na área ou se mover até o alcance do alvo. Quando a criatura tiver feito isso, ela não poderá se afastar do alvo voluntariamente. Se o alvo causar dano ou ferir a criatura afetada de alguma forma, a criatura afetada pode realizar um novo teste de resistência de Sabedoria para terminar o efeito, como descrito abaixo. Terminando o Efeito. Se uma criatura afetada terminar se turno enquanto não estiver a até 18 metros [60 feet] do alvo ou não for capaz de vê-lo, a criatura faz um teste de resistência de Sabedoria. Em um sucesso, a criatura não estará mais afetada pelo alvo e reconhecerá o sentimento de repugnância ou atração como mágico. Além disso, uma criatura afetada pela magia tem direito a outro teste de resistência de Sabedoria a cada 24 horas enquanto a magia durar. Uma criatura que obtenha sucesso na resistência contra esse efeito ficará imune a ele por 1 minuto, depois desse tempo, ela pode ser afetada novamente.",
    "classes": [
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "aura-sagrada",
    "name": "Aura Sagrada",
    "level": 8,
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
      "materialDescription": "um minúsculo relicário, contendo uma relíquia sagrada, como um pedaço de tecido do robe de um santo ou um pedaço de pergaminho de um texto religioso"
    },
    "description": "Luz divina emana de você e adere em uma aureola suave num raio de 9 metros [30-foot radius], em volta de você. As criaturas de sua escolha, no raio, quando você conjurar essa magia, emitem penumbra num raio de 1,5 metro [5-foot radius] e tem vantagem em todos os testes de resistência e as outras criaturas tem desvantagem nas jogadas de ataque contra elas, até a magia acabar. Além disso, quando um corruptor ou morto-vivo atingir uma criatura afetada com um ataque corpo-a-corpo, a aura lampeja com luz plena. O atacante deve ser bem sucedido num teste de resistência de Constituição ou ficara cego até a magia acabar.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "campo-antimagia",
    "name": "Campo Antimagia",
    "level": 8,
    "school": "Abjuração",
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
      "materialDescription": "uma pitada de ferro em pó ou limalha de ferro"
    },
    "description": "Uma esfera invisível, de 3 metros de raio [10-foot radius], de antimagia envolve você. Essa área é separada da energia mágica que se espalha pelo multiverso. Dentro da esfera, magias não podem ser conjuradas, criaturas invocadas desaparecem e, até mesmo itens mágicos, se tornam mundanos. Até o fim da magia, a esfera se move com você, centrada em você. Magias e outros efeitos mágicos, exceto os criados por artefatos ou divindades, são suprimidos na esfera e não podem adentra-la. Um espaço gasto para conjurar uma magia suprimida é consumido. Enquanto o efeito estiver suprimido, ela não funciona, mas o tempo que ela permanecer suprimida é descontado da sua duração. Efeitos de Alvo. Magias e outros efeitos mágicos, como mísseis mágicos e enfeitiçar pessoa, que forem usados em uma criatura ou objeto dentro da esfera, não surtem efeito no alvo. Áreas de Magia. A área de outra magia ou efeito mágico, como uma bola de fogo, não se estende para dentro da esfera. Se a esfera sobrepor um área mágica, a parte da área que for coberta pela espera é suprimida. Por exemplo, as chás criadas por uma muralha de fogo serão suprimidas dentro da esfera, criando um abertura na muralha se a sobreposição por grande o suficiente. Magias. Qualquer magia ativa ou outro efeito mágico em uma criatura ou objeto dentro da esfera é suprimido enquanto a criatura ou objeto permanecer dentro dela. Itens Mágicos. As propriedades e poderes de itens mágicos são suprimidas dentro da esfera. Por exemplo, uma espada longa +1 dentro da esfera funciona como uma espada não-mágica. As propriedades e poderes de uma arma mágica são suprimidos se ela for usada contra um alvo dentro da esfera ou empunhada por um atacante dentro da esfera. Se uma arma mágica ou munição mágica deixar a esfera completamente (por exemplo, se você disparar uma flecha mágica ou arremessar uma lança mágica e um alvo fora da esfera), a magia do item deixa de ser suprimida tão logo ele deixe a esfera. Criaturas e Objetos. Uma criatura ou objeto invocado ou criado através de magia, temporariamente desaparece da existência dentro da esfera. Tais criaturas reaparecem instantaneamente quando o espaço ocupado pela criatura não estiver mais dentro da esfera. Dissipar Magia. Magias e efeitos mágicos como dissipar magia, não surtem efeito sob esfera. Da mesma forma, esferas criadas por magias de campo antimagia diferentes não se anulam.",
    "classes": [
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "controlar-o-clima",
    "name": "Controlar O Clima",
    "level": 8,
    "school": "Transmutação",
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
      "materialDescription": "incenso aceso e pedaços de terra e madeira misturados em água"
    },
    "description": "Você toma controle do clima numa área de 7,5 quilômetros [5 miles] de você pela duração. Você deve estar ao ar livre para conjurar essa magia. Se mover para um lugar onde você não tenha uma visão clara do céu termina a magia prematuramente. Quando você conjurar essa magia, você muda as condições climáticas atuais, que são determinadas pelo Mestre baseado no ambiente e estação. Você pode mudar a precipitação, temperatura e vento. Leva 1d4 x 10 minutos para as novas condições fazerem efeito. Quando a magia terminar, o clima, gradualmente, volta ao normal. Quando você altera as condições climáticas, encontre a condição atual nas tabelas a seguir e mude em um estágio, para cima ou para baixo. Quando mudar o vento, você pode mudar a direção do mesmo.   ",
    "classes": [
      "Clérigo",
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "dominar-monstro",
    "name": "Dominar Monstro",
    "level": 8,
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
    "description": "Você tenta seduzir uma criatura que você possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ela, ela terá vantagem no teste de resistência. Enquanto a criatura estiver enfeitiçada, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como “Ataque aquela criatura”, “Corra até ali”, ou “Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder. Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também. Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 9° nível, a duração será concentração, até 8 horas.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "enfraquecer-intelecto",
    "name": "Enfraquecer Intelecto",
    "level": 8,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "Psíquico",
    "currentDamageType": "Psíquico",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um punhado de barro, cristal, vidro ou esferas minerais"
    },
    "description": "Você ataca a mente de uma criatura que você possa ver, dentro do alcance, tentando despedaçar seu intelecto e personalidade. O alvo sofre 4d6 de dano psíquico e deve realizar um teste de resistência de Inteligência. Se falhar na resistência, os valores de Inteligência e Carisma da criatura se tornam 1. A criatura não pode conjurar magias, ativar itens mágicos, compreender idiomas ou se comunicar de qualquer forma inteligível. A criatura pode, no entanto, identificar seus amigos, segui-los e, até mesmo, protege-los. Ao final de cada 30 dias, a criatura pode repetir seu teste de resistência contra essa magia. Se ela obtiver sucesso no teste de resistência, a magia termina. Essa magia também pode ser terminada através de restauração maior, cura completa ou desejo.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "explosao-solar",
    "name": "Explosão Solar",
    "level": 8,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Radiante",
    "currentDamageType": "Radiante",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "fogo e um pedaço de pedra do sol"
    },
    "description": "Luz solar brilhante lampeja num raio de 18 metros [60 feet], centrada num ponto, à sua escolha, dentro do alcance. Cada criatura nessa luz, deve realizar um teste de resistência de Constituição. Com uma falha na resistência, uma criatura sofrerá 12d6 de dano radiante e ficará cega por 1 minuto. Se obtiver sucesso na resistência, ela sofrerá metade desse dano e não ficará cega por essa magia. Mortos-vivos e limos tem desvantagem nos seus testes de resistência. Uma criatura cega por essa magia faz outro teste de resistência de Constituição no final de cada um dos turnos dela. Se obtiver sucesso, ela não estará mais cega. Essa magia dissipa qualquer escuridão na área dela que tenha sido criada por um magia.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "formas-animais",
    "name": "Formas Animais",
    "level": 8,
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
    "description": "Sua magia transforma você em bestas. Escolha qualquer quantidade de criaturas voluntárias que você possa ver, o alcance. Você muda cada alvo para a forma de uma besta Grande ou menor, com um nível de desafio de 4 ou inferior. Nos turnos subsequentes, você pode usar sua ação para mudar uma criatura afetada para uma nova forma. A transformação permanece pela duração para cada alvo, ou até o alvo cair para 0 pontos de vida ou morrer. Você pode escolher uma forma diferente para cada alvo. As estatísticas de jogo do alvo são substituídas pelas estatísticas da besta escolhida, mas o alvo mantem sua tendência e valores de Inteligência, Sabedoria e Carisma. O alvo adquire os pontos de vida da sua nova forma, e quando ele reverte para sua forma normal, ele volta aos pontos de vida que tinha antes de ser transformado. Se ele reverter como resultado de ter caído a 0 pontos de vida, todo dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar nem conjurar magias. O equipamento do alvo mescla-se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "labirinto",
    "name": "Labirinto",
    "level": 8,
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
    "description": "Você bane uma criatura que você possa ver, dentro do alcance, para um semiplano labiríntico. O alvo permanece lá pela duração ou até escapar do labirinto. O alvo pode usar sua ação para tentar escapar. Quando o fizer, ele realiza um teste de Inteligência com CD 20. Se for bem sucedido, ele escapa e a magia termina (um minotauro ou um demônio goristro, obtém sucesso automaticamente). Quando a magia termina, o alvo reaparece no espaço que ela estava ou, se o espaço estiver ocupado, no espaço desocupado mais próximo.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "limpar-a-mente",
    "name": "Limpar A Mente",
    "level": 8,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Psíquico",
    "currentDamageType": "Psíquico",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Até a magia acabar, uma criatura voluntária que você tocar fica imune a dano psíquico, a qualquer efeito que poderia sentir suas emoções ou ler seus pensamentos, a magias de adivinhação e a condição enfeitiçado. A magia pode até mesmo evitar a magia desejo e magias ou efeitos de poder similar usados para afetar a mente do alvo ou para adquirir informações sobre ele.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "nuvem-incendiaria",
    "name": "Nuvem Incendiária",
    "level": 8,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma nuvem de fumaça rodopiante que dispara brasas incandescentes aparece numa esfera de 6 metros [20 feet] centrada num ponto, dentro do alcance. A nuvem se espalha, dobrando esquinas, e gera escuridão densa. Ela permanece pela duração ou até que um vento de velocidade moderada ou mais forte (pelo menos 15 quilômetros [10 miles] por hora) a disperse. Quando a nuvem aparece, cada criatura deve realizar um teste de resistência de Destreza. Uma criatura sofre 10d8 de dano de fogo se falhar na resistência ou metade desse dano se passar. Uma criatura deve, também, realizar um teste de resistência quando entrar na área da magia pela primeira vez num turno ou terminar seu turno nela. A nuvem se afasta 3 metros [10 feet] de você numa direção, que você escolheu, no começo de cada um dos seus turnos.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "palavra-de-poder-atordoar",
    "name": "Palavra De Poder Atordoar",
    "level": 8,
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
    "description": "Você pronuncia uma palavra de poder que pode oprimir a mente de uma criatura que você possa ver, dentro do alcance, deixando-a estupefata. Se o alvo escolhido estiver com 150 pontos de vida ou menos, ele ficará atordoado. Do contrário, essa magia não produz efeito. O alvo atordoado deve realizar um teste de resistência de Constituição no final de cada um dos turnos dele. Se obtiver sucesso na resistência, o efeito de atordoamento termina.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "semiplano",
    "name": "Semiplano",
    "level": 8,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": false,
      "somatic": true,
      "material": false
    },
    "description": "Você cria uma porta umbral em uma superfície sólida e lisa que você possa ver, dentro do alcance. A porta é grande o suficiente para permitir a passagem de criaturas Médias sem dificuldade. Quando aberta, a porta levará a um semiplano que parece uma sala vazia de 9 metros quadrados [30 feet square] de dimensão, feita de madeira ou pedra. Quando a magia termina, a porta desaparece e, qualquer criatura ou objeto dentro do semiplano, permanecerá preso lá, a medida que a porta desaparece do outro lado. Cada vez que você conjura essa magia, você pode criar um novo semiplano ou fazer a porta umbral se conectar a um semiplano que você tenha criado em uma conjuração anterior dessa magia. Além disso, se você conhecer a natureza e conteúdo do semiplano criado através da conjuração dessa magia por outra criatura, você pode fazer com que a porta umbral se conecte a esse semiplano.",
    "classes": [
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "terremoto",
    "name": "Terremoto",
    "level": 8,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "150 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de poeira, uma pedra e um pedaço de barro"
    },
    "description": "Você cria um distúrbio sísmico num ponto no solo, que você possa ver dentro do alcance. Pela duração, um tremor intenso rompe o solo em um círculo com 30 metros [100 feet] de raio centrado no ponto e sacode criaturas e estruturas em contato com o chão na área. O solo na área torna-se terreno difícil. Cada criatura no solo que estiver se concentrando, deve realizar um teste de resistência de Constituição. Se falha na resistência, a concentração da criatura é interrompida. Quando você conjura essa magia, e ao final de cada turno que você gastar se concentrando nela, cada criatura no solo na área deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura será derrubada no chão. Essa magia pode ter efeitos adicionais a depender do terreno na área, como determinado pelo Mestre. Fissuras. Fissuras se abrem por toda área da magia, no começo do seu próximo turno, após você conjurar a magia. Um total de 1d6 dessas fissuras se abrem em locais escolhidos pelo Mestre. Cada um tem 1d10 x 3 metros [10 feet] de profundidade, 3 metros [10 feet] de largura e se estende de uma extremidade até o lado oposto da área da magia. Uma criatura que estiver em um ponto onde uma fissura se abriu deve ser bem sucedido num teste de resistência de Destreza ou cairá dentro dela. Uma criatura que obtenha sucesso na resistência se move com a margem da fissura, à medida que ela se abre. Uma fissura que se abra abaixo de uma estrutura faz com que ela, automaticamente, desmorone (veja abaixo). Estruturas. O tremor causa 50 de dano de concussão a qualquer estrutura em contato com o solo na área, quando você conjurar a magia e, no início de cada turno até a magia terminar. Se a estrutura cair a 0 pontos de vida, ela desmorona e, potencialmente, fere criaturas próximas. Uma criatura a uma distância inferior a metade da altura da estrutura deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura sofrerá 5d6 de dano de concussão, cairá no chão e estará soterrada nos escombros, precisando de um teste de Força (Atletismo) com CD 20, usando uma ação, para escapar. O Mestre pode ajustar a CD para cima ou para baixo, dependendo da natureza dos escombros. Se obtiver sucesso na resistência, a criatura sofre metade do dano e não estará caída ou soterrada.",
    "classes": [
      "Clérigo",
      "Druida",
      "Feiticeiro"
    ]
  }
];
