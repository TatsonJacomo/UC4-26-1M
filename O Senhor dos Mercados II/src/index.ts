import * as readline from "readline-sync"
import { Persongem } from "./Personagem";

let executando:boolean = true;

while (executando) {

console.log("====== MENU ======\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Sair")

const escolha:number = readline.questionInt("Escolha uma opção: ")

switch(escolha) {
    case 1:
        console.log("Você escolheu a opção 1")
            break
    case 2:
        console.log("Você escolheu a opção 2")
            break
    case 3:
        console.log("Você escolheu a opção 3")
            break
    case 4:
        console.log("Você escolheu a opção 4")
        break
    default:
        console.log("Você escolheu a opção inválida")
            break

}
}


const seuZe = new Persongem("Seu Zé", 100, 100, 250, 80)
const fredo = new Persongem("Fredo", 100, 100, 300, 45)
const samuel = new Persongem("Samuel", 80, 150, 61, 86)
const diegolas = new Persongem("Diegolas", 45, 70, 150, 18)