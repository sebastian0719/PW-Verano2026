/*
function potencia(base, exponente) { 
    let resultado = 1;

    for (let i = 0; i < exponente; i++) { 
        resultado = resultado * base;
    }
    return resultado;
}

let resultado = potencia(-2, 3);

console.log("El resultado es: " + resultado)
*/

/*
var dinero = 5000;

for (let i = 0; i < 1; i++) {
    let operacion = parseInt(prompt("Ingresa el numero de la operacion a realizar:  1- Consultar saldo  2- Depositar  3- Retirar  4- Salir"))
    if (operacion == 1) {
        console.log("Saldo disponible: " + dinero);
        i--
    } else if (operacion == 2) {
        let deposito = parseInt(prompt("Ingrese la cantidad a depositar: "));
        dinero = dinero + deposito;
        i--
    } else if (operacion == 3) {
        let retirar = parseInt(prompt("Cuanto deseas retirar, " + "Saldo actual: " + dinero));
        if (dinero < retirar) {
            console.log("la cantidad que deseas retirar es mayor a tu saldo")
            i--
        } else {
            dinero = dinero - retirar
            i--
        }

    }
    else if (operacion == 4) {
        console.log("adios")
    }
    else { 
        break
    }
}
*/
/*
let d1;
let d2;
let lanzamiento;
do {
    d1 = Math.floor(Math.random() * 6)+1;
    d2 = Math.floor(Math.random() * 6)+1;
    console.log("dado 1: "+ d1);
    console.log("dado 2: " + d2);
    lanzamiento ++
} while (d1 != d2)

console.log("dado 1 y dado 2 coincidieron en: " +d1+ " numero de lanzamienos: "+ lanzamiento )
*/

/*
const numero = Math.floor(Math.random() * 100) + 1;

for (let i = 1; i <= 7; i++) {
    let intento = parseInt(prompt("Intento " + i + " de 7. Ingresa un número: "));

    if (intento === numero) {
        console.log("¡Ganaste! Adivinaste en " + i + " intentos.");
        break;
    } else if (intento < numero) {
        console.log("Más grande");
    } else {
        console.log("Más pequeño");
    }

    if (i === 7) {
        console.log("Perdiste. El número era: " + numero);
    }
}
*/
const ventas = [];
let continuar = true;

function registrarVenta() {
    const vendedor = prompt("Nombre del vendedor:");
    const producto = prompt("Nombre del producto:");
    const cantidad = parseInt(prompt("Cantidad vendida:"));
    const precioUnitario = parseFloat(prompt("Precio unitario:"));

    const venta = {
        vendedor: vendedor,
        producto: producto,
        cantidad: cantidad,
        precioUnitario: precioUnitario
    };

    ventas.push(venta);
    console.log("Venta registrada correctamente");
}

while (continuar) {
    registrarVenta();
    const respuesta = prompt("¿Deseas registrar otra venta? (si/no):");
    if (respuesta.toLowerCase() !== "si") {
        continuar = false;
    }
}

console.log("\n REPORTE DE VENTAS");

console.log("Total de ventas realizadas: " + ventas.length);

let totalIngresos = 0;
ventas.forEach(venta => {
    totalIngresos += venta.cantidad * venta.precioUnitario;
});
console.log("Total de ingresos: $" + totalIngresos.toFixed(2));

const productos = {};
ventas.forEach(venta => {
    if (productos[venta.producto]) {
        productos[venta.producto] += venta.cantidad;
    } else {
        productos[venta.producto] = venta.cantidad;
    }
});

console.log("\nUnidades vendidas por producto:");
for (let producto in productos) {
    console.log("- " + producto + ": " + productos[producto] + " unidades");
}

const vendedores = {};
ventas.forEach(venta => {
    const monto = venta.cantidad * venta.precioUnitario;
    if (vendedores[venta.vendedor]) {
        vendedores[venta.vendedor] += monto;
    } else {
        vendedores[venta.vendedor] = monto;
    }
});

let mejorVendedor = "";
let mayorMonto = 0;
for (let vendedor in vendedores) {
    if (vendedores[vendedor] > mayorMonto) {
        mayorMonto = vendedores[vendedor];
        mejorVendedor = vendedor;
    }
}

console.log("\nVendedor con más ventas: " + mejorVendedor + " ($" + mayorMonto.toFixed(2) + ")");








