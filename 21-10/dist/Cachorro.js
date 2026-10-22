"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    //atributos como "private" para garantir o encapsulamento
    nome;
    raca;
    idade;
    // 2. Criando o construtor para inicializar os atributos ao criar o objeto
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    // 3. Criando os métodos GET (para ler os valores dos atributos privados)
    getNome() {
        return this.nome;
    }
    getRaca() {
        return this.raca;
    }
    getIdade() {
        return this.idade;
    }
    // 4. Criando os métodos SET (para alterar os valores dos atributos com segurança)
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        if (idade >= 0) {
            this.idade = idade;
        }
        else {
            console.log("A idade não pode ser Negativa!");
        }
    }
    // Método para demonstrar ação do cachorro
    latir() {
        console.log(`${this.nome} está latindo!`);
    }
}
exports.Cachorro = Cachorro;
