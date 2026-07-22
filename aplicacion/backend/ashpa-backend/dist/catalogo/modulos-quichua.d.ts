export interface EjercicioSeed {
    tipo: string;
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
    nivel: number;
    orden: number;
    ejercicios: EjercicioSeed[];
    evalPreguntas: PreguntaSeed[];
}
export declare const CATALOGO_MODULOS: ModuloSeed[];
export declare const INSIGNIAS_BASE: {
    nombre: string;
    descripcion: string;
    icono: string;
}[];
