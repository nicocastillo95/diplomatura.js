import express from 'express';
import fetch from 'node-fetch'; 

var postApi = express.Router();

postApi.get('/', function (req, res) {
  res.send('Hola posts!.');
});

postApi.get ('/'), async function(req,res) {

  try {
   let respPosts = await fetch (  'https://jsonplaceholder.typicode.com/posts/' );
   
   let respJsonPosts = await respuestaPosts.json();
    
   let respuestaUsers = await fetch (  'https://jsonplaceholder.typicode.com/users/' );

   let respJsonUser = await respuestaUsers.json ();

   let respuestaFinal = await respJsonPosts.map ((m) => {  
     return {

      user: respJsonUser.find ((u) => u.id === m.userID),
      id: m.id,
      title: m.title,
      body: m.body,

     };

     )
     }   )



  }



  catch (error) { return error;}
};

//postApi.get('/', function (req, res) {
//  res.send('Hola posts!.');
//});


//postApi.get('/:id', function (req, res) {
//  res.send(`Hola post ${req.params.id}.`);
//});



export default postApi;
