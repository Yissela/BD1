import { Router } from 'express';
import { getLogin, historialUsuario, perfiles, usuarios } from '../controllers/usuarios.controllers';

const router = Router();

router.get('/', usuarios);
router.put('/login', getLogin);
//router.get('/aggUsuario', aggUsuario);
router.put('/historial/:id_usuario', historialUsuario);
router.put('/perfil/:id_usuario', perfiles);

export default router;