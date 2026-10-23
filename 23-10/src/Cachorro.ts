import { Mamifero } from "./Mamifero";
//usando a palavra "extends",
//informamos  que a classe Cachorro herda da classe Mamifero
export class Cachorro extends Mamifero {

    raca:string

    constructor(raca:string, nome:string, patas:number, pelo:string) {
        //super vem de "superclass", que e a classe pai
        //super() nada mais é do que o constructor da classe pai
        super(nome, patas, pelo);
        this.raca = raca
    }

    correr():void {
        console.log(`${this.getNome()} está correndo com suas ${this.patas}!`)
    }



}





// private = só a propria classe pode acessar diretamente usando "this.attributo". O
//restante precisa usar "getAtributo" ou "setAtributo"

// public = qualquer um acessa e modifica diretamente. Não precisa de get ou set.

// protected = tanto a classe pai quanto as classes filhas podem acessar diretamante.
// O restante precisa usar "getAtributo" ou "setAtributo"