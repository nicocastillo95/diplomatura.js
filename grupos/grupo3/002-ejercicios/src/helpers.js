import { database } from "./baseDeDatos";

export const helpers = {
    universidadById : (uniId)=>database.universidades.find(elem => elem.id===uniId),
    profesorById : (profeId)=>database.profesores.find(elem => elem.id===profeId),
    obtenerById : (id,tabla)=>database[tabla].find(elem => elem.id===id),
    existeByNombre : (nombre,tabla)=>database[tabla].includes(elem => elem.nombre===nombre),
    obtenerUltimoId : (tabla)=>database[tabla][database[tabla].length-1]?.id,
    calificacionesByIdAlumno : (id)=>database.calificaciones.filter(element=>element.alumno===id)
}