"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    //Atributos
    nome;
    vida = 50;
    forca;
    constructor(nome, forca) {
        this.nome = nome;
        this.forca = forca;
    }
    //metodos
    curar() {
        this.vida += 10;
        if (this.vida > 100)
            this.vida = 100;
    }
    perderVida() {
        this.vida -= 10;
        if (this.vida < 0)
            this.vida = 0;
    }
    curarOutroPersonagem(per) {
        per.vida += 10;
        if (per.vida > 100) {
            per.vida = 100;
        }
        console.log(`O personagem ${per.nome} foi curada por ${this.nome}.
            \n Vida de ${per.nome}: ${per.vida}.`);
    }
    //criem um metodo chamado atacar que faça um personagem tirar a vida do outro
    atacar(per) {
        per.vida -= this.forca;
        if (per.vida < 0) {
            per.vida = 0;
        }
        console.log(`O personagem ${per.nome} foi atacado por ${this.nome}.
            \n Vida de ${per.nome}: ${per.vida}.`);
    }
}
exports.Personagem = Personagem;
