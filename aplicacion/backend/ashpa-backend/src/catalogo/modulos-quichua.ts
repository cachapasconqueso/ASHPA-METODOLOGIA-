// Catálogo estándar de módulos de quichua.
// Se usa tanto en el seed como al crear un aula nueva (cada aula recibe su propia copia).
//
// Contenido basado en: Chicaiza Ronquillo, J. E. & Chicaiza Maiguashca, D. J. (2023).
// "Wirakuchakunamanta Shimi". Universidad Intercultural Amawtay Wasi / Universidad
// Técnica de Cotopaxi. ISBN 978-9942-7130-6-3. Licencia CC BY-NC-ND.
//
// Cada módulo trae un campo "contenido": la lección completa (teoría, vocabulario
// y ejemplos tomados directamente del libro) en un mini-formato de texto:
//   ## Título       -> encabezado de sección
//   palabra :: significado -> par de vocabulario (se muestra en dos columnas)
//   > kichwa = español     -> línea de ejemplo/oración
//   línea normal            -> párrafo de explicación
// El frontend lo interpreta con un parser sencillo (ver contenidoParser.ts).
//
// Cada ejercicio de práctica trae además una "explicacion" (mini-repaso puntual)
// que se muestra junto a la pregunta, para reforzar lo ya enseñado en "contenido".
// Las preguntas de evalPreguntas (evaluación final) no llevan explicación: ahí se
// pone a prueba lo ya enseñado en el contenido y las prácticas.

export interface EjercicioSeed {
  tipo: string;
  explicacion: string;
  pregunta: string;
  opciones: string[];
  respuesta: string;
}

export interface PreguntaSeed {
  pregunta: string;
  opciones: string[];
  respuesta: string;
}

export interface ModuloSeed {
  nombre: string;
  descripcion: string;
  contenido: string;
  nivel: number;
  orden: number;
  ejercicios: EjercicioSeed[];
  evalPreguntas: PreguntaSeed[];
}

