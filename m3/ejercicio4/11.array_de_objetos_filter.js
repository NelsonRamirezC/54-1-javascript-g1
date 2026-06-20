const empleados = [
    {id: 1, nombre: "Pedro", sueldo: 850_000, depto: "finanzas"},
    {id: 2, nombre: "Marta", sueldo: 1_150_000, depto: "marketing"},
    {id: 3, nombre: "Marcelo", sueldo: 550_000, depto: "finanzas"},
];

let deptoBuscado = "finanzas";
let empleadosFiltrados= empleados.filter(empleado => empleado.depto == deptoBuscado);

if(empleadosFiltrados.length > 0){
    console.log("empleados encontrados del departamemto:", deptoBuscado);
    console.log("Cantidad:", empleadosFiltrados.length);
    console.table(empleadosFiltrados);
}else{
    console.log(`El Departamento de ${deptoBuscado} no tiene empleados.`);
}

