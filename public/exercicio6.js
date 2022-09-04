"use strict";
/* Implemente uma classe chamada Carro com as seguintes
propriedades:

a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.

b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.

c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.

Exemplo:
meuFusca = new Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
meuFusca.obterGasolina() */
class Carro {
    constructor(media) {
        this.consumo = media;
        this.quantidadeTanque = 0;
    }
    andar(distancia) {
        const gasolinaTanque = distancia / this.consumo;
        if (this.quantidadeTanque < gasolinaTanque) {
            console.log("Não há gasolina suficiente no tanque");
        }
        else {
            console.log("Novo nível de gasolina: " + (this.quantidadeTanque - gasolinaTanque));
        }
    }
    obterGasolina() {
        console.log(this.quantidadeTanque);
    }
    adicionarGasolina(valorAdicionar) {
        this.quantidadeTanque += valorAdicionar;
        console.log(this.quantidadeTanque);
    }
}
let carro = new Carro(14);
carro.adicionarGasolina(50);
carro.andar(20);
carro.obterGasolina();
