const personas = ["Mario", "Miguel", "Josefa", "María"];

console.table(personas);

console.log("Primer elemento:", personas[0]);
//.length permite concocer el tamaño del array (los elementos que tiene)
let ultimoIndice = personas.length -1
console.log("Último elemento:", personas[ultimoIndice]);

//PODEMOS REEMPLAZAR / REASIGNAR UN VALOR A UNA POSICIÓN DENTRO DE UN ARRAY

personas[1] = "Miguelito";

console.table(personas);

// console.log(typeof(personas));