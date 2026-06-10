import 'dotenv/config';
import { PrismaClient, ExerciseType } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter } as any);

const modules = [
  {
    name: 'Saludos',
    description: 'Aprende los saludos básicos en quichua: buenos días, buenas tardes y cómo presentarte.',
    level: 1,
    order: 1,
    exercises: [
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "buenos días" en quichua?', options: ['Alli puncha', 'Alli chishi', 'Alli tuta', 'Imaynalla'], answer: 'Alli puncha' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué significa "Imaynalla kashkanki"?', options: ['¿Cómo estás?', '¿Dónde vas?', '¿Cómo te llamas?', '¿De dónde eres?'], answer: '¿Cómo estás?' },
      { type: ExerciseType.FILL_IN_THE_BLANK, question: 'Completa: "___ puncha" significa buenas tardes', options: ['Alli', 'Chishi', 'Tuta', 'Inti'], answer: 'Chishi' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "gracias" en quichua?', options: ['Yupaychani', 'Ñukam kani', 'Allimi', 'Shamuni'], answer: 'Yupaychani' },
      { type: ExerciseType.MATCHING, question: '¿Qué significa "Ñukam kani"?', options: ['Yo soy', 'Tú eres', 'Él es', 'Nosotros somos'], answer: 'Yo soy' },
    ],
    evalQuestions: [
      { question: '¿Cómo se saluda en la mañana en quichua?', options: ['Alli puncha', 'Alli chishi', 'Alli tuta', 'Imaynalla'], answer: 'Alli puncha' },
      { question: '¿Qué significa "Yupaychani"?', options: ['Gracias', 'Buenos días', '¿Cómo estás?', 'Adiós'], answer: 'Gracias' },
      { question: '¿Cómo se dice "hasta luego" en quichua?', options: ['Kayakama', 'Imaynalla', 'Alli puncha', 'Yupaychani'], answer: 'Kayakama' },
      { question: '¿Qué significa "Imaynalla kashkanki"?', options: ['¿Cómo estás?', 'Buenos días', 'Gracias', 'Adiós'], answer: '¿Cómo estás?' },
      { question: '"Ñukam kani" significa:', options: ['Yo soy', 'Tú eres', 'Él es', 'Ellos son'], answer: 'Yo soy' },
    ],
  },
  {
    name: 'Familia',
    description: 'Vocabulario sobre los miembros de la familia en quichua y cómo hablar de ellos.',
    level: 1,
    order: 2,
    exercises: [
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "madre" en quichua?', options: ['Mama', 'Tayta', 'Wawa', 'Turi'], answer: 'Mama' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué significa "Tayta"?', options: ['Padre', 'Madre', 'Hijo', 'Hermano'], answer: 'Padre' },
      { type: ExerciseType.FILL_IN_THE_BLANK, question: 'El hijo o hija en quichua se llama "___"', options: ['Wawa', 'Mama', 'Tayta', 'Kaka'], answer: 'Wawa' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "abuelo" en quichua?', options: ['Yaya', 'Mama', 'Wawa', 'Turi'], answer: 'Yaya' },
      { type: ExerciseType.MATCHING, question: '¿Qué significa "Turi"?', options: ['Hermano', 'Hermana', 'Tío', 'Primo'], answer: 'Hermano' },
    ],
    evalQuestions: [
      { question: '¿Cómo se dice "madre" en quichua?', options: ['Mama', 'Tayta', 'Yaya', 'Turi'], answer: 'Mama' },
      { question: '¿Qué significa "Tayta"?', options: ['Padre', 'Madre', 'Abuelo', 'Hermano'], answer: 'Padre' },
      { question: '"Wawa" significa:', options: ['Hijo/Hija', 'Madre', 'Padre', 'Abuelo'], answer: 'Hijo/Hija' },
      { question: '¿Cómo se dice "abuelo" en quichua?', options: ['Yaya', 'Kaka', 'Turi', 'Pani'], answer: 'Yaya' },
      { question: '"Pani" significa:', options: ['Hermana', 'Hermano', 'Prima', 'Tía'], answer: 'Hermana' },
    ],
  },
  {
    name: 'Comida y Animales',
    description: 'Vocabulario esencial sobre alimentos tradicionales andinos y animales domésticos en quichua.',
    level: 2,
    order: 3,
    exercises: [
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "papa" (patata) en quichua?', options: ['Papa', 'Sara', 'Kinua', 'Uchú'], answer: 'Papa' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué significa "Sara"?', options: ['Maíz', 'Papa', 'Quinua', 'Ají'], answer: 'Maíz' },
      { type: ExerciseType.FILL_IN_THE_BLANK, question: 'El perro en quichua se llama "___"', options: ['Allqu', 'Mishi', 'Llama', 'Waka'], answer: 'Allqu' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "gato" en quichua?', options: ['Mishi', 'Allqu', 'Waka', 'Atuk'], answer: 'Mishi' },
      { type: ExerciseType.MATCHING, question: '¿Qué significa "Waka"?', options: ['Vaca', 'Perro', 'Gato', 'Llama'], answer: 'Vaca' },
    ],
    evalQuestions: [
      { question: '¿Cómo se dice "maíz" en quichua?', options: ['Sara', 'Papa', 'Kinua', 'Uchú'], answer: 'Sara' },
      { question: '"Allqu" significa:', options: ['Perro', 'Gato', 'Vaca', 'Llama'], answer: 'Perro' },
      { question: '¿Cómo se dice "quinua" en quichua?', options: ['Kinua', 'Sara', 'Papa', 'Uchú'], answer: 'Kinua' },
      { question: '"Mishi" significa:', options: ['Gato', 'Perro', 'Vaca', 'Caballo'], answer: 'Gato' },
      { question: '¿Cómo se llama la llama en quichua?', options: ['Llama', 'Waka', 'Allqu', 'Mishi'], answer: 'Llama' },
    ],
  },
  {
    name: 'Tiempos del Día',
    description: 'Aprende a expresar los diferentes momentos del día y el tiempo en quichua.',
    level: 2,
    order: 4,
    exercises: [
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "mañana" en quichua?', options: ['Puncha', 'Chishi', 'Tuta', 'Inti'], answer: 'Puncha' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué significa "Tuta"?', options: ['Noche', 'Mañana', 'Tarde', 'Mediodía'], answer: 'Noche' },
      { type: ExerciseType.FILL_IN_THE_BLANK, question: '"___" significa tarde en quichua', options: ['Chishi', 'Puncha', 'Tuta', 'Inti'], answer: 'Chishi' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "hoy" en quichua?', options: ['Kunan', 'Kayak', 'Chaymanta', 'Pacha'], answer: 'Kunan' },
      { type: ExerciseType.MATCHING, question: '¿Qué significa "Kayak"?', options: ['Mañana (día siguiente)', 'Ayer', 'Hoy', 'Siempre'], answer: 'Mañana (día siguiente)' },
    ],
    evalQuestions: [
      { question: '¿Cómo se dice "noche" en quichua?', options: ['Tuta', 'Puncha', 'Chishi', 'Inti'], answer: 'Tuta' },
      { question: '"Kunan" significa:', options: ['Hoy', 'Ayer', 'Mañana', 'Siempre'], answer: 'Hoy' },
      { question: '¿Cómo se dice "tarde" en quichua?', options: ['Chishi', 'Tuta', 'Puncha', 'Kayak'], answer: 'Chishi' },
      { question: '"Kayak" significa:', options: ['Mañana', 'Hoy', 'Ayer', 'Noche'], answer: 'Mañana' },
      { question: '"Inti" significa:', options: ['Sol', 'Luna', 'Estrella', 'Noche'], answer: 'Sol' },
    ],
  },
  {
    name: 'Conjugaciones de Verbos',
    description: 'Aprende a conjugar los verbos más comunes del quichua en presente y pasado.',
    level: 3,
    order: 5,
    exercises: [
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se conjuga "comer" (mikhuna) en primera persona singular?', options: ['Mikhunimi', 'Mikhunki', 'Mikhun', 'Mikhunchik'], answer: 'Mikhunimi' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué significa "Shamunki"?', options: ['Tú vienes', 'Yo vengo', 'Él viene', 'Nosotros venimos'], answer: 'Tú vienes' },
      { type: ExerciseType.FILL_IN_THE_BLANK, question: '"Rinimi" significa "yo ___"', options: ['voy', 'vienes', 'va', 'vamos'], answer: 'voy' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "nosotros hablamos" en quichua?', options: ['Rimanchik', 'Rimanimi', 'Rimanki', 'Riman'], answer: 'Rimanchik' },
      { type: ExerciseType.MATCHING, question: '"Kawsanki" significa:', options: ['Tú vives', 'Yo vivo', 'Él vive', 'Vivimos'], answer: 'Tú vives' },
    ],
    evalQuestions: [
      { question: '"Mikhunimi" significa:', options: ['Yo como', 'Tú comes', 'Él come', 'Comemos'], answer: 'Yo como' },
      { question: '¿Cómo se dice "él viene" en quichua?', options: ['Shamun', 'Shamuni', 'Shamunimi', 'Shamunchik'], answer: 'Shamun' },
      { question: '"Rimanchik" significa:', options: ['Nosotros hablamos', 'Yo hablo', 'Tú hablas', 'Él habla'], answer: 'Nosotros hablamos' },
      { question: '¿Cómo se dice "tú vas" en quichua?', options: ['Rinki', 'Rinimi', 'Rin', 'Rinchik'], answer: 'Rinki' },
      { question: '"Kawsanimi" significa:', options: ['Yo vivo', 'Tú vives', 'Él vive', 'Vivimos'], answer: 'Yo vivo' },
    ],
  },
  {
    name: 'Pronombres y Adjetivos',
    description: 'Domina los pronombres personales y adjetivos descriptivos del quichua para expresarte con precisión.',
    level: 3,
    order: 6,
    exercises: [
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "yo" en quichua?', options: ['Ñuka', 'Kan', 'Pay', 'Ñukanchik'], answer: 'Ñuka' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Qué significa "Kan"?', options: ['Tú', 'Yo', 'Él/Ella', 'Nosotros'], answer: 'Tú' },
      { type: ExerciseType.FILL_IN_THE_BLANK, question: '"Sumak" significa "___" en español', options: ['bonito/a', 'feo/a', 'grande', 'pequeño'], answer: 'bonito/a' },
      { type: ExerciseType.MULTIPLE_CHOICE, question: '¿Cómo se dice "grande" en quichua?', options: ['Hatun', 'Uchilla', 'Sumak', 'Kuyay'], answer: 'Hatun' },
      { type: ExerciseType.MATCHING, question: '"Ñukanchik" significa:', options: ['Nosotros', 'Yo', 'Tú', 'Ellos'], answer: 'Nosotros' },
    ],
    evalQuestions: [
      { question: '"Ñuka" significa:', options: ['Yo', 'Tú', 'Él', 'Nosotros'], answer: 'Yo' },
      { question: '¿Cómo se dice "ellos/ellas" en quichua?', options: ['Paykuna', 'Pay', 'Kan', 'Ñukanchik'], answer: 'Paykuna' },
      { question: '"Hatun" significa:', options: ['Grande', 'Pequeño', 'Bonito', 'Feo'], answer: 'Grande' },
      { question: '¿Cómo se dice "pequeño" en quichua?', options: ['Uchilla', 'Hatun', 'Sumak', 'Kuyay'], answer: 'Uchilla' },
      { question: '"Sumak" significa:', options: ['Bonito/a', 'Feo/a', 'Grande', 'Pequeño/a'], answer: 'Bonito/a' },
    ],
  },
];

