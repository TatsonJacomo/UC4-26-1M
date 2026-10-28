export class ContaBancaria {
    private saldo: number

    // Construtor que recebe um valor inicial
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public consultarSaldo(): void {
        console.log(`Saldo: R$ ${this.saldo}`);
    }

    public depositar(valor:number): void {
        if (valor > 0) {
            this.saldo += valor
            console.log(`Depósito de R$ ${valor} realizado com sucesso!`)
        } else { 
            console.log("O valor do Depósito deve ser maior que ZERO !!! ")
        }

    }
}
