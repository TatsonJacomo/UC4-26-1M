"use strict";
/* Uma emrpesa precisa desenvolver um sistema para organizar as funcoes de seus
 funcionários.

 Cada funcionário possui responsabilidades diferentes:
    - O DESENVOLVEDOR pode trabalhar e programar
    - O GERENTE pode trabalhar  e gerenciar  equipes.
    - O LÍDER TÉCNICO pode trabalhar, programar e gerenciar equipes.


Para organizar essas responsabilidades, você deverá utilizar 3 interfaces:
- ITrabalhador : possui o método trabalhar():void
- IProgramador : possui o método programar():void
- IGerente     : possui o método gerenciar():void

Todas as classes (desenvolvedor, gerente e liderTecnico) deverão possuir também um atributo nome.
Cada método deve retornar uma mensagem.


Crie um objeto de cada no index e chame seus métodos.


*/
Object.defineProperty(exports, "__esModule", { value: true });
const Gerente_1 = require("./Gerente");
const Desensolvedor_1 = require("./Desensolvedor");
const LiderTecnico_1 = require("./LiderTecnico");
const gerente = new Gerente_1.Gerente("Valdir");
const desenvolvedor = new Desensolvedor_1.Desenvolvedor("DaniCrazy");
const lidertecnico = new LiderTecnico_1.liderTecnico("Leo Do Senac");
console.log("\n------------------------------------------\n");
gerente.gerenciar();
gerente.trabalhar();
console.log("\n------------------------------------------\n");
desenvolvedor.programar();
desenvolvedor.trabalhar();
console.log("\n------------------------------------------\n");
lidertecnico.gerenciar();
lidertecnico.programar();
lidertecnico.trabalhar();
console.log("\n------------------------------------------\n");
