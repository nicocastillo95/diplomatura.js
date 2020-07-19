export class Collection {
  constructor(listaElem) {
    this.lista = [];
    if (listaElem) {
      listaElem.forEach((element) => {
        this.lista.push(element);
      });
    }
  }

  add(elem) {
    if (!this.has(elem)) {
      this.lista.push(elem);
    }
  }

  delete(elem) {
    if (this.has(elem)) {
      this.lista.splice(this.lista.indexOf(elem), 1);
    }
  }

  has(element) {
    return this.lista.includes(element);
  }
}
