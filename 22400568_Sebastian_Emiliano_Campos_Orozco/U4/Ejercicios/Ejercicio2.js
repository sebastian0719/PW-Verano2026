/* 1. */
function random() {
  return Math.floor(Math.random() * 100) + 1;
}
let n1 = random();
let n2 = random();

console.log(n1);
console.log(n2);

if (n1 == n2) {
  console.log(" numeros iguales ");
} else if (n1 > n2) {
  console.log("el numero mayor es " + n1);
} else {console.log("el numero mayor es " + n2);
}
/* 2. */

let numero;
do {
  numero = Math.floor(Math.random() * 6);
  console.log(numero);
} while (numero !== 0);

/* 3. */

function gene(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let res = gene(2, 10);
let tabla = res;
for (let i = 1; i <= 10; i++) {
  console.log(`${tabla} x ${i} = ${tabla * i}`);
}

/* 4. */
let numeroPersona
for (let i = 0; i < 10; i++) {
  numeroPersona = parseInt(
    prompt("ingresa un numero entre el 1 al 100 " + "persona: " + (i + 1)),
  );
  if (numeroPersona < 1 || numeroPersona > 100) {
    console.log("no puedes ingresar numeros menores a 1 o mayores a 100");
    i--;
  }
  if (numeroPersona > 1 && numeroPersona < 100) {
    if (numeroPersona % 2 === 0) {
      console.log(numeroPersona + " es un número par");
    } else {
      console.log(numeroPersona + " es un número impar");
    }
  }
}

/* 5. */ 

let venta;
let empleados = prompt("ingresa un numero de empleados ");
for(let i = 0; i < empleados; i++){
    venta = prompt("Empleado: "+(i+1)+" Cuanto vendio: ");   
    if (venta < 5000 || venta > 30000) {
    console.log("no puedes ingresar numeros menores a 5000 ni mayores a 30000");
    i--;
  }
  if (venta >= 5000 && venta <= 30000) {
    if (venta < 10000) {
      console.log("Empleado: "+ (i+1)+ " comisión: "+(venta*.10));
    } else if (venta >= 10000) {
      console.log("Empleado: "+ (i+1)+ " comisión: "+(venta*.15));
    } 
  }
}
