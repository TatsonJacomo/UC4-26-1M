import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    // Método público que utiliza o método protegido 'atualizarSaldo' da superclasse
    aplicarJuros(valorJuros:number):void {
        this.atualizarSaldo(valorJuros)
        console.log(`Juros aplicados. Novo saldo.`)
    }

    // 3. Método público para consultar o saldo
    consultarSaldo():void {
        console.log(`Saldo da Poupança: R$ ${this.saldo}`)
    }
}