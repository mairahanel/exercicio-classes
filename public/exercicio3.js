"use strict";
/* Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:

a. Número da conta
b. Nome do correntista
c. Saldo

Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque

No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo. */
class Conta {
    constructor(numeroConta, nome, saldo) {
        this.numeroConta = numeroConta;
        this.nome = nome;
        this.saldo = saldo;
    }
    alterarNome(novoNome) {
        this.nome = novoNome;
        console.log("O nome foi alterado para " + novoNome);
    }
    deposito(valor) {
        this.saldo += valor;
        console.log("Novo saldo: " + this.saldo + " reais");
    }
    saque(valor) {
        if (this.saldo < valor) {
            console.log("Você não possui saldo suficiente");
        }
        else {
            this.saldo -= valor;
            console.log("Você sacou " + valor + " reais." + "Seu saldo atual é: " + this.saldo + " reais");
        }
    }
}
let banco = new Conta(1234789, "Maira Hanel", 0);
banco.alterarNome("Joana Becker");
banco.deposito(230);
banco.deposito(50);
banco.saque(20);
//banco.saque(290);
