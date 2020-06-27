// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './baseDeDatos';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

let universidad = (id)=> database.universidades.find(m => m.id === id);
console.log('Ejercicio 2: ', universidad(2)); 

// 3) Implementar una función que obtenga un profesor por Id

let profesor = (id) => database.profesores.find(p => p.id===id);
console.log('Ejercicio 3: ', profesor(4));

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
let tabla = (tipoTabla, id) => {
    let t;
    if(tipoTabla === 'u'){
        t= database.universidades;
    }else{
        if(tipoTabla=== 'p'){
            t= database.profesores;
        }else{
            if(tipoTabla === 'a'){
                t = database.alumnos;
            }else{
                if(tipoTabla === 'o'){
                    t = database.provincias;
                }else{
                    if(tipoTabla=== 'm'){
                        t=database.materias;
                    }
                }
            }
        }
    }
    return t.find(b => b.id === id);
}
console.log('Ejercicio 4: ', tabla('m',4));

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos

/*let helpers = {
   obUniversidad: function(id){
    return database.universidades.find(m => m.id === id)
   },

   obProfesor: function(id){
    return database.universidades.find(m => m.id === id)
   },

   obTabla: function (tipoTabla, id) {
    let t;
    if(tipoTabla === 'u'){
        t= database.universidades;
    }else{
        if(tipoTabla=== 'p'){
            t= database.profesores;
        }else{
            if(tipoTabla === 'a'){
                t = database.alumnos;
            }else{
                if(tipoTabla === 'o'){
                    t = database.provincias;
                }else{
                    if(tipoTabla=== 'm'){
                        t=database.materias;
                    }
                }
            }
        }
    }
    return t.find(b => b.id === id);
   }
}
*/
//console.log('Ejercicio 5', helpers.obUniversidad(2) );
// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js
//ESTA EN helpers.js
// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla

// 8) Importar helpers desde su propio módulo
import { helpers } from './helpers';
console.log('Ejercicio 8:')
console.log(helpers.obProfesor(2));
console.log('Ejercicio 7: ' + helpers.numId);
// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

let nuevaProvincia = (nombreProvincia) =>{let num; for(const valor of database.provincias){num = valor.id};
    (database.provincias.every(p => p.nombre !== nombreProvincia))? (database.provincias.push(
    {id: ++num, nombre: nombreProvincia})): undefined;}

     nuevaProvincia('Chubut');
     console.log('Ejercicio 9:\n')
     for(const value of database.provincias){
         console.log(value);
     }


// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres

let objMateria = (id, tT) => {
    let materia = tabla(tT, id);
    materia.universidad = database.universidades.find(u => u.id === materia.universidad).nombre;
    function arrProfesores(){
        let arr=[];
        for(const profesor of materia.profesores){
            arr.push(database.profesores.find(p => p.id === profesor).nombre);
        }
        return arr;
    }
    materia.profesores = arrProfesores();
    return materia;
}
console.log('Ejercicio 10:\n');
console.log(objMateria(1,'m'));

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

function infoAlumno(){
    let texto = 'NOTAS DE ALUMNOS\n' + '------------\n';
    for(const alumno of database.alumnos){
        texto+= alumno.nombre.toLocaleUpperCase() + '\n';
        for (const calificación of database.calificaciones.filter(c => c.alumno === alumno.id)){
            texto+= database.materias.find(m=> m.id === calificación.materia).nombre + ' ' + calificación.nota + '\n';
        }
        texto+= '..............\n';
    }
    return texto;
}

console.log('Ejercicio 11:\n' + infoAlumno());


// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas

let guardarCalificacion = (nomAlumno, nomMateria, notaN) =>  {
    let IDm
    let IDa;
    for(const materia of database.materias){
         IDm = materia.id;
    }
    database.materias.every(m => m.nombre !== nomMateria)?(
        database.materias.push({id: ++IDm, nombre: nomMateria, profesores:[2], universidad:2})
    ): undefined;

    for(const alumno of database.alumnos){
        IDa = alumno.id;
   }
   database.alumnos.every(a => a.nombre !== nomAlumno)?(
       database.alumnos.push({id: ++IDa, nombre: nomAlumno, edad: 23, provincia: 1})
   ): undefined;
 
    database.calificaciones.push({alumno: IDa , materia:IDm , nota: notaN})

}
guardarCalificacion('Nicolas Castillo', 'Electrotecnia', 7);
console.log('Ejercicio 12:\n');
for(const valor of database.calificaciones){console.log(valor)};
console.log('\n');
for(const valor of database.materias){console.log(valor)};
console.log('\n');
for(const valor of database.alumnos){console.log(valor)};