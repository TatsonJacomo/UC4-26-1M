"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
// Crie uma classe Livro com uma propriedade pública chamada titulo.
class Livro {
    constructor(titulo) {
        this.titulo = titulo;
    }
    exibirTitulo() {
        console.log(`Título do Livro: ${this.titulo}`);
    }
}
exports.Livro = Livro;
