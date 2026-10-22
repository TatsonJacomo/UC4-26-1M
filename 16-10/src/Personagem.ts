import { Arma } from "./Arma"

export class Personagem {
    //Atributos
    nome:string
    vida:number = 50
    forca:number
     //Dentro da classe personagem, crie o atributo arma (do tipo Arma)
    arma: Arma

    constructor(nome:string, forca:number, arma:Arma) {
        this.nome = nome
        this.forca = forca
        this.arma = arma
    }

    //metodos
    curar():void {
        this.vida += 10
        if (this.vida > 100 ) this.vida = 100  
        
    }

    perderVida():void {
        this.vida -= 10
         if (this.vida < 0 ) this.vida = 0
    }

    curarOutroPersonagem(per:Personagem):void {
        per.vida += 10
        if (per.vida > 100){
            per.vida = 100
        }
        console.log(`O personagem ${per.nome} foi curada por ${this.nome}.
            \n Vida de ${per.nome}: ${per.vida}.`)
    }

    //criem um metodo chamado atacar que faça um personagem tirar a vida do outro
//     atacar(per:Personagem): void {
//         per.vida -= this.forca
//         if(per.vida < 0){
//             per.vida = 0
        
//         }
//         console.log(`O personagem ${per.nome} foi atacado por ${this.nome}.
//             \n Vida de ${per.nome}: ${per.vida}.`)
//     }


atacar(per:Personagem): void {
    
         per.vida -= this.arma.ataque
         if(per.vida < 0) {
             per.vida = 0
         }
         
        console.log(`O personagem ${per.nome} atacou ${this.nome}.
            \nVida de ${per.nome}: ${per.vida}.`)
     }


 }

// 1)
// Crie uma nova classe chamada Arma
// arma deve ter nome e ataque
// não esqueça do constructor

// 2) Dentro da classe personagem, crie o atributo arma (do tipo Arma)
// chame ele no constructor de Persongem também

// 3)
// Modifique o método "atacar" da classe Personagem para usar o dano da arma

