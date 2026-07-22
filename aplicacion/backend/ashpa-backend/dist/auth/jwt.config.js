"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerJwtSecret = obtenerJwtSecret;
function obtenerJwtSecret(config) {
    const secret = config.get('JWT_SECRET');
    if (!secret) {
        throw new Error('Falta la variable de entorno JWT_SECRET. Configúrala en tu archivo .env');
    }
    return secret;
}
//# sourceMappingURL=jwt.config.js.map