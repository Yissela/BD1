import { getConnection } from '../data/data';

//todo el contenido de la base
export const contenidoBD = async () => {
    const connection = await getConnection();
    try {
      const result = await connection.execute('select * from contenido');
      return result.rows;
    } finally {
      await connection.close();
    }
  };

  export const generoBD = async () => {
    const connection = await getConnection();
    try {
      const result = await connection.execute('select * from generos');
      return result.rows;
    } finally {
      await connection.close();
    }
  };


  export const buscarBD = async (titulo: string) => {
    const connection = await getConnection();
    try {
      const result = await connection.execute(
        'SELECT * FROM contenido WHERE contenido.titulo = :titulo', 
        { titulo } 
      );
      return result.rows;
    } finally {
      await connection.close();
    }
  };
  export const buscarGeneroBD = async (genero: string) => {
    const connection = await getConnection();
    try {
      const result = await connection.execute(
        'SELECT a.nombre_genero, c.titulo,c.descripcion, c.descripcion_restriccion FROM generos A,  contenido_generos B,  contenido C  WHERE a.nombre_genero = :genero  AND a.id_genero = b.id_genero AND  b.id_contenido = c.id_contenido', 
        { genero } 
      );
      return result.rows;
    } finally {
      await connection.close();
    }
  };

  export const generoPeliculaBD = async () => {
    const connection = await getConnection();
    try {
      const result = await connection.execute('SELECT a.nombre_genero, c.titulo,c.descripcion, c.descripcion_restriccion FROM generos A,  contenido_generos B,  contenido C   WHERE a.id_genero = b.id_genero AND b.id_contenido = c.id_contenido');
      
      return result.rows;
    } finally {
      await connection.close();
    }
  };