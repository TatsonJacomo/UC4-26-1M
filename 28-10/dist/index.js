"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = require("./Livro");
const ContaBancaria_1 = require("./ContaBancaria");
const Carro_1 = require("./Carro");
const meuLivro = new Livro_1.Livro("TypeScript é um saco");
console.log(meuLivro.titulo);
meuLivro.exibirTitulo();
console.log("============================================");
// Instancie uma conta e teste os métodos.
const conta = new ContaBancaria_1.ContaBancaria(100);
conta.consultarSaldo();
conta.depositar(50);
conta.consultarSaldo();
console.log("===========================================");
// Instancie um Carro, acelere e exiba sua velocidade.
const meuCarro = new Carro_1.Carro();
meuCarro.acelerar();
meuCarro.exibirVelocidade();
console.log("===========================================");
