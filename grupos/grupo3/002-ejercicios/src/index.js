// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';
import {helpers} from './helpers';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

const universidadById = (uniId)=>database.universidades.find(elem => elem.id===uniId)

// 3) Implementar una función que obtenga un profesor por Id

const profesorById = (profeId)=>database.profesores.find(elem => elem.id===profeId)

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla

const getById = (id,tabla)=>database[tabla].find(elem => elem.id===id)


// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
/*
const helpers = {
    universidadById : (uniId)=>database.universidades.find(elem => elem.id===uniId),
    profesorById : (profeId)=>database.profesores.find(elem => elem.id===profeId),
    getById : (id,tabla)=>database[tabla].find(elem => elem.id===id)
}
*/

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js
//LISTO

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
//LISTO

// 8) Importar helpers desde su propio módulo
//LISTO

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

//console.log('ASFDNDANV ',helpers.obtenerUltimoId('provincias'))

const insertProvincia = (nombreProvincia) => {
    return database.provincias.push({ id : 1+(helpers.obtenerUltimoId('provincias')), nombre : nombreProvincia });
}
const deleteProvincia = () => database.provincias.pop();

//insertProvincia('Tierra del Fuego')



// 10) Implementar una función que reciba el id de una materia y devuelva la materia con los 
// ids de universidad y profesores resueltos a sus nombres

const infoCompletaMateriaById=(idMateria)=>{
    const materia=helpers.obtenerById(idMateria,'materias');
    const profesores=materia.profesores.map(elem=>helpers.obtenerById(elem,'profesores')?.nombre)
    const universidad=helpers.obtenerById(materia.universidad,'universidades')?.nombre
    return {
        id:materia.id,
        nombre:materia.nombre,
        profesores: profesores,
        universidad:universidad
    }
}

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

const infoAlumnos=()=>{
    console.log('NOTAS DE ALUMNOS')
    console.log('----------------')
    database.alumnos.map(elem=>{
        console.log(elem.nombre.toUpperCase())
        helpers.calificacionesByIdAlumno(elem.id).forEach(element => {
            let materia=helpers.obtenerById(element.materia,'materias').nombre;
            console.log(materia,':',element.nota)
        });
        console.log('................')
    })
    
}
//infoAlumnos();


// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas

const insertCalificacion=(nombreAlumno,nombreMateria,nota)=>{
    let idAlumno;
    let idMateria;
    if(!helpers.existeByNombre(nombreAlumno,'alumnos')){
        idAlumno = insertAlumno(nombreAlumno,24,'Neuquen').id} else {
            idAlumno=helpers.obtenerByNombre(nombreAlumno,'alumnos').id;
        }
    if(!helpers.existeByNombre(nombreMateria,'materias')){
        idMateria = insertMateria(nombreMateria,[2,4],'Universidad del Comahue').id} else {
            idMateria=helpers.obtenerByNombre(nombreMateria,'materias').id;
        }
    database.calificaciones.push({alumno:idAlumno, materia:idMateria, nota:nota})
    
}

const insertAlumno = (nombreAlumno,edad,nombreProvincia) => {
    return database.alumnos[database.alumnos.push({ 
        id : 1+(helpers.obtenerUltimoId('alumnos')),
        nombre : nombreAlumno,
        edad : edad,
        provincia : nombreProvincia
    })-1]
}

const insertMateria = (nombreMateria,profesores,idUniversidad) => {
    return database.materias[database.materias.push({ 
        id : 1+(helpers.obtenerUltimoId('materias')),
        nombre : nombreMateria,
        profesores : profesores,
        universidad : idUniversidad
    })-1]
}

insertCalificacion('Rigoberto Manchu','Análisis matemático',2);
console.log(database.calificaciones)