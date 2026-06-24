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

//RECORRER LAS PROPIEDADES DE UN OBJETO
for (const key in p1 ) {
    console.log(key, ":", p1[key]);
}


