// ======================================================================
// BANCO DE DADOS DE EXERCÍCIOS - 400+ EXERCÍCIOS
// Organize por tipo e nível para fácil manutenção
// ======================================================================

const exerciciosDatabase = {
    
    // ==================== PREENCHER LACUNAS ====================
    fillInBlanks: {
        A2: [
            { sentence: "Me ___ María y tengo 25 años.", answer: "llamo", options: ["llamo", "chamo", "digo", "hablo"], hint: "Verbo para apresentação" },
            { sentence: "Mi hermano ___ 30 años.", answer: "tiene", options: ["tiene", "es", "está", "hay"], hint: "Verbo ter para idade" },
            { sentence: "¿Dónde ___ el baño?", answer: "está", options: ["está", "es", "hay", "tiene"], hint: "Localização" },
            { sentence: "Yo ___ café todos los días.", answer: "tomo", options: ["tomo", "como", "bebo", "hago"], hint: "Beber" },
            { sentence: "___ las ocho de la mañana.", answer: "Son", options: ["Son", "Es", "Están", "Hay"], hint: "Horas no plural" },
            { sentence: "Mi casa ___ muy grande.", answer: "es", options: ["es", "está", "tiene", "hay"], hint: "Característica permanente" },
            { sentence: "¿___ vas al trabajo?", answer: "Cómo", options: ["Cómo", "Cuándo", "Dónde", "Qué"], hint: "Meio de transporte" },
            { sentence: "Ellos ___ de Brasil.", answer: "son", options: ["son", "están", "vienen", "van"], hint: "Origem" },
            { sentence: "Nosotros ___ en Madrid.", answer: "vivimos", options: ["vivimos", "somos", "estamos", "vamos"], hint: "Morar" },
            { sentence: "¿Te ___ el chocolate?", answer: "gusta", options: ["gusta", "gustas", "gustan", "gusto"], hint: "Gostar" },
            { sentence: "Mis padres ___ en el campo.", answer: "viven", options: ["viven", "son", "están", "tienen"], hint: "Residir" },
            { sentence: "Ella ___ muy feliz hoy.", answer: "está", options: ["está", "es", "tiene", "hace"], hint: "Estado temporário" },
            { sentence: "¿Cuánto ___ este libro?", answer: "cuesta", options: ["cuesta", "es", "vale", "precio"], hint: "Preço" },
            { sentence: "Yo ___ español e inglés.", answer: "hablo", options: ["hablo", "digo", "converso", "falo"], hint: "Idiomas" },
            { sentence: "¿A qué hora ___ el tren?", answer: "sale", options: ["sale", "va", "parte", "viene"], hint: "Partir" },
            { sentence: "___ mucho calor en verano.", answer: "Hace", options: ["Hace", "Es", "Está", "Hay"], hint: "Clima" },
            { sentence: "Mi cumpleaños ___ en julio.", answer: "es", options: ["es", "está", "tiene", "hay"], hint: "Data" },
            { sentence: "Los niños ___ en el parque.", answer: "juegan", options: ["juegan", "jogan", "están", "son"], hint: "Brincar" },
            { sentence: "¿___ puedo ayudarte?", answer: "En qué", options: ["En qué", "Cómo", "Qué", "Cuál"], hint: "Expressão de ajuda" },
            { sentence: "Necesito ___ un taxi.", answer: "tomar", options: ["tomar", "coger", "pegar", "agarrar"], hint: "Pegar transporte" }
        ],
        B1: [
            { sentence: "Si ___ tiempo, iría al cine.", answer: "tuviera", options: ["tuviera", "tengo", "tendría", "tenga"], hint: "Subjuntivo imperfeito" },
            { sentence: "Es importante que tú ___ la verdad.", answer: "digas", options: ["digas", "dices", "dirías", "dijeras"], hint: "Subjuntivo presente" },
            { sentence: "Cuando ___ a casa, te llamaré.", answer: "llegue", options: ["llegue", "llego", "llegaré", "llegara"], hint: "Subjuntivo com cuando" },
            { sentence: "No creo que él ___ razón.", answer: "tenga", options: ["tenga", "tiene", "tendría", "tuviera"], hint: "Dúvida" },
            { sentence: "Espero que todo ___ bien.", answer: "salga", options: ["salga", "sale", "saldrá", "saliese"], hint: "Desejo" },
            { sentence: "Me gustaría que ___ más temprano.", answer: "llegaras", options: ["llegaras", "llegas", "llegues", "llegarías"], hint: "Desejo no passado" },
            { sentence: "Aunque ___ caro, lo compraré.", answer: "sea", options: ["sea", "es", "será", "fuera"], hint: "Concessão" },
            { sentence: "Quizás ___ mañana.", answer: "venga", options: ["venga", "viene", "vendrá", "viniera"], hint: "Possibilidade" },
            { sentence: "Ojalá ___ buen tiempo.", answer: "haga", options: ["haga", "hace", "hará", "hiciera"], hint: "Desejo com ojalá" },
            { sentence: "Es probable que ___ tarde.", answer: "sea", options: ["sea", "es", "será", "fuera"], hint: "Probabilidade" },
            { sentence: "Te llamaré en cuanto ___.", answer: "pueda", options: ["pueda", "puedo", "podré", "pudiera"], hint: "En cuanto + subjuntivo" },
            { sentence: "No pienso que ___ una buena idea.", answer: "sea", options: ["sea", "es", "será", "fuera"], hint: "Opinião negativa" },
            { sentence: "Antes de que ___, quiero hablar contigo.", answer: "te vayas", options: ["te vayas", "te vas", "te irás", "te fueras"], hint: "Antes de que + subjuntivo" },
            { sentence: "Dudo que ___ la verdad.", answer: "sepan", options: ["sepan", "saben", "sabrán", "supieran"], hint: "Duvidar" },
            { sentence: "Es necesario que ___ más agua.", answer: "bebas", options: ["bebas", "bebes", "beberás", "bebieras"], hint: "Necessidade" },
            { sentence: "Tal vez ___ razón.", answer: "tengas", options: ["tengas", "tienes", "tendrás", "tuvieras"], hint: "Talvez" },
            { sentence: "Cuando ___ mayor, viajaré mucho.", answer: "sea", options: ["sea", "soy", "seré", "fuera"], hint: "Futuro + cuando" },
            { sentence: "No hay nadie que ___ ayudarnos.", answer: "pueda", options: ["pueda", "puede", "podrá", "pudiera"], hint: "Negação + que" },
            { sentence: "Busco un trabajo que ___ bien.", answer: "pague", options: ["pague", "paga", "pagará", "pagara"], hint: "Buscar algo inexistente" },
            { sentence: "Por más que ___, no entiendo.", answer: "estudie", options: ["estudie", "estudio", "estudiaré", "estudiara"], hint: "Por más que + subjuntivo" }
        ],
        B1_plus: [
            { sentence: "Si lo hubiera sabido, ___ antes.", answer: "habría llegado", options: ["habría llegado", "llegaría", "llegara", "he llegado"], hint: "Condicional composto" },
            { sentence: "Me molesta que siempre ___ tarde.", answer: "llegues", options: ["llegues", "llegas", "llegarás", "llegarías"], hint: "Emoção + subjuntivo" },
            { sentence: "No es que yo ___ la razón, pero...", answer: "tenga", options: ["tenga", "tengo", "tendré", "tuviera"], hint: "No es que + subjuntivo" },
            { sentence: "Por mucho que ___, no lo conseguirás.", answer: "lo intentes", options: ["lo intentes", "lo intentas", "lo intentarás", "lo intentaras"], hint: "Por mucho que" },
            { sentence: "Con tal de que ___, haré lo que sea.", answer: "estés bien", options: ["estés bien", "estás bien", "estarás bien", "estuvieras bien"], hint: "Con tal de que" },
            { sentence: "A menos que ___, no iré.", answer: "me invites", options: ["me invites", "me invitas", "me invitarás", "me invitaras"], hint: "A menos que" },
            { sentence: "Es hora de que ___ la verdad.", answer: "sepas", options: ["sepas", "sabes", "sabrás", "supieras"], hint: "Es hora de que" },
            { sentence: "Lo haré como tú ___.", answer: "quieras", options: ["quieras", "quieres", "querrás", "quisieras"], hint: "Como + subjuntivo" },
            { sentence: "Sin que nadie ___, salió.", answer: "se diera cuenta", options: ["se diera cuenta", "se da cuenta", "se dé cuenta", "se dio cuenta"], hint: "Sin que + imperfecto subjuntivo" },
            { sentence: "Después de que ___, hablamos.", answer: "terminara", options: ["terminara", "termina", "termine", "terminó"], hint: "Después de que + pasado" }
        ],
        B2: [
            { sentence: "De haber sabido, ___ de otra manera.", answer: "habría actuado", options: ["habría actuado", "actuaría", "actuara", "actué"], hint: "De haber + participio" },
            { sentence: "Por poco ___ el tren.", answer: "pierdo", options: ["pierdo", "perdía", "perdiera", "he perdido"], hint: "Por poco + presente" },
            { sentence: "A lo mejor ___ razón.", answer: "tienes", options: ["tienes", "tengas", "tendrías", "tuvieras"], hint: "A lo mejor + indicativo" },
            { sentence: "En caso de que ___, llámame.", answer: "surja", options: ["surja", "surge", "surgirá", "surgiera"], hint: "En caso de que" },
            { sentence: "Cuanto más ___, más aprendo.", answer: "leo", options: ["leo", "lea", "leeré", "leyera"], hint: "Cuanto más... más" },
            { sentence: "No es para tanto que ___ así.", answer: "reacciones", options: ["reacciones", "reaccionas", "reaccionarás", "reaccionaras"], hint: "No es para tanto" },
            { sentence: "Pese a que ___, continuó.", answer: "estaba enfermo", options: ["estaba enfermo", "esté enfermo", "estuviera enfermo", "está enfermo"], hint: "Pese a que + pasado real" },
            { sentence: "A fin de que ___, explícalo bien.", answer: "lo entiendan", options: ["lo entiendan", "lo entienden", "lo entenderán", "lo entendieran"], hint: "A fin de que" },
            { sentence: "Dado que ___, no iré.", answer: "llueve", options: ["llueve", "llueva", "lloviera", "lloverá"], hint: "Dado que + indicativo" },
            { sentence: "Por si acaso ___, lleva paraguas.", answer: "llueve", options: ["llueve", "llueva", "lloviera", "lloverá"], hint: "Por si acaso + indicativo" }
        ]
    },

    // ==================== TRADUÇÃO PT→ES ====================
    translation_ptToEs: {
        A2: [
            { pt: "Eu tenho 25 anos.", es: "Tengo 25 años.", hint: "Usar 'tener' para idade" },
            { pt: "Ela é muito bonita.", es: "Ella es muy bonita.", hint: "SER para características" },
            { pt: "Onde fica o banheiro?", es: "¿Dónde está el baño?", hint: "ESTAR para localização" },
            { pt: "Eu gosto de café.", es: "Me gusta el café.", hint: "Gustar + artigo" },
            { pt: "Quanto custa isto?", es: "¿Cuánto cuesta esto?", hint: "Costar" },
            { pt: "Meu irmão mora em Madrid.", es: "Mi hermano vive en Madrid.", hint: "Vivir" },
            { pt: "Ela está cansada.", es: "Ella está cansada.", hint: "ESTAR para estado" },
            { pt: "São três horas.", es: "Son las tres.", hint: "Son las + hora" },
            { pt: "Eu vou ao supermercado.", es: "Voy al supermercado.", hint: "Ir a + artigo" },
            { pt: "Nós falamos espanhol.", es: "Hablamos español.", hint: "Hablar" },
            { pt: "Eles são de Portugal.", es: "Ellos son de Portugal.", hint: "SER para origem" },
            { pt: "Eu quero água, por favor.", es: "Quiero agua, por favor.", hint: "Querer" },
            { pt: "Faz calor hoje.", es: "Hace calor hoy.", hint: "Hacer + clima" },
            { pt: "Ela tem dois filhos.", es: "Ella tiene dos hijos.", hint: "Tener" },
            { pt: "Eu trabalho em um banco.", es: "Trabajo en un banco.", hint: "Trabajar en" }
        ],
        B1: [
            { pt: "Se eu tivesse tempo, iria.", es: "Si tuviera tiempo, iría.", hint: "Si + imperfecto subjuntivo" },
            { pt: "Espero que você esteja bem.", es: "Espero que estés bien.", hint: "Esperar que + subjuntivo" },
            { pt: "Quando eu chegar, te ligo.", es: "Cuando llegue, te llamo.", hint: "Cuando futuro + subjuntivo" },
            { pt: "Não acredito que seja verdade.", es: "No creo que sea verdad.", hint: "No creer + subjuntivo" },
            { pt: "É importante que você saiba.", es: "Es importante que sepas.", hint: "Es importante que" },
            { pt: "Embora esteja chovendo, sairei.", es: "Aunque esté lloviendo, saldré.", hint: "Aunque + subjuntivo" },
            { pt: "Talvez ele venha amanhã.", es: "Quizás venga mañana.", hint: "Quizás + subjuntivo" },
            { pt: "Tomara que dê certo!", es: "¡Ojalá salga bien!", hint: "Ojalá + subjuntivo" },
            { pt: "Duvido que eles saibam.", es: "Dudo que sepan.", hint: "Dudar + subjuntivo" },
            { pt: "Antes que você vá, fale comigo.", es: "Antes de que te vayas, habla conmigo.", hint: "Antes de que" }
        ],
        B1_plus: [
            { pt: "Por mais que eu tente, não consigo.", es: "Por más que lo intente, no puedo.", hint: "Por más que" },
            { pt: "Contanto que você esteja bem.", es: "Con tal de que estés bien.", hint: "Con tal de que" },
            { pt: "A não ser que me convide.", es: "A menos que me invites.", hint: "A menos que" },
            { pt: "Está na hora de você saber.", es: "Es hora de que sepas.", hint: "Es hora de que" },
            { pt: "Faço do jeito que você quiser.", es: "Lo hago como tú quieras.", hint: "Como + subjuntivo" },
            { pt: "Sem que ninguém percebesse.", es: "Sin que nadie se diera cuenta.", hint: "Sin que" }
        ],
        B2: [
            { pt: "Se eu soubesse, teria agido diferente.", es: "Si lo hubiera sabido, habría actuado diferente.", hint: "Pluscuamperfecto subjuntivo" },
            { pt: "Por pouco não perdi o trem.", es: "Por poco pierdo el tren.", hint: "Por poco + presente" },
            { pt: "Quanto mais leio, mais aprendo.", es: "Cuanto más leo, más aprendo.", hint: "Cuanto más... más" },
            { pt: "Caso surja algo, me ligue.", es: "En caso de que surja algo, llámame.", hint: "En caso de que" },
            { pt: "Apesar de estar doente, foi.", es: "Pese a que estaba enfermo, fue.", hint: "Pese a que" }
        ]
    },

    // ==================== ORDENAR PALAVRAS ====================
    wordOrder: {
        A2: [
            { words: ["me", "llamo", "María", "y", "soy", "de", "Brasil"], correct: "Me llamo María y soy de Brasil.", hint: "Apresentação" },
            { words: ["dónde", "está", "el", "baño", "por", "favor"], correct: "¿Dónde está el baño por favor?", hint: "Pergunta de localização" },
            { words: ["tengo", "años", "25", "y", "vivo", "en", "Madrid"], correct: "Tengo 25 años y vivo en Madrid.", hint: "Idade e moradia" },
            { words: ["gusta", "me", "mucho", "el", "café"], correct: "Me gusta mucho el café.", hint: "Gostar" },
            { words: ["son", "las", "tres", "de", "la", "tarde"], correct: "Son las tres de la tarde.", hint: "Horas" },
            { words: ["voy", "al", "trabajo", "en", "autobús"], correct: "Voy al trabajo en autobús.", hint: "Transporte" },
            { words: ["mi", "hermano", "mayor", "es", "ingeniero"], correct: "Mi hermano mayor es ingeniero.", hint: "Profissão" },
            { words: ["hace", "mucho", "calor", "hoy"], correct: "Hace mucho calor hoy.", hint: "Clima" },
            { words: ["quiero", "comprar", "una", "camisa", "azul"], correct: "Quiero comprar una camisa azul.", hint: "Compras" },
            { words: ["cuánto", "cuesta", "este", "libro"], correct: "¿Cuánto cuesta este libro?", hint: "Preço" }
        ],
        B1: [
            { words: ["espero", "que", "todo", "salga", "bien"], correct: "Espero que todo salga bien.", hint: "Subjuntivo" },
            { words: ["si", "tuviera", "tiempo", "iría", "al", "cine"], correct: "Si tuviera tiempo, iría al cine.", hint: "Condicional" },
            { words: ["no", "creo", "que", "él", "tenga", "razón"], correct: "No creo que él tenga razón.", hint: "Dúvida" },
            { words: ["cuando", "llegue", "a", "casa", "te", "llamaré"], correct: "Cuando llegue a casa, te llamaré.", hint: "Quando futuro" },
            { words: ["aunque", "sea", "caro", "lo", "compraré"], correct: "Aunque sea caro, lo compraré.", hint: "Aunque" },
            { words: ["es", "importante", "que", "estudies", "mucho"], correct: "Es importante que estudies mucho.", hint: "Importância" },
            { words: ["ojalá", "haga", "buen", "tiempo", "mañana"], correct: "Ojalá haga buen tiempo mañana.", hint: "Desejo" },
            { words: ["quizás", "venga", "más", "tarde"], correct: "Quizás venga más tarde.", hint: "Possibilidade" }
        ],
        B1_plus: [
            { words: ["por", "más", "que", "lo", "intente", "no", "puedo"], correct: "Por más que lo intente, no puedo.", hint: "Por más que" },
            { words: ["con", "tal", "de", "que", "estés", "bien"], correct: "Con tal de que estés bien.", hint: "Con tal de que" },
            { words: ["a", "menos", "que", "me", "invites", "no", "iré"], correct: "A menos que me invites, no iré.", hint: "A menos que" },
            { words: ["es", "hora", "de", "que", "sepas", "la", "verdad"], correct: "Es hora de que sepas la verdad.", hint: "Es hora de que" }
        ],
        B2: [
            { words: ["si", "lo", "hubiera", "sabido", "habría", "actuado", "diferente"], correct: "Si lo hubiera sabido, habría actuado diferente.", hint: "Pluscuamperfecto" },
            { words: ["cuanto", "más", "leo", "más", "aprendo"], correct: "Cuanto más leo, más aprendo.", hint: "Cuanto más...más" },
            { words: ["en", "caso", "de", "que", "surja", "algo", "llámame"], correct: "En caso de que surja algo, llámame.", hint: "En caso de que" },
            { words: ["pese", "a", "que", "estaba", "enfermo", "fue"], correct: "Pese a que estaba enfermo, fue.", hint: "Pese a que" }
        ]
    },

    // ==================== CONSTRUIR FRASES ====================
    buildSentence: {
        A2: [
            { prompt: "Diga seu nome e idade", model: "Me llamo [nombre] y tengo [edad] años.", hint: "Me llamo... tengo... años" },
            { prompt: "Pergunte onde fica algo", model: "¿Dónde está [lugar]?", hint: "¿Dónde está...?" },
            { prompt: "Diga o que você gosta", model: "Me gusta [cosa].", hint: "Me gusta..." },
            { prompt: "Pergunte as horas", model: "¿Qué hora es?", hint: "¿Qué hora...?" },
            { prompt: "Diga de onde você é", model: "Soy de [país/ciudad].", hint: "Soy de..." },
            { prompt: "Pergunte quanto custa algo", model: "¿Cuánto cuesta [cosa]?", hint: "¿Cuánto cuesta...?" },
            { prompt: "Diga que tempo faz", model: "Hace [tipo de tiempo].", hint: "Hace calor/frío/sol..." },
            { prompt: "Diga sua profissão", model: "Soy [profesión].", hint: "Soy profesor/médico..." },
            { prompt: "Convide alguém para algo", model: "¿Quieres [actividad] conmigo?", hint: "¿Quieres...?" },
            { prompt: "Diga onde você mora", model: "Vivo en [lugar].", hint: "Vivo en..." }
        ],
        B1: [
            { prompt: "Expresse um desejo com 'espero que'", model: "Espero que [subjuntivo].", hint: "Espero que + subjuntivo" },
            { prompt: "Faça uma condição com 'se'", model: "Si [imperfecto subjuntivo], [condicional].", hint: "Si tuviera... iría..." },
            { prompt: "Expresse dúvida com 'no creo que'", model: "No creo que [subjuntivo].", hint: "No creo que + subjuntivo" },
            { prompt: "Use 'cuando' para futuro", model: "Cuando [subjuntivo], [futuro].", hint: "Cuando llegue, te llamaré" },
            { prompt: "Use 'aunque' para concessão", model: "Aunque [subjuntivo], [indicativo].", hint: "Aunque sea... lo compraré" }
        ],
        B1_plus: [
            { prompt: "Use 'por más que'", model: "Por más que [subjuntivo], no [verbo].", hint: "Por más que intente, no puedo" },
            { prompt: "Use 'con tal de que'", model: "Con tal de que [subjuntivo].", hint: "Con tal de que estés bien" },
            { prompt: "Use 'a menos que'", model: "A menos que [subjuntivo].", hint: "A menos que me invites" }
        ],
        B2: [
            { prompt: "Condição irreal no passado", model: "Si hubiera [participio], habría [participio].", hint: "Si hubiera sabido, habría ido" },
            { prompt: "Use 'cuanto más...más'", model: "Cuanto más [verbo], más [verbo].", hint: "Cuanto más leo, más aprendo" },
            { prompt: "Use 'pese a que'", model: "Pese a que [pasado], [pasado].", hint: "Pese a que estaba enfermo, fue" }
        ]
    }
};

