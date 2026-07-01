import { Spell } from '../spell';

export const level2Spells: Spell[] = [
  {
    "id": "acalmar-emocoes",
    "name": "Acalmar Emoções",
    "level": 2,
    "school": "Encantamento",
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
    "description": "Você tenta suprimir emoções fortes em um grupo de pessoas. Cada humanoide em uma esfera de 6 metros de raio [20-foot radius], centrada em um ponto que você escolher dentro do alcance, deve realizar um teste de resistência de Carisma; uma criatura pode escolher falhar nesse teste, se desejar. Se uma criatura falhar na resistência, escolha um dentre os dois efeitos a seguir. Você pode suprimir qualquer efeito que esteja deixando a criatura enfeitiçada ou amedrontada. Quando essa magia terminar, qualquer efeito suprimido volta a funcionar, considerando que sua duração não tenha acabado nesse meio tempo. Alternativamente, você pode tornar um alvo indiferente às criaturas que você escolher que forem hostis a ele. Essa indiferença acaba se o alvo for atacado ou ferido por uma magia ou se ele testemunhar qualquer dos seus amigos sendo ferido. Quando a magia terminar, a criatura se tornará hostil novamente, a não ser que o Mestre diga o contrário.",
    "classes": [
      "Bardo",
      "Clérigo"
    ]
  },
  {
    "id": "ajuda",
    "name": "Ajuda",
    "level": 2,
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
      "material": true,
      "materialDescription": "uma pequena tira de branco"
    },
    "description": "Sua magia inspira seus aliados com vigor e determinação. Escolha até três criaturas dentro do alcance. O máximo de pontos de vida e os pontos de vida atuais de cada alvo aumentam em 5, pela duração. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, os pontos de vida dos alvos aumentam em 5 pontos adicionais para cada nível do espaço acima do o 2°.",
    "classes": [
      "Clérigo",
      "Paladino"
    ]
  },
  {
    "id": "alterar",
    "name": "Alterar",
    "level": 2,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Cortante",
    "currentDamageType": "Cortante",
    "castingTime": "1 Ação",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você assume uma forma diferente. Quando conjurar essa magia, escolha uma das seguintes opções, o efeito durará pela duração da magia. Enquanto a magia durar, você pode terminar uma opção com uma ação para ganhar os benefícios de uma diferente. Adaptação Aquática. Você adapta seu corpo para um ambiente aquático, brotando guelras e crescendo membranas entre seus dedos. Você pode respirar embaixo d'água e ganha deslocamento de natação igual a seu deslocamento terrestre. Mudar Aparência. Você transforam sua aparência. Você decide com o que você parece, incluindo altura, peso, traços faciais, timbre da sua voz, comprimento do cabelo, coloração e características distintas, se tiverem. Você pode ficar parecido com um membro de outra raça, apesar de nenhuma de suas estatísticas mudar. Você também não pode parecer com uma criatura de um tamanho diferente do seu, e seu formado básico permanece o mesmo; se você for bípede, você não pode usar essa magia para se tornar quadrupede, por exemplo. A qualquer momento, pela duração da magia, você pode usar sua ação para mudar sua aparência dessa forma, novamente. Armas Naturais. Você faz crescerem garras, presas, espinhos, chifres ou armas naturais diferentes, à sua escolha. Seus ataques desarmados causam 1d6 de dano de concussão, perfurante ou cortante, como apropriado para a arma natural que você escolheu, e você é proficiente com seus ataques desarmados. Finalmente, a arma natural é mágica e você tem +1 de bônus nas jogadas de ataque e dano que você fizer com ela.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "aprimorar-habilidade",
    "name": "Aprimorar Habilidade",
    "level": 2,
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
      "materialDescription": "pelo ou penas de uma besta"
    },
    "description": "Você toca uma criatura e a agracia com aprimoramento mágico. Escolha um dos efeitos a seguir; o alvo ganha esse efeito até o fim da magia. Agilidade do Gato. O alvo tem vantagem em testes de Destreza. Ele também não sofre dano ao cair de 6 metros [20 feet] ou menos, se não estiver incapacitado. Esperteza da Raposa. O alvo tem vantagem em testes de Inteligência. Esplendor da Águia. O alvo tem vantagem em testes de Carisma. Força do Touro. O alvo tem vantagem em testes de Força e sua capacidade de carga é dobrada. Sabedoria da Coruja. O alvo tem vantagem em testes de Sabedoria. Vigor do Urso. O alvo tem vantagem em testes de Constituição. Ele também recebe 2d6 pontos de vida temporários, que são perdidos quando a magia termina. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 2°.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Feiticeiro"
    ]
  },
  {
    "id": "arma-espiritual",
    "name": "Arma Espiritual",
    "level": 2,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação bonus",
    "range": "18 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você cria uma arma espectral flutuante, dentro do alcance, que permanece pela duração ou até você conjurar essa magia novamente. Quando você conjura essa magia, você pode realizar um ataque corpo-a-corpo com magia contra uma criatura a 1,5 metro [5 feet] da arma. Se atingir, o alvo sofre dano de energia igual a 1d8 + seu modificador de habilidade de conjuração. Com uma ação bônus, no seu turno, você pode mover a arma até 6 metros [20 feet] e repetir o ataque contra uma criatura a 1,5 metro [5 feet] dela. A arma pode ter a forma que você desejar. Clérigos de divindades associadas com uma arma em particular (como St. Cuthbert é conhecido por sua maça ou Thor por seu martelo) fazem o efeito dessa magia se assemelhar a essa arma. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d8 para cada dois níveis do espaço acima do 2°.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "arma-magica",
    "name": "Arma Mágica",
    "level": 2,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação bonus",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você toca uma arma não-mágica. Até a magia acabar, a arma se torna uma arma mágica com +1 de bônus nas jogadas de ataque e jogadas de dano. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o bônus aumenta para +2. Quando você usar um espaço de magia de 6° nível ou superior, o bônus aumenta para +3.",
    "classes": [
      "Mago",
      "Paladino"
    ]
  },
  {
    "id": "arrombar",
    "name": "Arrombar",
    "level": 2,
    "school": "Transmutação",
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
    "description": "Escolha um objeto que você possa ver, dentro do alcance. O objeto pode ser uma porta, uma caixa, um baú ou um par de algemas, um cadeado ou outro objeto que contenha um meio mundano ou mágico que previne o acesso. Um alvo que esteja fechado por uma fechadura mundana ou preso ou barrado torna-se destrancado, destravado ou desbloqueado. Se o objeto tiver múltiplas fechaduras, apenas uma delas é destrancada. Se você escolher um alvo que esteja travado pela magia tranca arcana, essa magia será suprimida por 10 minutos, durante esse período o alvo pode ser aberto e fechado normalmente. Quando você conjurar essa magia, uma batida forte, audível a até 90 metros [300 feet] de distância, emana do objeto alvo.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "augurio",
    "name": "Augúrio",
    "level": 2,
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
      "materialDescription": "varetas, ossos ou objetos similares especialmente marcados"
    },
    "description": "Ao lançar varetas cravejados com gemas, rolar ossos de dragão, puxar cartas ornamentadas ou usar outro tipo de ferramenta de adivinhação, você recebe um pressagio de uma entidade de outro mundo, sobre os resultados de cursos de ação específicos que você planeja tomar nos próximos 30 minutos. O Mestre escolhe dentre os possíveis presságios a seguir: • Êxito, para resultados bons • Fracasso, para resultados maus • Êxito e fracasso, para resultados bons e maus • Nada, para resultados que não são especialmente bons ou ruins. A magia não leva em conta qualquer possível circunstancia que possa mudar o resultado, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro. Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "aumentar-reduzir",
    "name": "Aumentar/Reduzir",
    "level": 2,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Força",
    "currentDamageType": "Força",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de pó de ferro"
    },
    "description": "Você faz com que uma criatura ou um objeto que você possa ver dentro do alcance, fique maior ou menor, pela duração. Escolha entre uma criatura ou um objeto que não esteja sendo carregado nem vestido. Se o alvo for involuntário, ele deve realizar um teste de resistência de Constituição. Se for bem sucedido, a magia não surte efeito. Se o alvo for uma criatura, tudo que ele esteja vestindo ou carregando muda e tamanho com ela. Qualquer item largado por uma criatura afetada, retorna ao seu tamanho natural. Aumentar. O tamanho do alvo dobra em todas as dimensões e seu peso é multiplicado por oito. Esse aumento eleva seu tamanho em uma categoria – de Médio para Grande, por exemplo. Se não houver espaço suficiente para que o alvo dobre de tamanho, a criatura ou objeto alcança o tamanho máximo possível no espaço disponível. Até o fim da magia, o alvo também tem vantagem em testes de Força e testes de resistência de Força. O tamanho das armas do alvo crescem para se adequar ao seu novo tamanho. Quando essas armas são ampliadas, os ataques do alvo com elas causam 1d4 de dano extra. Reduzir. O tamanho do alvo é reduzido à metade em todas as dimensões e seu peso é reduzido a um oitavo do normal. Essa redução diminui o tamanho do alvo em uma categoria – de Médio para Pequeno, por exemplo. Até o fim da magia, o alvo tem desvantagem em testes de Força e testes de resistência de Força. O tamanho das armas do alvo diminuem para se adequar ao seu novo tamanho. Quando essas armas são reduzidas, os ataques do alvo com elas causam 1d4 de dano a menos (isso não pode reduzir o dano a menos de 1).",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "aura-magica-do-arcanista",
    "name": "Aura Mágica Do Arcanista",
    "level": 2,
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
      "material": true,
      "materialDescription": "um pequeno quadrado de seda"
    },
    "description": "Você coloca uma ilusão em uma criatura ou objeto que você tocar, então magias de adivinhação revelarão informações falsas sobre ele. O alvo pode ser uma criatura voluntária ou um objeto que não esteja sendo carregado ou vestido por outra criatura. Quando você conjura essa magia, escolha um ou ambos os efeitos seguintes. O efeito permanece pela duração. Se você conjurar essa magia na mesma criatura ou objeto a cada dia por 30 dias, colocando o mesmo efeito nele todas as vezes, a ilusão durará até ser dissipada. Aura Falsa. Você modifica a forma como o alvo aparece para magias e efeitos mágicos, como detectar magia, que detectam auras mágicas. Você pode fazer um objeto não-mágico parecer mágico ou mudar a aura mágica de um objeto para que ela pareça pertencer a outra escola de magia a sua escolha. Quando você usar esse efeito num objeto, você pode fazer a aura falsa aparente a qualquer criatura que manusear o item. Máscara. Você modifica a forma como o alvo aparece para magias e efeitos que detectam tipos de criaturas, como o Sentido Divino do paladino ou o gatilho de um magia símbolo. Você escolhe o tipo de criatura e outras magias e efeitos mágicos consideram o alvo como se ele fosse uma criatura desse tipo ou tendência.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "boca-encantada",
    "name": "Boca Encantada",
    "level": 2,
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
      "material": true,
      "materialDescription": "um pequeno pedaço de favo de mel e pó de jade"
    },
    "description": "Você implanta uma mensagem em um objeto dentro do alcance, uma mensagem que é pronunciada quando uma condição de ativação é satisfeita. Escolha um objeto que você possa ver e não esteja sendo vestido ou carregado por outra criatura. Então, fale a mensagem, que deve conter 25 palavras ou menos, apesar de ela poder ser entregue durante um período de até 10 minutos. Finalmente, determine a circunstância que irá ativar a magia para que sua mensagem seja entregue. Quando essa circunstância ocorrer, a boca encantada aparecerá no objeto e recitará a mensagem com sua voz e com o mesmo volume que você falou. Se o objeto que você escolheu tiver uma boca ou algo semelhante a uma boca (por exemplo, a boca de uma estátua), a boca mágica aparece ai, então, as palavras parecerão vir da boca do objeto. Quando você conjura essa magia, você pode fazer a magia acabar depois de enviar sua mensagem ou ela pode permanecer e repetir a mensagem sempre que a circunstância de ativação ocorrer. A circunstância de ativação pode ser tão genérica ou tão detalhada quando você quiser, apesar de ela precisar ser baseada em condições visuais ou audíveis que ocorram a até 9 metros [30 feet] do objeto. Por exemplo, você pode instruir a boca a falar quando uma criatura se aproximar a menos de 9 metros [30 feet] do objeto ou quando um sino de prata tocar a menos de 9 metros [30 feet] dela.",
    "classes": [
      "Bardo",
      "Mago"
    ]
  },
  {
    "id": "cativar",
    "name": "Cativar",
    "level": 2,
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
    "description": "Você tece um cordão de palavras distrativas, fazendo as criaturas, à sua escolha, que você puder ver dentro do alcance e que puderem ouvir você, realizarem um teste de resistência de Sabedoria. Qualquer criatura que não puder ser enfeitiçada, passa automaticamente nesse teste de resistência e, se você ou seus companheiros estiverem lutando com a criatura, ela terá vantagem na resistência. Se falhar na resistência, a criatura terá desvantagem em testes de Sabedoria (Percepção) feitos para notar qualquer criatura além de você, até a magia acabar ou até o alvo não poder mais ouvir você. A magia acaba se você estiver incapacitado ou incapaz de falar.",
    "classes": [
      "Bardo",
      "Bruxo"
    ]
  },
  {
    "id": "cegueira-surdez",
    "name": "Cegueira/Surdez",
    "level": 2,
    "school": "Necromancia",
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
    "description": "Você pode cegar ou ensurdecer um oponente. Escolha uma criatura que você possa ver dentro do alcance para fazer um teste de resistência de Constituição. Se ela falhar, ficará ou cega ou surda (à sua escolha) pela duração. No final de cada um dos turnos dele, o alvo pode realizar um teste de resistência de Constituição. Se obtiver sucesso, a magia termina. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar uma criatura adicional para cada nível de espaço acima do 2°.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "chama-continua",
    "name": "Chama Contínua",
    "level": 2,
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
      "materialDescription": "pó de rubi"
    },
    "description": "Uma chama, que produz iluminação equivalente a uma tocha, surge de um objeto que você tocar. O efeito é parecido com o de uma chama normal, mas ele não produz calor e não consome oxigênio. Uma chama continua pode ser coberta ou escondida, mas não sufocada ou extinta.",
    "classes": [
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "convocar-montaria",
    "name": "Convocar Montaria",
    "level": 2,
    "school": "Conjuração",
    "isRitual": false,
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
    "description": "Você convoca um espírito que assume a forma de uma montaria excepcionalmente inteligente, forte e leal, criando uma ligação duradoura com ela. Aparecendo em um espaço desocupado dentro do alcance, a montaria adquire a forma que você escolher, como um cavalo de guerra, um pônei, um camelo, um alce ou um mastim. (Seu Mestre pode permitir outros animais para serem convocados como montarias.) A montaria tem as estatísticas da forma escolhida, no entanto, ele é um celestial, corruptor ou fada (à sua escolha) ao invés do seu tipo normal. Além disso, se sua montaria tiver Inteligência 5 ou menor, a Inteligência dela se torna 6 e ela ganha a capacidade de compreender um idioma, à sua escolha, que você fala. Sua montaria serve tanto para cavalgar quando para o combate e você tem uma ligação instintiva com ela que permite a vocês lutarem como uma unidade singular. Enquanto estiver montado na sua montaria, você pode fazer com que qualquer magia que você conjure que tenha alcance pessoal, também afete a sua montaria. Quando a montaria cair a 0 pontos de vida, ela desaparece, não deixando qualquer corpo físico para trás. Você também pode dispensar sua montaria a qualquer momento, com uma ação, fazendo-a desaparecer. Em ambos os casos, conjurar essa magia novamente convocará a mesma montaria, restaurando-a ao seu máximo de pontos de vida. Enquanto sua montaria estiver a até 1,5 quilômetro [1 mile] de você, você pode se comunicar telepaticamente com ela. Você não pode ter mais de uma montaria ligado por essa magia por vez. Com uma ação, você pode liberar a montaria da ligação a qualquer momento, fazendo-a desaparecer.",
    "classes": [
      "Paladino"
    ]
  },
  {
    "id": "crescer-espinhos",
    "name": "Crescer Espinhos",
    "level": 2,
    "school": "Transmutação",
    "isRitual": false,
    "originalDamageType": "Perfurante",
    "currentDamageType": "Perfurante",
    "castingTime": "1 Ação",
    "range": "45 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "sete espinhos afiados ou sete gravetos, todos com uma ponta afiada"
    },
    "description": "O solo em 6 metros [20 feet] quadrados, centrado num ponto dentro do alcance, se retorce e brotam cavilhas rígidas e espinhos. A área se torna terreno difícil pela duração. Quando uma criatura entrar ou se mover dentro da área, ela sofrerá 2d4 de dano perfurante para cada 1,5 metro [5 feet] que ela atravessar. A transformação do terreno é camuflada para parecer natural. Qualquer criatura que não puder ver a área no momento que a magia for conjurada, deve realizar um teste de Sabedoria (Percepção) contra a CD da magia para reconhecer o terreno como perigoso, antes de adentra-lo.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "despedacar",
    "name": "Despedaçar",
    "level": 2,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Trovão",
    "currentDamageType": "Trovão",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma lasca de mica"
    },
    "description": "Um alto som estridente, dolorosamente intenso, emerge de um ponto, à sua escolha, dentro do alcance. Cada criatura, numa esfera de 3 metros de raio [10-foot radius], centrada no ponto deve fazer um teste de resistência de Constituição. Uma criatura sofre 3d8 de dano trovejante se falhar na resistência ou metade desse dano se obtiver sucesso. Uma criatura feita de material inorgânico como pedra, cristal ou metal, tem desvantagem nesse teste de resistência. Um objeto não-mágico que não esteja sendo vestido ou carregado, também sofre o dano, se estiver na área da magia. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2°.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "detectar-pensamentos",
    "name": "Detectar Pensamentos",
    "level": 2,
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
      "materialDescription": "um pedaço de cobre"
    },
    "description": "Pela duração, você pode ler os pensamentos de certas criaturas. Quando você conjura essa magia e, com sua ação a cada turno até o fim da magia, você pode focar sua mente em qualquer criatura que você puder ver a até 9 metros [30 feet] de você. Se a criatura escolhida possuir Inteligência 3 ou inferior ou não falar nenhum tipo de idioma, a criatura não poderá ser afetada. Você, inicialmente, descobre os pensamentos superficiais da criatura – o que está mais presente na sua mente no momento. Com uma ação, você pode tanto mudar sua atenção para os pensamentos de outra criatura, como tentar sondar mais profundamente na mente da mesma criatura. Se você resolver sondar profundamente, a criatura deve realizar um teste de resistência de Sabedoria. Se falhar, você ganha ciência do seu raciocínio (se possuir), seu estado emocional e algo que tome grande parte da sua mente (como algo que ele se preocupe, amores ou ódios). Se ele for bem sucedido, a magia termina. Em ambas situações, o alvo saberá que você está sondando a mente dele e, a não ser que você mude sua atenção para os pensamentos de outra criatura, a criatura pode usar a ação dela, no turno dela, para realizar um teste de Inteligência resistido por seu teste de Inteligência; se ela for bem sucedida, a magia termina. Perguntas feitas diretamente para a criatura alvo, normalmente moldarão o curso dos seus pensamentos, portanto, essa magia é particularmente eficiente como parte de um interrogatório. Você pode, também, usar essa magia para detectar a presença que criaturas pensantes que você não possa ver. Quando você conjura essa magia ou, com sua ação enquanto ela durar, você pode procurar por pensamentos a até 9 metros [30 feet] de você. A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra. Você não pode detectar uma criatura com Inteligência 3 ou inferior ou uma que não fale qualquer idioma. Uma vez que você tenha detectado a presença de uma criatura dessa forma, você pode ler os pensamentos dela pelo resto da duração, como descrito acima, mesmo que você não possa vê-la, mas ela ainda precisa estar dentro do alcance.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "encontrar-armadilhas",
    "name": "Encontrar Armadilhas",
    "level": 2,
    "school": "Adivinhação",
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
    "description": "Você sente a presença de qualquer armadilha dentro do alcance a qual você tenha linha de visão. Uma armadilha, para os propósitos dessa magia, inclui qualquer coisa que possa causar um efeito repentino ou inesperado em você, considerado nocivo ou indesejável, que foi especificamente planejado para ser por seu criador. Portanto, a magia sentirá a área afetada pela magia alarme, um glifo de vigilância ou uma armadilha mecânica de fosso, mas ela não revelará uma fragilidade natural no piso, um teto instável ou um sumidouro escondido. Essa magia apenas revela que existe uma magia presente. Você não descobre a localização de cada armadilha, mas você também descobre a natureza genérica do perigo representando pela armadilha que você sentiu.",
    "classes": [
      "Clérigo",
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "escuridao",
    "name": "Escuridão",
    "level": 2,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": true,
      "materialDescription": "pelo de morcego e uma gota de piche ou pedaço de carvão"
    },
    "description": "Uma escuridão mágica se espalha de um ponto a sua escolha dentro do alcance e preenche uma esfera de 3,5m [15 pés] de raio pela duração. Criaturas com visão noturna não podem enxergar através dessa escuridão, e luz não mágica não a pode iluminar. Se o ponto que você escolheu for um objeto que você esteja segurando, ou um que não esteja sendo vestido ou carregado, a escuridão emanará do objeto e se moverá com ele. Cobrir completamente a fonte da escuridão com um objeto opaco, como uma vasilha ou um elmo, bloqueará a escuridão. Se qualquer área dessa magia sobrepor uma área de luz criada por uma magia de 2° ou inferior, a magia que criou a luz será dissipada.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "esfera-flamejante",
    "name": "Esfera Flamejante",
    "level": 2,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pouco de seco, uma pitada de enxofre e uma camada de pó de ferro"
    },
    "description": "Uma esfera de fogo de 1,5 metros de diâmetro [5-foot-diameter sphere] aparece em um espaço desocupado de sua escolha dentro do alcance e dura pela duração do feitiço. Qualquer criatura que termine a sua vez dentro de 1,5 metros [5 feet] da esfera deve fazer um teste de resistência de Destreza. A criatura sofre 2d6 de dano de fogo em um teste com falha, ou metade de dano em um teste bem sucedido. Como um ação bônus, você pode mover a esfera até 9 metros [30 feet]. Se você chocar a esfera contra uma criatura, essa criatura deve fazer o teste de resistência contra o dano da esfera, e a esfera pára de se mover neste turno. Quando você move a esfera, você pode dirigi-la sobre barreiras até 1,5 metros [5 feet] de altura e pular por sobre poços de até 3 metros [10 feet] de largura. A esfera inflama objetos inflamáveis que não estejam sendo vestidos ou carregados, e ela emite luz brilhante em um raio de 6 metros [20 feet] e luz fraca por mais 6 metros [20 feet]. | Em Níveis Superiores. Quando você conjura esta magia feitiço usando um espaço de magia de 3º nível ou superior, o dano aumenta em 1d6 para cada nível do espaço de magia acima de 2º.",
    "classes": [
      "Druida",
      "Mago"
    ]
  },
  {
    "id": "esquentar-metal",
    "name": "Esquentar Metal",
    "level": 2,
    "school": "Transmutação",
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
      "materialDescription": "um pedaço de ferro e uma chama"
    },
    "description": "Escolha uma objeto manufaturado de metal, como uma arma de metal ou uma armadura pesada ou média de metal, que você possa ver dentro do alcance. Você faz com que o objeto brilhe vermelho-incandescente. Qualquer criatura em contato físico com o objeto sofrerá 2d8 de dano de fogo quando você conjurar a magia. Até a magia acabar, você pode usar uma ação bônus, em cada um dos seus turnos subsequentes, para causar esse dano novamente. Se uma criatura estiver segurando ou vestindo o objeto e sofrer o dano dele, a criatura deve ser bem sucedida num teste de resistência de Constituição ou largará o objeto se ela puder. Se ela não largar o objeto, ela terá desvantagem em jogadas de ataque e testes de habilidade até o início do seu próximo turno. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2°.",
    "classes": [
      "Bardo",
      "Druida"
    ]
  },
  {
    "id": "flecha-acida",
    "name": "Flecha Ácida",
    "level": 2,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Ácido",
    "currentDamageType": "Ácido",
    "castingTime": "1 Ação",
    "range": "27 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "folha de ruibarbo em pó e estômago de uma víbora"
    },
    "description": "Uma flecha esverdeada cintilante voa em direção de um alvo dentro do alcance e explode em um jato de ácido. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 4d4 de dano de ácido imediatamente e 2d4 de dano de ácido no final do próximo turno dele. Se errar, a flecha salpica o alvo com ácido, causando metade do dano inicial e nenhum dano no final do próximo turno dele. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano (tanto inicial quanto posterior) aumenta em 1d4 para cada nível do espaço acima do 2°.",
    "classes": [
      "Mago",
    ]
  },
  {
    "id": "imobilizar-pessoa",
    "name": "Imobilizar Pessoa",
    "level": 2,
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
      "material": true,
      "materialDescription": "uma pequena peça de ferro reta"
    },
    "description": "Escolha um humanoide que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou ficará paralisado pela duração. Essa magia não tem efeito em mortos-vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina no alvo. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um humanoide adicional para cada nível de magia acima do 2°. Os humanoides devem estar a 9 metros [30 feet] entre si para serem afetados.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Clérigo",
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "invisibilidade",
    "name": "Invisibilidade",
    "level": 2,
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
      "material": true,
      "materialDescription": "uma pestana envolta em goma-arábica"
    },
    "description": "Uma criatura que você tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo esteja vestindo ou carregando fica invisível enquanto estiver de posse do alvo. A magia termina para o alvo caso ele ataque ou conjure uma magia. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um alvo adicional para cada nível do espaço acima do 2°.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "lamina-flamejante",
    "name": "Lâmina Flamejante",
    "level": 2,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação bonus",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "folha de sumagre"
    },
    "description": "Você evoca uma lâmina ardente em sua mão livre. A lâmina é similar em tamanho e formato a uma cimitarra e ela permanece pela duração. Se você soltar a lâmina, ela desaparece, mas você pode evocar a lâmina novamente com uma ação bônus. Você pode usar sua ação para realizar ataques corpo-a-corpo com magia com a lâmina ardente. Se atingir, o alvo sofrerá 3d6 de dano de fogo. A lâmina flamejante emite luz plena a 3 metros de raio [10-foot radius] e penumbra por mais 3 metros [10 feet] adicionais. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada dois níveis do espaço acima do 2°.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "levitacao",
    "name": "Levitação",
    "level": 2,
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
      "materialDescription": "uma pequena presilha de couro ou um pedaço de fio dourado dobrado em forma de copo com uma haste longa em uma extremidade"
    },
    "description": "Uma criatura ou objeto, à sua escolha, que você possa ver, dentro do alcance, ergue-se verticalmente, até 6 metros [20 feet] e permanece suspenso lá pela duração. A magia pode levitar um alvo pesando até 250 quilos. Uma criatura involuntária que for bem sucedida num teste de resistência de Constituição não é afetada O alvo pode se mover apenas ao puxar ou empurrar um objeto fixo ou superfície ao seu alcance (como um muro ou teto), permitindo que ele se mova como se estivesse escalando. Você pode mudar a altitude do alvo em até 6 metros [20 feet] em ambas as direções no seu turno. Se você for o alvo, você pode se mover para cima ou para baixo como parte do seu movimento. Do contrário, você precisa usar sua ação para mover o alvo, que deve permanecer dentro do alcance da magia. Quando a magia acaba, o alvo flutua suavemente até o chão, se ele ainda estiver no ar.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "localizar-animais-ou-plantas",
    "name": "Localizar Animais Ou Plantas",
    "level": 2,
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
      "materialDescription": "um pouco de pelo de um cão de caça"
    },
    "description": "Descreva ou nomeie um tipo especifico de besta ou planta. Concentre-se na voz da natureza ao seu redor, você descobre a direção e distância da criatura ou planta mais próxima desse tipo dentro de 7,5 quilômetros [5 miles], se houver alguma presente.",
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "localizar-objeto",
    "name": "Localizar Objeto",
    "level": 2,
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
      "materialDescription": "um galho bifurcado"
    },
    "description": "Descreva ou nomeie um objeto que seja familiar a você. Você sente a direção da localização do objeto, contanto que o objeto esteja a até 300 metros de você. Se o objeto estiver em movimento, você saberá a direção do movimento dele. A magia pode localizar um objeto especifico que você, desde que você já tenha o visto de perto – a até 9 metros [30 feet] – pelo menos uma vez. Alternativamente, a magia pode localizar o objeto de um tipo em particular mais próximo, como certo tipo de vestuário, joia, móvel, ferramenta ou arma. Essa magia não pode localizar um objeto se qualquer espessura de chumbo, até mesmo uma folha fina, bloquear o caminho direto entre você e o objeto.",
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
    "id": "lufada-de-vento",
    "name": "Lufada De Vento",
    "level": 2,
    "school": "Evocação",
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
      "materialDescription": "uma semente de legume"
    },
    "description": "Uma linha de vento forte, com 18 metros [60 feet] de comprimento e 3 metros [10 feet] de largura, é soprada de você em uma direção, à sua escolha, pela duração da magia. Cada criatura que começar seu turno na linha, deve ser bem sucedida num teste de resistência de Força ou será empurrada 4,5 metros [15 feet] para trás, na direção seguida pela linha. Qualquer criatura na linha deve gastar 3 metros [10 feet] de movimentação para cada 1,5 metro [5 feet] que ela se mover enquanto se aproxima de você. As lufadas dispersam gases ou vapores e apagam velas, tochas e chamas similares desprotegidas na área. Elas fazem com que chamas protegidas, como as de lanternas, vibrem descontroladamente e tenham 50 por cento de chance de serem extintas. Com uma ação bônus, em cada um dos seus turnos, antes da magia acabar, você pode mudar a direção à qual a linha é soprada de você.",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "marca-da-punicao",
    "name": "Marca Da Punição",
    "level": 2,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "Radiante",
    "currentDamageType": "Radiante",
    "castingTime": "1 Ação bonus",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, a arma cintilará com radiação astral quando você golpear. O ataque causa 2d6 de dano radiante extra ao alvo, que se torna visível, se estava invisível, e o alvo emite penumbra em um raio de 1,5 metro [5-foot radius] e não pode ficar invisível até a magia acabar. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano extra aumenta em 1d6 para cada nível do espaço acima do 2°.",
    "classes": [
      "Paladino"
    ]
  },
  {
    "id": "mensageiro-animal",
    "name": "Mensageiro Animal",
    "level": 2,
    "school": "Encantamento",
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
      "materialDescription": "um bocado de comida"
    },
    "description": "Através dessa magia, você usa um animal para entregar uma mensagem. Escolha uma besta Miúda que você possa ver dentro do alcance, como um esquilo, um gaio-azul ou um morcego. Você especifica um local, que você já deve ter visitado, e um remetente com uma descrição geral, como “um homem ou mulher vestido em um uniforme da guarda da cidade” ou “um anão ruivo vestindo um chapéu pontudo”. Você também fala uma mensagem com até vinte e cindo palavras. A besta alvo viaja pela duração da magia para o local especifico, cobrindo 75 quilômetros [50 miles] em 24 horas para um mensageiro voador ou 37,5 quilômetros [25 miles] para outros animais. Quando o mensageiro chegar, ele entrega sua mensagem para a criatura que você descreveu, repetindo o som da sua voz. O mensageiro fala apenas para uma criatura que tenha uma descrição compatível com a que ele recebeu. Se o mensageiro não alcançar o destino antes do fim da magia, a mensagem é perdida e a besta faz seu caminho de volta para onde você conjurou a magia. | Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a duração da magia aumenta em 48 horas para cada nível do espaço acima do 2°.",
    "classes": [
      "Bardo",
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "nublar",
    "name": "Nublar",
    "level": 2,
    "school": "Ilusão",
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
    "description": "Seu corpo se torna turvo, mudando e oscilando para todos que puderem ver você. Pela duração, qualquer criatura terá desvantagem nas jogadas de ataque contra você. Um atacante é imune a esse efeito se não depender de visão, como os que tenham percepção às cegas ou os que puderem ver através de ilusões, como os com visão verdadeira.",
    "classes": [
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "oracao-curativa",
    "name": "Oração Curativa",
    "level": 2,
    "school": "Evocação",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Minutos",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Até seis criaturas, à sua escolha, que você possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 2d8 + seu modificador de habilidade de conjuração, cada uma. Essa magia não afeta mortos-vivos ou constructos. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 2°.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "passo-nebuloso",
    "name": "Passo Nebuloso",
    "level": 2,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação bonus",
    "range": "Pessoal",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": false
    },
    "description": "Brevemente envolto por uma neblina prateada, você se teletransporta a até 9 metros [30 feet] para um espaço desocupado que você possa ver.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "passos-sem-pegadas",
    "name": "Passos Sem Pegadas",
    "level": 2,
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
      "materialDescription": "cinzas de uma folha de visco queimada e um ramo de pinheiro"
    },
    "description": "Um véu de sombras e silencia irradia de você, encobrindo você e seus companheiros contra detecção. Pela duração, cada criatura, à sua escolha, a até 9 metros [30 feet] de você (incluindo você) recebe +10 de bônus em testes de Destreza (Furtividade) e não pode ser rastreada, exceto por meio mágicos. Uma criatura que receber esse bônus não deixa quaisquer pegadas ou outros vestígios da sua passagem.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "patas-de-aranha",
    "name": "Patas De Aranha",
    "level": 2,
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
      "materialDescription": "uma gota de betume e uma aranha"
    },
    "description": "Até a magia acabar, uma criatura voluntária que você tocar, recebe a habilidade de se mover para cima, para baixo e através de superfícies verticais e de cabeça para baixo pelos tetos, enquanto deixa suas mãos livres. O alvo também ganha deslocamento de escalada igual a seu deslocamento de caminhada.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "pele-de-arvore",
    "name": "Pele De Árvore",
    "level": 2,
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
      "materialDescription": "um pedaço de casca de carvalho"
    },
    "description": "Você toca uma criatura voluntária. Até o fim da magia, a pele da criatura fica rígida, similar a casca de um carvalho, e a CA do alvo não pode ser inferior a 16, independentemente do tipo de armadura que ela esteja vestindo.",
    "classes": [
      "Druida",
      "Patrulheiro"
    ]
  },
  {
    "id": "protecao-contra-veneno",
    "name": "Proteção Contra Veneno",
    "level": 2,
    "school": "Abjuração",
    "isRitual": false,
    "originalDamageType": "Veneno",
    "currentDamageType": "Veneno",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Você toca uma criatura. Se ela estiver envenenada, você neutraliza o veneno. Se mais de um veneno estiver afligindo o alvo, você neutraliza um veneno, que você saiba estar presente, ou neutraliza um aleatório. Pela duração, o alvo terá vantagem em testes de resistência para não envenenado e terá resistência a dano de veneno.",
    "classes": [
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro"
    ]
  },
  {
    "id": "raio-ardente",
    "name": "Raio Ardente",
    "level": 2,
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
    "description": "Você cria três raios de fogo e os arremessa em alvos dentro do alcance. Você pode arremessa-los em um alvo ou em vários. Realize um ataque à distância com magia para cada raio. Se atingir, o alvo sofrerá 2d6 de dano de fogo. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você cria um raio adicional para cada nível do espaço acima do 2°.",
    "classes": [
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "raio-de-enfraquecimento",
    "name": "Raio De Enfraquecimento",
    "level": 2,
    "school": "Necromancia",
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
    "description": "Um raio negro de energia enervante parte do seu dedo em direção de uma criatura, dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo causará metade do dano com ataques com armas que usem Força, até a magia acabar. No final de cada um dos turnos do alvo, ele pode realizar um teste de resistência de Constituição contra a magia. Se obtiver sucesso, a magia acaba.",
    "classes": [
      "Bruxo",
      "Mago"
    ]
  },
  {
    "id": "raio-lunar",
    "name": "Raio Lunar",
    "level": 2,
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
      "material": true,
      "materialDescription": "várias sementes de qualquer planta lunar e um pedaço de feldspato opalescente"
    },
    "description": "Um raio prateado de luz pálida brilha para baixo em um cilindro com 1,5 metro de raio [5-foot radius] e 12 metros de altura [40-foot-high], centrado num ponto dentro do alcance. Até a magia acabar, penumbra preenche o cilindro. Quando uma criatura entrar na área da magia pela primeira vez em um turno, ou começar seu turno lá, ela é engolfada por chamas fantasmagóricas que causam dores lancinantes e ela deve realizar um teste de resistência de Constituição. Ela sofre 2d10 de dano radiante se falhar na resistência ou metade desse dano se passar. Um metamorfo faz seu teste de resistência com desvantagem. Se ele falhar, ele, também, reverte instantaneamente para sua forma original e não pode assumir uma forma diferente até deixar a luz da magia. Em cada um dos seus turnos após conjurar essa magia, você pode usar uma ação para mover o raio 18 metros [60 feet] em qualquer direção. | Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 2°.",
    "classes": [
      "Druida"
    ]
  },
  {
    "id": "reflexos",
    "name": "Reflexos",
    "level": 2,
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
    "description": "Três duplicatas ilusórias de você aparecem no seu espaço. Até a magia acabar, as duplicatas se movem com você e copiam as suas ações, trocando de posição, tornando impossível rastrear qual imagem é real. Você pode usar sua ação para dissipar as duplicatas ilusórias. Cada vez que uma criatura mirar você com um ataque enquanto a magia durar, role um d20 para determinar se o ataque, em vez de você, mira uma das suas duplicatas. Se você tiver três duplicatas, você deve rolar um 6 ou maior para mudar o alvo do ataque para uma duplicata. Com duas duplicatas, você deve rolar um 8 ou maior. Com uma duplicata, você deve rolar um 11 ou maior. A CA de uma duplicata é igual a 10 + seu modificador de Destreza. Se um ataque atingir uma duplicata, ela é destruída. Uma duplicata só pode ser destruída por um ataque que a atinja. Ela ignora todos os outros danos e efeitos. A magia acaba quando todas as três duplicatas forem destruídas. Uma criatura não pode ser afetada por essa magia se não puder enxergar, se ela contar com outros sentidos além da visão, como percepção às cegas, ou se ela puder perceber ilusões como falsas, como com visão verdadeira.",
    "classes": [
      "Bruxo",
      "Feiticeiro",
      "Mago",
    ]
  },
  {
    "id": "repouso-tranquilo",
    "name": "Repouso Tranquilo",
    "level": 2,
    "school": "Necromancia",
    "isRitual": true,
    "originalDamageType": "None",
    "currentDamageType": "None",
    "castingTime": "1 Ação",
    "range": "Toque",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "uma pitada de sal e uma peça de cobre colocada em cada um dos olhos do corpo, que devem permanecer ai pela duração"
    },
    "description": "Você toca um corpo ou outros restos mortais. Pela duração, o alvo estará protegido de decomposição e não pode se tornar um morto-vivo. A magia também estende, efetivamente, o limite de tempo para que o alvo seja trazido de volta a vida, já que os dias passados sob a influência dessa magia não contam no tempo limite de tais magias, como reviver os mortos.",
    "classes": [
      "Clérigo",
      "Mago"
    ]
  },
  {
    "id": "restauracao-menor",
    "name": "Restauração Menor",
    "level": 2,
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
    "description": "Você toca uma criatura e pode, ou acabar com uma doença ou uma condição que a esteja afligindo. A condição pode ser cega, surda, paralisada ou envenenada.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Druida",
      "Paladino",
      "Patrulheiro"
    ]
  },
  {
    "id": "silencio",
    "name": "Silêncio",
    "level": 2,
    "school": "Ilusão",
    "isRitual": true,
    "originalDamageType": "Trovão",
    "currentDamageType": "Trovão",
    "castingTime": "1 Ação",
    "range": "36 metros",
    "target": "Esfera",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": false
    },
    "description": "Pela duração, nenhum som pode ser criado dentro ou atravessar uma esfera de 6 metros de raio [20-foot radius] centrada num ponto, à sua escolha, dentro do alcance. Qualquer criatura ou objeto totalmente dentro da esfera é imune a dano trovejante e as criaturas estarão surdas enquanto estiverem completamente dentro dela. Conjurar magias que inclua a componente verbal é impossível aí.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Patrulheiro",
    ]
  },
  {
    "id": "sugestao",
    "name": "Sugestão",
    "level": 2,
    "school": "Encantamento",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "9 metros",
    "target": "Uma criatura",
    "components": {
      "verbal": true,
      "somatic": false,
      "material": true,
      "materialDescription": "uma língua de cobra e, ou um pedaço de favo de mel ou uma gota de azeite doce"
    },
    "description": "Você sugere um curso de atividade (limitado a uma ou duas sentenças) e, magicamente, influencia um criatura que você possa ver, dentro do alcance, e que possa ouvir e compreender você. Criaturas que não podem ser enfeitiçadas são imunes a esse efeito. A sugestão deve ser formulada de modo que o curso de ação soe razoável. Dizer para a criatura se esfaquear, se arremessar em uma lança, tocar fogo em si mesma ou fazer algum outro ato obviamente nocivo anulará o efeito da magia. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele seguirá o curso de ação que você descreveu, da melhor forma possível. O curso de ação sugerido pode continuar por toda a duração. Se a atividade sugerida puder ser completada em um tempo menor, a magia termina quando o alvo completar o que lhe foi dito para que fizesse. Você pode, também, especificar condições que irão ativar uma atividade especial pela duração. Por exemplo, você poderia sugerir a um cavaleiro que entregasse seu cavalo de guerra ao primeiro mendigo que ele encontrar. Se a condição não for satisfeita antes da magia expirar, a atividade não será concluída. Se você ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina.",
    "classes": [
      "Bardo",
      "Bruxo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "teia",
    "name": "Teia",
    "level": 2,
    "school": "Conjuração",
    "isRitual": false,
    "originalDamageType": "Fogo",
    "currentDamageType": "Fogo",
    "castingTime": "1 Ação",
    "range": "18 metros",
    "target": "Cubo",
    "components": {
      "verbal": true,
      "somatic": true,
      "material": true,
      "materialDescription": "um pedaço de teia de aranha"
    },
    "description": "Você conjura uma massa de teias espessas e pegajosas num ponto, à sua escolha, dentro do alcance. As teias preenchem um cubo de 6 metros [20-foot cube] naquele ponto, pela duração. As teias são terreno difícil e causam escuridão leve na área delas. Se as teias não estiverem sendo suportadas por duas massas sólidas (como duas paredes ou árvores) ou em camadas sobre um chão, parede ou teto, a teia conjurada desaba sobre si mesma e a magia termina no início do seu próximo turno. As teias em camadas sobre uma superfície plana terão 1,5 metro [5 feet] de profundidade. Cada criatura que começar seu turno nas teias ou entrar nelas durante seu turno, deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura estará impedida enquanto permanecer nas teias ou até se libertar. Uma criatura impedida pelas teias pode usar sua ação para realizar um teste de Força contra a CD da magia. Se obtiver sucesso, ela não estará mais impedida. As teias são inflamáveis. Qualquer cubo de 1,5 metro [5-foot cube] de teia exposto ao fogo, é consumida por ele em 1 rodada, causando 2d4 de dano de fogo a qualquer criatura que começar seu turno nas chamas.",
    "classes": [
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "tranca-arcana",
    "name": "Tranca Arcana",
    "level": 2,
    "school": "Abjuração",
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
      "materialDescription": "pó de ouro"
    },
    "description": "Você toca uma porta, janela, portão, baú ou outra entrada fechada e ela ficará trancada pela duração. Você e as criaturas que você designar, quando você conjurar essa magia, podem abrir o objeto normalmente. Você também pode definir uma senha que, quando falada a 1,5 metro [5 feet] do objeto, suprime a magia por 1 minuto. De outra forma, ele é intransponível até ser quebrado ou a magia seja dissipada ou suprimida. Conjurar arrombar no objeto suprime a tranca arcana por 10 minutos. Enquanto estiver sob efeito dessa magia, o objeto é mais difícil de quebrar ou de forçar para abrir; a CD para quebra-lo ou de arromba-lo aumenta em 10.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "truque-de-corda",
    "name": "Truque De Corda",
    "level": 2,
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
      "materialDescription": "pó de extrato de milho e um laço de pergaminho trançado"
    },
    "description": "Você toca um pedaço de corda que tenha até 18 metros [60 feet] de comprimento. Uma ponta da corda então, se ergue no ar até toda a corda estar erguida e perpendicular ao solo. Na ponta de cima da corda, uma entrada invisível se abre para um espaço extradimensional que permanece até a magia acabar. O espaço extradimensional pode ser alcançado escalando a corda até o topo. O espaço pode abrigar até oito criaturas Médias ou menores. A corda pode ser puxada para dentro do buraco, fazendo-a desaparecer para os observadores do lado de fora do espaço. Ataques e magias não podem ultrapassar a entrada, entrando ou saindo do espaço extradimensional, mas quem está dentro pode ver o lado de fora, como se estivesse olhando por uma janela de 0,9 metro [3 feet] por 1,5 metro [5 feet], centrada na corda. Tudo que estiver dentro do espaço extradimensional cai quando a magia acabar.",
    "classes": [
      "Mago"
    ]
  },
  {
    "id": "ver-o-invisivel",
    "name": "Ver O Invisível",
    "level": 2,
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
      "materialDescription": "um pouco de talco e um pó de prata polvilhado"
    },
    "description": "Pela duração, você vê criaturas e objetos invisíveis como se eles fossem visíveis e você pode ver no Plano Etéreo. Criaturas e objetos etéreos parecem espectrais e translúcidos.",
    "classes": [
      "Bardo",
      "Feiticeiro",
      "Mago"
    ]
  },
  {
    "id": "vinculo-protetor",
    "name": "Vínculo Protetor",
    "level": 2,
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
      "materialDescription": "um par de anéis de platina, que você e o alvo deve usar pela duração,"
    },
    "description": "Essa magia protege uma criatura voluntária que você tocar e cria uma conexão mística entre você e o alvo até a magia acabar. Enquanto o alvo estiver a até 18 metros [60 feet] de você, ele recebe +1 de bônus na CA, nos testes de resistência e terá resistência a todos os danos. No entanto, a cada vez que ele sofrer dano, você sofrerá a mesma quantidade de dano. A magia acaba se você cair a 0 pontos de vida ou se você e o alvo ficarem separados a mais de 18 metros [60 feet]. Ela também termina se a magia for conjurada novamente em quaisquer das criaturas conectadas. Você também pode dissipar a magia com uma ação.",
    "classes": [
      "Clérigo"
    ]
  },
  {
    "id": "visao-no-escuro",
    "name": "Visão No Escuro",
    "level": 2,
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
      "materialDescription": "ou um pedaço de cenoura seca ou uma ágata"
    },
    "description": "Você toca uma criatura voluntária para conceder a ela a habilidade de ver nas trevas. Pela duração, a criatura terá visão no escuro com alcance de 18 metros [60 feet].",
    "classes": [
      "Druida",
      "Feiticeiro",
      "Mago",
      "Patrulheiro"
    ]
  },
  {
    "id": "zona-da-verdade",
    "name": "Zona Da Verdade",
    "level": 2,
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
    "description": "Você cria uma zona mágica protegida contra enganação, numa esfera com 4,5 metros de raio [15-foot radius sphere], centrada num ponto, à sua escolha, dentro do alcance. Até a magia acabar, uma criatura que entrar na área da magia pela primeira vez num turno ou começar seu turno nela, deve realizar um teste de resistência de Carisma. Se falhar na resistência, a criatura não poderá mentir deliberadamente enquanto estiver no raio. Você saberá cada criatura que passou ou falhou nesse teste de resistência. Uma criatura afetada está ciente da magia e pode, portanto, evitar responder perguntas as quais ela normalmente responderia com uma mentira. Tais criaturas podem ser evasivas em suas respostas, contanto que permaneçam dentro dos limites da verdade.",
    "classes": [
      "Bardo",
      "Clérigo",
      "Paladino"
    ]
  }
];
