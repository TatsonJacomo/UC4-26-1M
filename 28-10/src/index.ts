import { Livro } from "./Livro";
import { ContaBancaria } from "./ContaBancaria";
import { Carro } from "./Carro";
import { ContaPoupanca } from "./ContaPoupanca";

const meuLivro = new Livro("TypeScript é um saco")


console.log(meuLivro.titulo)

meuLivro.exibirTitulo()

console.log("============================================")
// Instancie uma conta e teste os métodos.
const conta = new ContaBancaria(100)

conta.consultarSaldo()
conta.depositar(50)

conta.consultarSaldo()

console.log("===========================================")

// Instancie um Carro, acelere e exiba sua velocidade.
const meuCarro = new Carro()

meuCarro.acelerar()
meuCarro.exibirVelocidade()

console.log("===========================================")


const poupanca = new ContaPoupanca()
poupanca.aplicarJuros(150)
poupanca.consultarSaldo() // Saldo da Poupança: R$ 150

