//.map() -> transforma / convierte / modifica todos los elementos de un array
//DEVUELVE UN NUEVO ARRAY, CONSERVANDO EL ORIGINAL
//NO AGREGA NI ELIMINA ELEMENTOS.
const personas = ["Mario ", "Miguel ", " Josefa", "María"];

// const personasMinusculas = personas.map(persona => persona.toLowerCase());

const personasMinusculas = personas.map(persona => {
    persona = persona.trim();
    return persona.toLowerCase();
});


console.log("Original:", personas);
console.log("Copia:", personasMinusculas);