/* Faça um programa completo utilizando classes e métodos que:

a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro
iii. quantidadeCombustivel

b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo

ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.

iii. alterarValor() – altera o valor do litro do combustível.

iv. alterarCombustivel() – altera o tipo do combustível.

v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba. */

class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;

    constructor(tipo: string, valor: number, quant: number) {
        this.tipoCombustivel = tipo;
        this.valorLitro = valor;
        this.quantidadeCombustivel = quant;
    }

    abastecerPorValor(dinheiro: number){
        const quantidadeCombustivel = dinheiro / this.valorLitro;

        if(quantidadeCombustivel < this.quantidadeCombustivel){
            this.quantidadeCombustivel - quantidadeCombustivel
            console.log(quantidadeCombustivel);
        }else {
            console.log("Não há combustível suficiente na bomba");
        }
    }

    abastecerPorLitro(litros: number){
        const valor = litros * this.valorLitro;

        if(valor < this.quantidadeCombustivel){
            this.quantidadeCombustivel - valor
            console.log(valor);
        } else{
            console.log("Não há combustível suficiente na bomba");
        }
    }

    alterarValor(novoValor: number) {
        this.valorLitro = novoValor;
        console.log(novoValor);
    }

    alterarCombustivel(novoTipo: string){
        this.tipoCombustivel = novoTipo;
        console.log(novoTipo);
    }

    alterarQuantidadeCombustivel(novaQuant: number){
        this.quantidadeCombustivel = novaQuant;
        console.log(novaQuant);
    }
}

const bomba = new BombaCombustivel("Gasolina", 5, 300);
bomba.abastecerPorValor(100);
bomba.abastecerPorLitro(3);
bomba.alterarCombustivel("Diesel");
bomba.alterarQuantidadeCombustivel(200);
bomba.alterarValor(4);