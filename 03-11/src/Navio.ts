export class Navio {

  protected nome: string
  protected capacidadeTripulacao: number
  protected vida: number
  protected vidaMaxima: number
  protected velocidade: number
  protected canhoes: number


  constructor(
    nome: string,
    capacidadeTripulacao: number,
    vidaMaxima: number,
    velocidade: number,
    canhoes: number
  ) {
    
    this.nome = nome
    this.capacidadeTripulacao = capacidadeTripulacao
    this.vidaMaxima = vidaMaxima
    this.vida = vidaMaxima // O navio começa com a vida cheia
    this.velocidade = velocidade
    this.canhoes = canhoes
  }

  
  // Getters para consulta segura (Encapsulamento)
  public getNome():string {
    return this.nome
  }

  public getVida():number {
    return this.vida
  }

  public getVidaMaxima():number {
    return this.vidaMaxima
  }

  public getCapacidadeTripulacao():number {
    return this.capacidadeTripulacao
  }

  public getVelocidade():number {
    return this.velocidade
  }

  public getCanhoes():number {
    return this.canhoes
  }

  // Métodos de Comportamento
  public navegar():void {
    console.log(`${this.nome} está navegando pelo mar.`)
  }

  public atacar():void {
    console.log(`${this.nome} está atacando com seus canhões.`)
  }

  public receberDano(dano:number):void {
    if (dano < 0) {
      console.log(`[Erro] O dano recebido não pode ser negativo!`)
      return
    }

    this.vida -= dano
    if (this.vida < 0) {
      this.vida = 0 // A vida não pode ficar abaixo de zero
    }
    console.log(`${this.nome} recebeu ${dano} de dano. Vida atual: ${this.vida}/${this.vidaMaxima}`)
  }

  public exibirInformacoes():void {
    console.log(`--- Informações do Navio ---`)
    console.log(`Nome: ${this.nome}`)
    console.log(`Vida: ${this.vida}/${this.vidaMaxima}`)
    console.log(`Velocidade: ${this.velocidade}`)
    console.log(`Canhões: ${this.canhoes}`)
    console.log(`Capacidade de Tripulação: ${this.capacidadeTripulacao}`)
    console.log(`----------------------------`)
  }


}