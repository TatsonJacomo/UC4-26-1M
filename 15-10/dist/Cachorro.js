"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
//Toda classe sempre começa com letra maiuscula
// a palavra "export" permite que outros arquivos importem e usem esta classe
// a palavra "class" inicia a declaração da classe
// depois colocamos o nome da classe, que deve ser IGUAL ao nome do arquivo, seguido de chaves
class Cachorro {
    //todo o codigo da classe vai aqui dentro
    //Atributos sao as coisas que um cachorro tem
    // sao como variaveis, só que sem const e sem let
    nome;
    peso;
    raca;
    //Toda classe precisa ter um metodo especial chamado "constructor"
    //E ele que recebe os valores do nome , peso, raca, etc e cria o objeto.
    constructor(meuNome, meuPeso, minhaRaca) {
        this.nome = meuNome;
        this.peso = meuPeso;
        this.raca = minhaRaca;
    }
    //Metodos são funcões. Elas sao as coisas que o cachorro faz.
    latir() {
        console.log(`${this.nome}: au au au!`);
    }
    comer() {
        console.log(`${this.nome}: nham nham"`);
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map