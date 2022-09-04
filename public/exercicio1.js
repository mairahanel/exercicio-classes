"use strict";
/* Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador. */
class Contador {
    constructor(valor) {
        this.valor = valor;
    }
    zerar() {
        console.log(this.valor = 0);
    }
    incrementar() {
        console.log(this.valor++);
    }
    getValorDoContador() {
        console.log(this.valor);
    }
}
let contador = new Contador(0);
contador.zerar;
