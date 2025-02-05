// ANCHOR --> Tipos de datos en JavaScript

// let - const

// string
let nombreCompleto = "pepe perez";
console.log(nombreCompleto);
// number
let numero = 20.5;
// boolean
let esMayor = true;
let esMenor = false;

// null
let x = null;
// undefined
let y = undefined;

// NaN ---> Not a number
let sumaNaN = "pepe" * 15;
console.log(sumaNaN);

// object --->
// propiedades --> pares  clave : valor
let usuario = {
  nombre: "juan",
  edad: 22,
  direccion: { calle: "italia", numero: 227 },
};
let usuario2 = {
  nombre: "pepe",
  edad: 23,
  direccion: { calle: "españa", numero: 233 },
};

// array ---> elementos
let coleccionDeUsuarios = [usuario, usuario2];

console.log(coleccionDeUsuarios);
