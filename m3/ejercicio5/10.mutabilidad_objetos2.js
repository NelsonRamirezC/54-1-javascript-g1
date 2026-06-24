const personas = [
    {id:1, nombre:"Pedro"},
    {id:2, nombre:"Juan"},
    {id:3, nombre:"Marta"},
];


const personasMayusculas = personas.map(persona => {
    persona = Object.assign({}, persona);
    persona.nombre = persona.nombre.toUpperCase();
    return persona;
});


personasMayusculas[0].nombre = "...";

console.log("Array original", personas);

console.log("Nuevo array:", personasMayusculas);