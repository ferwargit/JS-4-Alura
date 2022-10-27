class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
}

class CuentaCorriente {
  numero;
  saldo;
  agencia;

  depositoEnCuenta(valor) {
    this.saldo += valor;
  }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.rutCliente = "133434";

const cuentaCorrienet1 = new CuentaCorriente();
cuentaCorrienet1.numero = "232323";
cuentaCorrienet1.saldo = 2000;
cuentaCorrienet1.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nombreCliente = "Ramon";
cliente2.dniCliente = "17566";
cliente2.rutCliente = "13804050";

const cuentaCorrienet2 = new CuentaCorriente();
cuentaCorrienet2.numero = "2390";
cuentaCorrienet2.saldo = 1000;
cuentaCorrienet2.agencia = 1002;

console.log(cuentaCorrienet2.saldo);
cuentaCorrienet2.depositoEnCuenta(100);
console.log(cuentaCorrienet2.saldo);
