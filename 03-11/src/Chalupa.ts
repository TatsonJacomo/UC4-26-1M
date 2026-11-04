import { Navio } from "./Navio";

export class Chalupa extends Navio {


  constructor(nome: string) {

    super(nome, 10, 60, 100, 4)
  }


  public override navegar():void {
    console.log(`⛵ A chalupa [${this.nome}] utiliza sua agilidade para realizar manobras rápidas.`)
  }


  public override atacar():void {
    console.log(`⚔️ A chalupa [${this.nome}] dispara seus poucos canhões (${this.canhoes}) e tenta escapar rapidamente!`)
  }


  public explorarIlha():void {
    console.log(`🏝️ A tripulação da chalupa [${this.nome}] desembarcou e está explorando uma ilha em busca de tesouros escondidos!`)
  }
  
}