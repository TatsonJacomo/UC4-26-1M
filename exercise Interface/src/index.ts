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


import { Gerente } from "./Gerente";
import { Desenvolvedor } from "./Desensolvedor";
import { liderTecnico } from "./LiderTecnico";


const gerente = new Gerente("Valdir")
const desenvolvedor = new Desenvolvedor("DaniCrazy")
const lidertecnico = new liderTecnico("Leo Do Senac")

console.log("\n------------------------------------------\n")

gerente.gerenciar()
gerente.trabalhar()

console.log("\n------------------------------------------\n")

desenvolvedor.programar()
desenvolvedor.trabalhar()

console.log("\n------------------------------------------\n")

lidertecnico.gerenciar()
lidertecnico.programar()
lidertecnico.trabalhar()

console.log("\n------------------------------------------\n")
