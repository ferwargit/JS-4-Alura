# JS-4-Alura
![](./img/modelado.jpg)
# Clase
```javascript
class Cliente {
  nombreCliente;
  dniCliente;
  numeroCuenta;
  saldoCuenta;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = 'José';
cliente1.dniCliente = '13232';
cliente1.numeroCuenta = '232323';
cliente1.saldoCuenta = 2000;

console.log(cliente1);
```
![](./img/clase.jpg)

# El paradigma de la programación orientada a objetos

https://ljcl79.medium.com/el-paradigma-de-la-programaci%C3%B3n-orientada-a-objetos-d8a662a79fb9  

Cuando decimos que tenemos un modelo en digital, hablamos en POO de una **clase**, y cuando hablamos de un integrante de ese modelo nos estamos refiriendo a un **objeto** (o instancia de esa clase).

```javascript
class Animal {
    constructor(especie, tamano, habitat) {
        this.especie = especie;
        this.tamano = tamano;
        this.habitat = habitat;
    }
    alimentacion() {
        console.log("Aqui definimos como se alimenta el animal");
    }
    movimiento() {
        console.log("En este método definimos como se mueve el animal");
    }
}
```