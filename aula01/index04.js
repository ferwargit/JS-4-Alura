// Importacion de clases
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '13804050'
cliente.rutCliente = '123224'

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;
// console.log(cuentaDeLeonardo);
// cuentaDeLeonardo.saldo = 0;
let saldo = cuentaDeLeonardo.verSaldo();
// console.log('El saldo actual es: ' + saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
// console.log(cuentaDeLeonardo);
// saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual (Cuenta Leonardo): ' + saldo);
// saldo = cuentaDeLeonardo.retirarDeCuenta(100);
// console.log(cuentaDeLeonardo);
// saldo = cuentaDeLeonardo.verSaldo();
// console.log('El saldo actual es: ' + saldo);
// saldo = cuentaDeLeonardo.depositoEnCuenta(10);
// console.log(cuentaDeLeonardo);
// saldo = cuentaDeLeonardo.verSaldo();
// console.log('El saldo actual es: ' + saldo);

// Creamos un objeto cliente
const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '16979808'
cliente2.rutCliente = '8989'


// Creamos otra cuenta
const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;


cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria);
console.log('Cuenta de María', cuentaDeMaria)

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
const saldoMaria = cuentaDeMaria.verSaldo();
// console.log('El saldo actual (Cuenta Leonardo): ' + saldoLeonardo);
// console.log('El saldo actual (Cuenta Maria): ' + saldoMaria);