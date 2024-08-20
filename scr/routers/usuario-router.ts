import { Router } from 'express';
import { getLogin, historialUsuario, insertarUsuario, perfiles, usuarios } from '../controllers/usuarios.controllers';

const router = Router();

router.get('/', usuarios);
router.put('/login', getLogin);
router.put('/aggUsuario', insertarUsuario);
router.put('/historial/:id_usuario', historialUsuario);
router.put('/perfil/:id_usuario', perfiles);

export default router;