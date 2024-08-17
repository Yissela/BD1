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
exports.generoPeliculas = exports.buscarGenero = exports.buscarPelicula = exports.genero = exports.contenido = void 0;
const contenido_service_1 = require("../service/contenido-service");
const contenido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, contenido_service_1.contenidoBD)();
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
            res.status(404).send('no hay contenido');
        }
    }
    catch (err) {
        res.status(500).send('Error');
    }
});
exports.contenido = contenido;
const genero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, contenido_service_1.generoBD)();
        if (result) {
            res.json(result);
        }
        else {
            res.status(404).send('no hay generos disponibles');
        }
    }
    catch (err) {
        res.status(500).send('Error');
    }
});
exports.genero = genero;
const buscarPelicula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, contenido_service_1.buscarBD)(req.body.titulo);
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
            res.status(404).send('no existe');
        }
    }
    catch (err) {
        console.error('Error al buscar la película:', err);
        res.status(500).send('Error');
    }
});
exports.buscarPelicula = buscarPelicula;
const buscarGenero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, contenido_service_1.buscarGeneroBD)(req.body.genero);
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
            res.status(404).send('no existe');
        }
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error');
    }
});
exports.buscarGenero = buscarGenero;
const generoPeliculas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, contenido_service_1.generoPeliculaBD)();
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
            res.status(404).send('----');
        }
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error');
    }
});
exports.generoPeliculas = generoPeliculas;
