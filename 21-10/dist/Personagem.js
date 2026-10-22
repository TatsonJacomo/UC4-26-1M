"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persongem = void 0;
class Persongem {
    nome;
    vida;
    dinheiro;
    constructor(nome, vida, dinheiro) {
        this.nome;
        this.vida;
        this.dinheiro;
    }
    mostarVida() {
        return this.vida;
    }
    mudarVida(valor) {
        this.vida = valor;
    }
}
exports.Persongem = Persongem;
/* get (mostrar) set (mudar)

ficaria:

getVida():number{
    return this.vida
}

setVida()

*/
//Crie uma classe chamada Cachorro
//Coloque atributos no cachorro
//Coloque os atributos "private"
//Crie o consctrutor
//Crie os metodos get e os set
//crie 3 cachorros no index e chame seus metodos.
