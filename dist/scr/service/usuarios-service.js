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
exports.perfilesDB = exports.aggUsuarioBD = exports.login = exports.historialBD = exports.usuariosBD = void 0;
const data_1 = require("../data/data");
// todos los usuarios
const usuariosBD = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        const result = yield connection.execute('SELECT * FROM USUARIOS2');
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.usuariosBD = usuariosBD;
//el hsitorial del usuario
const historialBD = (id_usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        const result = yield connection.execute('select b.progreso, c.titulo, A.ID_USUARIO , a.p_nombre from usuarios2 A, historial_visualizacion B, CONTENIDO C WHERE a.id_usuario = b.id_usuario AND b.id_contenido = c.id_contenido AND a.id_usuario = :id_usuario', { id_usuario: id_usuario });
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.historialBD = historialBD;
// login de usuarios
const login = (email, contraseña) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        //const result = await connection.execute('SELECT * FROM USUARIOS2 WHERE contraseña = :contraseña', [contraseña]);
        const result = yield connection.execute('SELECT a.id_usuario, a.id_plan, a.p_nombre, a.p_apellido FROM USUARIOS2 A WHERE A.EMAIL = :email AND a.contraseña = :contraseña', { email: email, contraseña: contraseña });
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.login = login;
// registro
const aggUsuarioBD = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    if (!usuario) {
        throw new Error('El objeto usuario es undefined o null');
    }
    const connection = yield (0, data_1.getConnection)();
    const { id_usuario, p_nombre, s_nombre, p_apellido, s_apellido, email, contraseña, id_plan, id_locacion } = usuario;
    try {
        const result = yield connection.execute('INSERT INTO system.usuarios2 (id_usuario, p_nombre, s_nombre, p_apellido, s_apellido, email, contraseña, fecha_registro, id_rol, id_plan, id_locacion) VALUES (:id_usuario, :p_nombre, :s_nombre, :p_apellido, :s_apellido, :email, :contraseña, SYSDATE, 2, :id_plan , :id_locacion)', [id_usuario, p_nombre, s_nombre, p_apellido, s_apellido, email, contraseña, id_plan, id_locacion], { autoCommit: true });
        return result;
    }
    finally {
        yield connection.close();
    }
});
exports.aggUsuarioBD = aggUsuarioBD;
//perfil de usuarios 
const perfilesDB = (id_usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, data_1.getConnection)();
    try {
        const result = yield connection.execute('select * from usuarios2 a, PERFILES B WHERE a.id_usuario = b.id_usuario AND b.id_usuario = :id_usuario', { id_usuario: id_usuario });
        return result.rows;
    }
    finally {
        yield connection.close();
    }
});
exports.perfilesDB = perfilesDB;
