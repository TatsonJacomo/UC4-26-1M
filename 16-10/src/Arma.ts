
// 1)
// Crie uma nova classe chamada Arma
// arma deve ter nome e ataque
// não esqueça do constructor

// 2) Dentro da classe personagem, crie o atributo arma (do tipo Arma)
// chame ele no constructor de Persongem também

// 3)
// Modifique o método "atacar" da classe Personagem para usar o dano da arma


export class Arma {
    //Atributos
    nome:string
    ataque:number

    constructor(nome:string, ataque:number) {
        this.nome = nome
        this.ataque = ataque
    }

    
}