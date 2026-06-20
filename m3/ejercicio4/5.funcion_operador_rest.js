function sumar(...valores){ //operador rest
    return valores.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumar(4,5,6,7));