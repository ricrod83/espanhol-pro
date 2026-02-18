const examData = {
    A2: {
        reading: [
            {
                text: "Me llamo Ana y soy de Brasil. Tengo 25 años y vivo en São Paulo. Trabajo como profesora de inglés en una escuela primaria. Me gusta mucho mi trabajo porque los niños son muy simpáticos. En mi tiempo libre, me gusta leer libros y ver películas. Los fines de semana, salgo con mis amigos al parque o vamos al cine. Mi comida favorita es la pizza y me encanta el helado de chocolate.",
                questions: [
                    {question: "¿De dónde es Ana?", options: ["Argentina", "Brasil", "España", "México"], correct: 1},
                    {question: "¿Cuál es su profesión?", options: ["Médica", "Enfermera", "Profesora", "Ingeniera"], correct: 2},
                    {question: "¿Qué hace los fines de semana?", options: ["Trabaja", "Sale con amigos", "Estudia", "Cocina"], correct: 1}
                ]
            },
            {
                text: "El restaurante 'La Paella' está en el centro de la ciudad. Abre de martes a domingo de 12:00 a 23:00 horas. Los lunes está cerrado. El menú del día cuesta 15 euros e incluye primer plato, segundo plato, postre y bebida. Los fines de semana no hay menú del día, solo carta. Para reservar mesa, pueden llamar al teléfono 91-555-1234.",
                questions: [
                    {question: "¿Qué día está cerrado el restaurante?", options: ["Lunes", "Martes", "Domingo", "Sábado"], correct: 0},
                    {question: "¿Cuánto cuesta el menú del día?", options: ["10 euros", "12 euros", "15 euros", "20 euros"], correct: 2},
                    {question: "¿Qué incluye el menú del día?", options: ["Solo comida", "Comida y bebida", "Solo bebida", "Solo postre"], correct: 1}
                ]
            },
            {
                text: "Querido Luis: Te escribo desde Barcelona. Estoy aquí de vacaciones con mi familia. El hotel es muy bonito y está cerca de la playa. Ayer fuimos al Parque Güell y sacamos muchas fotos. Mañana vamos a visitar la Sagrada Familia. La comida española es deliciosa. Probé la paella y me encantó. El tiempo está perfecto, hace sol todos los días. Regresamos el próximo lunes. Un abrazo, María.",
                questions: [
                    {question: "¿Dónde está María?", options: ["Madrid", "Barcelona", "Valencia", "Sevilla"], correct: 1},
                    {question: "¿Qué visitaron ayer?", options: ["La Sagrada Familia", "La playa", "El Parque Güell", "Un museo"], correct: 2},
                    {question: "¿Cómo está el tiempo?", options: ["Llueve", "Hace frío", "Hace sol", "Nieva"], correct: 2}
                ]
            }
        ],
        listening: [
            {audioText: "Buenos días. Mi nombre es Carlos y soy de Argentina. Tengo 30 años y trabajo como ingeniero.", question: "¿Cuántos años tiene Carlos?", options: ["25 años", "30 años", "35 años", "40 años"], correct: 1},
            {audioText: "El supermercado abre de lunes a sábado de 9 de la mañana a 9 de la noche. Los domingos abre de 10 a 2.", question: "¿Cuándo cierra más temprano?", options: ["Lunes", "Sábado", "Domingo", "Nunca"], correct: 2},
            {audioText: "Para llegar a la estación de tren, toma la calle principal, gira a la derecha en el semáforo y sigue recto.", question: "¿Hacia dónde hay que girar?", options: ["Izquierda", "Derecha", "Recto", "Atrás"], correct: 1},
            {audioText: "Me levanto a las 7 de la mañana. Desayuno café con tostadas y luego voy al trabajo en metro.", question: "¿Cómo va al trabajo?", options: ["Autobús", "Coche", "Metro", "A pie"], correct: 2},
            {audioText: "Este fin de semana vamos a la playa. Salimos el sábado por la mañana y volvemos el domingo por la tarde.", question: "¿Cuándo vuelven?", options: ["Sábado mañana", "Sábado tarde", "Domingo mañana", "Domingo tarde"], correct: 3}
        ],
        writing: [
            {prompt: "Escribe un email a un amigo contándole qué hiciste el fin de semana pasado. Menciona: dónde fuiste, con quién estuviste y qué comiste.", minWords: 60, maxWords: 80},
            {prompt: "Describe tu ciudad o pueblo. Habla sobre: qué lugares importantes hay, qué se puede hacer allí y por qué te gusta o no te gusta vivir ahí.", minWords: 60, maxWords: 80}
        ],
        speaking: [
            {audioPrompt: "Preséntate: di tu nombre, edad, de dónde eres y a qué te dedicas.", prompt: "Preséntate: di tu nombre, edad, de dónde eres y a qué te dedicas.", time: 2},
            {audioPrompt: "Háblame de tu familia. ¿Cuántas personas son? ¿Qué hacen?", prompt: "Háblame de tu familia. ¿Cuántas personas son? ¿Qué hacen?", time: 2},
            {audioPrompt: "¿Qué te gusta hacer en tu tiempo libre? Descríbelo.", prompt: "¿Qué te gusta hacer en tu tiempo libre? Descríbelo.", time: 2}
        ]
    },
    B1: {
        reading: [
            {
                text: "El cambio climático es uno de los mayores desafíos de nuestro tiempo. Las temperaturas globales están aumentando debido a las emisiones de gases de efecto invernadero. Esto provoca el deshielo de los polos, el aumento del nivel del mar y fenómenos meteorológicos extremos. Los científicos advierten que si no actuamos ahora, las consecuencias serán irreversibles. Es necesario reducir las emisiones, usar energías renovables y cambiar nuestros hábitos de consumo.",
                questions: [
                    {question: "¿Cuál es la causa principal del cambio climático?", options: ["El frío", "Los gases de efecto invernadero", "La lluvia", "El viento"], correct: 1},
                    {question: "¿Qué consecuencia menciona el texto?", options: ["Más bosques", "Deshielo de los polos", "Más animales", "Menos agua"], correct: 1},
                    {question: "¿Qué debemos hacer según el texto?", options: ["Consumir más", "Reducir emisiones", "Viajar más", "Usar más plástico"], correct: 1}
                ]
            },
            {
                text: "El teletrabajo se ha convertido en una realidad para millones de personas en todo el mundo. Trabajar desde casa tiene ventajas como no perder tiempo en desplazamientos y tener más flexibilidad horaria. Sin embargo, también presenta desafíos: la dificultad para desconectar del trabajo, la falta de contacto directo con los compañeros y la necesidad de tener un espacio adecuado en casa. Muchas empresas están adoptando modelos híbridos que combinan trabajo presencial y remoto.",
                questions: [
                    {question: "¿Qué ventaja del teletrabajo se menciona?", options: ["Más vacaciones", "No desplazarse", "Más dinero", "Menos trabajo"], correct: 1},
                    {question: "¿Qué desafío presenta el teletrabajo?", options: ["Dormir más", "Dificultad para desconectar", "Comer mejor", "Hacer ejercicio"], correct: 1},
                    {question: "¿Qué modelo adoptan las empresas?", options: ["Solo presencial", "Solo remoto", "Híbrido", "Ninguno"], correct: 2}
                ]
            },
            {
                text: "La dieta mediterránea es considerada una de las más saludables del mundo. Se basa en el consumo abundante de frutas, verduras, legumbres, frutos secos y aceite de oliva. Incluye pescado y aves de corral en cantidades moderadas, mientras que la carne roja se consume ocasionalmente. Estudios científicos han demostrado que esta dieta reduce el riesgo de enfermedades cardiovasculares, diabetes y algunos tipos de cáncer. Además, favorece la longevidad y el bienestar general.",
                questions: [
                    {question: "¿Qué alimento es fundamental en esta dieta?", options: ["Aceite de oliva", "Mantequilla", "Azúcar", "Sal"], correct: 0},
                    {question: "¿Qué beneficio se menciona?", options: ["Aumenta peso", "Reduce enfermedades", "Produce cansancio", "Causa alergias"], correct: 1},
                    {question: "¿Con qué frecuencia se come carne roja?", options: ["Diariamente", "Semanalmente", "Ocasionalmente", "Nunca"], correct: 2}
                ]
            }
        ],
        listening: [
            {audioText: "El examen de español será el próximo viernes a las 10 de la mañana. Dura 3 horas e incluye comprensión de lectura, gramática y expresión escrita. No se permite usar diccionario.", question: "¿Cuánto dura el examen?", options: ["1 hora", "2 horas", "3 horas", "4 horas"], correct: 2},
            {audioText: "Para solicitar la beca, debes completar el formulario en línea antes del 30 de junio. Necesitas adjuntar tu certificado de notas y una carta de motivación.", question: "¿Qué NO se necesita adjuntar?", options: ["Formulario", "Notas", "Foto", "Carta"], correct: 2},
            {audioText: "El precio del apartamento es de 800 euros al mes. Incluye agua y luz, pero no incluye internet ni gas. La fianza es de un mes.", question: "¿Qué NO está incluido en el precio?", options: ["Agua", "Luz", "Gas", "Apartamento"], correct: 2},
            {audioText: "Aunque estudié mucho, suspendí el examen porque estaba muy nervioso. La próxima vez me prepararé mejor y practicaré técnicas de relajación.", question: "¿Por qué suspendió?", options: ["No estudió", "Estaba nervioso", "Llegó tarde", "Olvidó el bolígrafo"], correct: 1},
            {audioText: "Si tuviera más tiempo libre, viajaría por toda América Latina. Me encantaría conocer Machu Picchu, las cataratas de Iguazú y la Patagonia.", question: "¿Qué le gustaría hacer?", options: ["Trabajar más", "Viajar", "Estudiar", "Cocinar"], correct: 1}
        ],
        writing: [
            {prompt: "Escribe una carta formal solicitando información sobre un curso de español en Madrid. Pregunta sobre: duración, precio, horarios y alojamiento.", minWords: 100, maxWords: 120},
            {prompt: "Escribe tu opinión sobre las redes sociales. Menciona: ventajas, desventajas y cómo las usas tú personalmente.", minWords: 100, maxWords: 120}
        ],
        speaking: [
            {audioPrompt: "Describe tu rutina diaria desde que te levantas hasta que te acuestas.", prompt: "Describe tu rutina diaria desde que te levantas hasta que te acuestas.", time: 3},
            {audioPrompt: "¿Prefieres vivir en una ciudad grande o en un pueblo pequeño? Explica por qué.", prompt: "¿Prefieres vivir en una ciudad grande o en un pueblo pequeño? Explica por qué.", time: 3},
            {audioPrompt: "Cuenta una anécdota divertida o interesante que te haya pasado recientemente.", prompt: "Cuenta una anécdota divertida o interesante que te haya pasado recientemente.", time: 4}
        ]
    },
    B2: {
        reading: [
            {
                text: "La inteligencia artificial está transformando radicalmente numerosos sectores de la economía. Desde la medicina, donde ayuda en el diagnóstico de enfermedades, hasta el transporte, con vehículos autónomos, su impacto es innegable. No obstante, surgen preocupaciones éticas y sociales: la privacidad de los datos, la posible pérdida masiva de empleos y la necesidad de regular su desarrollo. Los expertos coinciden en que es fundamental encontrar un equilibrio entre innovación y responsabilidad social para garantizar que la IA beneficie a toda la humanidad.",
                questions: [
                    {question: "¿Cuál es el tono del texto?", options: ["Pesimista", "Equilibrado", "Entusiasta", "Indiferente"], correct: 1},
                    {question: "¿Qué preocupación NO se menciona?", options: ["Privacidad", "Desempleo", "Contaminación", "Regulación"], correct: 2},
                    {question: "Según el texto, ¿qué es fundamental?", options: ["Detener la IA", "Equilibrio", "Más rapidez", "Menos control"], correct: 1}
                ]
            },
            {
                text: "El fenómeno de la globalización ha interconectado economías, culturas y sociedades de maneras impensables hace décadas. Si bien ha facilitado el comercio internacional y el intercambio cultural, también ha acentuado las desigualdades entre naciones desarrolladas y en vías de desarrollo. Las multinacionales han aprovechado la deslocalización para reducir costos, lo que ha generado críticas sobre condiciones laborales y sostenibilidad ambiental. El debate sobre si la globalización es beneficiosa o perjudicial continúa siendo uno de los más controvertidos en el ámbito económico y político contemporáneo.",
                questions: [
                    {question: "¿Qué ha facilitado la globalización?", options: ["Solo comercio", "Comercio y cultura", "Solo política", "Solo tecnología"], correct: 1},
                    {question: "¿Qué crítica se menciona?", options: ["Más cultura", "Condiciones laborales", "Más idiomas", "Más viajes"], correct: 1},
                    {question: "¿Cómo se describe el debate?", options: ["Resuelto", "Irrelevante", "Controvertido", "Antiguo"], correct: 2}
                ]
            },
            {
                text: "La crisis demográfica en Europa occidental plantea desafíos sin precedentes para los sistemas de pensiones y seguridad social. El envejecimiento de la población, combinado con bajas tasas de natalidad, amenaza la sostenibilidad financiera de estos sistemas. Algunos países están implementando reformas que incluyen el aumento de la edad de jubilación y la incentivación de la natalidad mediante políticas familiares. Sin embargo, estas medidas encuentran resistencia social y plantean dilemas éticos sobre el equilibrio entre sostenibilidad económica y bienestar social.",
                questions: [
                    {question: "¿Qué amenaza la sostenibilidad?", options: ["Juventud", "Envejecimiento", "Inmigración", "Educación"], correct: 1},
                    {question: "¿Qué reforma se menciona?", options: ["Menos impuestos", "Más jubilación temprana", "Aumentar edad de jubilación", "Eliminar pensiones"], correct: 2},
                    {question: "¿Cómo reacciona la sociedad?", options: ["Con entusiasmo", "Con resistencia", "Con indiferencia", "Con alegría"], correct: 1}
                ]
            }
        ],
        listening: [
            {audioText: "A pesar de que había estudiado durante meses, el examen resultó ser mucho más difícil de lo esperado. Las preguntas requerían no solo conocimiento teórico sino también capacidad de análisis crítico y aplicación práctica de los conceptos.", question: "¿Qué se requería en el examen?", options: ["Solo memoria", "Solo teoría", "Análisis crítico", "Solo práctica"], correct: 2},
            {audioText: "Si hubiera sabido que ibas a venir, habría preparado más comida. De todas formas, podemos pedir algo a domicilio o salir a cenar fuera si prefieres.", question: "¿Qué propone el hablante?", options: ["No comer", "Solo quedarse", "Pedir comida", "Cocinar ahora"], correct: 2},
            {audioText: "El proyecto requiere que todos los miembros del equipo contribuyan activamente. Es imprescindible que cumplamos los plazos establecidos para evitar retrasos que podrían comprometer el resultado final.", question: "¿Qué es imprescindible?", options: ["Descansar", "Cumplir plazos", "Cambiar equipo", "Retrasar todo"], correct: 1},
            {audioText: "No es que no quiera ayudarte, sino que simplemente no dispongo del tiempo necesario esta semana. Tal vez podríamos organizarnos mejor para la próxima.", question: "¿Por qué no puede ayudar?", options: ["No quiere", "No sabe", "No tiene tiempo", "Está enfermo"], correct: 2},
            {audioText: "Cuanto más leo sobre el tema, más cuenta me doy de la complejidad del asunto. Requiere un análisis profundo que considere múltiples perspectivas y factores interdependientes.", question: "¿Qué descubre el hablante?", options: ["Es simple", "Es complejo", "Es aburrido", "Es fácil"], correct: 1}
        ],
        writing: [
            {prompt: "Escribe un ensayo argumentativo sobre: '¿Deberían prohibirse los plásticos de un solo uso?' Presenta argumentos a favor y en contra, y concluye con tu opinión personal justificada.", minWords: 150, maxWords: 180},
            {prompt: "Redacta una carta formal de reclamación a una compañía aérea por la pérdida de tu equipaje. Explica la situación, expresa tu descontento y solicita una compensación adecuada.", minWords: 150, maxWords: 180}
        ],
        speaking: [
            {audioPrompt: "Analiza las ventajas y desventajas del teletrabajo desde una perspectiva social y económica.", prompt: "Analiza las ventajas y desventajas del teletrabajo desde una perspectiva social y económica.", time: 4},
            {audioPrompt: "Expresa tu opinión sobre el impacto de las redes sociales en la sociedad contemporánea, considerando aspectos positivos y negativos.", prompt: "Expresa tu opinión sobre el impacto de las redes sociales en la sociedad contemporánea, considerando aspectos positivos y negativos.", time: 4},
            {audioPrompt: "Describe cómo ha cambiado la educación en los últimos años y qué desafíos enfrenta actualmente.", prompt: "Describe cómo ha cambiado la educación en los últimos años y qué desafíos enfrenta actualmente.", time: 5}
        ]
    }
};
