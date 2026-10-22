import { Personagem } from "./Personagem"
import { Arma } from "./Arma"



// const personagem:Personagem = new Personagem("Tatson", 25)

// console.log(personagem.vida) //50

// personagem.curar()

// console.log(personagem.vida) //60

// console.log("-------- Perder Vida ----------")

// personagem.perderVida()

// console.log(personagem.vida) // 58


// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()
// personagem.curar()


// console.log(personagem.vida)

// personagem.perderVida


// Criando armas
const espada = new Arma("Espada", 15)
const arco = new Arma("Arco", 10)



const per:Personagem = new Personagem("Fulano", 7, espada)
const per1:Personagem = new Personagem("Ciclano", 6, arco)
const per2:Personagem = new Personagem("Beltrano", 8, espada)

//string é um tipo. Logo, podemos criar um array deste tipo
const nomes:string[] = ["Leonardo", "Tatson", "Maria"]
// number é um tipo. Logo, também podemos criar um array deste tipo
const numeros:number[] = [30, 108, 59]

const personagens: Personagem[] = [per, per1, per2 ]

per.curarOutroPersonagem(per2)


per.atacar(per2)

