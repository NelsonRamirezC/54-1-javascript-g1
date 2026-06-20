function sumar(valor1 = 0, valor2 = 0){
    valor1 = Number(valor1);
    valor2 = Number(valor2);

    let resultado = valor1 + valor2;

    if(isNaN(resultado)){
        throw new Error("No se pueden sumar números!");
    }

    if(Number.isInteger(resultado)){
        return resultado; 
    }else{
        return resultado.toFixed(2);
    }
};


// console.log(sumar(2, 4));

try {
    console.log(sumar(5, "6"));
} catch (error) {
    console.log(error.message);
}
