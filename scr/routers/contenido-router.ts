import { Router } from "express";
import { buscarGenero, buscarPelicula, contenido, genero, generoPeliculas } from '../controllers/contenido.controller';

const router = Router();

router.get('/', contenido);
router.get('/generos', genero);
router.put('/buscar', buscarPelicula);
router.put('/buscarGenero', buscarGenero);
router.get('/generosPeli', generoPeliculas);

export default router;