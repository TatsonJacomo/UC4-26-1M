/*
Primeiro crie o package.json (npm init -y)
depois, crie o script do npm start:
"start": "npx tsc index.ts && node index.js"
Ai, Instale a biblioteca com readline-sync e também os tipos
прm i readline-sync
прm i @types/readline-sync
Verifique se os dois aparecem no package-json. Se não aparecer, não foram instalados.
*/
/*Exercício 1:
Crie una função chamada "somar" que pede dois números, Estes números devem ser passados pelo usuário através do readline-sync.
Mostre a soma destes dois numeros. Não esqueça de tipar o retorno corretanente.*/
/*
Exercicio 2:
Seu Zé (sim, ele de novo) também esta no ramo do jogo do bicho no mercadinho dele. Ele
Precisa agora de um Sistema que identifique os números os animais a partir dos números que os clientes escolhem.

Faça isso, você deve:
- Solicitar o nome do cliente:
- Solicitar um número de 1 a 20;
- Criar uma função chamada "descobrirBicho" que recebe esse numero
- Utilizando if, else if, essa função identifica que animal que a pessoa escolheu.
- A função retorna o nome do cliente, o numero escolhidoe o nome do animal escolhido, tudo numa frase so!
*/
// Animais: Avestruz: 01 a 04 | Aguia: 05 a 08 | Burro: 09 a 12 | Borboleta: 13 a 16 | Cachorro: 17 a 20
import * as readline from "readline-sync";
//Exercício 1
console.log("=============== Exercicio 1 ===============");
function somar() {
    let num1 = readline.questionInt("Digite um numero: ");
    let num2 = readline.questionInt("Digite outro numero: ");
    return num1 + num2;
}
console.log(`O resultado da soma é: ${somar()}`);
console.log("");
console.log("=============== Exercicio 2 =============");
console.log("");
//===================================================================
//Exercício 2
function descobrirBicho(numero, nomeCliente) {
    let animal = "";
    if (numero >= 1 && numero <= 4) {
        animal = "Avestruz";
    }
    else if (numero >= 5 && numero <= 8) {
        animal = "Aguia";
    }
    else if (numero >= 9 && numero <= 12) {
        animal = "Burro";
    }
    else if (numero >= 13 && numero <= 16) {
        animal = "Borboleta";
    }
    else if (numero >= 17 && numero <= 20) {
        animal = "Cachorro";
    }
    else {
        animal = "NÚMERO INVALIDO! (deve ser entre 1 e 20)";
    }
    return `Cliente: ${nome}, O número escolhido foi: ${escolha}, e o animal foi ${animal}.`;
}
let nome = readline.question("Digite o nome do cliente: ");
let escolha = readline.questionInt("Escolha um numero de 1 a 20: ");
let resultadoBicho = descobrirBicho(escolha, nome);
console.log("");
console.log("=========================================");
console.log("");
console.log(resultadoBicho);
console.log("");
console.log("=============== FIM =====================");
