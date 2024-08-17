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
exports.generoPeliculaBD = exports.buscarGeneroBD = exports.buscarBD = exports.generoBD = exports.contenidoBD = void 0;
const data_1 = require("../data/data");
//todo el contenido de la base
const contenidoBD = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        const result = yield connection.execute('select * from contenido');
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.contenidoBD = contenidoBD;
const generoBD = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        const result = yield connection.execute('select * from generos');
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.generoBD = generoBD;
const buscarBD = (titulo) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        const result = yield connection.execute('SELECT * FROM contenido WHERE contenido.titulo = :titulo', { titulo });
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.buscarBD = buscarBD;
const buscarGeneroBD = (genero) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        const result = yield connection.execute('SELECT a.nombre_genero, c.titulo,c.descripcion, c.descripcion_restriccion FROM generos A,  contenido_generos B,  contenido C  WHERE a.nombre_genero = :genero  AND a.id_genero = b.id_genero AND  b.id_contenido = c.id_contenido', { genero });
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.buscarGeneroBD = buscarGeneroBD;
const generoPeliculaBD = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        const result = yield connection.execute('SELECT a.nombre_genero, c.titulo,c.descripcion, c.descripcion_restriccion FROM generos A,  contenido_generos B,  contenido C   WHERE a.id_genero = b.id_genero AND b.id_contenido = c.id_contenido');
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.generoPeliculaBD = generoPeliculaBD;
