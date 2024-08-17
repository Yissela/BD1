import express, { Express, Request, Response, Router } from "express";
import usuarioRoute from './scr/routers/usuario-router';
import contenidoRoute from './scr/routers/contenido-router';

const app:Express = express();




app.use(express.json());
app.use('/user', usuarioRoute); 
app.use('/contenido', contenidoRoute);




app.get("/", (req:Request, res: Response) =>
    {
        res.send("Servidor para tarea");
        res.end();
    });

  

app.listen(3000, ()=> {
        console.log("Servidor levantado");
});


