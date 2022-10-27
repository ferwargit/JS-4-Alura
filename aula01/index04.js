// Importacion de clases
import {CuentaCorriente} from './CuentaCorriente.js';

const cuentaDeLeonardo = new CuentaCorriente();
// cuentaDeLeonardo.saldo = 0;
let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es: ' + saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
// console.log(cuentaDeLeonardo);
// saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es: ' + saldo);
saldo = cuentaDeLeonardo.retirarDeCuenta(100);
// console.log(cuentaDeLeonardo);
// saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es: ' + saldo);
saldo = cuentaDeLeonardo.depositoEnCuenta(10);
// console.log(cuentaDeLeonardo);
// saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es: ' + saldo);
