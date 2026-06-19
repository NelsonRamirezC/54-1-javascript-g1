const personas = ["Mario", "Miguel", "Josefa", "María"];

//. push() -> permite agregar nuevos elementos al final del array

let nuevaCantidad = personas.push("Pedro", "Diego");

console.log("La nueva cantidad de elementos es:", nuevaCantidad);
console.log(personas);

//.unshift() -> permite agregar nuevos elementos al principio del array
personas.unshift("Carla");
console.log("Después del unshift");
console.log(personas);

//.pop() -> Elimina el último elemento de un array

//TAMBIÉN RETORNA EL ELEMENTO ELIMINADO
const frutas = ["Pera" , "Manzana", "Sandía"];
let elementoEliminadoPop = frutas.pop();
console.log("Se ha eliminado el siguiente elemento con pop():", elementoEliminadoPop);

//.shift() -> Elimina el primer elemento de un array

//TAMBIÉN RETORNA EL ELEMENTO ELIMINADO
let elementoEliminadoShift = frutas.shift();
console.log("Se ha eliminado el siguiente elemento shift():", elementoEliminadoShift);

console.log("Arrya de frutas:", frutas);