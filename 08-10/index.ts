//
import * as readline from 'readline-sync'

let nome: string = readline.question("Qual e o seu nome? ")
let idade: number = readline.questionInt("Qual sua idade? ")

console.log(`Olá ${nome}! Você tem ${idade} anos.`)

//Esta função tem return
//Ela retorna uma String
function frase(): string{
    return "Ola pessoal!"
}

//Essa função também tem return
//Ela retorna uma string
function somar(): number{
    return 1 + 2 
}

//Essa função NÃO TEM return
//Ela retorna void
function saudacao(): void{
    console.log("Olá galera!")
}