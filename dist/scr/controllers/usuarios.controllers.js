"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertarPerfil = exports.insertarUsuario = exports.perfiles = exports.getLogin = exports.historialUsuario = exports.usuarios = void 0;
const usuarios_service_1 = require("../service/usuarios-service");
const usuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, usuarios_service_1.usuariosBD)();
        if (result) {
            const jsonString = JSON.stringify(result, (key, value) => {
                if (typeof value === 'object' && value !== null) {
                    if (value._readableState || value._writableState) {
                        return undefined; // Ignora las propiedades problemáticas
                    }
                }
                return value;
            });
            res.send(jsonString);
        }
        else {
            res.status(404).send('lista de usuarios');
        }
    }
    catch (err) {
        res.status(500).send('Error');
    }
});
exports.usuarios = usuarios;
//VER HISTORIAL DE USUARIO
const historialUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, usuarios_service_1.historialBD)(req.body.id_usuario);
        if (result) {
            const jsonString = JSON.stringify(result, (key, value) => {
                if (typeof value === 'object' && value !== null) {
                    if (value._readableState || value._writableState) {
                        return undefined; // Ignora las propiedades problemáticas
                    }
                }
                return value;
            });
            res.send(jsonString);
        }
        else {
            res.status(404).send('historial de usuario');
        }
    }
    catch (err) {
        res.status(500).send('Error');
    }
});
exports.historialUsuario = historialUsuario;
const getLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, usuarios_service_1.login)(req.params.email, req.params.contraseña);
        if (result) {
            const jsonString = JSON.stringify(result, (key, value) => {
                if (typeof value === 'object' && value !== null) {
                    if (value._readableState || value._writableState) {
                        return undefined; // Ignora las propiedades problemáticas
                    }
                }
                return value;
            });
            res.send(jsonString);
        }
        else {
            res.status(404).send('Usuario no encontrado');
        }
    }
    catch (err) {
        res.status(500).send('Error login');
    }
});
exports.getLogin = getLogin;
const perfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, usuarios_service_1.perfilesDB)(req.body.id_usuario);
        if (result) {
            const jsonString = JSON.stringify(result, (key, value) => {
                if (typeof value === 'object' && value !== null) {
                    if (value._readableState || value._writableState) {
                        return undefined; // Ignora las propiedades problemáticas
                    }
                }
                return value;
            });
            res.send(jsonString);
        }
        else {
            res.status(404).send('perfil de usuario');
        }
    }
    catch (err) {
        res.status(500).send('Error');
    }
});
exports.perfiles = perfiles;
const insertarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoUsuario = req.body;
        yield (0, usuarios_service_1.aggUsuarioBD)(nuevoUsuario);
        res.status(201).send('Usuario insertado');
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error');
    }
});
exports.insertarUsuario = insertarUsuario;
const insertarPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoPerfil = req.body;
        yield (0, usuarios_service_1.aggPerfilesBD)(nuevoPerfil);
        res.status(201).send('perfil insertado');
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error');
    }
});
exports.insertarPerfil = insertarPerfil;
