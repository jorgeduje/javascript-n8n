// ANCHOR --> Métodos de los Arrays en JavaScript
// [ "d", "dsa" , "dsa"] --> array de string
// [2 ,2, 2, 2, 2] ---> array de numeros
// [ {} {} {} { }] --> array de objetos

// productos[0] --> {}.nombre === "telefono" --> false
// productos[1] --> {}.nombre === "telefono" --> false
// productos[2] --> {}.nombre === "telefono" --> false
// productos[3] --> {}.nombre === "telefono" --> false
// productos[4] --> {}.nombre === "telefono" --> false
const productos = [
  {
    id: 1,
    nombre: "laptop dell xps 15",
    categoria: "computacion",
    precio: 1500,
    stock: 4,
  },
  {
    id: 2,
    nombre: "teclado mecanico rgb",
    categoria: "computacion",
    precio: 120,
    stock: 3,
  },
  {
    id: 3,
    nombre: "mouse inalambrico logitech",
    categoria: "computacion",
    precio: 50,
    stock: 2,
  },
  {
    id: 4,
    nombre: "iphone 14 pro",
    categoria: "telefonia",
    precio: 1200,
    stock: 14,
  },
  {
    id: 5,
    nombre: "samsung galaxy s23",
    categoria: "telefonia",
    precio: 1100,
    stock: 9,
  },
  {
    id: 6,
    nombre: "cargador rapido usb-c",
    categoria: "telefonia",
    precio: 30,
    stock: 12,
  },
  {
    id: 7,
    nombre: "smart tv 55' 4k",
    categoria: "electrodomesticos",
    precio: 700,
    stock: 11,
  },
  {
    id: 8,
    nombre: "aspiradora robot xiaomi",
    categoria: "electrodomesticos",
    precio: 250,
    stock: 7,
  },
  {
    id: 9,
    nombre: "microondas samsung",
    categoria: "electrodomesticos",
    precio: 180,
    stock: 12,
  },
  {
    id: 10,
    nombre: "auriculares bluetooth sony",
    categoria: "accesorios",
    precio: 80,
    stock: 16,
  },
];

// encontrar 1 producto en particular

// callback
// siempre el primer parametro va apuntar al elemento
// siempre devuelve el elemento encontrado o undefined
let productoEncontrado = productos.find((objeto) => {
  return objeto.nombre == "teclado mecanico rgb";
});

console.log(productoEncontrado);

// filtrar los de determinada categoria

let presupuestoDelUsuario = 300;

// siempre devuelve un array con los elementos que cumplan la condicion
let arrayFiltrado = productos.filter((objeto) => {
  return objeto.precio <= presupuestoDelUsuario;
});

console.log(arrayFiltrado);

// modificar los objetos
// siempre devuelve un nuevo array y de la misma longitud
// pero con lo que yo le diga que tenga cada elementoo
let arrayModificado = productos.map((objeto) => {
  return objeto.nombre;
});

console.log(arrayModificado);

// ordenar en base al precio

// saber si algo existe dentro de un array

// reducir un array a una minima expresion

// let array = [{ name: "pepe" }, { name: "juan" }, { name: "carmen" }];

// console.log(array[1].name == "juan");

let numeros = [1, 6, 2, 7];
let palabras = ["casa", "avion", "auto", "mariposa"];

// elementos
// let x = [ ]

let arrayOrdenado = numeros.sort((a, b) => b - a);
console.log(arrayOrdenado);

let palabrasOrdenadas = palabras.sort((a, b) => a.localeCompare(b));
console.log(palabrasOrdenadas);

let arrayOrdenado2 = productos.sort((a, b) => b.precio - a.precio);
console.log(arrayOrdenado2);

// siempre devuelven un booleano

// some ---> si por lo menos hay un elemento que cumpla la condicion
// productos.some(); // ---> true si por lo menos uno cumple si no false

let hayAlgunProductoConStockCero = productos.some((objeto) => {
  return objeto.stock == 0;
});

console.log(hayAlgunProductoConStockCero);

// productos.find( (objeto)=> {
//   return objeto.stock == 0
// })

// every --> si todos los elementos cumplen la condicion
// productos.every(); // ---> si todos cumplen si no false
