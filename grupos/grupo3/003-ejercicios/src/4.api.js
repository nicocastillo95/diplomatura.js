import fetch from 'node-fetch';

export function chaining() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        console.log(
          'Name: ',
          response[i].name,
          ' Direction: ',
          response[i].address
        );
      }
    })
    .catch((error) => console.error(error));
}
