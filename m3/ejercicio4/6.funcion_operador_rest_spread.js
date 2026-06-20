function sumar(...valores){ //operador rest
    return valores.reduce((acc, curr) => acc + curr, 0);
}

function numerosStr(valor = 0){
    return valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
};

let sueldos = [400_000, 500_000, 950_000, 670_000];


let totalSueldos = sumar(...sueldos); // operar spread

console.log("Total a pagar sueldos: ", numerosStr(totalSueldos));