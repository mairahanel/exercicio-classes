"use strict";
/* Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material

b. Métodos
i. Trocar Cor
ii. Mostrar cor */
class Bola {
    constructor(cor, circ, material) {
        this.cor = cor;
        this.circunferencia = circ;
        this.material = material;
    }
    trocarCor(novaCor) {
        console.log(this.cor = novaCor);
    }
    mostrarCor() {
        console.log(this.cor);
    }
}
let bola = new Bola("amarelo", 10, "couro");
bola.mostrarCor();
bola.trocarCor("rosa");
