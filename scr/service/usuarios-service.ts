import OracleDB from 'oracledb';
import { getConnection } from '../data/data';

interface Usuario {
    title: string;
    genre: string;
    releaseDate: string;
  }

// todos los usuarios
  export const usuariosBD = async () => {
    const connection = await getConnection();
    try {
      const result = await connection.execute('SELECT * FROM USUARIOS2');
      return result.rows;
    } finally {
      await connection.close();
    }
  };


//el hsitorial del usuario
export const historialBD = async (id_usuario: number) => {
  const connection = await getConnection();
  try {
    const result = await connection.execute('select b.progreso, c.titulo, A.ID_USUARIO , a.p_nombre from usuarios2 A, historial_visualizacion B, CONTENIDO C WHERE a.id_usuario = b.id_usuario AND b.id_contenido = c.id_contenido AND a.id_usuario = :id_usuario', {id_usuario: id_usuario});
    return result.rows;
  } finally {
    await connection.close();
  }
};
// login de usuarios
export const login = async (email: string, contraseña: string) => {
  const connection = await getConnection();
  try {
    //const result = await connection.execute('SELECT * FROM USUARIOS2 WHERE contraseña = :contraseña', [contraseña]);
    const result = await connection.execute('SELECT a.id_usuario, a.id_plan, a.p_nombre, a.p_apellido FROM USUARIOS2 A WHERE A.EMAIL = :email AND a.contraseña = :contraseña', { email: email, contraseña: contraseña });
    return result.rows;
  } finally {
    await connection.close();
  }
};

// registro
export const aggUsuarioBD = async (usuario: Usuario) => {
    const connection = await getConnection();
    const { title, genre, releaseDate } = usuario;
    
    try {
      const result = await connection.execute(
        'INSERT INTO movies (title, genre, release_date) VALUES (:title, :genre, :releaseDate)',
        [title, genre, releaseDate],
        { autoCommit: true }
      );
      return result;
    } finally {
      await connection.close();
    }
  };



  //perfil de usuarios 

  export const perfilesDB = async (id_usuario: number) => {
    const connection = await getConnection();
    try {
      const result = await connection.execute('select * from usuarios2 a, PERFILES B WHERE a.id_usuario = b.id_usuario AND b.id_usuario = :id_usuario', {id_usuario: id_usuario});
      return result.rows;
    } finally {
      await connection.close();
    }
  };