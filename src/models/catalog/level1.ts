import { Spell } from '../spell';

export const level1Spells: Spell[] = [
  {
    "id": "alarme",
    "name": "Alarme",
    "level": 1,
    "school": "Conjuração",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um minúsculo sino e um pedaço de fino fio de prata"
    },
    "description": "Você coloca um alarme para intrusos desavisados. Escolha uma porta, uma janela ou uma área dentro do alcance que não seja maior que 6 metros cúbicos [20-foot cube]. Até a magia acabar, um alarme alerta você sempre que uma criatura Miúda ou maior tocarem ou entrarem na área protegida. Quando você conjura a magia, você pode designar as criaturas que não ativarão o alarme. Você também escolhe se o alarme será mental ou audível. Um alarme mental alerta você com um silvo na sua mente, se você estiver a até de 1,5 quilômetro [1 mile] da área protegida. Esse silvo acordará você se você estiver dormindo. Um alarme audível produz o som de um sino de mão por 10 minutos num raio de 18 metros [60 feet].",
    "classes": [
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "amizade-animal",
    "name": "Amizade Animal",
    "level": 1,
    "school": "Encantamento",
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
      "materialDescription": "um bocado de comida"
    },
    "description": "Essa magia deixa você convencer uma besta que você não quer prejudicar. Escolha uma besta que você possa ver dentro do alcance. Ela deve ver e ouvir você. Se a Inteligência da besta for 4 ou maior, a magia falha. Do contrário, a besta deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração da magia. Se você ou um dos seus companheiros ferir o alvo, a magia termina. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma besta adicional para cada nível do espaço acima do 1°.",
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "area-escorregadia",
    "name": "Área Escorregadia",
    "level": 1,
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
      "materialDescription": "um pouco de pele de porco ou manteiga"
    },
    "description": "Graxa escorregadia cobre o solo em um quadrado de 3 metros [10 feet] centrado em um ponto, dentro do alcance, tornando essa área em terreno difícil pela duração. Quando a graxa aparece, cada criatura de pé na área deve ser bem sucedida num teste de resistência de Destreza ou cairá no chão. Uma criatura que entre na área ou termine seu turno nela, deve ser bem sucedido num teste de resistência de Destreza ou cairá no chão.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "armadura-arcana",
    "name": "Armadura Arcana",
    "level": 1,
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
      "materialDescription": "um pedaço de couro curado"
    },
    "description": "Você toca uma criatura voluntária que não esteja vestindo armadura e uma energia mágica protetora a envolve até a magia acabar. A CA base do alvo se torna 13 + o modificador de Destreza dele. A magia acaba se o alvo colocar uma armadura ou se você dissipa-la usando uma ação.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "auxilio-divino",
    "name": "Auxílio Divino",
    "level": 1,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Radiante",
    "currentDamageType": "Radiante",
    "castingTime": "1 Ação bonus",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Sua oração fortalece você com radiação divina. Até o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra ao atingirem.",
    "classes": [
      "Paladino"
    ]
  },
  {
    "id": "bencao",
    "name": "Benção",
    "level": 1,
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
      "material": true,
      "materialDescription": "um borrifo de água benta"
    },
    "description": "Você abençoa até três criaturas, à sua escolha, dentro do alcance. Sempre que um alvo realizar uma jogada de ataque ou teste de resistência antes da magia acabar, o alvo pode jogar um d4 e adicionar o valor jogado ao ataque ou teste de resistência. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.",
    "classes": [
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "bom-fruto",
    "name": "Bom Fruto",
    "level": 1,
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
      "materialDescription": "um raminho de visco"
    },
    "description": "Até dez frutos aparecem na sua mão e são infundidos com magia pela duração. Uma criatura pode usar sua ação para comer um fruto. Comer um fruto restaura 1 ponto de vida e um fruto produz nutrientes suficientes para sustentar uma criatura por um dia. Os frutos perdem seu potencial se não forem consumidos dentro de 24 horas da conjuração dessa magia.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "comando",
    "name": "Comando",
    "level": 1,
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
    "description": "Você pronuncia uma palavra de comando para uma criatura que você possa ver dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou seguirá seu comando no próximo turno dele. A magia não tem efeito se o alvo for um morto-vivo, se ele não entender seu idioma ou se o comando for diretamente nocivo a ele. Alguns comandos típicos e seus efeitos a seguir. Você pode proferir um comando diferente dos descritos aqui. Se o fizer, o Mestre descreve como o alvo reage. Se o alvo não puder cumprir o comando, a magia termina. Aproxime-se. O alvo se move para próximo de você o máximo que puder na rota mais direta, terminando seu turno, se ele se mover a até 1,5 metro [5 feet] de você. Largue. O alvo larga o que quer que ele esteja segurando, e termina seu turno. Fuja. O alvo gasta seu turno se movendo para longe de você da forma mais rápida que puder. Deite-se. O alvo deita-se no chão e então, termina seu turno. Parado. O alvo não se move e não realiza nenhuma ação. Uma criatura voadora continua no alto, considerando que ela seja capaz de fazê-lo. Se ela tiver que se mover para continuar no alto, ela voa a mínima distância necessária para permanecer no ar. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a 9 metros [30 feet] entre si para serem afetadas.",
    "classes": [
      "Clérigo",
      "Paladino",
    ]
  },
  {
    "id": "compreender-idiomas",
    "name": "Compreender Idiomas",
    "level": 1,
    "school": "Adivinhação",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pitada de fuligem e sal"
    },
    "description": "Pela duração, você compreende o significado literal de qualquer idioma falado que você ouvir. Você também compreende qualquer idioma escrito que vir, mas você deve tocar a superfície onde as palavras estão escritas. Leva, aproximadamente, 1 minuto para ler uma página de texto. Essa magia não decifra mensagens secretas em textos ou glifos, como um selo arcano, que não seja parte de um idioma escrito.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "constricao",
    "name": "Constrição",
    "level": 1,
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
      "material": false
    },
    "description": "Ervas e vinhas poderosas brotam do solo num quadrado de 6 metros [20-foot square] a partir de um ponto dentro do alcance. Pela duração, essas plantas transformam o solo na área em terreno difícil. Uma criatura na área quando você conjurar a magia deve ser bem sucedida num teste de resistência de Força ou ficará impedida pelo emaranhado de plantas, até a magia acabar. Uma criatura impedida pelas plantas pode usar sua ação para realizar um teste de Força, contra a CD da magia. Se for bem sucedido, irá se libertar. Quando a magia termina, as plantas conjuradas murcharão.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "convocar-familiar",
    "name": "Convocar Familiar",
    "level": 1,
    "school": "Conjuração",
    "isRitual": true,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Horas",
    "range": "3 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "carvão, incenso e ervas"
    },
    "description": "Você adquire os serviços de uma familiar, um espírito que toma a forma de um animal, à sua escolha: aranha, caranguejo, cavalo marinho, coruja, corvo, doninha, gato, falcão, lagarto, morcego, peixe (arenque), polvo, rato, rã (sapo) ou serpente venenosa. Aparecendo em um espaço desocupado dentro do alcance, o familiar tem as mesmas estatísticas da forma escolhida, no entanto, ele é um celestial, corruptor ou fada (à sua escolha) ao invés de uma besta. Seu familiar age independentemente de você, mas ele sempre obedece aos seus comandos. Em combate, ele rola sua a própria iniciativa e age no seu próprio turno. Um familiar não pode atacar, mas ele pode realizar outras ações, como de costume. Quando um familiar cai a 0 pontos de vida, ele desaparece, não deixando qualquer corpo físico para trás. Ele reaparece depois de você conjurar essa magia novamente. Enquanto seu familiar estiver a até 30 metros [100 feet] de você, você pode se comunicar telepaticamente com ele. Além disso, com uma ação, você pode ver através dos olhos do familiar e ouvir através dos ouvidos dele, até o início do seu próximo turno, adquirindo os benefícios de qualquer sentido especial que o familiar possua. Durante esse período, você estará cego e surdo em relação aos seus próprios sentidos. Com uma ação, você pode, temporariamente, dispensar seu familiar. Ele desaparece dentro de uma bolsa dimensional onde ele aguarda sua convocação. Alternativamente, você pode dispensa-lo para sempre. Com uma ação, enquanto ele estiver temporariamente dispensado, você pode fazê-lo reaparecer em qualquer espaço desocupado a até 9 metros [30 feet] de você. Você não pode ter mais de um familiar por vez. Se você conjurar essa magia enquanto já tiver um familiar, ao invés disso, você faz seu familiar existente adotar uma nova forma. Escolha uma das formas da lista acima. Seu familiar se transforma na criatura escolhida. Finalmente, quando você conjura uma magia com alcance de toque, seu familiar pode transmitir a magia, como se ele tivesse conjurado ela. Seu familiar precisa estar a até 30 metros [100 feet] de você e deve usar a reação dele para transmitir a magia quando você a conjurar. Se a magia necessitar de uma jogada de ataque, você usa seu modificador de ataque para essa jogada.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "criar-ou-destruir-agua",
    "name": "Criar Ou Destruir Água",
    "level": 1,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma gota de água se estiver criando ou alguns grãos de areia se estiver destruindo"
    },
    "description": "Você pode tanto criar quanto destruir água. Criar Água. Você cria 30 litros [10 gallons] de água limpa dentro do alcance, em um recipiente aberto. Alternativamente, a água pode cair como chuva em um cubo de 9 metros [30-foot cube] dentro do alcance, extinguindo chamas expostas na área. Destruir Água. Você destrói até 30 litros [10 gallons] de água de um recipiente aberto dentro do alcance. Alternativamente, você pode destruir um nevoeiro em um cubo de 9 metros [30-foot cube] dentro do alcance. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode criar ou destruir 30 litros de água adicionais, ou o tamanho do cubo aumenta em 1,5 metro [5 feet], para cada nível do espaço acima do 1°.",
    "classes": [
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "curar-ferimentos",
    "name": "Curar Ferimentos",
    "level": 1,
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
      "material": false
    },
    "description": "Uma criatura que você tocar recupera uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjuração. Essa magia não produz efeito em mortos-vivos ou constructos. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 1°.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro"
    ]
  },
  {
    "id": "detectar-magia",
    "name": "Detectar Magia",
    "level": 1,
    "school": "Adivinhação",
    "isRitual": true,
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
    "description": "Pela duração, você sente a presença de magia a até 9 metros [30 feet] de você. Se você sentir magia dessa forma, você pode usar sua ação para ver uma aura suave em volta de qualquer criatura ou objeto visível, na área que carrega magia, e você descobre a escola de magia, se houver uma. A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Mago",
      "Paladino",
      "Patrulheiro"
    ]
  },
  {
    "id": "detectar-o-bem-e-mal",
    "name": "Detectar O Bem E Mal",
    "level": 1,
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
      "material": false
    },
    "description": "Pela duração, você sabe se existe uma aberração, celestial, corruptor, elemental, fada ou morto-vivo, a até 9 metros [30 feet] de você, assim como onde a criatura está localizada. Similarmente, você sabe se existe um local ou objeto, a até 9 metros [30 feet] de você, que tenha sido consagrado ou profanado magicamente. A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra.",
    "classes": [
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "detectar-veneno-e-doenca",
    "name": "Detectar Veneno E Doença",
    "level": 1,
    "school": "Adivinhação",
    "isRitual": true,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma folha de teixo"
    },
    "description": "Pela duração, você sente a presença e localização de venenos, criaturas venenosas e doenças a até 9 metros [30 feet] de você. Você também identifica o tipo de veneno, criatura venenosa ou doença em cada caso. A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra.",
    "classes": [
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro"
    ]
  },
  {
    "id": "disco-flutuante",
    "name": "Disco Flutuante",
    "level": 1,
    "school": "Conjuração",
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
      "materialDescription": "uma gota de mercúrio"
    },
    "description": "Essa magia cria um plano horizontal, circular de energia de 90 cm de diâmetro por 2,5 cm de espessura, que flutua 90 centímetros [3 feet] acima do chão em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. O disco permanece pela duração e pode suportar até 250 quilos. Se mais peso for colocado nele, a magia termina, e tudo em cima do disco cai no chão. O disco é imóvel enquanto você estiver a até 6 metros [20 feet] dele. Se você se afastar a mais de 6 metros [20 feet] dele, o disco seguirá você, mantendo-se a 6 metros [20 feet] de você. Ele pode atravessar terreno irregular, subir ou descer escadas, encostas e similares, mas ele não pode atravessar mudanças de elevação de 3 metros [10 feet] ou mais. Por exemplo, o disco não pode atravessar um fosso de 3 metros [10 feet] de profundidade nem poderia sair de tal fosso se tivesse sido criado no fundo dele. Se você se afastar mais de 30 metros [100 feet] do disco (tipicamente por ele não poder rodear um obstáculo para seguir você), a magia acaba.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "disfarcar",
    "name": "Disfarçar",
    "level": 1,
    "school": "Ilusão",
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
    "description": "Você faz com que você mesmo – incluindo suas roupas, armadura, armas e outros pertences no seu personagem – pareça diferente até a magia acabar ou até você usar sua ação para dispensa-la. Você pode se parecer 30 centímetros [1 foot] mais baixo ou mais alto, e pode parecer magro, gordo ou entre ambos. Você não pode mudar o tipo do seu corpo, portanto, você deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da sua ilusão cabe a você. As mudanças criadas por essa magia não conseguem se sustentar perante uma inspeção física. Por exemplo, se você usar essa magia para adicionar um chapéu ao seu visual, objetos que passarem pelo chapéu e qualquer um que tocá-lo não sentirá nada ou sentirá sua cabeça e cabelo. Se você usar essa magia para aparentar ser mais magro do que é, a mão de alguém que a erguer para tocar em você, irá esbarrar em você enquanto ainda está, aparentemente, está no ar. Para perceber que você está disfarçado, uma criatura pode usar a ação dela para inspecionar sua aparência e deve ser bem sucedida em um teste de Inteligência (Investigação) contra a CD da sua magia.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "enfeiticar-pessoa",
    "name": "Enfeitiçar Pessoa",
    "level": 1,
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
    "description": "Você tenta enfeitiçar um humanoide que você possa ver dentro do alcance. Ele deve realizar um teste de resistência de Sabedoria, e recebe vantagem nesse teste se você ou seus companheiros estiverem lutando com ele. Se ele falhar, ficará enfeitiçado por você até a magia acabar ou até você ou seus companheiros fizerem qualquer coisa nociva contra ele. A criatura enfeitiçada reconhece você como um conhecido amigável. Quando a magia acabar, a criatura saberá que foi enfeitiçada por você. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a até 9 metros [30 feet] umas das outras quando você for afetá-las.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "escrita-ilusoria",
    "name": "Escrita Ilusória",
    "level": 1,
    "school": "Ilusão",
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
      "materialDescription": "uma tinta à base de chumbo"
    },
    "description": "Você escreve em um pergaminho, papel ou qualquer outro material adequado e tinge ele com uma poderosa ilusão que permanece pela duração. Para você e para qualquer criatura que você designar quando você conjura essa magia, a escrita parece normal, escrita com a sua caligrafia e transmite qualquer que seja a mensagem que você desejava quando escreveu o texto. Para todos os outros, a escrita aparece como se tivesse sido escrita com uma caligrafia desconhecida ou mágica que é inteligível. Alternativamente, você pode fazer a escrita parecer uma mensagem totalmente diferente, escrita com uma caligrafia e idioma diferentes, apesar de o idioma precisar ser um que você conheça. No caso da magia ser dissipada, tanto a escrita original quanto a ilusória desaparecem. Uma criatura com visão verdadeira pode ler a mensagem escondida.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "escudo-arcano",
    "name": "Escudo Arcano",
    "level": 1,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Reação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma barreira de energia invisível aparece e protege você. Até o início do seu próximo turno, você recebe +5 de bônus na CA, incluindo contra o ataque que desencadeou a magia, e você não sofre dano de mísseis mágicos.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "escudo-da-fe",
    "name": "Escudo Da Fé",
    "level": 1,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação bonus",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pequeno pergaminho com alguns textos sagrados escritos nele"
    },
    "description": "Um campo cintilante aparece ao redor de uma criatura, à sua escolha, dentro do alcance, concedendo +2 de bônus na CA pela duração.",
    "classes": [
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "falar-com-animais",
    "name": "Falar Com Animais",
    "level": 1,
    "school": "Adivinhação",
    "isRitual": true,
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
    "description": "Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração. O conhecimento e consciência de muitas bestas é limitado pela inteligência delas mas, no mínimo, as bestas poderão dar informações a você sobre os locais e monstros próximos, incluindo tudo que eles possam perceber ou tenham percebido no dia anterior. Você pode tentar persuadir uma besta a lhe prestar um favor, à critério do Mestre.",
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "fogo-das-fadas",
    "name": "Fogo Das Fadas",
    "level": 1,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Cada objeto num cubo de 6 metros [20-foot cube] dentro do alcance fica delineado com luz azul, verde ou violeta (à sua escolha). Qualquer criatura na área, quando a magia é conjurada, também fica delineada com luz, se falhar num teste de resistência de Destreza. Pela duração, os objetos e criaturas afetadas emitem penumbra num raio de 3 metros [10-foot radius]. Qualquer jogada de ataque contra uma criatura afetada ou objeto tem vantagem, se o atacante puder ver o alvo e, a criatura afetada ou objeto não recebe benefício por estar invisível.",
    "classes": [
      "Bardo",
      "Druida"
    ]
  },
  {
    "id": "heroismo",
    "name": "Heroísmo",
    "level": 1,
    "school": "Encantamento",
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
    "description": "Uma criatura voluntária que você tocar é imbuída com bravura. Até a magia acabar, a criatura é imune a ser amedrontada e ganha pontos de vida temporários igual ao seu modificador de habilidade de conjuração, no início de cada turno dela. Quando a magia acabar, o alvo perde qualquer ponto de vida temporário restante dessa magia. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.",
    "classes": [
      "Bardo",
      "Paladino"
    ]
  },
  {
    "id": "identificacao",
    "name": "Identificação",
    "level": 1,
    "school": "Adivinhação",
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
      "materialDescription": "uma pena de coruja e uma perola"
    },
    "description": "Você escolhe um objeto que você deve tocar durante toda a conjuração da magia. Se ele for um item mágico ou algum outro objeto imbuído por magia, você descobre suas propriedades e como usá-lo, se exige sintonia para ser usado e quantas cargas ele tem, se aplicável. Você descobre se quaisquer magias estão afetando o item e quais eles são. Se o item foi criado por magia, você descobre que magia o criou. Se você, ao invés, tocar uma criatura durante toda a conjuração, você descobre quais magias, se houver alguma, estão afetando-a atualmente.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "imagem-silenciosa",
    "name": "Imagem Silenciosa",
    "level": 1,
    "school": "Ilusão",
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
      "materialDescription": "um pouco de lã"
    },
    "description": "Você cria a imagem de um objeto, criatura ou outro fenômeno visual que não tenha mais de 4,5 metros cúbicos [15-foot cube]. A imagem aparece num ponto, dentro do alcança, e permanece pela duração. A imagem é puramente visual; não é acompanhada por som, cheiro ou outros efeitos sensoriais. Você pode usar sua ação para fazer a imagem se mover para qualquer ponto, dentro do alcance. À medida que a imagem muda de lugar, você pode alterar a aparência dela para que seu movimento pareça ser o natural para a imagem. Por exemplo, se você criar uma imagem de uma criatura e move-la, você pode alterar a imagem para que ela pareça estar andando. Interação física com a imagem, revelará que ela é uma ilusão, já que as coisas podem passar através dela. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão com um teste de Inteligência (Investigação) bem sucedido contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a criatura poderá ver através da imagem.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "infligir-ferimentos",
    "name": "Infligir Ferimentos",
    "level": 1,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Necrótico",
    "currentDamageType": "Necrótico",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Faça um ataque mágico corpo-a-corpo contra uma criatura que você pode alcançar. Em um acerto, o alvo sofre 3d10 de dano necrótico. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível acima do 1°.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "leque-cromatico",
    "name": "Leque Cromático",
    "level": 1,
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
      "materialDescription": "uma pitada de pó ou areia de cor vermelha, amarela e azul"
    },
    "description": "Um feixe ofuscante de luzes coloridas ordenadas, surge da sua mão. Role 6d10; o total é a quantidade de pontos de vida de criaturas que essa magia pode afetar. As criaturas num cone de 4,5 metros [15-foot cone], originado de você, são afetadas em ordem ascendente dos seus pontos de vida (ignorando criaturas inconsciente e que não podem ver). Começando com as criaturas que tiverem menos pontos de vida, cada criatura afetada por essa magia ficará cega até o fim da magia. Subtraia os pontos de vida de cada criatura do total antes de considerar os pontos de vida da próxima criatura. Os pontos de vida de uma criatura devem ser iguais ou menores que o total restante para que essa criatura seja afetada | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, jogue 2d10 adicionais para cada nível do espaço acima do 1°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "maos-flamejantes",
    "name": "Mãos Flamejantes",
    "level": 1,
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
    "description": "Conforme você segura suas mãos com os polegares se tocando e os dedos abertos, uma fina camada de chamas emerge das pontas dos seus dedos estendidos. Cada criatura em um cone de 4,5 metros [15-foot cone] deve realizar um teste de resistência de Destreza. Uma criatura sofre 3d6 de dano de fogo se falhar no teste, ou metade desse dano se obtiver sucesso. O fogo incendeia qualquer objeto inflamável na área que não esteja sendo vestido ou carregado. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.",
    "classes": [
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "marca-do-cacador",
    "name": "Marca Do Caçador",
    "level": 1,
    "school": "Adivinhação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação bonus",
    "range": "27 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Você escolhe uma criatura que possa ver, dentro do alcance e a marca misticamente como sua presa. Até a magia acabar, você causa 1d6 de dano extra ao alvo sempre que você o atingir com um ataque com arma e você tem vantagem em quaisquer testes de Sabedoria (Percepção) ou Sabedoria (Sobrevivência) feitos para encontrá-la. Se o alvo cair a 0 pontos de vida antes da magia acabar, você pode usar uma ação bônus, no seu turno subsequente para marcar uma nova criatura. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° ou 4° nível, você poderá manter sua concentração na magia por até 8 horas. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas.",
    "classes": [
      "Patrulheiro"
    ]
  },
  {
    "id": "misseis-magicos",
    "name": "Mísseis Mágicos",
    "level": 1,
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
    "description": "Você cria três dardos brilhantes de energia mística. Cada dardo atinge uma criatura, à sua escolha, que você possa ver, dentro do alcance. Um dardo causa 1d4 + 1 de dano de energia ao alvo. Todos os dardos atingem simultaneamente e você pode direciona-los para atingir uma criatura ou várias. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a magia cria um dardo adicional para cada nível do espaço acima do 1°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "nevoa-obscurecente",
    "name": "Névoa Obscurecente",
    "level": 1,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você cria uma esfera de 6 metros de raio [20-foot radius] de névoa, centrada num ponto, dentro do alcance. A esfera se espalha, dobrando esquinas, e a área dela é de escuridão densa. Ela permanece pela duração ou até um vento moderado ou mais rápido (pelo menos 15 quilômetros [10 miles] por hora) dispersa-la. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o raio da névoa aumenta em 6 metros [20 feet] para cada nível do espaço acima do 1°.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "onda-trovejante",
    "name": "Onda Trovejante",
    "level": 1,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Trovão",
    "currentDamageType": "Trovão",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Cubo a partir de você",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Uma onda de força trovejante varre tudo a partir de você. Cada criatura num cubo de 4,5 metros [15-foot cube] originado em você, deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 2d8 de dano trovejante e será empurrada 3 metros [10 feet] para longe de você. Se obtive sucesso na resistência, a criatura sofrerá metade desse dano e não será empurrada. Além disso, objetos soltos que estiverem completamente dentro da área de efeito serão automaticamente empurrados 3 metros [10 feet] para longe de você pelo efeito da magia e a magia emitirá um ressonante barulho de trovão audível a até 90 metros [300 feet]. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d8 para cada nível acima do 1°.",
    "classes": [
      "Bardo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "palavra-curativa",
    "name": "Palavra Curativa",
    "level": 1,
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
    "description": "Uma criatura, à sua escolha, que você possa ver dentro do alcance recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não tem efeito em mortos-vivos ou constructos. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 1°.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida"
    ]
  },
  {
    "id": "passos-longos",
    "name": "Passos Longos",
    "level": 1,
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
      "materialDescription": "uma pitada de terra"
    },
    "description": "Você toca uma criatura. O deslocamento do alvo aumenta em 3 metros [10 feet], até a magia acabar. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.",
    "classes": [
      "Bardo",
      "Druida",
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "perdicao",
    "name": "Perdição",
    "level": 1,
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
      "material": true,
      "materialDescription": "uma gota de sangue"
    },
    "description": "Até três criaturas, à sua escolha, que você possa ver dentro do alcance, devem realizar um teste de resistência de Carisma. Sempre que um alvo que falhou nessa resistência realizar uma jogada de ataque ou um teste de resistência antes da magia acabar, o alvo deve rolar um d4 e subtrair o valor rolado da jogada de ataque ou teste de resistência. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°.",
    "classes": [
      "Bardo",
      "Clérigo"
    ]
  },
  {
    "id": "protecao-contra-o-bem-e-mal",
    "name": "Proteção Contra O Bem E Mal",
    "level": 1,
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
      "materialDescription": "água benta ou pó de prata e ferro"
    },
    "description": "Até a magia acabar, uma criatura voluntária que você tocar estará protegida contra certos tipos de criaturas: aberrações, celestiais, corruptores, elementais, fadas e mortos-vivos. A proteção garante diversos benefícios. As criaturas desse tipo tem desvantagem nas jogadas de ataque contra o alvo. O alvo não pode ser enfeitiçado, amedrontado ou possuído por elas. Se o alvo já estiver enfeitiçado, amedrontado ou possuído por uma dessas criaturas, o alvo terá vantagem em qualquer novo teste de resistência contra o efeito relevante.",
    "classes": [
      "Bruxo",
      "Clérigo",
      "Mago",
      "Paladino"
    ]
  },
  {
    "id": "purificar-alimentos",
    "name": "Purificar Alimentos",
    "level": 1,
    "school": "Transmutação",
    "isRitual": true,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Ação",
    "range": "3 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Toda comida e bebida não-mágica dentro de uma esfera de 1,5 metro de raio [5-foot radius] centrada num ponto, à sua escolha, dentro do alcance é purificada e se livrada de venenos ou doenças.",
    "classes": [
      "Clérigo",
      "Druida",
      "Paladino"
    ]
  },
  {
    "id": "queda-suave",
    "name": "Queda Suave",
    "level": 1,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Reação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": true,
      "materialDescription": "uma pequena pena ou penugem similar"
    },
    "description": "Escolha até cinco criaturas caindo, dentro do alcance. A taxa de descendência de uma criatura caindo é reduzida para 18 metros [60 feet] por rodada, até o fim da magia. Se a criatura aterrissar antes da magia acabar, ela não sofre nenhum dano de queda, pode aterrissar em pé e a magia termina para essa criatura.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "raio-guiador",
    "name": "Raio Guiador",
    "level": 1,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Radiante",
    "currentDamageType": "Radiante",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Um lampejo de luz se lança em direção de uma criatura, à sua escolha, dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 4d6 de dano radiante e, a próxima jogada de ataque contra esse alvo, antes do final do seu próximo turno, terá vantagem, graças a penumbra mística cintilando no alvo, até então. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "recuo-acelerado",
    "name": "Recuo Acelerado",
    "level": 1,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação bonus",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Essa magia permite que você se mova a um ritmo incrível. Quando você conjura essa magia e, a partir de então, com uma ação bônus em cada um dos seus turnos, até a magia acabar, você pode realizar a ação de Disparada.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "repreensao-infernal",
    "name": "Repreensão Infernal",
    "level": 1,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Reação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você aponta seu dedo e a criatura que causou dano a você é, momentaneamente, envolta por chamas infernais. A criatura deve realizar um teste de resistência de Destreza. Ela sofre 2d10 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 1°.",
    "classes": [
      "Bruxo"
    ]
  },
  {
    "id": "riso-histerico",
    "name": "Riso Histérico",
    "level": 1,
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
      "material": true,
      "materialDescription": "pequenas tortas e uma pena que é balançada no ar"
    },
    "description": "Uma criatura, à sua escolha, que você possa ver, dentro do alcance, acha tudo hilariantemente engraçado e cai na gargalhada, se essa magia afetá-la. O alvo deve ser bem sucedido em um teste de resistência de Sabedoria ou cairá no chão, ficando incapacitado e incapaz de se levantar pela duração. Uma criatura com valor de Inteligência 4 ou inferior não é afetada. Ao final de cada um dos turnos dela e, toda vez que sofrer dano, o alvo pode realizar outro teste de resistência de Sabedoria. O alvo terá vantagem no teste de resistência se ele for garantido por ele ter sofrido dano. Se obtiver sucesso, a magia acaba.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "salto",
    "name": "Salto",
    "level": 1,
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
      "materialDescription": "uma perna traseira de gafanhoto"
    },
    "description": "Você toca uma criatura. A distância de salto da criatura é triplicada até a magia acabar.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "santuario",
    "name": "Santuário",
    "level": 1,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação bonus",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pequeno espelho de prata"
    },
    "description": "Você protege uma criatura, dentro do alcance, contra ataques. Até a magia acabar, qualquer criatura que tentar atacar ou usar magias que causem dano contra criatura protegida deve, primeiro, realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura deve escolher um novo alvo ou perderá o ataque ou magia. Essa magia não protege a criatura contra efeitos de área, como a explosão de uma bola de fogo. Se a criatura protegida realizar um ataque ou conjurar uma magia que afete uma criatura inimiga, essa magia acaba.",
    "classes": [
      "Clérigo",
    ]
  },
  {
    "id": "servo-invisivel",
    "name": "Servo Invisível",
    "level": 1,
    "school": "Conjuração",
    "isRitual": true,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pedaço de barbante e um pouco de madeira"
    },
    "description": "Essa magia cria uma força invisível, sem mente e sem forma que realiza tarefas simples, ao seu comando, até a magia acabar. O servo aparece do nada em um espaço desocupado no chão, dentro do alcance. Ele tem CA 10, 1 ponto de vida, Força 2 e não pode atacar. Se ele cair a 0 pontos de vida, a magia acaba. Uma vez em cada um dos seus turnos, com uma ação bônus, você pode comandar, mentalmente, o servo para se mover até 4,5 metros [15 feet] e interagir com um objeto. O servo pode realizar tarefas simples que um serviçal humano faria, como buscar coisas, limpar, consertar, dobrar roupas, acender chamas, servir comida ou derramar vinho. Uma vez que um comando seja dado, o servo realiza a tarefa da melhor forma possível, até completar a tarefa, então esperará o seu próximo comando. Se você comandar o servo a realizar uma tarefa que poderia afasta-lo a mais de 18 metros [60 feet] de você, a magia termina.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "sono",
    "name": "Sono",
    "level": 1,
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
      "materialDescription": "um punhado de areia fina, pétalas de rosas ou um grilo"
    },
    "description": "Essa magia põem as criaturas num entorpecimento mágico. Jogue 5d8; o total é a quantidade de pontos de vida de criaturas afetados pela magia. As criaturas numa área de 6 metros de raio [20-foot radius], centrada no ponto escolhido, dentro do alcance, são afetadas em ordem ascendente dos pontos de vida atuais delas (ignorando criaturas inconscientes). Começando com as criaturas com menos pontos de vida atuais, cada criatura afetada por essa magia cai inconsciente até a magia acabar, sofrer dano ou alguém usar sua ação para sacudi-la ou esbofeteá-la até acordar. Subtraia os pontos de vida de cada criatura do total antes de seguir para a próxima criatura com menos pontos de vida atuais. Os pontos de vida atuais da criatura devem ser iguais ou menores que o valor restante para que a criatura possa ser afetada. Mortos-vivos e criaturas imunes a serem enfeitiçadas não são afetadas por essa magia. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2º nível ou superior, jogue 2d8 adicionais para cada nível do espaço acima do 1°.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "vitalidade-falsa",
    "name": "Vitalidade Falsa",
    "level": 1,
    "school": "Necromancia",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma pequena quantidade de álcool ou bebidas destiladas"
    },
    "description": "Reforçando-se com uma vitalidade necromântica ilusória, você ganha 1d4 + 4 pontos de vida temporários pela duração. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você ganha 5 pontos de vida temporários adicionais para cada nível do espaço de magia acima do 1°.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  }
];
