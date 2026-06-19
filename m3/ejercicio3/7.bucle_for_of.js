const personas = ["Mario", "Miguel", "Josefa", "María"];

for (const persona of personas) {
    console.log(persona);
};


const sueldos= [50_000, 100_000, 150_000, 80_000];

let total = 0;

for (const sueldo of sueldos) {
    total+= sueldo;
}

console.log("Total:", total);
console.log("Sueldo promedio:", total / sueldos.length);
console.log("Suedo más bajo:", Math.min(...sueldos));
console.log("Suedo más bajo:", Math.max(...sueldos));