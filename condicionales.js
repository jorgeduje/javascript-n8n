// ANCHOR --> Condicionales en JavaScript

// Acceso a un recital
// si o si tiene que traer su dni o su carnet de conducir
// si tiene mas de 18 , pasa
// si tiene menos de 18 pero viene con un acompañante mayor, pasa pero acompañado
// si tiene menos de 18, y no tiene un acompañante mayor, no pasa

// if
const verificadorDeAcceso = (edad, vieneConUnAdulto, traeDni, traeCarnet) => {
  // siempre siempre siempre una comparacion devuelve un booleano

  if (edad >= 18 && (traeDni || traeCarnet)) {
    return "Si, podes pasar";
  } else if (vieneConUnAdulto && (traeDni || traeCarnet)) {
    // ---> true
    return "si, pero acompañado";
  } else {
    // otro camino mas
    return "no, no podes pasar";
  }
};

let p1 = verificadorDeAcceso(12, false, true);
let p2 = verificadorDeAcceso(18, false, true);
let p3 = verificadorDeAcceso(12, true, false, true);
console.log(p1); // no puede pasar
console.log(p2); // si podes pasar
console.log(p3); // si pero acompañado

// switch

// metodo para determinar el valor total a pagar de impuestos
// precio base = 500
// audi ---> 100
// vw ---> 50
// renault ---> 40
// ford ---> 45
// mercedes ---> 80

// switch / case
const determinarImpuesto = (marcaDelAuto) => {
  let base = 500;

  switch (marcaDelAuto) {
    case "vw":
      return base + 50;
    case "audi":
      return base + 100;
    case "ford":
      return base + 40;
    default:
      return "el auto no paga impuestos";
  }
};
console.log("");

let auto1 = determinarImpuesto("vw");
let auto2 = determinarImpuesto("audi");
let auto3 = determinarImpuesto("ford");

console.log(auto1);
console.log(auto2);
console.log(auto3);