const badges = [
  { name: 'Primer módulo completado', description: 'Completaste tu primer módulo de quichua. ¡Excelente comienzo!', icon: '🏅' },
  { name: '3 módulos completados', description: 'Has completado 3 módulos. ¡Vas por buen camino!', icon: '🥈' },
  { name: 'Todos los módulos básicos completados', description: 'Completaste todos los módulos. ¡Eres un experto en quichua!', icon: '🏆' },
  { name: 'Puntaje perfecto en evaluación', description: 'Obtuviste 100/100 en una evaluación. ¡Perfecto!', icon: '⭐' },
];

async function main() {
  console.log('🌱 Starting seed...');

  await prisma.userBadge.deleteMany();
  await prisma.badge.deleteMany();
  await prisma.examAssignment.deleteMany();
  await prisma.teacherExam.deleteMany();
  await prisma.progress.deleteMany();
  await prisma.evalAttempt.deleteMany();
  await prisma.evalQuestion.deleteMany();
  await prisma.evaluation.deleteMany();
  await prisma.exercise.deleteMany();
  await prisma.module.deleteMany();

  console.log('🗑️  Cleared existing data');

  for (const modData of modules) {
    const { exercises, evalQuestions, ...moduleInfo } = modData;

    const mod = await prisma.module.create({ data: moduleInfo });

    await prisma.exercise.createMany({
      data: exercises.map((ex) => ({ ...ex, moduleId: mod.id })),
    });

    const evaluation = await prisma.evaluation.create({
      data: { moduleId: mod.id, minScore: 70 },
    });

    await prisma.evalQuestion.createMany({
      data: evalQuestions.map((q) => ({ ...q, evaluationId: evaluation.id })),
    });

    console.log(`✅ Module "${mod.name}" created with ${exercises.length} exercises and ${evalQuestions.length} eval questions`);
  }

  for (const badgeData of badges) {
    await prisma.badge.create({ data: badgeData });
  }
  console.log(`🎖️  ${badges.length} badges created`);

  console.log('✨ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
