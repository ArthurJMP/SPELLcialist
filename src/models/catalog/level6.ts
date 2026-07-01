import { Spell } from '../spell';

export const level6Spells: Spell[] = [
  {
    "id": "aliado-planar",
    "name": "Aliado Planar",
    "level": 6,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você suplica a uma entidade transcendental por ajuda. O ser deve ser conhecido por você: seu deus, um primordial, um príncipe demônio ou algum outro ser de poder cósmico. Essa entidade envia um celestial, um corruptor ou um elemental leal a ela para ajudar você, fazendo a criatura aparecer em um espaço desocupado dentro do alcance. Se você conhecer o nome de uma criatura especifica, você pode falar o nome quando conjurar essa magia para requisitar essa criatura, do contrário, você pode receber uma criatura diferente de qualquer forma (à escolha do Mestre). Quando a criatura aparecer, ela não está sob nenhuma compulsão para se comportar de um modo em particular. Você pode pedir a criatura que realize um serviço em troca de um pagamento, mas ela não é obrigada a fazê-lo. A tarefa solicitada pode variar de simples (carregue-nos voando para o outro lado do abismo ou nos ajude a lutar essa batalha) a complexa (espione nossos inimigos ou nos proteja durante nossa incursão na masmorra). Você deve ser capaz de se comunicar com a criatura para barganhar os serviços dela. O pagamento pode ser feito de várias formas. Um celestial pode requerer uma generosa doação de ouro ou itens mágicos para um templo aliado, enquanto que um corruptor pode exigir um sacrifício vivo ou uma parte dos espólios. Algumas criaturas podem trocar seus serviços por uma missão feita por você. Como regra geral, uma tarefa que possa ser medida em minutos, exigirá um pagamento de 100 po por minuto. Uma tarefa medida em horas exigirá 1.000 po por hora. E uma tarefa medida em dias (até 10 dias) exigirá 10.000 po por dia. O Mestre pode ajustar esses pagamentos baseado nas circunstâncias pelas quais a magia foi conjurada. Se a tarefa estiver de acordo com o caráter da criatura, o pagamento pode ser reduzido à metade, ou mesmo dispensado. Tarefas que não proporcionem perigo, tipicamente requerem apenas metade do pagamento sugerido, enquanto que tarefas especialmente perigosas podem exigir um grande presente. As criaturas raramente aceitarão tarefas que pareçam suicidas. Após a criatura completar a tarefa ou quando a duração acordada para o serviço expirar, a criatura retornará para seu plano natal depois de relatar sua partida a você, se apropriado para a tarefa e se possível. Se você não for capaz de acertar um preço para os serviços da criatura, ela imediatamente voltará para o seu plano natal. Uma criatura convidada para se juntar ao seu grupo, conta como um membro dele, recebendo sua parte total na premiação de pontos de experiência.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "ataque-visual",
    "name": "Ataque Visual",
    "level": 6,
    "school": "Necromancia",
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
    "description": "Pela duração da magia, seus olhos se tornam um vazio escuro imbuído com um poder terrível. Uma criatura a sua escolha dentro de 18 metros [60 feet] de você que você possa ver precisa ser bem sucedido em um teste de resistência de Sabedoria ou será afetado por um dos seguintes efeitos a sua escolha pela duração. Em cada um dos seus turnos até que a magia termine, você pode usar sua ação para mirar outra criatura, mas não pode mirar uma criatura novamente se ela foi vem sucedida em um teste de resistência contra este conjuração de ataque visual. Adormecer. O alvo cai inconsciente. Ele acorda se sofrer qualquer dano ou se outra criatura usar sua ação para sacudir o adormecido até acordá-lo. Apavorar. O alvo está amedrontado. Em cada um dos turnos dele, a criatura amedrontada deve realizar a ação de Disparada e se mover para longe de você pela rota segura mais curta disponível, a não ser que não haja lugar para se mover. Se o alvo se mover para um local a, pelo menos, 18 metros [60 feet] de distância de você onde ela não possa mais te ver, esse efeito termina. Adoecer. O alvo tem desvantagem nas jogadas de ataque e testes de habilidade. No final de cada um dos turnos dele, ele pode realizar outro teste de resistência de Sabedoria. Se for bem sucedido, o efeito termina.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "banquete-de-herois",
    "name": "Banquete De Heróis",
    "level": 6,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Minutos",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma tigela encrustada de gemas"
    },
    "description": "Você traz um grande banquete, incluindo comida e bebida magnificas. O banquete leva 1 hora para ser consumido e desaparece ao final desse tempo e os efeitos benéficos não se aplicam até essa hora terminar. Até doze criaturas podem participar do banquete. Uma criatura que participe do banquete ganha diversos benefícios. A criatura é curada de todas as doenças e venenos, torna-se imune a veneno e a ser amedrontada e faz todos os seus testes de resistência de Sabedoria com vantagem. Seu máximo de pontos de vida também aumenta em 2d10 e ela ganha a mesma quantidade de pontos de vida. Esses benefícios duram por 24 horas.",
    "classes": [
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "barreira-de-laminas",
    "name": "Barreira De Lâminas",
    "level": 6,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Cortante",
    "currentDamageType": "Cortante",
    "castingTime": "1 Ação",
    "range": "27 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você cria uma muralha vertical de lâminas giratórias, afiadas como navalhas, feitas de energia mágica. A muralha aparece dentro do alcance e permanece pela duração. Você pode fazer uma muralha reta de até 30 metros [100 feet] de comprimento por 6 metros de altura [20-foot-tall] e 1,5 metro [5 feet] de largura ou uma muralha anelar com até 18 metros [60 feet] de diâmetro, 6 metros de altura [20-foot-tall] e 1,5 metro [5 feet] de largura. A muralha confere três-quartos de cobertura a criaturas atrás dela e seu espaço é terreno difícil. Quando uma criatura entrar a área da muralha pela primeira vez em um turno, ou começar seu turno nela, a criatura deve realizar um teste de resistência de Destreza. Se falhar, a criatura sofrerá 6d10 de dano cortante. Em um sucesso, a criatura sofre metade desse dano.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "caminhar-no-vento",
    "name": "Caminhar No Vento",
    "level": 6,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Cortante",
    "currentDamageType": "Cortante",
    "castingTime": "1 Minutos",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "fogo e água benta"
    },
    "description": "Você e até dez criaturas voluntária que você possa ver, dentro do alcance, assumem uma forma gasosa pela duração, parecidas com pedaços de nuvem. Enquanto estiver na forma de nuvem, uma criatura tem deslocamento de voo de 90 metros [300 feet] e tem resistência a dano de concussão, cortante e perfurante de ataques não-mágicos. As únicas ações que uma criatura pode realizar nessa forma são a ação de Disparada ou para reverter a sua forma normal. Reverter leva 1 minuto, período pelo qual a criatura estará incapacitada e não poderá se mover. Até a magia acabar, uma criatura pode reverter para a forma de nuvem, o que também requer a transformação de 1 minuto. Se uma criatura estiver na forma de nuvem e voando quando o efeito acabar, a criatura descerá a 18 metros [60 feet] por rodada por 1 minuto, até aterrissar na solo, o que é feito com segurança. Se ela não puder aterrissar em 1 minuto, a criatura cairá a distância restante.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "carne-para-pedra",
    "name": "Carne Para Pedra",
    "level": 6,
    "school": "Transmutação",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma pitada de cal, água e terra"
    },
    "description": "Você tenta transformar uma criatura que você possa ver, dentro do alcance, em pedra. Se o corpo do alvo for feito de carne, a criatura deve realizar um teste de resistência de Constituição. Em caso de falha, ela ficará impedida, à medida que sua carne começa a endurecer. Se obtiver sucesso, a criatura não é afetada. Uma criatura impedida por essa magia deve realizar outro teste de resistência de Constituição no final de cada um dos turnos dela. Se obtiver sucesso na resistência contra essa magia três vezes, a magia termina. Se ela falhar no teste de resistência três vezes, ela se torna pedra é afetada pela condição petrificado pela duração. Os sucessos e falhas não precisam ser consecutivos; anote ambos os resultados até o alvo acumular três de mesmo tipo. Se a criatura for quebrada fisicamente enquanto petrificada, ela sofre deformidades similares se for revertida ao seu estado original. Se você mantiver sua concentração nessa magia durante toda a duração possível, a criatura é transformada em pedra até o efeito ser removido.",
    "classes": [
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "circulo-da-morte",
    "name": "Círculo Da Morte",
    "level": 6,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Necrótico",
    "currentDamageType": "Necrótico",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "o pó de uma pérola negra esmagada"
    },
    "description": "Uma esfera de energia negativa ondula em um raio de 18 metros [60 feet] de um ponto ao alcance. Cada criatura na área deve realizar um teste de resistência de Constituição. Um alvo sofre 8d6 de dano necrótico se falhar no seu teste de resistência, ou metade desse dano se passar. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 2d6 para cada nível do espaço acima do 6°.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "conjurar-fada",
    "name": "Conjurar Fada",
    "level": 6,
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
    "description": "Você invoca uma criatura feérica de nível de desafio 6 ou inferior ou um espírito feérico que assume a forma de uma besta de nível de desafio 6 ou inferior. Ela aparece num espaço desocupado que você possa ver dentro do alcance. A criatura feérica desaparece se cair a 0 pontos de vida ou quando a magia acabar. A criatura feérica é amigável a você e a seus companheiros pela duração. Role a iniciativa para a criatura, que age no seu próprio turno. Ela obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua), contanto que não violem sua tendência. Se você não emitir nenhum comando a ela, ela se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação. Se sua concentração for interrompida, a criatura feérica não desaparece. Ao invés disso, você perde o controle sobre a criatura feérica e ela se torna hostil a você e aos seus companheiros, e poderá atacar. Uma criatura feérica fora de controle não pode ser dispensada por você, ela desaparece 1 hora depois de você ter a invocada. O Mestre possui as estatísticas da criatura feérica. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o nível de desafio aumenta em 1 para cada nível do espaço acima do 6°.",
    "classes": [
      "Bruxo",
      "Druida"
    ]
  },
  {
    "id": "contingencia",
    "name": "Contingência",
    "level": 6,
    "school": "Evocação",
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
      "materialDescription": "uma estátua sua esculpida em marfim e decorada com gemas"
    },
    "description": "Escolha uma magia de 5° nível ou inferior que você possa conjurar, que tenha um tempo de conjuração de 1 ação e que possa ter você como alvo. Você conjura essa magia – chamada de magia contingente – como parte da conjuração de contingência, gastando espaços de magia para ambas, mas a magia contingente não tem efeito imediato. Ao invés disso, ela se ativa quando uma certa circunstância ocorre. Você descreve a circunstância quando conjura as duas magias. Por exemplo, uma contingência conjurada com respirar na água pode estipular que respirar na água se ative quando você estiver imerso em água ou um líquido similar. A magia contingente se ativa imediatamente depois da circunstância ser satisfeita pela primeira vez, quer você queira, quer não, e a contingência termina. A magia contingente afeta apenas você, mesmo que ela normalmente possa afetar outros alvos. Você pode ter apenas uma contingência ativa por vez. Se você conjurar essa magia novamente, o efeito da outra magia contingência termina. Além disso, a contingência também termina em você se os componentes materiais dela não estiverem mais com você.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "corrente-de-relampagos",
    "name": "Corrente De Relâmpagos",
    "level": 6,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Raio",
    "currentDamageType": "Raio",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de pelo; um pedaço de âmbar, vidro ou uma haste de cristal; e três alfinetes de prata"
    },
    "description": "Você cria um raio elétrico que atinge um alvo, à sua escolha, que você possa ver dentro do alcance. Três raios saltam do alvo para até três outros alvos, cada um a não mais de 9 metros [30 feet] do alvo primário. Um alvo pode ser uma criatura ou um objeto e só pode ser alvo de um único desses raios. Um alvo deve realizar um teste de resistência de Destreza. O alvo sofre 10d8 de dano elétrico se falhar no teste ou metade desse dano se for bem sucedido. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, um raio adicional salta do alvo primário para outro alvo para cada nível do espaço acima do 6°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "criar-mortos",
    "name": "Criar Mortos",
    "level": 6,
    "school": "Necromancia",
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
      "materialDescription": "para cada corpo, um pote de barro cheio de terra de sepultura, um pote de barro cheio de água salobra, e uma ônix negra"
    },
    "description": "Você só pode conjurar essa magia durante a noite. Escolha até três corpos de humanoides Médios ou Pequenos dentro do alcance. Cada corpo se torna um carniçal sob seu controle. (O Mestre tem as estatísticas de jogo das criaturas.) Com uma ação bônus, em cada um dos seus turnos, você pode comandar mentalmente qualquer criatura que você animou com essa magia, se a criatura estiver a até 36 metros [20 feet] de você (se você controla diversas criaturas, você pode comandar qualquer uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui-la até a tarefa estar concluída. A criatura fica sob seu controle por 24 horas, depois disso ela para de obedecer aos seus comandos. Para manter o controle da criatura por mais 24 horas, você deve conjurar essa magia na criatura novamente, antes das 24 horas atuais terminarem. Esse uso da magia recupera seu controle sobre até três criaturas que você tenha animado com essa magia, ao invés de animar novas. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível, você pode animar ou recuperar o controle de quatro carniçais. Quando você conjura essa magia usando um espaço de magia de 8° nível, você pode animar ou recuperar o controle de cinco carniçais ou dois lívidos ou aparições. Quando você conjurar essa magia usando um espaço de magia de 9° nível, você pode animar ou recuperar o controle de seis carniçais, três lívidos ou aparições ou duas múmias.",
    "classes": [
      "Bruxo",
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "cura-completa",
    "name": "Cura Completa",
    "level": 6,
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
    "description": "Escolha uma criatura que você possa ver, dentro do alcance. Um surto de energia positiva banha a criatura, fazendo-a recuperar 70 pontos de vida. Essa magia também acaba com efeitos de cegueira, surdez e qualquer doença que estejam afetando o alvo. Essa magia não tem efeito em constructos ou mortos-vivos. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, a quantidade de cura aumenta em 10 para cada nível do espaço acima do 6°.",
    "classes": [
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "danca-irresistivel",
    "name": "Dança Irresistível",
    "level": 6,
    "school": "Encantamento",
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
    "description": "Escolha uma criatura que você possa ver, dentro do alcance. O alvo começa a dançar comicamente no lugar: rodopiando, batendo os pés e saltitando pela duração. As criaturas que não podem ser enfeitiçadas são imunes a essa magia. Uma criatura dançando deve usar todo o seu movimento para dançar sem abandonar seu espaço e tem desvantagem nos testes de resistência de Destreza e nas jogadas de ataque. Enquanto o alvo estiver sob efeito dessa magia, as outras criaturas terão vantagem nas jogadas de ataque contra ele. Com uma ação, uma criatura dançando pode realizar um teste de resistência de Sabedoria para recuperar controle sobre si mesmo. Num sucesso na resistência, a magia acaba.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "desintegrar",
    "name": "Desintegrar",
    "level": 6,
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
      "materialDescription": "um ímã e uma pitada de poeira"
    },
    "description": "Um fino raio esverdeado é lançado da ponta do seu dedo em um alvo que você possa ver dentro do alcance. O alvo pode ser uma criatura, um objeto ou uma criação de energia mágica, como uma muralha criada por muralha de energia. Uma criatura afetada por essa magia deve realizar um teste de resistência de Destreza. Se falhar na resistência, o alvo sofrerá 10d6 + 40 de dano de energia. Se esse dano reduzir os pontos de vida do alvo a 0, ele será desintegrado. Uma criatura desintegrada e tudo que ela está vestindo ou carregando, exceto itens mágicos, são reduzidos a uma pilha de um fino pó acinzentado. A criatura só pode ser trazida de volta a vida por meio das magias ressurreição verdadeira ou desejo. Essa magia desintegra, automaticamente, um objeto não-mágico Grande ou menor ou uma criação de energia mágica. Se o alvo for um objeto ou criação de energia Enorme ou maior, a magia desintegra uma porção de 3 metros cúbicos [10-foot cube] dele. Um item mágico não pode ser afetado por essa magia. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 3d6 para cada nível do espaço acima do 6°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "doenca-plena",
    "name": "Doença Plena",
    "level": 6,
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
    "description": "Você introduz uma doença virulenta em uma criatura que você puder ver, dentro do alcance. O alvo deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele sofre 14d6 de dano necrótico ou metade desse dano se obtiver sucesso na resistência. O dano não pode reduzir os pontos de vida do alvo abaixo de 1. Se o alvo falhar no teste de resistência, seu máximo de pontos de vida é reduzidos por 1 hora em uma quantidade igual ao dano necrótico causado. Qualquer efeito que remova uma doença permitirá que o máximo de pontos de vida do alvo volte ao normal antes do período indicado.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "encontrar-o-caminho",
    "name": "Encontrar O Caminho",
    "level": 6,
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
      "materialDescription": "um objeto do lugar que você deseja encontrar e um conjunto de ferramentas de adivinhação – como ossos, bastões de marfim, dentes ou runas esculpidas –"
    },
    "description": "Essa magia permite que você encontre a rota física mais curta e direta para um local especifico estático, que você seja familiar, no mesmo plano de existência. Se você denominar um destino em outro plano de existência, um local que se mova (como uma fortaleza andante) ou um destino que não seja especifico (como “o covil do dragão verde”), a magia falha. Pela duração, contanto que você esteja no mesmo plano de existência do destino, você saberá o quão longe ele está e em que direção ele se encontra. Enquanto estiver viajando, sempre que você se deparar com uma escolha de trajetória no caminho, você automaticamente determina qual trajetória tem a rota mais curta e direta (mas não necessariamente a rota mais segura) para o destino.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "esfera-congelante",
    "name": "Esfera Congelante",
    "level": 6,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "90 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma pequena esfera de cristal"
    },
    "description": "Um globo frigido de energia gelada é arremessado das pontas dos seus dedos para um ponto, à sua escolha, dentro do alcance, onde ele explode numa esfera de 18 metros [60 feet] de raio. Cada criatura dentro da área deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofre 10d6 de dano de frio. Se obtiver sucesso na resistência, ela sofre metade desse dano. Se o globo atingir um corpo de água ou liquido composto principalmente de água (não incluindo criaturas feitas de água), ele congela o líquido até uma profundidade de 15 centímetros [6 inches] numa área de 9 metros quadrados [30 feet square]. Esse gelo dura por 1 minuto. Criaturas que estiverem nadando na superfície de água congelada estarão presas no gelo. Uma criatura presa pode usar sua ação para realizar um teste de Força contra a CD da magia para se libertar. Você pode evitar de disparar o globo após completar a magia, se desejar. Um pequeno globo, do tamanho de uma pedra de funda, frio ao toque, aparece em sua mão. A qualquer momento, você ou uma criatura a quem você entregar o globo, pode arremessa-lo (a uma distância de 12 metros [40 feet]) ou atirá-lo com uma funda (ao alcance normal da funda). Ele se despedaça no impacto, produzindo o mesmo efeito da conjuração normal da magia. Você pode, também, soltar o globo no chão sem despedaça-lo. Após 1 minuto, se o globo ainda não tiver se despedaçado, ele explode. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 6°.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "globo-de-invulnerabilidade",
    "name": "Globo De Invulnerabilidade",
    "level": 6,
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
      "materialDescription": "uma perola de vidro ou cristal"
    },
    "description": "Uma barreira levemente cintilante e imóvel surge em um raio de 3 metros [10-foot] ao redor de você e permanece pela duração. Qualquer magia de 5° nível ou inferior conjurada de fora da barreira não poderá afetar as criaturas ou objetos dentro dela, mesmo que a magia seja conjurada usando um espaço de magia de nível superior. Tais magias podem ter como alvo criaturas e objetos dentro da barreira, mas a magia não produz nenhum efeito neles. Similarmente, a área dentro da barreira é excluída das áreas afetadas por tais magias. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, a barreira bloqueia magias de um nível superior para cada nível do espaço acima do 6°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "ilusao-programada",
    "name": "Ilusão Programada",
    "level": 6,
    "school": "Ilusão",
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
      "materialDescription": "um pouco de lã e pó de jade"
    },
    "description": "Você cria uma ilusão de um objeto, uma criatura ou de algum outro fenômeno visível, dentro do alcance, que se ativa quando uma condição especifica ocorre. A ilusão é imperceptível até esse momento. Ela não pode ter mais de 9 metros cúbicos [30-foot cube] e você decide, quando conjura a magia, como a ilusão se comporta e quais sons ela faz. Essa performance roteirizada por durar até 5 minutos. Quando a condição que você especificou ocorrer, a ilusão surge do nada e age da maneira que você descreveu. Uma vez que a ilusão tenha acabado de agir, ela desaparece e permanece dormente por 10 minutos. Após desse período, a ilusão pode se ativar novamente. A condição de ativação pode ser tão genérica ou tão detalhada quando você quiser, apesar de ela precisar ser baseada em condições visuais ou audíveis que ocorram a até 9 metros [30 feet] da área. Por exemplo, você poderia criar uma ilusão, de si mesmo, que aparecerá e avisará a outros que tentarem abrir a porta com armadilha ou você pode programar a ilusão para se ativar apenas quando uma criatura disser a palavra ou frase correta. Interação física com a imagem revelará ela como sendo uma ilusão, já que as coisas podem atravessa-la. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão sendo bem sucedida num teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Se a criatura discernir a ilusão como ela é, a criatura poderá ver através da imagem e qualquer barulho que ela fizer soará oco para a criatura.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "invocacao-instantanea",
    "name": "Invocação Instantânea",
    "level": 6,
    "school": "Conjuração",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma safira"
    },
    "description": "Você toca um objeto pesando 5 quilos [10 pounds] ou menos com maior dimensão de 1,8 metro [6 feet] ou menos. A magia deixa uma marca invisível na sua superfície e grava invisivelmente o nome do item na safira que você usou como componente material. A cada vez que você conjurar essa magia, você deve usar uma safira diferente. A qualquer momento, posteriormente, você pode usar sua ação para falar o nome do item e esmagar a safira. O item aparece instantaneamente em suas mãos, independentemente de distâncias físicas ou planares, e a magia termina. Se outra criatura estiver segurando ou carregando o item, esmagar a safira não irá transportar o item até você, ao invés disso, você descobre quem é a criatura possuindo o objeto e onde, vagamente, a criatura está localizada no momento. Dissipar magia ou um efeito similar aplicado com sucesso na safira, termina o efeito da magia.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "mover-terra",
    "name": "Mover Terra",
    "level": 6,
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
      "materialDescription": "uma lâmina de ferro e uma pequena sacola contendo uma mistura de solos – argila, barro e areia"
    },
    "description": "Escolha uma área de terreno não maior que 12 metros [40 feet] de lado, dentro do alcance. Você pode remodelar terra, areia ou barro na área da maneira que quiser, pera duração. Você pode erguer ou abaixar a elevação da área, criar ou preencher valas, levantar ou deitar um muro ou formar uma coluna. A extensão de tais mudanças não pode exceder metade da maior dimensão da área. Portanto, se você afetar um quadrado de 12 metros [40-foot square], você poderá criar um pilar de até 6 metros de altura [20-foot-tall], erguer ou abaixar a elevação do quadrado em até 6 metros [20 feet] ou cavar uma vala de até 6 metros [20 feet] de profundidade e assim por diante. Leva 10 minutos para completar essas modificações. Ao final de cada 10 minutos que você gastar se concentrando nessa magia, você pode escolher uma nova área de terreno para afetar. Devido às transformações no terreno ocorrerem lentamente, as criaturas na área normalmente não podem ficar presas ou sofrer dano pela movimentação do solo. Essa magia pode manipular rocha natural ou construções de pedra. Pedra e estruturas deslocam-se para acomodar o novo terreno. Se a forma pela qual você modela o terreno poderia tornar uma estrutura instável, ela poderá desmoronar. Similarmente, essa magia não afeta diretamente o crescimento da vegetação. A terra movida carrega quaisquer plantas no caminho junto com ela.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "muralha-de-espinhos",
    "name": "Muralha De Espinhos",
    "level": 6,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Cortante",
    "currentDamageType": "Cortante",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um punhado de espinhos"
    },
    "description": "Você cria uma muralha de arbustos robustos, flexíveis, emaranhados e eriçados com espinhos pontudos. A muralha aparece, dentro do alcance, em uma superfície sólida e permanece pela duração. Você escolher fazer a muralha com até 18 metros [60 feet] de comprimento, 3 metros [10 feet] de altura e 1,5 metro [5 feet] de espessura ou um círculo com 6 metros [20 feet] de diâmetro e até 6 metros de altura [20-foot-tall] com 1,5 metro [5 feet] de espessura. A muralha bloqueia a visão. Quando a muralha aparece, cada criatura dentro da área deve realizar um teste de resistência de Destreza. Se falhar na resistência, uma criatura sofrerá 7d8 de dano perfurante ou metade desse dano se obtiver sucesso. Uma criatura pode se mover através da muralha, embora lentamente e dolorosamente. Para cada 1,5 metro [5 feet] que a criatura atravesse da muralha, ela deve gastar 6 metros [20 feet] de movimento. Além disso, a primeira vez que a criatura entrar na muralha num turno ou termina o turno nela, ela deve fazer um teste de resistência de Destreza. Ela sofre 7d8 de dano cortante se falhar na resistência ou metade desse dano se obtiver sucesso. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, ambos os tipos de dano aumentam em 1d8 para cada nível do espaço acima do 6°.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "muralha-de-gelo",
    "name": "Muralha De Gelo",
    "level": 6,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Gelo",
    "currentDamageType": "Gelo",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pequeno pedaço de quartzo"
    },
    "description": "Você cria uma muralha de gelo numa superfície sólida dentro do alcance. Você pode molda-la em uma cúpula hemisférica ou uma esfera com um raio de até dez painéis de 3 metros [10 feet] por 3 metros [10 feet]. Cada painel deve ser contíguo com outro painel. Em qualquer formato, a muralha terá 30 centímetros [1 foot] de espessura. Ela permanece pela duração. Se a muralha passar pelo espaço ocupado por uma criatura quando ela surgir, a criatura na área será empurrada para um dos lados da muralha (você escolhe qual lado) e deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura sofrerá 10d6 de dano de frio ou metade desse dano se passar na resistência. A muralha é um objeto que pode ser danificado e então, partido. Ela tem CA 12, 30 pontos de vida por seção de 3 metros [10 feet] e é vulnerável a dano de fogo. Reduzir os pontos de vida de uma seção de 3 metros [10 feet] da muralha a 0 destruirá essa seção, deixando para trás uma camada de ar gelado no espaço ocupado pela muralha. Uma criatura que atravesse a camada de ar gelado pela primeira vez num turno, deve realizar um teste de resistência de Constituição. Essa criatura sofrerá 5d6 de dano de frio se fracassar na resistência, ou metade desse dano se obtiver sucesso. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano causado quando ela aparece aumenta em 2d6 e o dano por atravessar através da camada de ar gelado aumenta em 1d6 para cada nível do espaço acima do 6°.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "palavra-de-recordacao",
    "name": "Palavra De Recordação",
    "level": 6,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "2 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você e até cinco criaturas voluntária a 1,5 metro [5 feet] de você, instantaneamente são teletransportadas para um santuário previamente designado. Você e qualquer criatura que se teletransportar com você, aparece no espaço desocupado mais próximo do ponto que você designou quando preparou seu santuário (veja abaixo). Se você conjurar essa magia sem ter preparado um santuário primeiro, a magia não funciona. Você deve designar um santuário na conjuração dessa magia dentro de um local, como um templo dedicado ou fortemente ligado a sua divindade. Se você tentar conjurar essa magia dessa forma em uma área que não seja dedicada à sua divindade, a magia não funciona.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "proibicao",
    "name": "Proibição",
    "level": 6,
    "school": "Abjuração",
    "isRitual": true,
    "originalDamageType": "Radiante",
    "currentDamageType": "Radiante",
    "castingTime": "1 Minutos",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma borrifada de água benta, incensos raros e pó de rubi"
    },
    "description": "Você cria uma defesa contra viagem mágica que protege até 3.500 metros quadrados [40.000 square feet] de solo até 9 metros [30 feet] de altura do solo. Pela duração, criaturas não conseguem se teletransportar para dentro da área ou usar portais, como os criados pela magia portal, para entrar na área. A magia protege a área contra viagem planar e, portanto, impede criaturas de acessarem a área por meio do Plano Astra, Plano Etéreo, Faéria, Umbra ou pela magia viagem planar. Além disso, a magia causa dano a certos tipos de criatura, à sua escolha, quando a conjurar. Escolha um ou mais dentre os seguintes: celestiais, corruptores, elementais, fadas ou mortos-vivos. Quando uma criatura escolhida entrar na área da magia pela primeira vez em um turno ou começa seu turno nela, a criatura sofre 5d6 de dano radiante ou necrótico (à sua escolha, quando você conjura a magia). Quando você conjura essa magia, você pode definir uma senha. Uma criatura que falar a senha quando entrar na área não sofrerá dano dessa magia. A área da magia não pode sobrepor a área de outra magia proibição. Se você conjurar proibição a cada dia por 30 dias no mesmo local, a magia durará até ser dissipada, e os componentes materiais serão consumidos apenas na última conjuração.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "proteger-fortaleza",
    "name": "Proteger Fortaleza",
    "level": 6,
    "school": "Abjuração",
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
      "materialDescription": "um incenso aceso, uma porção de enxofre e óleo, uma corda amarrada, uma porção de sangue de tribulo brutal e um pequeno bastão de prata"
    },
    "description": "Você cria uma defesa que protege até 225 metros quadrados [2.500 square feet] de espaço (uma área de um quadrado de 15 metros [50 feet] ou cem quadrados de 1,5 metro [5 feet] ou vinte e cinco quadrados de 3 metros [10 feet]). A área protegida pode ter até 6 metros de altura [20-foot-tall], no formado que você desejar. Você pode proteger diversos armazéns de uma fortaleza dividindo a área entre eles, contanto que você possa andar em cada área contígua enquanto estiver conjurando a magia. Quando você conjura essa magia, você pode especificar indivíduos que não serão afetados por qualquer dos efeitos que você escolher. Você também pode especificar uma senha que, ao ser falada em voz alta, deixa o orador imune aos efeitos. Proteger fortaleza cria os seguintes efeitos dentro da área protegida. Corredores. Névoa preenche todos os corredores protegidos, tornando-os área de escuridão densa. Além disso, cada interseção ou passagem ramificada oferecendo uma escolha de direção, há 50 por cento de chance de uma criatura diferente de você acredite que está indo na direção oposta à que escolheu. Portas. Todas as portas na área protegida estão trancadas magicamente, como se estivessem seladas pela magia tranca arcana. Além disso, você pode cobrir até dez portas com uma ilusão (equivalente a função de objeto ilusório da magia ilusão menor) para fazê-las parecer seções simples da parede. Escadas. Teias preenchem todas as escadas na área protegida dotopo ao solo, como a magia teia. Esses fios voltam a crescer em 10minutos se forem queimados ou partidos enquanto proteger fortaleza durar. Outros Efeitos de Magia. Você pode colocar, à sua escolha, um dos seguintes efeitos mágicos dentro da área protegida de uma fortaleza.  A área protegida inteira irradia magia. Uma dissipar magia conjurada em uma área especifica, se for bem sucedida, remove apenas aquele efeito. Você pode criar uma estrutura, permanentemente, afetada por proteger fortaleza ao conjurar essa magia nela a cada dia por um ano.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "raio-solar",
    "name": "Raio Solar",
    "level": 6,
    "school": "Evocação",
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
      "materialDescription": "uma lente de aumento"
    },
    "description": "Um raio de luz brilhante surge da sua mão em uma linha de 18 metros [60 feet] de comprimento por 1,5 metro [5 feet] de largura. Cada criatura na linha deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 6d8 de dano radiante e ficará cega até seu próximo turno. Se passar na resistência, ela sofrerá metade desse dano e não ficará cega pela magia. Mortos-vivos e limos tem desvantagem nos seus testes de resistência. Você pode criar uma linha de radiação com sua ação em qualquer turno, até a magia acabar. Pela duração, uma fagulha de radiação luminosa brilha na sua mão. Ela emite luz plena num raio de 9 metros [30-foot radius] e penumbra por 9 metros [30 feet] adicionais. Essa luz é luz do sol.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "recipiente-arcano",
    "name": "Recipiente Arcano",
    "level": 6,
    "school": "Necromancia",
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
      "materialDescription": "uma gema, cristal, relicário ou algum outro tipo de recipiente ornamental"
    },
    "description": "Seu corpo entra em um estado catatônico, enquanto sua alma o abandona e entra num recipiente que você usa como componente material da magia. Enquanto sua alma permanecer no recipiente, você estará ciente do seu entorno como se você estivesse no espaço do recipiente. Você não pode se mover ou usar reações. A única ação que você pode realizar é projetar sua alma a até 30 metros [100 feet] do recipiente, tanto para retornar para o seu corpo (terminando a magia) ou para tentar possuir um corpo humanoide. Você pode tentar possuir qualquer humanoide a até 30 metros [100 feet] de você que você possa ver (criaturas protegidas pelas magias proteção contra o bem e mal ou círculo mágico não podem ser possuídas). O alvo deve realizar um teste de resistência de Carisma. Se falhar, sua alma se move para o corpo do alvo e a alma do alvo fica aprisionada no recipiente. Se obtiver sucesso, o alvo resiste aos seus esforços em possuí-lo e você não poderá tentar possuí-lo novamente por 24 horas. Uma vez que tenha possuído o corpo de uma criatura, você a controla. Suas estatísticas de jogo são substituídas pelas estatísticas da criatura, no entanto, você mantem sua tendência e seus valores de Inteligência, Sabedoria e Carisma. Você mantem os benefícios das suas características de classe. Se o alvo tiver quaisquer níveis de classe, você não pode usar quaisquer das características de classe dele. Nesse período, a alma da criatura possuída pode perceber do recipiente usando os sentidos dela, mas, no mais, não pode se mover ou realizar quaisquer ações. Enquanto estiver possuindo um corpo, você pode usar sua ação para retornar do corpo do hospedeiro para o recipiente se ele estiver a até 30 metros [100 feet] de você, devolvendo a alma da criatura hospedeira para o corpo dela. Se o corpo do hospedeiro morrer enquanto você estiver dentro dele, a criatura morre e você deve realizar um teste de resistência de Carisma contra a sua CD de conjuração. Se obtiver sucesso, você retorna ao recipiente se ele estiver a até 30 metros [100 feet] de você. Caso contrário, você morre. Se o recipiente for destruído ou a magia acabar, sua alma, imediatamente, retorna para o seu corpo. Se seu corpo estiver a mais de 30 metros [100 feet] de você ou se seu corpo estiver morto quando você tentar retornar para ele, você morre. Se a alma de outra criatura estiver no recipiente quando ele for destruído, a alma da criatura volta para o corpo dela se o corpo estiver vivo e a até 30 metros [100 feet] dela. Caso contrário, a criatura morre. Quando a magia acabar, o recipiente é destruído.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "sugestao-em-massa",
    "name": "Sugestão Em Massa",
    "level": 6,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": true,
      "materialDescription": "a língua de uma cobra e um pouco de favo de mel ou uma gota de óleo doce"
    },
    "description": "Você sugere um curso de atividade (limitado a uma ou duas sentenças) e, magicamente, influencia até dozes criaturas, à sua escolha, que você possa ver dentro do alcance e que possam ouvir e compreender você. Criaturas que não podem ser enfeitiçadas são imunes a esse efeito. A sugestão deve ser formulada de modo que o curso de ação soe razoável. Dizer para a criatura se esfaquear, se arremessar em uma lança, tocar fogo em si mesma ou fazer algum outro ato obviamente nocivo anulará o efeito da magia. Cada alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele seguirá o curso de ação que você descreveu, da melhor forma possível. O curso de ação sugerido pode continuar por toda a duração. Por exemplo, você poderia sugeria a um grupo de soldados que deem todo o seu dinheiro para o primeiro mendigo que encontrarem. Se a condição não for atingida antes da magia acabar, a atividade não é realizada. Se você ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina para aquela criatura. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível, a duração será de 10 dias. Quando você usar um espaço de magia de 8° nível, a duração será de 30 dias. Quando você usar um espaço de magia de 9° nível, a duração será de 1 ano e 1 dia.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "teletransporte-por-arvores",
    "name": "Teletransporte Por Árvores",
    "level": 6,
    "school": "Conjuração",
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
    "description": "Essa magia cria uma ligação mágica entre uma planta inanimada Grande ou maior, dentro do alcance, e outra planta a qualquer distância, no mesmo plano de existência. Você deve ter visto ou tocado a planta de destino, pelo menos uma vez antes. Pela duração, qualquer criatura pode entrar na planta alvo e sair da planta destino usando 1,5 metro [5 feet] de movimento.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "visao-da-verdade",
    "name": "Visão Da Verdade",
    "level": 6,
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
      "material": true,
      "materialDescription": "unguento para os olhos, feito de pó de cogumelo, açafrão e gordura,"
    },
    "description": "Essa magia concede a uma criatura voluntária tocada a habilidade de ver as coisas como elas realmente são. Pela duração, a criatura terá visão verdadeira, percebendo portas secretas escondidas por magia e podendo ver no Plano Etéreo, tudo num alcance de até 36 metros [120 feet].",
    "classes": [
      "Bardo",
      "Bruxo",
      "Clérigo",
      "Feiticeiro",
      "Mago"
    ]
  }
];
