import { Veiculo } from "./Veiculo";

//Crie uma subclasse Carro que herde de Veiculo.
export class Carro extends Veiculo {


    //método público chamado acelerar que acrescente um valor à velocidade.
    public acelerar(valor:number): void {
        this.velocidade += valor
    }

   public exibirVelocidade(): void {
        console.log(`A Velocidade do carro é: ${this.velocidade} Km/h`)
   } 

}
