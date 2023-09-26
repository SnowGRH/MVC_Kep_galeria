import {KEPEKLISTA} from "./Adat.js";
class Model {
    #kepLista =[];
    #id;

  constructor() {
    this.#kepLista = KEPEKLISTA;
    this.#id = 0;
  }
  
  getKepLista(){
    return [...this.#kepLista];
  }
  getID(){
    return this.#kepLista[this.#id];
  }
  jobb(){
    this.#id++;
    if (this.#id > this.#kepLista.length-1) {
        this.#id = 0;
    }
  }
  bal(){
    this.#id--;
    if (this.#id < 0) {
        this.#id = this.#kepLista.length-1;
    }
  }
}
export default Model;
