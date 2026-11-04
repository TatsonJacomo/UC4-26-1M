"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
//Crie uma subclasse Carro que herde de Veiculo.
class Carro extends Veiculo_1.Veiculo {
    //método público chamado acelerar que acrescente um valor à velocidade.
    acelerar() {
        this.velocidade += 25;
    }
    exibirVelocidade() {
        console.log(`A Velocidade do carro é: ${this.velocidade} Km/h`);
    }
}
exports.Carro = Carro;
