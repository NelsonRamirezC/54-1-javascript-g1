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

//1. OBTENER LAS LLAVES DE UN OBJETO
// const llaves = Object.keys(p1);

// for (const llave of llaves) {
//     console.log(llave, ":", p1[llave]);
// }

//2. OBTENER LOS VALORES DE UN OBJETO
// const valores = Object.values(p1);

// for (const valor of valores) {
//     console.log(valor);
// }

//3. OBTENER LLAVES Y VALORES USANDO ENTRIES
const entradas = Object.entries(p1);

for (const entrada of entradas) {
    let [llave, valor] = entrada;
    console.log(llave, ":", valor);
};