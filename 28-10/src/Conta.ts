export class Conta {
    protected saldo:number = 0

    protected atualizarSaldo(valor:number): void {
        this.saldo += valor
    }

}