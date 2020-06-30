import fetch from 'node-fetch';
export { asyncAwait };

async function asyncAwait() {
  try {
    const content = await fetch('https://jsonplaceholder.typicode.com/users');
    const objJson = await content.json();
    for (let i = 0; i < objJson.length; i++) {
      console.log(
        'Name: ',
        objJson[i].name,
        ' Direction: ',
        objJson[i].address
      );
    }
  } catch (error) {
    console.error(error);
  }
}
