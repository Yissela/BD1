import { Request, Response } from 'express';
import { buscarBD, buscarGeneroBD, contenidoBD, generoBD, generoPeliculaBD } from '../service/contenido-service';


export const contenido = async (req: Request, res: Response) => {
    try {
      const result = await contenidoBD();
      if (result) {
        const jsonString = JSON.stringify(result, (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (value._readableState || value._writableState) {
              return undefined;  // Ignora las propiedades problemáticas
            }
          }
          return value;
        });
        res.send(jsonString);
      } else {
        res.status(404).send('no hay contenido');
      }
    } catch (err) {
      res.status(500).send('Error');
    }
  };

  export const genero = async (req: Request, res: Response) => {
    try {
      const result = await generoBD();
      if (result) {
        res.json(result);
      } else {
        res.status(404).send('no hay generos disponibles');
      }
    } catch (err) {
      res.status(500).send('Error');
    }
  };

  export const buscarPelicula = async (req: Request, res: Response) => {
    try {
      const result = await buscarBD(req.body.titulo);
      if (result) {
        const jsonString = JSON.stringify(result, (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (value._readableState || value._writableState) {
              return undefined;  // Ignora las propiedades problemáticas
            }
          }
          return value;
        });
        res.send(jsonString);
      } else {
        res.status(404).send('no existe');
      }
    } catch (err) {
      console.error('Error al buscar la película:', err);

      res.status(500).send('Error');
    }
  };


  export const buscarGenero = async (req: Request, res: Response) => {
    try {
      const result = await buscarGeneroBD(req.body.genero);
      if (result) {
        const jsonString = JSON.stringify(result, (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (value._readableState || value._writableState) {
              return undefined;  // Ignora las propiedades problemáticas
            }
          }
          return value;
        });
        res.send(jsonString);
      } else {
        res.status(404).send('no existe');
      }
    } catch (err) {
      console.error('Error:', err);
      
      res.status(500).send('Error');
    }
  };

  export const generoPeliculas = async (req: Request, res: Response) => {
    try {
      const result = await generoPeliculaBD();
      if (result) {
        const jsonString = JSON.stringify(result, (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (value._readableState || value._writableState) {
              return undefined;  // Ignora las propiedades problemáticas
            }
          }
          return value;
        });
        res.send(jsonString);
      } else {
        res.status(404).send('----');
      }
    } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Error');
    }
  };