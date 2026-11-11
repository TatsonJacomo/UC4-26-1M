"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persongem = void 0;
class Persongem {
    constructor(nome, vida, vidaMaxima, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.vidaMaxima = vidaMaxima;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    exibirStatus() {
        console.log("=========================");
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}`);
        console.log(`Vida Máxima: ${this.vidaMaxima}`);
        console.log(`Ataque: ${this.ataque}`);
        console.log(`Defesa: ${this.defesa}`);
        console.log("=========================");
    }
}
exports.Persongem = Persongem;
