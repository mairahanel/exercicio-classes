/* Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.

a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.

b. Esta classe deve iniciar com o histórico vazio

c. Esta classe deve conter uma ação para visualizar o histórico. */

class Calculadora {
    historico: number[];

    constructor(historico: []) {
        this.historico = historico;
    }

    somar(valor1: number, valor2: number) {
        const resultado = valor1 + valor2;
        this.historico.push(resultado);  
    }

    multiplicar(valor1: number, valor2: number) {
        const resultado = valor1 * valor2;
        this.historico.push(resultado);  
    }

    dividir(valor1: number, valor2: number) {
        const resultado = valor1 / valor2;
        this.historico.push(resultado);  
    }

    diminuir(valor1: number, valor2: number) {
        const resultado = valor1 - valor2;
        this.historico.push(resultado);  
    }

    mostrarHistorico() {
        this.historico.forEach((historico) => {
            console.log(historico)
        })
    }
}

let calculadora = new Calculadora([]);
calculadora.somar(2, 2);
calculadora.diminuir(5, 3);
calculadora.dividir(20, 2);
calculadora.multiplicar(4, 3);
calculadora.mostrarHistorico();