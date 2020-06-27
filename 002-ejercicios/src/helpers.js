import {database} from './baseDeDatos'; 
export  
const helpers = {
    numId: undefined,
    obUniversidad: function(id){
     this.numId = id;
     return database.universidades.find(m => m.id === id)
    },
 
    obProfesor: function(id){
     this.numId = id;
     return database.profesores.find(m => m.id === id)
    },
 
    obTabla: function (tipoTabla, id) {
     let t;
     this.numId = id;
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
    },

 }