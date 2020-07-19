import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRoutes from './controllers/albums';
import fetch from 'node-fetch';

const PORT = 8080;

app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes);

// Implementar el endpoint de stats aca. GET "/"
app.get('/', function (req, res) {

/*EJERCICIO 2.1  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((objUsers)=> objUsers.json())
  .then((objUsers) =>  {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((objPosts)=> objPosts.json()) 
    .then((objPosts)=> {

    for(const user of objUsers){
      for(const post of objPosts.filter(p => p.userId === user.id)){
        delete post.userId;
        post.user = user;
      }
      }
      res.json(objPosts)
    })
    
  });
  


EJERCICIO 2.2
*/
let postsId;
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((objComments) => objComments.json())
  .then((objComments)=>{
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((objPosts)=> objPosts.json())
    .then((objPosts)=>{
      
      for(const comments of objComments){
        postsId = comments.postId;
        delete comments.postId;
      }

      for(const post of objPosts.filter(p => p.userId === postsId)){
       post.posts = objComments;
      }
      res.json(objPosts)
    })
  });



});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);
