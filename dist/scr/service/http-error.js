"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); // Llama al constructor de la clase base Error
        this.code = errorCode; // Añade la propiedad code
        // Configura el nombre del error para que aparezca como "HttpError"
        this.name = 'HttpError';
        // Asegúrate de que el stack trace esté correctamente configurado
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.HttpError = HttpError;
