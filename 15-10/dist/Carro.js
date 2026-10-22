"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    tipo;
    ano;
    constructor(minhaMarca, meuTipo, meuAno) {
        this.marca = minhaMarca;
        this.tipo = meuTipo;
        this.ano = meuAno;
    }
    anda() {
        console.log(`O ${this.marca}: "está andando a 200km/h numa via de 60km!"}`);
    }
    buzina() {
        console.log(`O ${this.marca}: não para de buzinar na frente do SENAC!`);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map