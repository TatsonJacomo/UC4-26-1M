"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    nome;
    vida;
    ataque;
    poder;
    constructor(nome, vida, ataque, poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }
    falar() {
        console.log(`${this.nome} `.repeat(3));
    }
    atacar(pok) {
        pok.vida -= this.ataque;
        console.log(`O ${this.nome} atacou o ${pok.nome}`);
        this.vida = 0;
        console.log(`O ${this.nome} FALECEU!`);
    }
    atacarComPoder(pok) {
        pok.ataque -= this.poder.ataque;
        console.log(`O ${pok.nome} atacou o ${this.nome}`);
    }
}
exports.Pokemon = Pokemon;