export const CATALOGO_MODULOS: ModuloSeed[] = [
  {
    nombre: 'Saludos y despedidas',
    descripcion: 'Aprende a saludar, despedirte y preguntar cómo está alguien en quichua.',
    contenido: `## Saludos universales (Chaskancha napaykuna)
Al encontrarnos (Tuparinkapak):

Alli Puncha :: Buenos días
Alli Chishi :: Buenas tardes
Alli Tuta :: Buenas noches
Imanalla :: ¿Cómo está?

## Respuestas (Kutichiykuna)
Allilla :: Bien no más
May Allí :: Excelente, muy bien
Kushilla :: Alegre, contento
Shina Shinalla :: Más o menos, regular
Llakilla :: Triste, mal

## Despedidas (Minchayaykuna)
Ashawankama :: Hasta luego
Chishikama :: Hasta la tarde
Tutakama :: Hasta la noche
Kayakama :: Hasta mañana
Shuktak punchakama :: Hasta otro día
Minchakama :: Adiós, hasta pronto
Shuktak killakama :: Hasta el otro mes
Shuktak watakama :: Hasta el otro año

## Saludos informales (Sillinkuk napaykuna)
Imanalla :: Hola, qué tal
Imatak tiyan :: ¿Qué hay de nuevo?
Imapash uyarinchu :: ¿Qué hay de novedades?
Kawsakunkichu :: ¿Aún estás viviendo?
Purikunkichu :: ¿Todavía estás caminando?
Maypitak chinkankichu :: ¿Dónde te pierdes?
Allillachu :: ¿Estás bien?
Maymanta shamunkichu :: ¿De dónde vienes?
Imatak maskanki :: ¿Qué buscas?
Imatak ruranki :: ¿Qué haces?
Rikuyta munarayan :: Te quería ver
Llakiyuyarirkani :: Te extrañé
Ari :: Sí
Mana / na :: No
Tiyakmi :: Sí hay
Mana tiyakchu :: No hay

## Diálogo de ejemplo
> Juan: Alli puncha mashi María = Buenos días compañera María
> María: Alli puncha mashi Juan = Buenos días compañero Juan
> Juan: Imanallatak kashkanki mashi María = ¿Cómo has estado compañera María?
> María: Allillami kashkani mashi Juan, kanka = He estado bien compañero Juan, ¿y tú?
> Juan: Ñukapash allillami kashkani = Yo también he estado bien
> María: Minchakama mashi Juan = Hasta pronto compañero Juan
> Juan: Minchakama mashi María = Hasta pronto compañera María`,
    nivel: 1,
    orden: 1,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Para saludar en la mañana se dice "Alli Puncha", que literalmente significa "buen día".', pregunta: '¿Cómo se dice "Buenos días" en quichua?', opciones: ['Alli Puncha', 'Alli Chishi', 'Alli Tuta', 'Imanalla'], respuesta: 'Alli Puncha' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Imanalla" es un saludo muy común: sirve tanto para decir "hola" como para preguntar "¿cómo estás?".', pregunta: '¿Qué significa "Imanalla"?', opciones: ['Hola / ¿Cómo estás?', 'Buenas noches', 'Adiós', 'Gracias'], respuesta: 'Hola / ¿Cómo estás?' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'Para saludar por la tarde se usa "Alli Chishi" (buenas tardes): se cambia solo la última palabra del saludo de la mañana.', pregunta: 'Completa: "Alli ___" significa buenas tardes', opciones: ['Chishi', 'Tuta', 'Puncha', 'Kama'], respuesta: 'Chishi' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Kayakama" significa "hasta mañana". El sufijo -kama aparece en varias despedidas con el sentido de "hasta...".', pregunta: '¿Cómo se dice "hasta mañana" en quichua?', opciones: ['Kayakama', 'Minchakama', 'Ashawankama', 'Tutakama'], respuesta: 'Kayakama' },
      { tipo: 'MATCHING', explicacion: 'Cuando te preguntan cómo estás, una respuesta común es "Allilla", que significa "bien no más".', pregunta: '¿Qué significa "Allilla"?', opciones: ['Bien no más', 'Mal', 'Excelente', 'Triste'], respuesta: 'Bien no más' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "buenas noches" en quichua?', opciones: ['Alli Tuta', 'Alli Puncha', 'Alli Chishi', 'Imanalla'], respuesta: 'Alli Tuta' },
      { pregunta: '"Minchakama" significa:', opciones: ['Adiós, hasta pronto', 'Buenos días', 'Sí', 'No'], respuesta: 'Adiós, hasta pronto' },
      { pregunta: '¿Cómo se dice "sí" en quichua?', opciones: ['Ari', 'Mana', 'Allí', 'Imanalla'], respuesta: 'Ari' },
      { pregunta: 'Completa: "May ___" significa excelente, muy bien', opciones: ['Allí', 'Chishi', 'Tuta', 'Kama'], respuesta: 'Allí' },
      { pregunta: '¿Qué significa "Llakilla"?', opciones: ['Triste, mal', 'Alegre', 'Bien', 'Excelente'], respuesta: 'Triste, mal' },
    ],
  },
  {
    nombre: 'Presentaciones personales',
    descripcion: 'Preséntate en quichua: tu nombre, tu estado civil, de dónde eres y dónde vives.',
    contenido: `## Presentarte (Rikuchinakuna) - ejemplo de un hombre
Imanalla :: Hola
Alli puncha mashi :: Buenos días amigo
Imatak kashkanki :: ¿Cómo has estado?
Ñuka shutimi... :: Mi nombre es...
Sawarikuni :: Estoy casado
Musu kani :: Soy soltero
...kitimanta kani :: Soy de... (lugar de origen)
...llaktapi kawsani :: Vivo en... (ciudad)
Ishkay chunka wata charini :: Tengo veinte años
Ñukapa tayta shutika... kan :: Mi papá se llama...
Ñukapa mama shutika... kan :: Mi mamá se llama...
Ishkay wawki, shuk panipash charini :: Tengo dos hermanos y una hermana

## Presentarte (Rikuchinakuna) - ejemplo de una mujer
Kuytsa kani :: Soy soltera (mujer)
Sawarikuni :: Estoy casada
Ishkay ñaña, shuk turipash charini :: Tengo dos hermanas y un hermano

## Vocabulario clave
Kari :: Hombre
Warmi :: Mujer

## Diálogo de ejemplo
> Imanalla, alli puncha mashi = Hola, buenos días amigo/a
> Ñuka shutimi Darwin Totasig = Mi nombre es Darwin Totasig
> Cayambe kitimanta kani = Soy de Cayambe
> Quito llaktapi kawsani = Vivo en Quito
> Ishkay chunka wata charini = Tengo veinte años`,
    nivel: 1,
    orden: 2,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Para decir tu nombre empezás con "Ñuka shutimi..." (mi nombre es...), seguido de cómo te llamás.', pregunta: '¿Cómo se dice "Mi nombre es..." en quichua?', opciones: ['Ñuka shutimi...', 'Kanpa shutika...', 'Imashutitak kanki', 'Sawarikuni'], respuesta: 'Ñuka shutimi...' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Sawarikuni" significa "estoy casado/a". Se usa para hablar de tu estado civil.', pregunta: '¿Qué significa "Sawarikuni"?', opciones: ['Estoy casado/a', 'Soy soltero/a', 'Tengo veinte años', 'Vivo aquí'], respuesta: 'Estoy casado/a' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'Un hombre soltero dice "Musu kani" (soy soltero); una mujer soltera dice "Kuytsa kani".', pregunta: 'Un hombre soltero dice: "___ kani"', opciones: ['Musu', 'Kuytsa', 'Warmi', 'Kari'], respuesta: 'Musu' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Una mujer soltera dice "Kuytsa kani" (soy soltera).', pregunta: '¿Cómo dice una mujer "soy soltera"?', opciones: ['Kuytsa kani', 'Musu kani', 'Sawarikuni', 'Warmi kani'], respuesta: 'Kuytsa kani' },
      { tipo: 'MATCHING', explicacion: '"Kari" significa "hombre" y "Warmi" significa "mujer": son las palabras que encabezan las presentaciones en el libro.', pregunta: '¿Qué significa "Kari"?', opciones: ['Hombre', 'Mujer', 'Niño', 'Anciano'], respuesta: 'Hombre' },
    ],
    evalPreguntas: [
      { pregunta: '"Warmi" significa:', opciones: ['Mujer', 'Hombre', 'Niño', 'Joven'], respuesta: 'Mujer' },
      { pregunta: '¿Cómo se dice "Vivo en..." en quichua?', opciones: ['...llaktapi kawsani', '...kitimanta kani', 'Ñuka shutimi', 'Sawarikuni'], respuesta: '...llaktapi kawsani' },
      { pregunta: '¿Cómo se dice "Tengo veinte años"?', opciones: ['Ishkay chunka wata charini', 'Shuk chunka wata charini', 'Musu kani', 'Sawarikuni'], respuesta: 'Ishkay chunka wata charini' },
      { pregunta: 'Completa: "...___ kani" significa "Soy de..." (lugar de origen)', opciones: ['kitimanta', 'llaktapi', 'shutimi', 'wata'], respuesta: 'kitimanta' },
      { pregunta: '¿Qué significa "Imanalla"?', opciones: ['Hola, ¿cómo estás?', 'Adiós', 'Gracias', 'Sí'], respuesta: 'Hola, ¿cómo estás?' },
    ],
  },
  {
    nombre: 'Alfabeto y sílabas',
    descripcion: 'Conoce las 3 vocales y 15 consonantes del alfabeto quichua unificado y cómo se forman las sílabas.',
    contenido: `## El alfabeto quichua (Kichwa llika)
El quichua unificado tiene 18 grafías en total: 3 vocales y 15 consonantes.

Vocales :: a, i, u
Consonantes :: ch, h, k, l, ll, m, n, ñ, p, r, s, sh, t, w, y

## Formación de sílabas (Kichwa shimipa shimiki awari)
Vocal (V) :: a-ma = prohibición (no)
Vocal-Consonante (VC) :: all-ku = perro
Consonante-Vocal (CV) :: cha-ki = pie
Consonante-Vocal-Consonante (CVC) :: waw-ki = hermano

## Uso de consonantes especiales
k :: reemplaza a la "c", "qu", "gu" (casha → kasha = espina)
h :: tiene el sonido de la "j" española (jatun → hatun = grande)
w :: reemplaza a "hu" y a la "u" de diptongos (huicsa → wiksa = estómago)
y :: se escribe al inicio de palabra/sílaba y tras vocales (yanta = leña)
nt :: juntas suenan como "d" (tanta → tanda = pan)
mp :: juntas suenan como "b" (pampa → pamba = llanura)
p :: también reemplaza a la "f" del español (pukun → fukuna = soplar)

## Diptongos
ai = ay :: aycha = carne
ia = ya :: tamya = lluvia
ui = uy :: tukuy = todos-as
iu = yu :: apyu = caballo
au = aw :: awka = soldado
ua = wa :: wakin = alguien

## El plural: el sufijo -kuna
allku (perro) :: allkukuna = perros
yura (árbol) :: yurakuna = árboles
atallpa (gallina) :: atallpakuna = gallinas`,
    nivel: 1,
    orden: 3,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El quichua unificado usa solo tres vocales: a, i, u. No existen las vocales e, o como en español.', pregunta: '¿Cuántas vocales tiene el alfabeto quichua?', opciones: ['3', '5', '4', '2'], respuesta: '3' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Las tres vocales del quichua son a, i, u.', pregunta: '¿Cuáles son las vocales del quichua?', opciones: ['a, i, u', 'a, e, i, o, u', 'a, i, o', 'e, i, u'], respuesta: 'a, i, u' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'Las sílabas del quichua combinan vocal (V) y consonante (C). "allku" (perro) se divide all-ku: estructura VC-CV.', pregunta: 'La palabra "allku" (perro) tiene la estructura silábica ___', opciones: ['VC-CV', 'CV-CV', 'V-CVC', 'CVC-V'], respuesta: 'VC-CV' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El alfabeto quichua unificado oficial tiene 18 grafías en total: 3 vocales y 15 consonantes.', pregunta: 'El alfabeto quichua unificado oficial tiene 18 grafías, ¿cuántas son consonantes?', opciones: ['15', '18', '21', '5'], respuesta: '15' },
      { tipo: 'MATCHING', explicacion: 'La estructura Consonante-Vocal (CV) es la más simple: "cha-ki" (pie) es un buen ejemplo.', pregunta: '¿Qué palabra tiene la estructura Consonante-Vocal (CV)?', opciones: ['chaki (pie)', 'allku (perro)', 'wawki (hermano)', 'ama (no)'], respuesta: 'chaki (pie)' },
    ],
    evalPreguntas: [
      { pregunta: 'El alfabeto quichua unificado oficial tiene ___ grafías en total', opciones: ['18', '21', '15', '24'], respuesta: '18' },
      { pregunta: '¿Qué estructura silábica tiene la palabra "wawki" (hermano)?', opciones: ['CVC-CV', 'CV-CV', 'V-CV', 'VC-CVC'], respuesta: 'CVC-CV' },
      { pregunta: '"a-ma" (no, prohibición) tiene la estructura silábica:', opciones: ['V-CV', 'CV-V', 'VC-CV', 'CV-CV'], respuesta: 'V-CV' },
      { pregunta: 'La consonante "___" reemplaza a la "j" del español en palabras como "hatun" (grande)', opciones: ['h', 'k', 'w', 'y'], respuesta: 'h' },
      { pregunta: '¿Qué letra reemplaza a la "c", "qu" y "gu" en quichua?', opciones: ['k', 'h', 'w', 'y'], respuesta: 'k' },
    ],
  },
  {
    nombre: 'Familia',
    descripcion: 'Vocabulario sobre los miembros de la familia: papá, mamá, hermanos, hijos, abuelos y otros parientes.',
    contenido: `## Ciclo de vida - hombre (Karipak)
Karillullu :: Bebé (varón)
Kariwawa :: Niño
Wampra :: Joven
Tayta :: Papá
Rukutayta :: Abuelo

## Ciclo de vida - mujer (Warmipak)
Warmillullu :: Nena (bebé)
Warmiwawa :: Niña
Kuytsa :: Señorita
Mama :: Mamá
Payamama :: Abuela

## Términos de parentesco (Aylluyaymanta shimikuna)
Achikmama :: Madrina
Achiktayta :: Padrino
Churi :: Hijo
Ushushi :: Hija
Hatunmama :: Abuela
Hatuntayta :: Abuelo
Kachun :: Nuera
Katikchuri :: Nieto
Katik Ushi :: Nieta
Kichuchi :: Suegro
Kiwachi :: Suegra
Kusa :: Esposo, marido
Warmi :: Esposa, mujer
Masha :: Cuñado, yerno
Ñaña :: Hermana (entre mujeres)
Pani :: Hermana (varón hablando de su hermana)
Turi :: Hermano (mujer hablando de su hermano)
Wawki :: Hermano (entre varones)
Sispapani :: Prima
Sispawawki :: Primo
Tiyutayta :: Tío
Tiyamama :: Tía
Wakchu :: Huérfano/a
Sapalla :: Viudo/a`,
    nivel: 1,
    orden: 4,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Tayta" significa "papá" y "Mama" significa "mamá": son las primeras palabras de parentesco que se aprenden.', pregunta: '¿Cómo se dice "papá" en quichua?', opciones: ['Tayta', 'Mama', 'Churi', 'Wawki'], respuesta: 'Tayta' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Wawki" es "hermano" cuando lo dice otro hombre. Si es una mujer hablando de su hermano, se dice "Turi".', pregunta: '¿Qué significa "Wawki"?', opciones: ['Hermano (entre varones)', 'Hermana', 'Hijo', 'Abuelo'], respuesta: 'Hermano (entre varones)' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'El hijo se dice "Churi" y la hija se dice "Ushushi".', pregunta: 'El hijo en quichua se dice "___"', opciones: ['Churi', 'Ushushi', 'Wawki', 'Pani'], respuesta: 'Churi' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Los abuelos se dicen "Hatunmama" (abuela) y "Hatuntayta" (abuelo).', pregunta: '¿Cómo se dice "abuela" en quichua?', opciones: ['Hatunmama', 'Hatuntayta', 'Mama', 'Kiwachi'], respuesta: 'Hatunmama' },
      { tipo: 'MATCHING', explicacion: 'El tío se dice "Tiyutayta" y la tía se dice "Tiyamama".', pregunta: '¿Qué significa "Tiyutayta"?', opciones: ['Tío', 'Tía', 'Primo', 'Suegro'], respuesta: 'Tío' },
    ],
    evalPreguntas: [
      { pregunta: '"Ushushi" significa:', opciones: ['Hija', 'Hijo', 'Nieta', 'Sobrina'], respuesta: 'Hija' },
      { pregunta: '¿Cómo se dice "esposo" en quichua?', opciones: ['Kusa', 'Warmi', 'Tayta', 'Churi'], respuesta: 'Kusa' },
      { pregunta: 'Una mujer le dice a su hermano varón: "___"', opciones: ['Turi', 'Wawki', 'Pani', 'Ñaña'], respuesta: 'Turi' },
      { pregunta: 'Completa: "Sispa___" significa primo o prima', opciones: ['wawki / pani', 'tayta / mama', 'churi / ushushi', 'kusa / warmi'], respuesta: 'wawki / pani' },
      { pregunta: '¿Qué significa "Ñaña"?', opciones: ['Hermana (entre mujeres)', 'Hermano (entre varones)', 'Hija', 'Tía'], respuesta: 'Hermana (entre mujeres)' },
    ],
  },
  {
    nombre: 'Cuerpo humano',
    descripcion: 'Aprende los nombres de las partes principales del cuerpo humano en quichua.',
    contenido: `## Partes del cuerpo (Runa ukumpa kuskakunamanta)
Akcha :: Pelo
Uma :: Cabeza
Ñawi :: Ojo
Rinri :: Oreja
Sinka :: Nariz
Kiru :: Diente
Shimi :: Boca
Kunka :: Cuello
Rikra :: Brazo
Kasku :: Pecho
Wika :: Esternón
Pupu :: Ombligo
Siki :: Trasero
Sillu :: Uña
Ruka :: Dedo
Chanka :: Pierna
Kunkuri :: Rodilla
Chaki :: Pie
Chaki ruka :: Dedo del pie
Makiruka :: Dedo de la mano
Ñutku :: Cerebro
Yurak Shuku (Paruk) :: Pulmón
Shunku :: Corazón
Wiksa :: Barriga, estómago
Kallu :: Lengua
Tullu :: Hueso
Anku :: Vena / arteria
Wamani :: Hombro
Kara :: Piel
Washa :: Espalda
Yawar :: Sangre

## El sufijo aumentativo -sapa
Se usa cuando una parte del cuerpo es más grande de lo normal:
Umasapa :: Cabezón
Wiksasapa :: Panzón
Sinkasapa :: Narizón
Rinrisapa :: Orejón`,
    nivel: 1,
    orden: 5,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'La cabeza se dice "Uma" en quichua.', pregunta: '¿Cómo se dice "cabeza" en quichua?', opciones: ['Uma', 'Ñawi', 'Rinri', 'Shimi'], respuesta: 'Uma' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Ñawi" significa "ojo"; también se usa para referirse a la vista.', pregunta: '¿Qué significa "Ñawi"?', opciones: ['Ojo', 'Oreja', 'Nariz', 'Boca'], respuesta: 'Ojo' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'El brazo se dice "Rikra".', pregunta: '"___" significa brazo', opciones: ['Rikra', 'Chaki', 'Chanka', 'Kunka'], respuesta: 'Rikra' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El pie se dice "Chaki" (la misma palabra que viste en la sílaba "cha-ki" del módulo de alfabeto).', pregunta: '¿Cómo se dice "pie" en quichua?', opciones: ['Chaki', 'Rikra', 'Chanka', 'Uma'], respuesta: 'Chaki' },
      { tipo: 'MATCHING', explicacion: 'El corazón se dice "Shunku".', pregunta: '¿Qué significa "Shunku"?', opciones: ['Corazón', 'Pulmón', 'Estómago', 'Cabeza'], respuesta: 'Corazón' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "oreja" en quichua?', opciones: ['Rinri', 'Sinka', 'Shimi', 'Kiru'], respuesta: 'Rinri' },
      { pregunta: '"Sinka" significa:', opciones: ['Nariz', 'Ojo', 'Boca', 'Diente'], respuesta: 'Nariz' },
      { pregunta: '¿Cómo se dice "boca" en quichua?', opciones: ['Shimi', 'Kiru', 'Rinri', 'Sinka'], respuesta: 'Shimi' },
      { pregunta: 'Completa: "___" significa diente', opciones: ['Kiru', 'Shimi', 'Akcha', 'Kunka'], respuesta: 'Kiru' },
      { pregunta: '"Wiksa" significa:', opciones: ['Barriga', 'Pierna', 'Cuello', 'Pelo'], respuesta: 'Barriga' },
    ],
  },
  {
    nombre: 'Colores',
    descripcion: 'Los colores en quichua y cómo se usan antes del sustantivo que describen.',
    contenido: `## Los colores (Tullpukuna)
Yana :: Negro
Waylla :: Verde
Chawa Waylla :: Verde claro
Ankasyu :: Celeste
Yurak :: Blanco
Puka :: Rojo
Maywa :: Lila, morado
Killu :: Amarillo
Kishpu :: Naranja
Ankas :: Azul
Paku :: Café, castaño
Suku :: Plomo
Waminsi :: Rosado
Yanalla ankas :: Azul marino

## Regla: el color va antes del sustantivo
A diferencia del español, en quichua el color se antepone al sustantivo que describe:
Killu atallpa :: gallina amarilla (literalmente "amarilla gallina")
Waminsi wasi :: casa rosada
Yana allku :: perro negro
Ankas kucha :: laguna azul`,
    nivel: 1,
    orden: 6,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El negro se dice "Yana".', pregunta: '¿Cómo se dice "negro" en quichua?', opciones: ['Yana', 'Yurak', 'Puka', 'Killu'], respuesta: 'Yana' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El blanco se dice "Yurak".', pregunta: '¿Qué significa "Yurak"?', opciones: ['Blanco', 'Negro', 'Rojo', 'Verde'], respuesta: 'Blanco' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'El rojo se dice "Puka".', pregunta: '"___" significa rojo', opciones: ['Puka', 'Killu', 'Waylla', 'Ankas'], respuesta: 'Puka' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El amarillo se dice "Killu".', pregunta: '¿Cómo se dice "amarillo" en quichua?', opciones: ['Killu', 'Yana', 'Yurak', 'Paku'], respuesta: 'Killu' },
      { tipo: 'MATCHING', explicacion: 'A diferencia del español, en quichua el color va ANTES del sustantivo: "killu atallpa" es "gallina amarilla" (literalmente "amarilla gallina").', pregunta: 'En quichua, el color se coloca ___ del sustantivo que describe', opciones: ['antes', 'después', 'en medio', 'no se usa'], respuesta: 'antes' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "verde" en quichua?', opciones: ['Waylla', 'Ankas', 'Puka', 'Paku'], respuesta: 'Waylla' },
      { pregunta: '"Ankas" significa:', opciones: ['Azul', 'Rosado', 'Café', 'Amarillo'], respuesta: 'Azul' },
      { pregunta: '¿Cómo se dice "gallina amarilla" en quichua?', opciones: ['Killu atallpa', 'Atallpa killu', 'Killu allku', 'Puka atallpa'], respuesta: 'Killu atallpa' },
      { pregunta: 'Completa: "___" significa café o castaño', opciones: ['Paku', 'Waminsi', 'Suku', 'Maywa'], respuesta: 'Paku' },
      { pregunta: '"Waminsi" significa:', opciones: ['Rosado', 'Morado', 'Plomo', 'Celeste'], respuesta: 'Rosado' },
    ],
  },
  {
    nombre: 'Casa y objetos',
    descripcion: 'Vocabulario sobre la casa y los objetos que se encuentran en ella.',
    contenido: `## Cosas de la casa (Wasipa imasamikunamanta)
Wasi :: Casa
Sañu :: Teja
Tuku :: Ventana
Pirka :: Pared
Punku :: Puerta
Wasikata :: Techo
Chakana :: Escalera
Waska :: Soga
Kawitu :: Cama
Yanuna Anta :: Cocina
Manka :: Olla
Mamawisha :: Cucharón
Wisha :: Cuchara
Shushuna :: Colador
Tullpa :: Fogón
Yanta :: Leña
Sawna :: Almohada
Pachachik :: Reloj
Iska / Pakuyla :: Fósforo
Pataku :: Mesa
Ishpana Uku :: Baño
Charik :: Tenedor
Puñuna Uku :: Dormitorio
Mikuna Uku :: Comedor
Samana Uku :: Sala
Katana :: Cobija
Armana Uku :: Ducha
Yaku Upyak :: Vaso
Tyarina :: Silla
Wichi :: Sartén`,
    nivel: 2,
    orden: 7,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'La casa se dice "Wasi".', pregunta: '¿Cómo se dice "casa" en quichua?', opciones: ['Wasi', 'Punku', 'Tuku', 'Pataku'], respuesta: 'Wasi' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'La puerta se dice "Punku".', pregunta: '¿Qué significa "Punku"?', opciones: ['Puerta', 'Ventana', 'Techo', 'Pared'], respuesta: 'Puerta' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'La ventana se dice "Tuku".', pregunta: '"___" significa ventana', opciones: ['Tuku', 'Punku', 'Pirka', 'Kawitu'], respuesta: 'Tuku' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'La cama se dice "Kawitu".', pregunta: '¿Cómo se dice "cama" en quichua?', opciones: ['Kawitu', 'Pataku', 'Tyarina', 'Manka'], respuesta: 'Kawitu' },
      { tipo: 'MATCHING', explicacion: 'La mesa se dice "Pataku".', pregunta: '¿Qué significa "Pataku"?', opciones: ['Mesa', 'Silla', 'Olla', 'Cuchara'], respuesta: 'Mesa' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "silla" en quichua?', opciones: ['Tyarina', 'Kawitu', 'Pataku', 'Punku'], respuesta: 'Tyarina' },
      { pregunta: '"Manka" significa:', opciones: ['Olla', 'Cuchara', 'Mesa', 'Cama'], respuesta: 'Olla' },
      { pregunta: '¿Cómo se dice "cuchara" en quichua?', opciones: ['Wisha', 'Manka', 'Wichi', 'Tullpa'], respuesta: 'Wisha' },
      { pregunta: 'Completa: "___" significa techo', opciones: ['Wasikata', 'Wasi', 'Pirka', 'Chakana'], respuesta: 'Wasikata' },
      { pregunta: '"Chakana" significa:', opciones: ['Escalera', 'Puerta', 'Ventana', 'Pared'], respuesta: 'Escalera' },
    ],
  },
  {
    nombre: 'Animales',
    descripcion: 'Nombres de animales domésticos y silvestres en quichua.',
    contenido: `## Nombres de animales (Wiwakunapa shutikuna)
Allku :: Perro
Amaru :: Serpiente, culebra
Anka :: Gavilán
Añas :: Zorro
Añanku :: Hormiga
Apyu :: Caballo
Atallpa :: Gallina
Atuk :: Lobo
Challwa :: Pez
Charapa :: Tortuga acuática
China Wakra :: Vaca
Chita :: Chivo, cabrío
Chuchi :: Pollo
Chukuri :: Comadreja
Churu :: Caracol
Chushik :: Lechuza
Chuspi :: Mosca
Hampatu :: Rana
Kuchi :: Cerdo
Kuru :: Gusano
Kushillu :: Mono
Kuskunku :: Búho
Llama :: Oveja
Palu :: Lagartija
Pawshi :: Pavo
Pillpintu :: Mariposa
Pishku :: Pájaro
Puma :: Tigre (en este texto)
Sacha Kuchi :: Sajino
Taruka :: Venado
Ukucha :: Ratón
Ukumari :: Oso
Ullawanka :: Gallinazo
Ullku Wakra :: Toro
Urpi :: Tórtola
Uturunku :: Tigre
Wallinku / Kunu :: Conejo
Yutu :: Perdiz`,
    nivel: 2,
    orden: 8,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El perro se dice "Allku".', pregunta: '¿Cómo se dice "perro" en quichua?', opciones: ['Allku', 'Atuk', 'Puma', 'Apyu'], respuesta: 'Allku' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'La gallina se dice "Atallpa".', pregunta: '¿Qué significa "Atallpa"?', opciones: ['Gallina', 'Vaca', 'Cerdo', 'Oveja'], respuesta: 'Gallina' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'La vaca se dice "China Wakra".', pregunta: '"___" significa vaca', opciones: ['China Wakra', 'Kuchi', 'Apyu', 'Yutu'], respuesta: 'China Wakra' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El caballo se dice "Apyu".', pregunta: '¿Cómo se dice "caballo" en quichua?', opciones: ['Apyu', 'Allku', 'Atuk', 'Puma'], respuesta: 'Apyu' },
      { tipo: 'MATCHING', explicacion: '"Puma" significa "tigre" en este texto (no es el felino americano del mismo nombre en español).', pregunta: '¿Qué significa "Puma"?', opciones: ['Tigre', 'Lobo', 'Oso', 'Mono'], respuesta: 'Tigre' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "cerdo" en quichua?', opciones: ['Kuchi', 'Allku', 'Apyu', 'Puma'], respuesta: 'Kuchi' },
      { pregunta: '"Atuk" significa:', opciones: ['Lobo', 'Tigre', 'Oso', 'Zorro'], respuesta: 'Lobo' },
      { pregunta: '¿Cómo se dice "conejo" en quichua?', opciones: ['Wallinku', 'Kuchi', 'Yutu', 'Atallpa'], respuesta: 'Wallinku' },
      { pregunta: 'Completa: en este texto, "___" significa oveja', opciones: ['Llama', 'China Wakra', 'Chita', 'Kuchi'], respuesta: 'Llama' },
      { pregunta: '"Yutu" significa:', opciones: ['Perdiz', 'Pavo', 'Gavilán', 'Lechuza'], respuesta: 'Perdiz' },
    ],
  },
  {
    nombre: 'Alimentos',
    descripcion: 'Vocabulario de comidas, granos y alimentos básicos en quichua.',
    contenido: `## Frutos y granos (Rurukuna murukunapash)
Papa :: Patata
Chukllu :: Choclo
Lumu :: Yuca
Palta :: Aguacate
Chilina :: Naranja
Chiwilla :: Piña
Uka :: Oca
Milluku :: Melloco
Palanta :: Guineo
Uchu :: Ají
Manturu :: Achote
Kula :: Cacao
Shañu :: Café
Wiru :: Caña
Pakay :: Guaba
Inchik :: Maní
Purutu :: Frejol
Sara :: Maíz

## Otros alimentos (Mikuykuna)
Shunkunchina :: Desayuno
Chawpi puncha mikuna :: Almuerzo
Chishimanta mikuna :: Cena, merienda
Api :: Colada, crema
Hilli :: Caldo, jugo
Aswa :: Chicha
Aycha :: Carne
Ñuñu :: Leche
Kamcha :: Tostado
Makinchu :: Queso
Mishki :: Dulce, sabroso
Rapatura :: Panela
Wira :: Manteca
Yakuwira / wiyu :: Aceite
Tanta :: Pan
Kachi :: Sal
Llaru :: Arroz
Kinwa :: Quinua
Machka :: Máchica
Lulun :: Huevo
Mishki haku :: Azúcar
Yaku :: Agua`,
    nivel: 2,
    orden: 9,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El agua se dice "Yaku".', pregunta: '¿Cómo se dice "agua" en quichua?', opciones: ['Yaku', 'Aycha', 'Ñuñu', 'Tanta'], respuesta: 'Yaku' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El pan se dice "Tanta".', pregunta: '¿Qué significa "Tanta"?', opciones: ['Pan', 'Sal', 'Arroz', 'Carne'], respuesta: 'Pan' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'El maíz se dice "Sara".', pregunta: '"___" significa maíz', opciones: ['Sara', 'Papa', 'Lumu', 'Uchu'], respuesta: 'Sara' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'La papa (patata) se dice igual: "Papa".', pregunta: '¿Cómo se dice "papa" (patata) en quichua?', opciones: ['Papa', 'Sara', 'Lumu', 'Palta'], respuesta: 'Papa' },
      { tipo: 'MATCHING', explicacion: 'La carne se dice "Aycha".', pregunta: '¿Qué significa "Aycha"?', opciones: ['Carne', 'Leche', 'Sal', 'Arroz'], respuesta: 'Carne' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "leche" en quichua?', opciones: ['Ñuñu', 'Yaku', 'Aycha', 'Kachi'], respuesta: 'Ñuñu' },
      { pregunta: '"Uchu" significa:', opciones: ['Ají', 'Sal', 'Arroz', 'Aguacate'], respuesta: 'Ají' },
      { pregunta: '¿Cómo se dice "arroz" en quichua?', opciones: ['Llaru', 'Sara', 'Papa', 'Kachi'], respuesta: 'Llaru' },
      { pregunta: 'Completa: "___" significa sal', opciones: ['Kachi', 'Llaru', 'Tanta', 'Ñuñu'], respuesta: 'Kachi' },
      { pregunta: '"Palta" significa:', opciones: ['Aguacate', 'Yuca', 'Ají', 'Maíz'], respuesta: 'Aguacate' },
    ],
  },
  {
    nombre: 'Profesiones',
    descripcion: 'Nombres de oficios y profesiones en quichua.',
    contenido: `## Profesiones y oficios (Yachashkakuna)
Amawta :: Sabio, científico
Antawachik :: Chofer
Antawa allichik :: Mecánico
Chapak :: Policía, guardia
Hampik :: Médico/a
Kamachik :: Abogado
Killkak :: Escritor
Killkakamayuk :: Secretario/a
Kullkikamayuk :: Contador/a
Kushipata :: Sacerdote
Llallakkamayuk :: Carpintero
Michik :: Pastor
Katuk :: Vendedor, comerciante
Sirak :: Sastre
Sirmak :: Electricista
Sinku Haytak :: Futbolista
Takik :: Cantante
Tullpuk :: Pintor
Tushuk :: Bailarín/a
Wakrakamak :: Vaquero
Wasirurak :: Constructor
Yachachik :: Profesor/a
Yanuk :: Cocinero/a
Yupaykamayuk :: Matemático
Tarpuk Runa :: Agricultor/a
Wiwa Hampik :: Veterinario/a
Kiru Hampik :: Odontólogo/a
Wawakamak :: Niñera
Willak Kamayuk :: Periodista`,
    nivel: 2,
    orden: 10,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El profesor o profesora se dice "Yachachik", de la raíz "yacha-" (aprender, saber).', pregunta: '¿Cómo se dice "profesor/a" en quichua?', opciones: ['Yachachik', 'Hampik', 'Yanuk', 'Katuk'], respuesta: 'Yachachik' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El médico o médica se dice "Hampik", de "hampi-" (curar, medicina).', pregunta: '¿Qué significa "Hampik"?', opciones: ['Médico/a', 'Profesor/a', 'Cocinero/a', 'Abogado'], respuesta: 'Médico/a' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'El cocinero o cocinera se dice "Yanuk".', pregunta: '"___" significa cocinero/a', opciones: ['Yanuk', 'Yachachik', 'Chapak', 'Kamachik'], respuesta: 'Yanuk' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El agricultor se dice "Tarpuk Runa", literalmente "persona que siembra".', pregunta: '¿Cómo se dice "agricultor/a" en quichua?', opciones: ['Tarpuk Runa', 'Wasirurak', 'Katuk', 'Chapak'], respuesta: 'Tarpuk Runa' },
      { tipo: 'MATCHING', explicacion: 'El policía o guardia se dice "Chapak".', pregunta: '¿Qué significa "Chapak"?', opciones: ['Policía, guardia', 'Abogado', 'Vendedor', 'Constructor'], respuesta: 'Policía, guardia' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "abogado" en quichua?', opciones: ['Kamachik', 'Yachachik', 'Hampik', 'Yanuk'], respuesta: 'Kamachik' },
      { pregunta: '"Katuk" significa:', opciones: ['Vendedor, comerciante', 'Profesor/a', 'Policía', 'Médico/a'], respuesta: 'Vendedor, comerciante' },
      { pregunta: '¿Cómo se dice "veterinario/a" en quichua?', opciones: ['Wiwa Hampik', 'Kiru Hampik', 'Hampik', 'Tarpuk Runa'], respuesta: 'Wiwa Hampik' },
      { pregunta: 'Completa: "___" significa odontólogo/a', opciones: ['Kiru Hampik', 'Wiwa Hampik', 'Hampik', 'Yanuk'], respuesta: 'Kiru Hampik' },
      { pregunta: '"Wasirurak" significa:', opciones: ['Constructor', 'Agricultor', 'Vendedor', 'Cocinero'], respuesta: 'Constructor' },
    ],
  },
  {
    nombre: 'Tiempo: días, meses y horas',
    descripcion: 'Los días de la semana, los meses del año y palabras para hablar del tiempo: hoy, ayer, mañana, hora.',
    contenido: `## Días de la semana (Hunkaymanta punchakuna)
Awaki :: Lunes
Wanra :: Martes
Chillay :: Miércoles
Kullka :: Jueves
Chaska :: Viernes
Wacha :: Sábado
Inti :: Domingo

## Meses del año (Watamanta killakuna)
Kulla :: Enero
Panchi :: Febrero
Pawkar :: Marzo
Ayriwa :: Abril
Aymuray :: Mayo
Raymi :: Junio
Sitwa :: Julio
Karwa :: Agosto
Kuski :: Septiembre
Wayru :: Octubre
Sasi :: Noviembre
Kapak :: Diciembre

## Lectura del tiempo (Pacha rikuymanta)
Saylla :: Hora
Chiniku :: Minuto
Chinilla :: Segundo
Pacha :: Tiempo, espacio

## Los tiempos (Pachakunamanta)
Kayna puncha :: El día de ayer
Kunan puncha :: El día de hoy
Kaya puncha :: El día de mañana
Shamuk puncha :: El día venidero
Mincha puncha :: Próximo día
Yallishka puncha :: El día que pasó
Punchanta :: Cada día
Shamun wata :: El año venidero
Yallishka wata :: El año pasado
Yallishka killa :: El mes pasado`,
    nivel: 2,
    orden: 11,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El lunes se dice "Awaki". Los días de la semana en quichua no se parecen al español.', pregunta: '¿Cómo se dice "lunes" en quichua?', opciones: ['Awaki', 'Wanra', 'Chillay', 'Inti'], respuesta: 'Awaki' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El domingo se dice "Inti", que también es la palabra para "sol".', pregunta: '¿Qué día de la semana es "Inti"?', opciones: ['Domingo', 'Lunes', 'Sábado', 'Viernes'], respuesta: 'Domingo' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: '"Hoy" se dice "Kunan puncha", literalmente "el día de ahora".', pregunta: '"___" significa hoy', opciones: ['Kunan puncha', 'Kayna puncha', 'Kaya puncha', 'Saylla'], respuesta: 'Kunan puncha' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Enero se dice "Kulla".', pregunta: '¿Cómo se dice "enero" en quichua?', opciones: ['Kulla', 'Panchi', 'Pawkar', 'Kapak'], respuesta: 'Kulla' },
      { tipo: 'MATCHING', explicacion: '"Ayer" se dice "Kayna puncha", literalmente "el día que pasó".', pregunta: '¿Qué significa "Kayna puncha"?', opciones: ['El día de ayer', 'El día de hoy', 'El día de mañana', 'Cada día'], respuesta: 'El día de ayer' },
    ],
    evalPreguntas: [
      { pregunta: '¿Qué día de la semana es "Chaska"?', opciones: ['Viernes', 'Jueves', 'Miércoles', 'Sábado'], respuesta: 'Viernes' },
      { pregunta: '"Kaya puncha" significa:', opciones: ['El día de mañana', 'El día de hoy', 'El día de ayer', 'La próxima semana'], respuesta: 'El día de mañana' },
      { pregunta: '¿Cómo se dice "diciembre" en quichua?', opciones: ['Kapak', 'Kulla', 'Sasi', 'Wayru'], respuesta: 'Kapak' },
      { pregunta: 'Completa: "___" significa hora', opciones: ['Saylla', 'Pacha', 'Chiniku', 'Puncha'], respuesta: 'Saylla' },
      { pregunta: '¿Qué día de la semana es "Wacha"?', opciones: ['Sábado', 'Domingo', 'Lunes', 'Martes'], respuesta: 'Sábado' },
    ],
  },
  {
    nombre: 'Números',
    descripcion: 'Cuenta del 0 al 1000 y aprende los números ordinales en quichua.',
    contenido: `## Números del 0 al 10 (Shukllachishkakancha)
Illak :: 0
Shuk :: 1
Ishkay :: 2
Kimsa :: 3
Chusku :: 4
Pichka :: 5
Sukta :: 6
Kanchis :: 7
Pusak :: 8
Iskun :: 9
Chunka :: 10

## Decenas, centenas y más
Ishkay chunka :: 20
Pichka chunka :: 50
Patsak :: 100
Waranka :: 1000
Hunu :: 1'000.000

Los números compuestos se forman diciendo la decena y luego la unidad, igual que en español:
Chunka shuk :: 11 (diez y uno)
Chunka ishkay :: 12 (diez y dos)
Ishkay chunka pusak :: 28

## Números ordinales
Se forman añadiendo el sufijo -niki a cualquier número:
Shukniki :: Primero
Ishkayniki :: Segundo
Kimsaniki :: Tercero
Chunkaniki :: Décimo

## Las cuatro operaciones (Chusku yupayrurayrimanta)
Yapana :: Sumar
Anchuchina :: Restar
Mirachina :: Multiplicar
Rakina :: Dividir`,
    nivel: 2,
    orden: 12,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El cinco se dice "Pichka".', pregunta: '¿Cómo se dice "cinco" en quichua?', opciones: ['Pichka', 'Chusku', 'Sukta', 'Kimsa'], respuesta: 'Pichka' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El diez se dice "Chunka". Los números del 11 al 19 se forman diciendo "chunka + unidad" (ej. chunka shuk = once).', pregunta: '¿Qué número es "Chunka"?', opciones: ['Diez', 'Cien', 'Uno', 'Cinco'], respuesta: 'Diez' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'El cien se dice "Patsak".', pregunta: '"___" significa cien', opciones: ['Patsak', 'Waranka', 'Chunka', 'Iskun'], respuesta: 'Patsak' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El tres se dice "Kimsa".', pregunta: '¿Cómo se dice "tres" en quichua?', opciones: ['Kimsa', 'Ishkay', 'Chusku', 'Shuk'], respuesta: 'Kimsa' },
      { tipo: 'MATCHING', explicacion: 'Para formar un número ordinal (primero, segundo...) se añade el sufijo "-niki" al número: shuk (uno) + niki = shukniki (primero).', pregunta: '¿Qué significa "Shukniki"?', opciones: ['Primero', 'Segundo', 'Tercero', 'Décimo'], respuesta: 'Primero' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "uno" en quichua?', opciones: ['Shuk', 'Ishkay', 'Kimsa', 'Pichka'], respuesta: 'Shuk' },
      { pregunta: '"Waranka" significa:', opciones: ['Mil', 'Cien', 'Diez', 'Un millón'], respuesta: 'Mil' },
      { pregunta: '¿Cómo se dice "siete" en quichua?', opciones: ['Kanchis', 'Pusak', 'Sukta', 'Iskun'], respuesta: 'Kanchis' },
      { pregunta: 'Completa: "___" significa segundo (número ordinal)', opciones: ['Ishkayniki', 'Shukniki', 'Kimsaniki', 'Chunkaniki'], respuesta: 'Ishkayniki' },
      { pregunta: '"Iskun" significa:', opciones: ['Nueve', 'Ocho', 'Siete', 'Diez'], respuesta: 'Nueve' },
    ],
  },
  {
    nombre: 'Pronombres',
    descripcion: 'Pronombres personales, demostrativos y posesivos para referirte a personas y cosas.',
    contenido: `## Pronombres personales (Runa shutiparantikuna)
Ñuka :: Yo
Kan :: Tú
Kikin :: Usted
Pay :: Él / Ella
Ñukanchik :: Nosotros/as
Kankuna :: Vosotros
Kikinkuna :: Ustedes
Paykuna :: Ellos/as

## Pronombres demostrativos (Rikuchik shutiparantikuna)
Kay :: Este, esta, esto
Chay :: Ese, esa, eso
Chakay :: Aquel, aquello, aquella

## Pronombres posesivos (Kikinyachik shutiparantikuna)
Se forman añadiendo el sufijo -pa al pronombre personal:
Ñukapa :: Mío
Kanpa :: Tuyo
Paypa :: De él / de ella
Ñukanchikpa :: Nuestro

## Pronombres interrogativos (Tapuchik shutiparantikuna)
Pitak :: ¿Quién?
Imatak :: ¿Qué? ¿Cómo?
Maypitak :: ¿En dónde?
Maymantak :: ¿A dónde?
Maykantak :: ¿Cuál?
Mashnatak :: ¿Cuánto?

## El morfema -chu (preguntas y negación)
Se añade al final de un verbo para hacer una pregunta o para negar:
Paychu :: ¿Es él?
Mana kawsanichu :: no vivo (aquí)`,
    nivel: 3,
    orden: 13,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Yo" se dice "Ñuka".', pregunta: '¿Cómo se dice "yo" en quichua?', opciones: ['Ñuka', 'Kan', 'Pay', 'Ñukanchik'], respuesta: 'Ñuka' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Tú" se dice "Kan".', pregunta: '¿Qué significa "Kan"?', opciones: ['Tú', 'Yo', 'Él/Ella', 'Nosotros'], respuesta: 'Tú' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: '"Él" o "ella" se dice "Pay" (el quichua no distingue género en este pronombre).', pregunta: '"___" significa él o ella', opciones: ['Pay', 'Kan', 'Ñuka', 'Paykuna'], respuesta: 'Pay' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Nosotros/as" se dice "Ñukanchik": se forma añadiendo -nchik a "Ñuka".', pregunta: '¿Cómo se dice "nosotros" en quichua?', opciones: ['Ñukanchik', 'Kankuna', 'Paykuna', 'Kikinkuna'], respuesta: 'Ñukanchik' },
      { tipo: 'MATCHING', explicacion: '"Ellos/ellas" se dice "Paykuna": se forma añadiendo -kuna (plural) a "Pay".', pregunta: '¿Qué significa "Paykuna"?', opciones: ['Ellos/ellas', 'Nosotros', 'Ustedes', 'Vosotros'], respuesta: 'Ellos/ellas' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "este/esta" (cerca) en quichua?', opciones: ['Kay', 'Chay', 'Chakay', 'Pay'], respuesta: 'Kay' },
      { pregunta: '"Chakay" significa:', opciones: ['Aquel/aquella (lejos)', 'Este/esta (cerca)', 'Ese/esa', 'Yo'], respuesta: 'Aquel/aquella (lejos)' },
      { pregunta: '¿Cómo se dice "mi" o "mío" en quichua?', opciones: ['Ñukapa', 'Kanpa', 'Paypa', 'Ñukanchikpa'], respuesta: 'Ñukapa' },
      { pregunta: 'El sufijo "___" se añade al pronombre personal para formar el posesivo (mi, tu, su)', opciones: ['pa', 'ta', 'pi', 'man'], respuesta: 'pa' },
      { pregunta: '"Kikinkuna" significa:', opciones: ['Ustedes', 'Vosotros', 'Ellos', 'Nosotros'], respuesta: 'Ustedes' },
    ],
  },
  {
    nombre: 'Sustantivos y adjetivos',
    descripcion: 'Adjetivos comunes y cómo se combinan con los sustantivos en quichua: el adjetivo va antes.',
    contenido: `## Sustantivos (Shutikuna)
En quichua hay 10 clases de sustantivos: propios (kikin shuti), comunes (yanka shuti), concretos, abstractos, derivados, compuestos, individuales, diminutivos, colectivos y aumentativos.

Wasi :: casa (sustantivo común)
Kawsay :: vida (abstracto)
Tantarurak :: panadero (derivado de "tanta" = pan)
Wakrawawa :: ternero (compuesto: wakra + wawa)
Wasiku :: casita (diminutivo, sufijo -ku)
Llamakancha :: rebaño (colectivo, sufijo -kancha)
Wasiruku :: casota (aumentativo, sufijo -ruku)

## Adjetivos calificativos (Shinallay shutillikuna)
Hatun :: Grande
Uchilla :: Pequeño
Sumak :: Hermoso/a
Mushuk :: Nuevo
Alli :: Bueno/a
Millay :: Feo/a
Sinchi :: Fuerte

## Regla: el adjetivo va antes del sustantivo
Hatun wasi :: casa grande (literalmente "grande casa")
Yurak allku :: perro blanco

## Adjetivos posesivos, demostrativos y numerales
Ñukapa wasi :: mi casa
Kay chita :: este chivo
Ishkay chunka :: veinte

## Adjetivos indefinidos (Suyu shutillikuna)
Achka :: Mucho
Asha :: Poco
Tukuy :: Todo
Wakin :: Alguno
Shuktak :: Otro`,
    nivel: 3,
    orden: 14,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Grande" se dice "Hatun".', pregunta: '¿Cómo se dice "grande" en quichua?', opciones: ['Hatun', 'Uchilla', 'Sumak', 'Mushuk'], respuesta: 'Hatun' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Pequeño" se dice "Uchilla".', pregunta: '¿Qué significa "Uchilla"?', opciones: ['Pequeño', 'Grande', 'Hermoso', 'Nuevo'], respuesta: 'Pequeño' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: '"Hermoso/a" se dice "Sumak".', pregunta: '"___" significa hermoso/a', opciones: ['Sumak', 'Hatun', 'Millay', 'Sinchi'], respuesta: 'Sumak' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: '"Nuevo" se dice "Mushuk".', pregunta: '¿Cómo se dice "nuevo" en quichua?', opciones: ['Mushuk', 'Hatun', 'Alli', 'Millay'], respuesta: 'Mushuk' },
      { tipo: 'MATCHING', explicacion: 'En quichua el adjetivo siempre va ANTES del sustantivo: "Hatun wasi" es "casa grande" (literalmente "grande casa").', pregunta: 'En quichua, el adjetivo se coloca ___ del sustantivo', opciones: ['antes', 'después', 'en medio', 'no se usa'], respuesta: 'antes' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "fuerte" en quichua?', opciones: ['Sinchi', 'Hatun', 'Alli', 'Uchilla'], respuesta: 'Sinchi' },
      { pregunta: '"Alli" significa:', opciones: ['Bueno/a', 'Malo/a', 'Grande', 'Pequeño'], respuesta: 'Bueno/a' },
      { pregunta: '¿Cómo se dice "casa grande" en quichua?', opciones: ['Hatun wasi', 'Wasi hatun', 'Uchilla wasi', 'Wasi sumak'], respuesta: 'Hatun wasi' },
      { pregunta: 'El sufijo "-kuna" pluraliza los sustantivos; "wasikuna" significa:', opciones: ['casas', 'casa grande', 'casa pequeña', 'mi casa'], respuesta: 'casas' },
      { pregunta: '"Millay" significa:', opciones: ['Feo/a', 'Bonito/a', 'Grande', 'Fuerte'], respuesta: 'Feo/a' },
    ],
  },
  {
    nombre: 'Verbos y conjugación',
    descripcion: 'Conjuga verbos en presente, pasado y futuro simple usando los morfemas -ni, -rka y -sha.',
    contenido: `## El verbo en quichua
Todo verbo en infinitivo termina en -na y tiene raíz + terminación:
Yachana :: yacha (raíz) + na = aprender
Mikuna :: miku (raíz) + na = comer
Kuyana :: kuya (raíz) + na = amar

## Conjugación en presente
Se añade a la raíz: -ni (yo), -nki (tú), -n (él/ella), -nchik (nosotros), -nkichik (vosotros/ustedes), -nkuna (ellos)
Kuyani :: yo amo
Kuyanki :: tú amas
Kuyan :: él/ella ama
Kuyanchik :: nosotros amamos
Kuyankuna :: ellos aman

## Conjugación en pasado simple (con -rka-)
Kuyarkani :: yo amé
Kuyarkanki :: tú amaste
Kuyarka :: él/ella amó
Kuyarkakuna :: ellos amaron

## Conjugación en futuro simple (con -sha, -nki, -nka)
Kuyasha :: yo amaré
Kuyanki :: tú amarás
Kuyanka :: él/ella amará
Kuyashun :: nosotros amaremos

## Pretérito perfecto (con -shka-)
Kuyashkani :: yo he amado
Kuyashka :: él/ella ha amado

## Pretérito imperfecto (con -kka-)
Kuyakkani :: yo amaba
Kuyakka :: él/ella amaba

## Verbos comunes
Mikuna :: Comer
Puñuna :: Dormir
Rimana :: Hablar
Llankana :: Trabajar
Yachana :: Aprender, saber
Munana :: Querer
Armana :: Bañar(se)
Wakana :: Llorar
Asina :: Reír`,
    nivel: 3,
    orden: 15,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Para conjugar un verbo en presente, primera persona, se añade "-ni" a la raíz: kuya- (amar) + ni = Kuyani (yo amo).', pregunta: '¿Cómo se dice "yo amo" (kuyana = amar) en quichua?', opciones: ['Kuyani', 'Kuyanki', 'Kuyan', 'Kuyanchik'], respuesta: 'Kuyani' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Para "tú" se añade "-nki" a la raíz: kuya- + nki = Kuyanki (tú amas).', pregunta: '¿Qué significa "Kuyanki"?', opciones: ['Tú amas', 'Yo amo', 'Él ama', 'Nosotros amamos'], respuesta: 'Tú amas' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'Para el pasado se inserta "-rka-" antes de la terminación: kuya- + rka + ni = Kuyarkani (yo amé).', pregunta: '"Kuya___" (con "rka") significa "yo amé" en tiempo pasado', opciones: ['rkani', 'ni', 'sha', 'nki'], respuesta: 'rkani' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'Para el futuro en primera persona se añade "-sha" a la raíz: kuya- + sha = Kuyasha (yo amaré).', pregunta: '¿Cómo se dice "yo amaré" (futuro) en quichua?', opciones: ['Kuyasha', 'Kuyani', 'Kuyarkani', 'Kuyanki'], respuesta: 'Kuyasha' },
      { tipo: 'MATCHING', explicacion: 'Para "nosotros" se añade "-nchik" a la raíz: kuya- + nchik = Kuyanchik (nosotros amamos).', pregunta: '¿Qué significa "Kuyanchik"?', opciones: ['Nosotros amamos', 'Yo amo', 'Tú amas', 'Ellos aman'], respuesta: 'Nosotros amamos' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cómo se dice "él/ella ama" en quichua?', opciones: ['Kuyan', 'Kuyani', 'Kuyanki', 'Kuyanchik'], respuesta: 'Kuyan' },
      { pregunta: '"Kuyarka" significa:', opciones: ['Él/ella amó', 'Yo amé', 'Tú amaste', 'Ellos amaron'], respuesta: 'Él/ella amó' },
      { pregunta: '¿Cómo se dice "ellos amarán" en quichua?', opciones: ['Kuyankakuna', 'Kuyanchik', 'Kuyashun', 'Kuyanki'], respuesta: 'Kuyankakuna' },
      { pregunta: 'El morfema "___" indica tiempo pasado en los verbos quichuas', opciones: ['rka', 'sha', 'ni', 'kuna'], respuesta: 'rka' },
      { pregunta: '"Mikuna" significa:', opciones: ['Comer', 'Beber', 'Dormir', 'Hablar'], respuesta: 'Comer' },
    ],
  },
  {
    nombre: 'Formación de oraciones',
    descripcion: 'Aprende el orden Sujeto-Complemento-Verbo de las oraciones en quichua y los sufijos -ka y -ta.',
    contenido: `## Estructura de la oración
En quichua el orden es Sujeto - Complemento - Verbo (al revés que en español, donde el verbo suele ir antes del complemento).
> Atallpaka sarata mikurka = La gallina comió maíz (Atallpa-ka = sujeto, sara-ta = complemento, mikurka = verbo)

## El sufijo -ka (marca al sujeto)
Marca quién realiza la acción: Ñuka-ka = yo (como sujeto de la oración)

## El sufijo -ta (complemento directo)
Marca lo que recibe la acción: sara-ta = el maíz (complemento directo)

## Otros morfemas frecuentes (Yaparik shimi)
-kuna :: pluraliza (wasikuna = casas)
-lla :: solamente, cariño (wasilla = solo la casa)
-man :: dirección, hacia (llaktaman = hacia el pueblo)
-manta :: desde, por, de (wasimanta = desde la casa)
-kama :: hasta (wasikama = hasta la casa)
-pi :: en (wasipi = en la casa)
-wan :: con (taytawan = con papá)
-yuk :: dueño de (wasiyuk = dueño de la casa)
-pak :: para (Maríapak = para María)
-pa :: posesivo (Kanpa = tuyo)
-mi :: afirmación enfática (yachachikmi kani = soy profesor)
-pash :: también, y (ñukapash = yo también)

## Ejemplo completo
> Kanka yachachikmi kanki = Tú eres profesor (Kan-ka = tú/sujeto, yachachik-mi = profesor/afirmación, kanki = eres)`,
    nivel: 3,
    orden: 16,
    ejercicios: [
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'En quichua las oraciones se ordenan así: primero el SUJETO, luego el COMPLEMENTO, y al final el VERBO — al revés que en español.', pregunta: '¿En qué orden se construyen las oraciones en quichua?', opciones: ['Sujeto - Complemento - Verbo', 'Sujeto - Verbo - Complemento', 'Verbo - Sujeto - Complemento', 'Complemento - Verbo - Sujeto'], respuesta: 'Sujeto - Complemento - Verbo' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'En "Atallpaka sarata mikurka" (la gallina comió maíz), el verbo "mikurka" (comió) va al final de la oración.', pregunta: 'En "Atallpaka sarata mikurka" (La gallina comió maíz), ¿cuál es el verbo?', opciones: ['mikurka', 'Atallpaka', 'sarata', 'ninguno'], respuesta: 'mikurka' },
      { tipo: 'FILL_IN_THE_BLANK', explicacion: 'El sufijo "-ka" marca al sujeto de la oración: "Atallpa-ka" señala que "la gallina" es quien realiza la acción.', pregunta: 'El sufijo "___" marca al sujeto de la oración', opciones: ['ka', 'ta', 'pi', 'wan'], respuesta: 'ka' },
      { tipo: 'MULTIPLE_CHOICE', explicacion: 'El sufijo "-ta" marca el complemento directo: "sara-ta" señala que "el maíz" es lo que recibe la acción.', pregunta: 'El sufijo "-ta" en "sarata" indica que "sara" (maíz) es el:', opciones: ['complemento directo', 'sujeto', 'verbo', 'adjetivo'], respuesta: 'complemento directo' },
      { tipo: 'MATCHING', explicacion: '"Tú eres profesor" se dice "Kanka yachachikmi kanki": Kan (tú) + ka (sujeto) + yachachik (profesor) + mi (afirmación) + kanki (eres).', pregunta: '¿Cómo se dice "Tú eres profesor" en quichua?', opciones: ['Kanka yachachikmi kanki', 'Ñuka yachachikmi kani', 'Payka yachachikmi kan', 'Kanka warmimi kanki'], respuesta: 'Kanka yachachikmi kanki' },
    ],
    evalPreguntas: [
      { pregunta: '¿Cuál es el orden correcto de la oración en quichua?', opciones: ['Sujeto - Complemento - Verbo', 'Verbo - Complemento - Sujeto', 'Complemento - Sujeto - Verbo', 'Sujeto - Verbo - Complemento'], respuesta: 'Sujeto - Complemento - Verbo' },
      { pregunta: 'En una oración quichua, la última palabra generalmente cumple la función de:', opciones: ['verbo', 'sujeto', 'complemento', 'adjetivo'], respuesta: 'verbo' },
      { pregunta: 'El sufijo que marca el complemento directo (quién recibe la acción) es:', opciones: ['-ta', '-ka', '-pi', '-manta'], respuesta: '-ta' },
      { pregunta: 'Completa: "Kanka yachachikmi ___" significa "Tú eres profesor"', opciones: ['kanki', 'kani', 'kan', 'kanchik'], respuesta: 'kanki' },
      { pregunta: '¿Cómo se dice "Soy profesor/a" en quichua?', opciones: ['Yachachikmi kani', 'Yachachikmi kanki', 'Yachachikmi kan', 'Yachachikmi kanchik'], respuesta: 'Yachachikmi kani' },
    ],
  },
];

export const INSIGNIAS_BASE = [
  { nombre: 'Primer módulo completado', descripcion: 'Completaste tu primer módulo de quichua. ¡Excelente comienzo!', icono: '🏅' },
  { nombre: '3 módulos completados', descripcion: 'Has completado 3 módulos. ¡Vas por buen camino!', icono: '🥈' },
  { nombre: 'Todos los módulos básicos completados', descripcion: 'Completaste todos los módulos. ¡Eres un experto en quichua!', icono: '🏆' },
  { nombre: 'Puntaje perfecto en evaluación', descripcion: 'Obtuviste 100/100 en una evaluación. ¡Perfecto!', icono: '⭐' },
];
