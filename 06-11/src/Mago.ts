export class Mago {
  constructor(public nome: string) {}

  lancarMagia(): void {
    console.log(`${this.nome} lança uma bola de fogo!`);
  }
}