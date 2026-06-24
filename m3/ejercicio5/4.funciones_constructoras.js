function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido
    this.edad = edad;
};


const persona1 = new Persona("Carlos", "Castillo", 40);

console.log(persona1);

console.log(persona1.nombre);


let persona2 = new Persona("Marta", "Godoy", 60);

console.log(persona2.nombre);
