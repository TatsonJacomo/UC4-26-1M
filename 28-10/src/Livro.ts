// Crie uma classe Livro com uma propriedade pública chamada titulo.
export class Livro {
    public titulo:string


    constructor(titulo:string) {
        this.titulo = titulo
    }

    public exibirTitulo(): void {
        console.log(`Título do Livro: ${this.titulo}`)
    }

}