"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
class Gerente {
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando na oficina de Caminhão...`);
    }
    gerenciar() {
        console.log(`${this.nome} está gerenciando a entrada do manicomio...`);
    }
}
exports.Gerente = Gerente;
