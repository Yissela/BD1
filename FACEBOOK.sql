
//ver el historial de un usuario 


select b.progreso, c.titulo, A.ID_USUARIO , a.p_nombre 
from usuarios2 A, historial_visualizacion B, CONTENIDO C
WHERE a.id_usuario = b.id_usuario AND b.id_contenido = c.id_contenido AND a.id_usuario = 1;



// LOGIN  USUARIO    
SELECT a.id_usuario, a.id_plan, a.p_nombre, a.p_apellido FROM USUARIOS2 A
WHERE A.EMAIL = 'john.doe@example.com' AND a.contrase�a = 'password123';
    
    
//perfiles por usuario

select * from usuarios2 a, PERFILES B
WHERE a.id_usuario = b.id_usuario AND b.id_usuario = 1;



-- todo el contenido PAGINA PRINCIPAL
select * from contenido;

select * from contenido_generos;


-- buscar una pelicula o serie 
select * from contenido where contenido.id_contenido = 1;

select * from contenido where contenido.titulo = 'Pel�cula de Acci�n';

-- buscar peliculas POR un genero 

SELECT a.nombre_genero, c.titulo,c.descripcion, c.descripcion_restriccion FROM generos A, 
            contenido_generos B, 
            contenido C 
            WHERE a.nombre_genero = 'Comedia' AND a.id_genero = b.id_genero AND b.id_contenido = c.id_contenido;
            
            
--agrupar pelicula por genero             
SELECT a.nombre_genero, c.titulo,c.descripcion, c.descripcion_restriccion FROM generos A, 
            contenido_generos B, 
            contenido C 
            WHERE a.id_genero = b.id_genero AND a.id_genero = b.id_genero AND b.id_contenido = c.id_contenido;            
            
        
--ver las contenido, director y actores
SELECT a.id_contenido, b.id_director, b.nombre FROM contenido_directores A
LEFT JOIN DIRECTORES  B 
ON a.id_director = b.id_director;


SELECT a.id_contenido, b.id_actor,b.nombre FROM contenido_actores A
LEFT JOIN actores  B 
ON a.id_actor = b.id_actor;


WITH DIRECTORES_CON AS (
            SELECT  a.id_contenido, b.id_director, b.nombre  FROM contenido_directores A
            LEFT JOIN DIRECTORES  B 
            ON a.id_director = b.id_director
), ACTORES_CON AS (
            SELECT * FROM contenido_actores A
            LEFT JOIN actores  B 
            ON a.id_actor = b.id_actor

) SELECT * FROM CONTENIDO  A  
               LEFT JOIN    DIRECTORES_CON B 
               ON a.id_contenido = B.id_contenido
               LEFT JOIN ACTORES_CON C 
               ON A.id_contenido = C.id_contenido;
               










-----      
CREATE TABLE system.perfiles (
    id_perfiles NUMBER PRIMARY KEY,
    nombre_perfil VARCHAR2(100) NOT NULL,
    id_usuario NUMBER,
     FOREIGN KEY (id_usuario) REFERENCES system.usuarios2(id_usuario) ON DELETE CASCADE
);

