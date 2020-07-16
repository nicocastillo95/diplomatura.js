import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';

import os from 'os';

import moment from 'moment';

const PORT = 8080;
let serverStartUpTime=  moment();

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);

moment.locale('es-AR');

const fecha = new Date();
let fecha2 = moment (fecha);
const result = {
  serverCurrentTime: fecha2.format('MMMM Do YYYY, h:mm:ss a'), // En español
  serverStartUpTime: serverStartUpTime.format('MMMM Do YYYY, h:mm:ss a'), // En español
  serverUpTime: moment().startOf('hour').fromNow(), // usando moment relative time

  status: {
    freemem: os.freemem(),
    totalmem: os.totalmem(),
    uptime: os.uptime(),
    hostname: os.hostname(),
    platform: os.platform(),
  },
};



// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {
  res.json({ "mensaje": result });
});


app.listen(PORT);
console.log(`Express started on port ${PORT}`);

  serverStartUpTime=  moment();
