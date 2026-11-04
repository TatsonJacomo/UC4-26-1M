import { Navio } from "./Navio"

export class Bergantim extends Navio {


  constructor(nome: string) {

    // Parâmetros: nome, capacidadeTripulacao, vidaMaxima, velocidade, canhoes
    super(nome, 20, 100, 80, 12)
  }

  public override navegar():void {
    console.log(`🏴‍☠️ O bergantim [${this.nome}] aproveita seus ventos favoráveis para navegar rapidamente!`)
  }

  public override atacar(): void {
    console.log(`💥 O bergantim [${this.nome}] realiza uma sequência rápida de disparos com seus ${this.canhoes} canhões!`)
  }
}