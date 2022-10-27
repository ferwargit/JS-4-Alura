import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
  #cliente;
  numero;
  #saldo;
  agencia;

  set setCliente(valor) {
    if (valor instanceof Cliente) 
      this.#cliente = valor;
  }

  get getCliente() {
    return this.#cliente;
  }

  constructor() {
    // en este caso cliente no es un dato primitivo,
    // es un tipo de dato, es un objeto (es la clase Cliente)
    // por eso null, es un objeto de tipo de dato Cliente
    this.#cliente = null;
    this.numero = "";
    this.#saldo = 0;
    this.agencia = "";
  }

  depositoEnCuenta(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      return this.#saldo;
    }
  }
  retirarDeCuenta(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return this.#saldo;
    }
  }
  verSaldo() {
    return this.#saldo;
  }
  transferirParaCuenta(valor, cuentaDestino) {
    // Retiro de una cuenta
    this.retirarDeCuenta(valor);
    // Deposito en la otra cuenta
    cuentaDestino.depositoEnCuenta(valor);
  }
}
