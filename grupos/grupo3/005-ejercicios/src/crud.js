import MongoClient, { ObjectID } from 'mongodb';

export const crud = {

    conectarServidor: async function (url){
        try{
            const cliente = await MongoClient.connect(url);
            console.log('Conectado al servidor');
            return cliente;
        }catch(err){
            console.log('No se pudo conectar al servidor')
        }
       
    },


    insertar: async function(bd, obj, tipoColeccion){
        try{
            const coleccion = await bd.collection(tipoColeccion);
            const resultado = coleccion.insertMany([obj]);
        }catch(err){
            console.log("ERROR")
        }
       
    },
    
    
    mostrarElementos:function (bd,tipoColeccion){
        return new Promise(function(resolve, reject){
            const coleccion = bd.collection(tipoColeccion);
            coleccion.find({}).toArray(function(err, documento){
                if(err){
                    return reject(err);
                }
                return resolve(documento);
            })
            
        })
    }, 


    buscarElemento: function (bd,tipoColeccion, nom){
        return new Promise(function(resolve, reject){
            const coleccion = bd.collection(tipoColeccion);
            coleccion.find({"nombre": nom}).toArray(function(err, elemBuscado){
                if(err){
                    return reject(err);
                }
                console.log(elemBuscado);
                return resolve(elemBuscado);
            })
            
        })
    }, 


    eliminar: function (bd,tipoColeccion, id){
        return new Promise(function(resolve, reject){
            const coleccion = bd.collection(tipoColeccion);
        coleccion.deleteOne({"_id":ObjectID(id)}, function(err,resultado){
            if(err){
                return reject(err)
            }else{
                resultado = true
                return resolve(resultado)
            }
        })
            
        })
    } 
}



    


