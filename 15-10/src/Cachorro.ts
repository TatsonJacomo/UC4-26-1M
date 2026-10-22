//Toda classe sempre começa com letra maiuscula
// a palavra "export" permite que outros arquivos importem e usem esta classe
// a palavra "class" inicia a declaração da classe
// depois colocamos o nome da classe, que deve ser IGUAL ao nome do arquivo, seguido de chaves
export class Cachorro{
    //todo o codigo da classe vai aqui dentro
    //Atributos sao as coisas que um cachorro tem
    // sao como variaveis, só que sem const e sem let

    nome: string
    peso: number
    raca: string


    //Toda classe precisa ter um metodo especial chamado "constructor"
    //E ele que recebe os valores do nome , peso, raca, etc e cria o objeto.
    constructor(meuNome:string, meuPeso:number, minhaRaca:string) {
        this.nome = meuNome
        this.peso = meuPeso
        this.raca = minhaRaca
    }


    //Metodos são funcões. Elas sao as coisas que o cachorro faz.
    latir():void {
        console.log(`${this.nome}: au au au!`)
    }

    comer():void {
        console.log(`${this.nome}: nham nham"`)
    }
}