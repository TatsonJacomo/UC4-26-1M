"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
const Personagem_1 = require("./Personagem");
let executando = true;
while (executando) {
    console.log("====== MENU ======\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Sair");
    const escolha = readline.questionInt("Escolha uma opção: ");
    switch (escolha) {
        case 1:
            console.log("Você escolheu a opção 1");
            break;
        case 2:
            console.log("Você escolheu a opção 2");
            break;
        case 3:
            console.log("Você escolheu a opção 3");
            break;
        case 4:
            console.log("Você escolheu a opção 4");
            break;
        default:
            console.log("Você escolheu a opção inválida");
            break;
    }
}
const seuZe = new Personagem_1.Persongem("Seu Zé", 100, 100, 250, 80);
const fredo = new Personagem_1.Persongem("Fredo", 100, 100, 300, 45);
const samuel = new Personagem_1.Persongem("Samuel", 80, 150, 61, 86);
const diegolas = new Personagem_1.Persongem("Diegolas", 45, 70, 150, 18);
