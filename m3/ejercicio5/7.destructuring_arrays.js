const concursantes = ["Juan", "María", "Isabel", "Domingo", "Emiliano"];

let [primerLugar, segundoLugar, ...resto] = concursantes;

console.log("Primer lugar: ", primerLugar);
console.log("Segundo lugar: ", segundoLugar);

console.log("Resto de concursantes:", resto);