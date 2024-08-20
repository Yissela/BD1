import { Router } from 'express';
import { getLogin, historialUsuario, insertarPerfil, insertarUsuario, perfiles, usuarios } from '../controllers/usuarios.controllers';

const router = Router();

router.get('/', usuarios);
router.put('/login', getLogin);
router.put('/aggUsuario', insertarUsuario);
router.put('/historial/:id_usuario', historialUsuario);
router.put('/perfil/:id_usuario', perfiles);
router.put('/aggPerfil', insertarPerfil);

export default router;