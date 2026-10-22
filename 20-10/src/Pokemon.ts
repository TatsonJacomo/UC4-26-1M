import { Poder } from "./Poder"

export class Pokemon {
    nome:string
    vida:number
    ataque:number
    poder:Poder

    constructor(nome:string, vida:number, ataque:number, poder:Poder) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.poder = poder

    }


    falar():void {
        console.log(`${this.nome} `.repeat(3))
    }

    atacar(pok:Pokemon):void {
        pok.vida -= this.ataque
        console.log(`O ${this.nome} atacou o ${pok.nome}`)
        this.vida = 0
        console.log(`O ${this.nome} FALECEU!`)
    }

    atacarComPoder(pok:Pokemon):void {
        pok.ataque -= this.poder.ataque

        console.log(`O ${pok.nome} atacou o ${this.nome}`)
    }


}