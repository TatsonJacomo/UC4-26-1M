import { Animal } from "./Animal";

export class Ave extends Animal {
    temPenas: boolean

    constructor(nome:string, idade:number, temPenas: boolean) {
        super(nome, idade)
        this.temPenas = temPenas
    }

    voar(): void {
        console.log(`${this.nome} está voando...`)
    }
}