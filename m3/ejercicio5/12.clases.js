class Empleado {
    constructor(nombre, apellido, sueldo, departamento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldo = sueldo;
        this.departamento = departamento;
    };

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    };
};

const p1 = new Empleado("Marta", "Soto", 850_000, "Gerencia");
const p2 = new Empleado("Miguel", "García", 750_000, "Ventas");
const p3 = new Empleado("Carla", "Osorio", 900_000, "Contabilidad");

const empleados = [p1, p2, p3];

console.log("Lista de empleados:");
for (const empleado of empleados) {
    console.log(empleado.nombreCompleto());
}