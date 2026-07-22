"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSIGNIAS_BASE = exports.CATALOGO_MODULOS = void 0;
exports.CATALOGO_MODULOS = [
    {
        nombre: 'Saludos',
        descripcion: 'Aprende los saludos básicos en quichua: buenos días, buenas tardes y cómo presentarte.',
        nivel: 1,
        orden: 1,
        ejercicios: [
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "buenos días" en quichua?', opciones: ['Alli puncha', 'Alli chishi', 'Alli tuta', 'Imaynalla'], respuesta: 'Alli puncha' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Qué significa "Imaynalla kashkanki"?', opciones: ['¿Cómo estás?', '¿Dónde vas?', '¿Cómo te llamas?', '¿De dónde eres?'], respuesta: '¿Cómo estás?' },
            { tipo: 'FILL_IN_THE_BLANK', pregunta: 'Completa: "___ puncha" significa buenas tardes', opciones: ['Alli', 'Chishi', 'Tuta', 'Inti'], respuesta: 'Chishi' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "gracias" en quichua?', opciones: ['Yupaychani', 'Ñukam kani', 'Allimi', 'Shamuni'], respuesta: 'Yupaychani' },
            { tipo: 'MATCHING', pregunta: '¿Qué significa "Ñukam kani"?', opciones: ['Yo soy', 'Tú eres', 'Él es', 'Nosotros somos'], respuesta: 'Yo soy' },
        ],
        evalPreguntas: [
            { pregunta: '¿Cómo se saluda en la mañana en quichua?', opciones: ['Alli puncha', 'Alli chishi', 'Alli tuta', 'Imaynalla'], respuesta: 'Alli puncha' },
            { pregunta: '¿Qué significa "Yupaychani"?', opciones: ['Gracias', 'Buenos días', '¿Cómo estás?', 'Adiós'], respuesta: 'Gracias' },
            { pregunta: '¿Cómo se dice "hasta luego" en quichua?', opciones: ['Kayakama', 'Imaynalla', 'Alli puncha', 'Yupaychani'], respuesta: 'Kayakama' },
            { pregunta: '¿Qué significa "Imaynalla kashkanki"?', opciones: ['¿Cómo estás?', 'Buenos días', 'Gracias', 'Adiós'], respuesta: '¿Cómo estás?' },
            { pregunta: '"Ñukam kani" significa:', opciones: ['Yo soy', 'Tú eres', 'Él es', 'Ellos son'], respuesta: 'Yo soy' },
        ],
    },
    {
        nombre: 'Familia',
        descripcion: 'Vocabulario sobre los miembros de la familia en quichua y cómo hablar de ellos.',
        nivel: 1,
        orden: 2,
        ejercicios: [
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "madre" en quichua?', opciones: ['Mama', 'Tayta', 'Wawa', 'Turi'], respuesta: 'Mama' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Qué significa "Tayta"?', opciones: ['Padre', 'Madre', 'Hijo', 'Hermano'], respuesta: 'Padre' },
            { tipo: 'FILL_IN_THE_BLANK', pregunta: 'El hijo o hija en quichua se llama "___"', opciones: ['Wawa', 'Mama', 'Tayta', 'Kaka'], respuesta: 'Wawa' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "abuelo" en quichua?', opciones: ['Yaya', 'Mama', 'Wawa', 'Turi'], respuesta: 'Yaya' },
            { tipo: 'MATCHING', pregunta: '¿Qué significa "Turi"?', opciones: ['Hermano', 'Hermana', 'Tío', 'Primo'], respuesta: 'Hermano' },
        ],
        evalPreguntas: [
            { pregunta: '¿Cómo se dice "madre" en quichua?', opciones: ['Mama', 'Tayta', 'Yaya', 'Turi'], respuesta: 'Mama' },
            { pregunta: '¿Qué significa "Tayta"?', opciones: ['Padre', 'Madre', 'Abuelo', 'Hermano'], respuesta: 'Padre' },
            { pregunta: '"Wawa" significa:', opciones: ['Hijo/Hija', 'Madre', 'Padre', 'Abuelo'], respuesta: 'Hijo/Hija' },
            { pregunta: '¿Cómo se dice "abuelo" en quichua?', opciones: ['Yaya', 'Kaka', 'Turi', 'Pani'], respuesta: 'Yaya' },
            { pregunta: '"Pani" significa:', opciones: ['Hermana', 'Hermano', 'Prima', 'Tía'], respuesta: 'Hermana' },
        ],
    },
    {
        nombre: 'Comida y Animales',
        descripcion: 'Vocabulario esencial sobre alimentos tradicionales andinos y animales domésticos en quichua.',
        nivel: 2,
        orden: 3,
        ejercicios: [
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "papa" (patata) en quichua?', opciones: ['Papa', 'Sara', 'Kinua', 'Uchú'], respuesta: 'Papa' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Qué significa "Sara"?', opciones: ['Maíz', 'Papa', 'Quinua', 'Ají'], respuesta: 'Maíz' },
            { tipo: 'FILL_IN_THE_BLANK', pregunta: 'El perro en quichua se llama "___"', opciones: ['Allqu', 'Mishi', 'Llama', 'Waka'], respuesta: 'Allqu' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "gato" en quichua?', opciones: ['Mishi', 'Allqu', 'Waka', 'Atuk'], respuesta: 'Mishi' },
            { tipo: 'MATCHING', pregunta: '¿Qué significa "Waka"?', opciones: ['Vaca', 'Perro', 'Gato', 'Llama'], respuesta: 'Vaca' },
        ],
        evalPreguntas: [
            { pregunta: '¿Cómo se dice "maíz" en quichua?', opciones: ['Sara', 'Papa', 'Kinua', 'Uchú'], respuesta: 'Sara' },
            { pregunta: '"Allqu" significa:', opciones: ['Perro', 'Gato', 'Vaca', 'Llama'], respuesta: 'Perro' },
            { pregunta: '¿Cómo se dice "quinua" en quichua?', opciones: ['Kinua', 'Sara', 'Papa', 'Uchú'], respuesta: 'Kinua' },
            { pregunta: '"Mishi" significa:', opciones: ['Gato', 'Perro', 'Vaca', 'Caballo'], respuesta: 'Gato' },
            { pregunta: '¿Cómo se llama la llama en quichua?', opciones: ['Llama', 'Waka', 'Allqu', 'Mishi'], respuesta: 'Llama' },
        ],
    },
    {
        nombre: 'Tiempos del Día',
        descripcion: 'Aprende a expresar los diferentes momentos del día y el tiempo en quichua.',
        nivel: 2,
        orden: 4,
        ejercicios: [
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "mañana" en quichua?', opciones: ['Puncha', 'Chishi', 'Tuta', 'Inti'], respuesta: 'Puncha' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Qué significa "Tuta"?', opciones: ['Noche', 'Mañana', 'Tarde', 'Mediodía'], respuesta: 'Noche' },
            { tipo: 'FILL_IN_THE_BLANK', pregunta: '"___" significa tarde en quichua', opciones: ['Chishi', 'Puncha', 'Tuta', 'Inti'], respuesta: 'Chishi' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "hoy" en quichua?', opciones: ['Kunan', 'Kayak', 'Chaymanta', 'Pacha'], respuesta: 'Kunan' },
            { tipo: 'MATCHING', pregunta: '¿Qué significa "Kayak"?', opciones: ['Mañana (día siguiente)', 'Ayer', 'Hoy', 'Siempre'], respuesta: 'Mañana (día siguiente)' },
        ],
        evalPreguntas: [
            { pregunta: '¿Cómo se dice "noche" en quichua?', opciones: ['Tuta', 'Puncha', 'Chishi', 'Inti'], respuesta: 'Tuta' },
            { pregunta: '"Kunan" significa:', opciones: ['Hoy', 'Ayer', 'Mañana', 'Siempre'], respuesta: 'Hoy' },
            { pregunta: '¿Cómo se dice "tarde" en quichua?', opciones: ['Chishi', 'Tuta', 'Puncha', 'Kayak'], respuesta: 'Chishi' },
            { pregunta: '"Kayak" significa:', opciones: ['Mañana', 'Hoy', 'Ayer', 'Noche'], respuesta: 'Mañana' },
            { pregunta: '"Inti" significa:', opciones: ['Sol', 'Luna', 'Estrella', 'Noche'], respuesta: 'Sol' },
        ],
    },
    {
        nombre: 'Conjugaciones de Verbos',
        descripcion: 'Aprende a conjugar los verbos más comunes del quichua en presente y pasado.',
        nivel: 3,
        orden: 5,
        ejercicios: [
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se conjuga "comer" (mikhuna) en primera persona singular?', opciones: ['Mikhunimi', 'Mikhunki', 'Mikhun', 'Mikhunchik'], respuesta: 'Mikhunimi' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Qué significa "Shamunki"?', opciones: ['Tú vienes', 'Yo vengo', 'Él viene', 'Nosotros venimos'], respuesta: 'Tú vienes' },
            { tipo: 'FILL_IN_THE_BLANK', pregunta: '"Rinimi" significa "yo ___"', opciones: ['voy', 'vienes', 'va', 'vamos'], respuesta: 'voy' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "nosotros hablamos" en quichua?', opciones: ['Rimanchik', 'Rimanimi', 'Rimanki', 'Riman'], respuesta: 'Rimanchik' },
            { tipo: 'MATCHING', pregunta: '"Kawsanki" significa:', opciones: ['Tú vives', 'Yo vivo', 'Él vive', 'Vivimos'], respuesta: 'Tú vives' },
        ],
        evalPreguntas: [
            { pregunta: '"Mikhunimi" significa:', opciones: ['Yo como', 'Tú comes', 'Él come', 'Comemos'], respuesta: 'Yo como' },
            { pregunta: '¿Cómo se dice "él viene" en quichua?', opciones: ['Shamun', 'Shamuni', 'Shamunimi', 'Shamunchik'], respuesta: 'Shamun' },
            { pregunta: '"Rimanchik" significa:', opciones: ['Nosotros hablamos', 'Yo hablo', 'Tú hablas', 'Él habla'], respuesta: 'Nosotros hablamos' },
            { pregunta: '¿Cómo se dice "tú vas" en quichua?', opciones: ['Rinki', 'Rinimi', 'Rin', 'Rinchik'], respuesta: 'Rinki' },
            { pregunta: '"Kawsanimi" significa:', opciones: ['Yo vivo', 'Tú vives', 'Él vive', 'Vivimos'], respuesta: 'Yo vivo' },
        ],
    },
    {
        nombre: 'Pronombres y Adjetivos',
        descripcion: 'Domina los pronombres personales y adjetivos descriptivos del quichua para expresarte con precisión.',
        nivel: 3,
        orden: 6,
        ejercicios: [
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "yo" en quichua?', opciones: ['Ñuka', 'Kan', 'Pay', 'Ñukanchik'], respuesta: 'Ñuka' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Qué significa "Kan"?', opciones: ['Tú', 'Yo', 'Él/Ella', 'Nosotros'], respuesta: 'Tú' },
            { tipo: 'FILL_IN_THE_BLANK', pregunta: '"Sumak" significa "___" en español', opciones: ['bonito/a', 'feo/a', 'grande', 'pequeño'], respuesta: 'bonito/a' },
            { tipo: 'MULTIPLE_CHOICE', pregunta: '¿Cómo se dice "grande" en quichua?', opciones: ['Hatun', 'Uchilla', 'Sumak', 'Kuyay'], respuesta: 'Hatun' },
            { tipo: 'MATCHING', pregunta: '"Ñukanchik" significa:', opciones: ['Nosotros', 'Yo', 'Tú', 'Ellos'], respuesta: 'Nosotros' },
        ],
        evalPreguntas: [
            { pregunta: '"Ñuka" significa:', opciones: ['Yo', 'Tú', 'Él', 'Nosotros'], respuesta: 'Yo' },
            { pregunta: '¿Cómo se dice "ellos/ellas" en quichua?', opciones: ['Paykuna', 'Pay', 'Kan', 'Ñukanchik'], respuesta: 'Paykuna' },
            { pregunta: '"Hatun" significa:', opciones: ['Grande', 'Pequeño', 'Bonito', 'Feo'], respuesta: 'Grande' },
            { pregunta: '¿Cómo se dice "pequeño" en quichua?', opciones: ['Uchilla', 'Hatun', 'Sumak', 'Kuyay'], respuesta: 'Uchilla' },
            { pregunta: '"Sumak" significa:', opciones: ['Bonito/a', 'Feo/a', 'Grande', 'Pequeño/a'], respuesta: 'Bonito/a' },
        ],
    },
];
exports.INSIGNIAS_BASE = [
    { nombre: 'Primer módulo completado', descripcion: 'Completaste tu primer módulo de quichua. ¡Excelente comienzo!', icono: '🏅' },
    { nombre: '3 módulos completados', descripcion: 'Has completado 3 módulos. ¡Vas por buen camino!', icono: '🥈' },
    { nombre: 'Todos los módulos básicos completados', descripcion: 'Completaste todos los módulos. ¡Eres un experto en quichua!', icono: '🏆' },
    { nombre: 'Puntaje perfecto en evaluación', descripcion: 'Obtuviste 100/100 en una evaluación. ¡Perfecto!', icono: '⭐' },
];
//# sourceMappingURL=modulos-quichua.js.map