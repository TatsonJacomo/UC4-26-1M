import { Navio } from "./Navio";

export class Galeao extends Navio {

    
  constructor(nome: string) {
    super(nome, 50, 250, 45, 28)
  }

  public override navegar(): void {
    console.log(`🚢 O galeão [${this.nome}] avança pesada e lentamente pelo mar.`)
  }

  public override atacar(): void {
    console.log(`🔥 O galeão [${this.nome}] dispara uma poderosa salva de canhões (${this.canhoes} canhões trovejam)!`)
  }

  public repararNavio(quantidade: number): void {
    if (quantidade < 0) {
      console.log(`[Erro] A quantidade de reparo não pode ser negativa!`)
      return;
    }

    this.vida += quantidade;
    if (this.vida > this.vidaMaxima) {
      this.vida = this.vidaMaxima; // A vida não pode ultrapassar a máxima
    }
    console.log(`🔧 O galeão [${this.nome}] foi reparado. Vida atual: ${this.vida}/${this.vidaMaxima}`)
  }
}