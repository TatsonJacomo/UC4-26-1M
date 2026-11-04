"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    // Construtor que recebe um valor inicial
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    consultarSaldo() {
        console.log(`Saldo: R$ ${this.saldo}`);
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} realizado com sucesso!`);
        }
        else {
            console.log("O valor do Depósito deve ser maior que ZERO !!! ");
        }
    }
}
exports.ContaBancaria = ContaBancaria;
