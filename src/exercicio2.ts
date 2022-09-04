/* Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material

b. Métodos
i. Trocar Cor
ii. Mostrar cor */

class Bola {
    cor: string;
    circunferencia: number;
    material: string;

    constructor(cor: string, circ: number, material: string) {
        this.cor = cor;
        this.circunferencia = circ;
        this.material = material;
    }

    trocarCor(novaCor: string) {
        console.log(this.cor = novaCor)
    }

    mostrarCor() {
        console.log(this.cor)
    }
}

let bola = new Bola("amarelo", 10, "couro");
bola.mostrarCor();
bola.trocarCor("rosa");



