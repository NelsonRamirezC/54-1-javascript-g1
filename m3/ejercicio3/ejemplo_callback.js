
let valores = [1,2,3,4,5,6,7,8,9];

function pares(numero){

    let resto = numero % 2;
    if(resto == 0){
        return numero;
    }
};


function filtrar(lista, callback){

    const array = [];

    for (const elemento of lista ) {
        let retorno = callback(elemento);

        if(retorno){
            array.push(retorno);
        }
    };

    return array;
}


let numerosPares = filtrar(valores, pares);
console.log("Números pares:", numerosPares);


let mayoresDe5 = filtrar(valores, (valor) =>{
    if(valor > 5){
        return valor;
    }
});

console.log("Mayores de 5", mayoresDe5);