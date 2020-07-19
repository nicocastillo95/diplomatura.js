import express from 'express';
import {crud}  from '../crud';
import {bd} from '../index';

const router = express.Router();

router.get('/', function (req, res) {  
  if(req.query.nombre !== undefined){
    console.log('MOSTRAR UN ALUMNO')
    crud.buscarElemento(bd, 'Alumnos', req.query.nombre)
   .then((alumno)=>{
    res.json({alumno});
  })
  }else{
    console.log('MOSTRAR ALUMNOS');
    crud.mostrarElementos(bd, 'Alumnos')
   .then((listaAlumnos)=>{
    res.json(listaAlumnos);
   })
  }
});

/*router.get('/:nombre', function (req, res) {
  // Completar
  console.log('MOSTRAR UN ALUMNO')
  console.log(req.params.nombre);
  crud.buscarElemento(bd, 'Alumnos', req.params.nombre)
  .then((alumno)=>{
    res.json({alumno});
  })
});
*/
router.post('/', function (req, res) {

  console.log('AGREGAR UN ALUMNO')
  crud.insertar(bd, req.body,'Alumnos')
  res.json(req.body);

});


router.delete('/:id', function(req, res){
console.log("ELIMINAR UN ALUMNO")
crud.eliminar(bd, 'Alumnos', req.params.id)
.then((resultado)=>{
  res.json({ok: resultado})
})

})

// Completar el resto de los métodos
// router.... process.env https://github.com/motdotla/dotenv
// process.env.BASEDEDATOS

export default router;
