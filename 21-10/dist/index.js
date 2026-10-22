"use strict";
/* Criar uma classe Persongem que tenha:
nome
vida
dinheiro

Coloque todos os atributos como "private"
Crie um metodo que mostra a vida  (exemplo: mostrarVida())
Crie um metodo que modifica a vida (exemplo: mudarVida(vida:number))

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const personagem = new Personagem_1.Persongem("Fulano", 100, 10);
console.log(personagem.mostrarVida());
personagem.mudarVida(200);
console.log(personagem.mostrarVida());
