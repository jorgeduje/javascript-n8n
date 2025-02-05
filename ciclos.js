let persona = {
  name: "pepe",
  edad: 2,
  esMayor: true,
};

console.log(persona);
console.log(persona.edad);
console.log(persona["edad"]);

// ANCHOR --> Ciclos en JavaScript
const productos = [
  {
    id: 1,
    nombre: "laptop dell xps 15",
    categoria: "computacion",
    precio: 1500,
  },
  {
    id: 2,
    nombre: "teclado mecanico rgb",
    categoria: "computacion",
    precio: 120,
  },
  {
    id: 3,
    nombre: "mouse inalambrico logitech",
    categoria: "computacion",
    precio: 50,
  },
  { id: 4, nombre: "iphone 14 pro", categoria: "telefonia", precio: 1200 },
  { id: 5, nombre: "samsung galaxy s23", categoria: "telefonia", precio: 1100 },
  {
    id: 6,
    nombre: "cargador rapido usb-c",
    categoria: "telefonia",
    precio: 30,
  },
  {
    id: 7,
    nombre: "smart tv 55' 4k",
    categoria: "electrodomesticos",
    precio: 700,
  },
  {
    id: 8,
    nombre: "aspiradora robot xiaomi",
    categoria: "electrodomesticos",
    precio: 250,
  },
  {
    id: 9,
    nombre: "microondas samsung",
    categoria: "electrodomesticos",
    precio: 180,
  },
  {
    id: 10,
    nombre: "auriculares bluetooth sony",
    categoria: "accesorios",
    precio: 80,
  },
];

// console.log(productos);
// console.log(productos[0].precio);
// console.log(productos[1].precio);
// console.log(productos[2].precio);

// console.log( productos[0].precio );

// for (let i = 1; i < 6; i++) {
//   // bloque de codigo
//   console.log("hola");
// }

const recorrerArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].precio > 500) {
      console.log(array[i].precio);
      console.log("------------------");
    }
  }
};

recorrerArray(productos);
// recorrerArray(productos2)
