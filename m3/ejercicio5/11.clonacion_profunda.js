const persona = {
    nombre: "nombre...",
    apellido: "apellido...",
    direccion: {
        calle: "calle...",
        numero: "123",
        comuna: "..."
    }
};

//const personaCopy = Object.assign({}, persona); // copia superficial

//const personaCopy = {...persona}; //copia superficial

const personaCopy = JSON.parse(JSON.stringify(persona));

console.log(personaCopy);


personaCopy.nombre = "Pedro";
personaCopy["apellido"] = "Soto";
personaCopy.direccion.calle = "Calle 1";
personaCopy.direccion.numero = "A-123";
personaCopy.direccion.comuna = "Recoleta";


console.log("Original:", persona);

console.log("Copia Profunda:", personaCopy);