export class Guerreiro {
  constructor(public nome: string) {}

  atacar(): void {
    console.log(`${this.nome} ataca com a espada!`);
  }
}