import { Ave } from "./Ave";

export class Coruja extends Ave {


    constructor(nome:string, idade:number, temPenas:boolean) {
        super(nome, idade, temPenas)
    }

    construindoNinho():void {
        console.log(`${this.nome} está cavando sua própria COVA...`)
    }

}