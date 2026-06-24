const personas = [
    {id:1, nombre:"Pedro"},
    {id:2, nombre:"Juan"},
    {id:3, nombre:"Marta"},
];

const personaBuscada = personas.find(persona => persona.id == 1);

personaBuscada.nombre = personaBuscada.nombre.toUpperCase();
console.log(personaBuscada);

console.log("Array:", personas);


