"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liderTecnico = void 0;
class liderTecnico {
    constructor(nome) {
        this.nome = nome;
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando há 15 dias sem comer e sem dormir...`);
    }
    programar() {
        console.log(`${this.nome} está programando uma invasão com DaniCrazy...`);
    }
    gerenciar() {
        console.log(`${this.nome} está gerenciando os oreias secas do Senac...`);
    }
}
exports.liderTecnico = liderTecnico;
