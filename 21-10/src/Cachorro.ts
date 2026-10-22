export class Cachorro {
    //atributos como "private" para garantir o encapsulamento
    private nome:string
    private raca:string
    private idade:number

    // 2. Criando o construtor para inicializar os atributos ao criar o objeto
    constructor(nome:string, raca:string, idade:number) {
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    // 3. Criando os métodos GET (para ler os valores dos atributos privados)
    public getNome():string {
        return this.nome
    }

    public getRaca():string {
        return this.raca
    }

    public getIdade():number {
        return this.idade
    }

    // 4. Criando os métodos SET (para alterar os valores dos atributos com segurança)
    public setNome(nome:string): void {
        this.nome = nome;
  } 

    public setIdade(idade:number): void {
        if (idade >= 0 ) {
            this.idade = idade
        } else {
            console.log("A idade não pode ser Negativa!")
        }
  }

    // Método para demonstrar ação do cachorro
    public latir():void {
        console.log(`${this.nome} está latindo!`)
    }

}