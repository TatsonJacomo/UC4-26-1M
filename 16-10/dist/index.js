"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
// const personagem:Personagem = new Personagem("Tatson", 25)
// console.log(personagem.vida) //50
// personagem.curar()
// console.log(personagem.vida) //60
// console.log("-------- Perder Vida ----------")
// personagem.perderVida()
// console.log(personagem.vida) // 58
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// console.log(personagem.vida)
// personagem.perderVida
const per = new Personagem_1.Personagem("Fulano", 7);
const per1 = new Personagem_1.Personagem("Ciclano", 6);
const per2 = new Personagem_1.Personagem("Beltrano", 8);
//string é um tipo. Logo, podemos criar um array deste tipo
const nomes = ["Leonardo", "Tatson", "Maria"];
// number é um tipo. Logo, também podemos criar um array deste tipo
const numeros = [30, 108, 59];
const personagens = [per, per1, per2];
per.curarOutroPersonagem(per);
per.atacar(per2);
