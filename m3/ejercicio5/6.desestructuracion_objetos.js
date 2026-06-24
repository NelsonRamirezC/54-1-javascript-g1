//DESTRUCTURING

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona = new Persona("Carlos", "Castillo", 40);

let { nombre, apellido: primerApellido } = persona;

console.log("Nombre:", nombre);
console.log("Apellido:", primerApellido);

