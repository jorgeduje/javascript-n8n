// ANCHOR --> Funciones en JavaScript

// console.log(x);
let nombre = "pepe";

// function saludar (){}
// const saludar = function(){}

//arrow function o funcion flecha
const saludar = () => {
  // cuerpo de la funcion
  console.log("hola " + nombre + " como estas?");
  console.log(`hola ${nombre} como estas?`);
  return 250;
};

let uno = saludar();
console.log(uno);
let dos = saludar();
let tres = saludar();

// parametros
const sumar = (a, b) => {
  return a + b;
};

let resultado = sumar(15);

let resultado2 = sumar(14, 12);

console.log(resultado);
console.log(resultado2);
