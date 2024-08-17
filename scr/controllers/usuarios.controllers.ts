import { Request, Response } from 'express';
import { aggUsuarioBD, historialBD, login, perfilesDB, usuariosBD } from '../service/usuarios-service';


export const usuarios = async (req: Request, res: Response) => {
  try {
    const result = await usuariosBD();
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
      res.status(404).send('lista de usuarios');
    }
  } catch (err) {
    res.status(500).send('Error');
  }
};

//VER HISTORIAL DE USUARIO
export const historialUsuario = async (req: Request, res: Response) => {
  try {
    const result = await historialBD(req.body.id_usuario);
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
      res.status(404).send('historial de usuario');
    }
  } catch (err) {
    res.status(500).send('Error');
  }
};

export const getLogin = async (req: Request, res: Response) => {
    try {
      const result = await login(req.params.email, req.params.contraseña);
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
        res.status(404).send('Usuario no encontrado');
      }
    } catch (err) {
      res.status(500).send('Error login');
    }
  };


 


  export const perfiles = async (req: Request, res: Response) => {
    try {
      const result = await perfilesDB(req.body.id_usuario);
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
        res.status(404).send('perfil de usuario');
      }
    } catch (err) {
      res.status(500).send('Error');
    }
  };




