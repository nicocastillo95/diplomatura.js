function delay(segundos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Anda');
    }, segundos);
  });
}

export function runDelay() {
  delay(1000)
    .then((resolve) => console.log('1'))
    .then((resolve) => console.log('Terminó 1'));
  delay(2000)
    .then((resolve) => console.log('2'))
    .then((resolve) => console.log('Terminó 2'));
  delay(3000)
    .then((resolve) => console.log('3'))
    .then((resolve) => console.log('Terminó 3'));
}
