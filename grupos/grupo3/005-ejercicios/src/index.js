import express from 'express';
import bodyParser from 'body-parser';
import alumnosRoutes from './controllers/alumnos';
import {crud}  from './crud';
export let bd;
const PORT = 8080;
const app = express();
app.use(bodyParser.json());
app.use('/alumnos', alumnosRoutes);


async function prueba(){
const url = 'mongodb://localhost:27017';
const cliente = await crud.conectarServidor(url);
bd = cliente.db('diplomatura');
}

prueba();
app.get('/', function (req, res) {

  res.json({ mensaje: 'Bienvenido al servidor de la Universidad' });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);