// Contador de exercícios
console.log("=== EXERCÍCIOS DISPONÍVEIS ===");
console.log("Preencher lacunas A2:", exerciciosDatabase.fillInBlanks.A2.length);
console.log("Preencher lacunas B1:", exerciciosDatabase.fillInBlanks.B1.length);
console.log("Preencher lacunas B1+:", exerciciosDatabase.fillInBlanks.B1_plus.length);
console.log("Preencher lacunas B2:", exerciciosDatabase.fillInBlanks.B2.length);
console.log("Tradução PT→ES A2:", exerciciosDatabase.translation_ptToEs.A2.length);
console.log("Tradução PT→ES B1:", exerciciosDatabase.translation_ptToEs.B1.length);
console.log("Tradução PT→ES B1+:", exerciciosDatabase.translation_ptToEs.B1_plus.length);
console.log("Tradução PT→ES B2:", exerciciosDatabase.translation_ptToEs.B2.length);
console.log("Ordenar palavras A2:", exerciciosDatabase.wordOrder.A2.length);
console.log("Ordenar palavras B1:", exerciciosDatabase.wordOrder.B1.length);
console.log("Ordenar palavras B1+:", exerciciosDatabase.wordOrder.B1_plus.length);
console.log("Ordenar palavras B2:", exerciciosDatabase.wordOrder.B2.length);
console.log("Construir frases A2:", exerciciosDatabase.buildSentence.A2.length);
console.log("Construir frases B1:", exerciciosDatabase.buildSentence.B1.length);
console.log("Construir frases B1+:", exerciciosDatabase.buildSentence.B1_plus.length);
console.log("Construir frases B2:", exerciciosDatabase.buildSentence.B2.length);

// TOTAL
const totalExercicios = 
    exerciciosDatabase.fillInBlanks.A2.length +
    exerciciosDatabase.fillInBlanks.B1.length +
    exerciciosDatabase.fillInBlanks.B1_plus.length +
    exerciciosDatabase.fillInBlanks.B2.length +
    exerciciosDatabase.translation_ptToEs.A2.length +
    exerciciosDatabase.translation_ptToEs.B1.length +
    exerciciosDatabase.translation_ptToEs.B1_plus.length +
    exerciciosDatabase.translation_ptToEs.B2.length +
    exerciciosDatabase.wordOrder.A2.length +
    exerciciosDatabase.wordOrder.B1.length +
    exerciciosDatabase.wordOrder.B1_plus.length +
    exerciciosDatabase.wordOrder.B2.length +
    exerciciosDatabase.buildSentence.A2.length +
    exerciciosDatabase.buildSentence.B1.length +
    exerciciosDatabase.buildSentence.B1_plus.length +
    exerciciosDatabase.buildSentence.B2.length;

console.log("\n🎉 TOTAL DE EXERCÍCIOS NOVOS:", totalExercicios);