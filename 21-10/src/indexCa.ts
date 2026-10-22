//Importando a classe
import { Cachorro } from "./Cachorro";

// 1. Criando 3 cachorros diferentes usando o construtor
const cachorro1 = new Cachorro("Thor", "Vira Lata", 18)
const cachorro2 = new Cachorro("Eros", "Yorkshire", 10)
const cachorro3 = new Cachorro("Claudete", "Caramelo", 3)


// 2. Chamando métodos e exibindo os dados do Cachorro 1

console.log("==== Cachorro 1 ====")
console.log(`Nome: ${cachorro1.getNome()}`)
console.log(`Raça: ${cachorro1.getRaca()}`)
console.log(`Idade: ${cachorro1.getIdade()} anos`)

// 3. Usando SET para alterar o nome do Cahorro 2 e testando
console.log("\n==== Cachorro 2 (Alterando o nome =====")
console.log(`Nome antigo: ${cachorro2.getNome()}`)
// Alterando o nome com set
cachorro2.setNome("Shakira")
console.log(`Novo nome: ${cachorro2.getNome()}`)
cachorro2.latir()

// 4. Exibindo dados do cachorro 3
console.log("\n==== Cachorro 3 ====")
console.log(`Nome: ${cachorro3.getNome()}`)
console.log(`Raça: ${cachorro3.getRaca()}`)
console.log(`Idade: ${cachorro3.getIdade()} anos`)
cachorro3.latir()