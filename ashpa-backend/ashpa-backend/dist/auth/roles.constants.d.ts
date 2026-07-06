export declare const ROLES: {
    readonly ESTUDIANTE: "ESTUDIANTE";
    readonly PROFESOR: "PROFESOR";
};
export type NombreRol = (typeof ROLES)[keyof typeof ROLES];
