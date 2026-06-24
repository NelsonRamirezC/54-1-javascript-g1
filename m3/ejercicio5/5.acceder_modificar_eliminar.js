function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona = new Persona("Carlos", "Castillo", 40);

console.log("Objeto original:", persona);

//ASIGNACIÓN / MODIFICACIÓN
persona.nombre = "Pedro";
persona["edad"] = 41;

console.log("Objeto después de modificación:", persona);

//ELIMNACIÓN DE PROPIEDAD

delete  persona.edad;

console.log("Persona después de eliminación: ", persona);
