//
import * as readline from 'readline-sync';
let nome = readline.question("Qual e o seu nome? ");
let idade = readline.questionInt("Qual sua idade? ");
console.log(`Olá ${nome}! Você tem ${idade} anos.`);
