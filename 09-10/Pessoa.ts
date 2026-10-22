//Classes sempre começam com a letra maiuscula
//export significa 'exportar', ou seja, outros arquivos podem 'importar' esta classe e usar ela
//depois, usamos a palavra 'class' para indicar que estamos criando uma classe
//e depois, colocamos o exato mesmo nome que damos para o arquivo
export class Pessoa {
    //atributos
    //o que uma pessoa tem
    nome: string
    email: string
    senha: string

    //metodo construtor (quando uma função está dentro de uma classe, chamamos de metodo)
    //ele serve para criar o objeto pessoa
    constructor(meuNome:string, meuEmail:string, minhaSenha:string) {
        this.nome = meuNome
        this.email = meuEmail
        this.senha = minhaSenha
    }

    andar():void{
        console.log(`${this.nome} esta andando!`)
    }
} 

let usuario:Pessoa = new Pessoa("Tatson", "tatson@gmail.com", "132")
let usuario2:Pessoa = new Pessoa("lele", "lele@gmail.com", "123")

console.log(usuario.nome)

usuario.andar()
usuario2.andar()