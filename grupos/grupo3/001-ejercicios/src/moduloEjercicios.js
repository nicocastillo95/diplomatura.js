import basededatos from './basededatos';

/**
 * Obtiene la lista de materias aprobadas (nota >= 4) para el nombre de alumno dado.
 * En caso de no existir el alumno, devolver undefined.
 * En caso de que no encuentre ninguna materia para el alumno, devuelve un array vacio []
 * Ejemplo del formato del resultado suponiendo que el alumno cursa dos materias y tiene mas de 4.
 *  [
    {
      id: 1,
      nombre: 'Análisis matemático',
      profesores: [1, 2],
      universidad: 1,
    },
    {
      id: 2,
      nombre: 'Corte y confección de sabanas',
      profesores: [3],
      universidad: 2,
    }
  ]
 * @param {nombreAlumno} nombreAlumno
 */
export const materiasAprobadasByNombreAlumno = (nombreAlumno) => {
  // Ejemplo de como accedo a datos dentro de la base de datos
  // console.log(basededatos.alumnos);
  let arr;
  let arrAlumnos = basededatos.alumnos;
  let alumno;
  let arrCalificaciones = basededatos.calificaciones;
  let arrMaterias = basededatos.materias;

  alumno = arrAlumnos.find(a => a.nombre ===nombreAlumno);
  (alumno !== undefined) ? arr = arrMaterias.filter(m => arrCalificaciones.find(c => c.nota >= 4 &&
   c.alumno ===alumno.id && m.id === c.materia)): undefined 



return arr;

};

/**
 * Devuelve informacion ampliada sobre una universidad.
 * Si no existe la universidad con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto universidad,
 * agregar la lista de materias dictadas por la universidad y
 * tambien agrega informacion de los profesores y alumnos que participan.
 * Ejemplo de formato del resultado (pueden no ser correctos los datos en el ejemplo):
 *{
      id: 1,
      nombre: 'Universidad del Comahue',
      direccion: {
        calle: 'Av. Siempre viva',
        numero: 2043,
        provincia: 'Neuquen',
      },
      materias: [
        {
          id: 1,
          nombre: 'Análisis matemático',
          profesores: [1, 2],
          universidad: 1,
        },
        {
          id: 4,
          nombre: 'Programación orientada a objetos',
          profesores: [1, 3],
          universidad: 1,
        },
      ],
      profesores:[
        { id: 1, nombre: 'Jorge Esteban Quito' },
        { id: 2, nombre: 'Marta Raca' },
        { id: 3, nombre: 'Silvia Torre Negra' },
      ],
      alumnos: [
         { id: 1, nombre: 'Rigoberto Manchu', edad: 22, provincia: 1 },
         { id: 2, nombre: 'Alina Robles', edad: 21, provincia: 2 },
      ]
    }
 * @param {string} nombreUniversidad
 */
export const expandirInfoUniversidadByNombre = (nombreUniversidad) => {
  let infoUniversidad;
  let universidad;
  let arrProMateria;
  let materias = ["Materias: "];
  let profesores = ["Profesores: "]
  let arrProfesores;
  let arrCalificaciones = [];
  let alumnos = ["Alumnos: "];
  let arrAlumnos;
  let exito = false;


  for(let i = 0; i<basededatos.universidades.length;i++){
    universidad = basededatos.universidades[i];
    if(universidad.nombre===nombreUniversidad){
      infoUniversidad = ["Universidad: "];
      infoUniversidad.push(universidad);
      materias = basededatos.materias.filter(materia => materia.universidad === universidad.id);
      infoUniversidad.push(materias);
      arrProfesores= basededatos.profesores;
      for(let o = 0; o < arrProfesores.length; o++){
        let p = 0;
        while(!exito && p < materias.length){
          arrProMateria = materias[p].profesores;
          for(let q = 0; q < arrProMateria.length; q++){
            if(arrProfesores[o].id === arrProMateria[q]){
              exito = true;
              profesores.push(arrProfesores[o]);
              break;
            }
          }
          p++;
        }
        exito=false;
      }

      for(let j = 0; j< materias.length; j++){
        for(let m= 0; m < basededatos.calificaciones.length; m++){
          if(materias[j].id === basededatos.calificaciones[m].materia){
            arrCalificaciones.push(basededatos.calificaciones[m]);
          }
        }
      }
      
      arrAlumnos = basededatos.alumnos;

      for(let n = 0; n < arrAlumnos.length; n++){
        for(let m = 0; m < arrCalificaciones.length; m++){
          if(arrAlumnos[n].id === arrCalificaciones[m].alumno){
            alumnos.push(arrAlumnos[n]);
            break;
          }
        }
      }


      infoUniversidad.push(profesores);
      infoUniversidad.push(alumnos);
      break;
    }
  }

  return infoUniversidad ;
}
};

// /**
//  * Devuelve el promedio de edad de los alumnos.
//  */
// export const promedioDeEdad = () => {
//   return [];
// };

// /**
//  * Devuelve la lista de alumnos con promedio mayor al numero pasado
//  * por parametro.
//  * @param {number} promedio
//  */
// export const alumnosConPromedioMayorA = (promedio) => {
//   return [];
// };

// /**
//  * Devuelve la lista de materias sin alumnos
//  */
// export const materiasSinAlumnosAnotados = () => {
//   return [];
// };

// /**
//  * Devuelve el promdedio de edad segun el id de la universidad.
//  * @param {number} universidadId
//  */
// export const promedioDeEdadByUniversidadId = (universidadId) => {
//   return [];
// };
