"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desenvolvedor = void 0;
class Desenvolvedor {
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando com os crazys frogs...`);
    }
    programar() {
        console.log(`${this.nome} está programando sair do manicomio do Valdibras...`);
    }
}
exports.Desenvolvedor = Desenvolvedor;
