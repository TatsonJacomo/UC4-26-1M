"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Mamifero_1 = require("./Mamifero");
//usando a palavra "extends",
//informamos  que a classe Cachorro herda da classe Mamifero
class Cachorro extends Mamifero_1.Mamifero {
    raca;
    constructor(raca, nome, patas, pelo) {
        //super vem de "superclass", que e a classe pai
        //super() nada mais é do que o constructor da classe pai
        super(nome, patas, pelo);
        this.raca = raca;
    }
}
exports.Cachorro = Cachorro;
