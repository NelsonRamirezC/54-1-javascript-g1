const empleados = [
    {id: 1, nombre: "Pedro", sueldo: 850_000, depto: "finanzas"},
    {id: 2, nombre: "Marta", sueldo: 1_150_000, depto: "marketing"},
    {id: 3, nombre: "Marcelo", sueldo: 550_000, depto: "finanzas"},
];

let idBuscado= 8;
let empleado =  empleados.find(empleado => empleado.id == idBuscado);

if(empleado){
    console.log("Empleado encontrado:");
    console.table(empleado);
}else{
    console.log("No existen empleados con el ID:", idBuscado);
}

