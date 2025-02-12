// ANCHOR --> Métodos de los string en JavaScript

let email = "JoRgem@gmail.com";

// saber si algo existe o no dentro de un string
let esValido = email.includes(".com");
console.log(esValido);

let palabras = ["pepe", "juan", "maria"];
let resultado = palabras.includes("pepe");

let posicion = email.indexOf("@"); // ---> -1 o la posicion
let nombreCortado = email.slice(0, posicion);

console.log(`hola ${nombreCortado} como estas ?`);

if (nombreCortado.toLowerCase() == "jorgem") {
  console.log("si");
} else {
  console.log("no");
}

// console.log(nombreCortado.toUpperCase());
// console.log(nombreCortado.toLowerCase());
