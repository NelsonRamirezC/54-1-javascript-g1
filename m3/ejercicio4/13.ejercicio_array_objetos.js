const empleados = [
    {id: 1, nombre: "Pedro", sueldo: 850_000, depto: "finanzas"},
    {id: 2, nombre: "Marta", sueldo: 1_150_000, depto: "marketing"},
    {id: 3, nombre: "Marcelo", sueldo: 550_000, depto: "finanzas"},
    {id: 4, nombre: "Miguel", sueldo: 550_000, depto: "ventas"},
];


function sueldoMasBajo(listaEmpleados){
    let sueldos = listaEmpleados.map(empleado => empleado.sueldo);
    
    return Math.min(...sueldos);
}

function sueldoMasAlto(listaEmpleados){
    let sueldos = listaEmpleados.map(empleado => empleado.sueldo);
    
    return Math.max(...sueldos);
}

let sueldoMin = sueldoMasBajo(empleados);
let sueldoMax = sueldoMasAlto(empleados);

console.log(`Empleados con el sueldo más bajo de la empresa: ${sueldoMin}`);

console.table(empleados.filter(empleado => empleado.sueldo == sueldoMin));

console.log(`Empleados con el sueldo más alto de la empresa: ${sueldoMax}`);
console.table(empleados.filter(empleado => empleado.sueldo == sueldoMax));