import { Navio } from "./Navio";
import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";

console.log("=== INICIANDO O SISTEMA: MAR DOS LADRÕES ===\n")

// 1. Criar instâncias de cada tipo de navio
const meuBergantim = new Bergantim("Vento Sul")
const minhaChalupa = new Chalupa("Pérola Veloz")
const meuGaleao = new Galeao("Titã dos Mares")

// 2. Exibir informações iniciais
console.log("--- 2. Informações Iniciais ---")
meuBergantim.exibirInformacoes()
minhaChalupa.exibirInformacoes()
meuGaleao.exibirInformacoes()

// 3. Fazer cada navio navegar e atacar
console.log("\n--- 3. Ações Individuais (Navegar e Atacar) ---")
meuBergantim.navegar()
meuBergantim.atacar()

minhaChalupa.navegar()
minhaChalupa.atacar()

meuGaleao.navegar()
meuGaleao.atacar()

// 4 & 5. Utilizar receberDano() e consultar os pontos de vida
console.log("\n--- 4 e 5. Simulando Danos e Consultando Vida ---")
meuBergantim.receberDano(35)
minhaChalupa.receberDano(20)
meuGaleao.receberDano(80)

// 6. Utilizar o método exclusivo da Chalupa
console.log("\n--- 6. Método Exclusivo da Chalupa ---")
minhaChalupa.explorarIlha()

// 7. Utilizar o método exclusivo do Galeão e verificar recuperação
console.log("\n--- 7. Método Exclusivo do Galeão (Reparo) ---")
meuGaleao.repararNavio(50) // Deve recuperar parte da vida
meuGaleao.repararNavio(200) // Testando regra de não ultrapassar a vida máxima

// 8 & 9. Polimorfismo: Coleção do tipo Navio[]
console.log("\n--- 8 e 9. Polimorfismo com Coleção Navio[] ---")
const frotaPirata: Navio[] = [meuBergantim, minhaChalupa, meuGaleao]

frotaPirata.forEach((navio, indice) => {
  console.log(`\nNavio [${indice + 1}] (${navio.getNome()}):`)
  navio.navegar() // Executa o comportamento polimórfico correspondente
  navio.atacar()  // Executa o comportamento polimórfico correspondente
});

// 10. Testando situações inválidas (Encapsulamento e Regras de Negócio)
console.log("\n--- 10. Testando Situações Inválidas ---")
minhaChalupa.receberDano(-15) // Dano negativo (deve barrar)
meuGaleao.repararNavio(-30)   // Reparo negativo (deve barrar)

// Aplicando dano excessivo para testar se a vida zera (mas não fica negativa)
minhaChalupa.receberDano(100)