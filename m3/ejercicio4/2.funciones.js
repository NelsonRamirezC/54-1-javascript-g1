function numerosStr(valor = 0){
    return valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
};

let monto = 500_000;

console.log(numerosStr(monto));

let valor1 = 3000;

console.log(numerosStr(valor1));
