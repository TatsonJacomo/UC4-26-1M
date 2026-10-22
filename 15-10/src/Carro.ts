
export class Carro {
    //Atributos
    marca:string
    tipo:string
    ano:number

    //Metodos
    constructor(minhaMarca:string, meuTipo:string, meuAno:number) {
        this.marca = minhaMarca
        this.tipo = meuTipo
        this.ano = meuAno
    }
    //Metodos
    anda():void {
        console.log(`O ${this.marca}: "está andando a 200km/h numa via de 60km!"}`)
    }
    //Metodos
    buzina():void{
        console.log(`O ${this.marca}: não para de buzinar na frente do SENAC!`)
    }
}