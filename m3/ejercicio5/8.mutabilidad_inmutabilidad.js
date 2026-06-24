//INMUTABILIDAD

let nombre1 = "Pedro";

let nombre2 = nombre1;

nombre2 = "Carlos";
console.log("Nombre 1:", nombre1);
console.log("Nombre 2:", nombre2);


let obj1 = {id:1, nombre: "Pedro", edad: 45};
let obj2 = obj1;

obj2.id = 2;
obj2.nombre = "Marta";
obj2.edad = 60;

console.log("Objeto 1 (original):", obj1);
console.log("Objeto 2:", obj2);