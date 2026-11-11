export class Persongem {
    nome:string
    vida:number
    vidaMaxima:number
    ataque:number
    defesa:number

    constructor(nome:string,
    vida:number,
    vidaMaxima:number,
    ataque:number,
    defesa:number) {
        this.nome = nome
        this.vida = vida
        this.vidaMaxima = vidaMaxima
        this.ataque = ataque
        this.defesa = defesa
    }

    exibirStatus():void {
        console.log("=========================")
        console.log(`Nome: ${this.nome}`)
        console.log(`Vida: ${this.vida}`)
        console.log(`Vida Máxima: ${this.vidaMaxima}`)
        console.log(`Ataque: ${this.ataque}`)
        console.log(`Defesa: ${this.defesa}`)
        console.log("=========================")
    }

}