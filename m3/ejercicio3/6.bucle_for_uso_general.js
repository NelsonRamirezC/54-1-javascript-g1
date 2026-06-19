let contador = 0;
let acumulador = 0;

//contar los valores del 1 al 100 y sumarlos
for(let iterador = 1; iterador <= 100; iterador++){
    //bloque de ejecución
    contador++;
    acumulador += iterador;
};

console.log("Contador:", contador);
console.log("Total acumulado suma números 1-100:", acumulador)

console.log("*".repeat(50));
console.log("*".repeat(50));
console.log("*".repeat(50));


let contadorPares = 0;
let acumuladorPares = 0;

//contar los valores del 0 al 100 y sumarlos
for(let iterador = 0; iterador <= 100; iterador++){
    //bloque de ejecución
    let resto = iterador % 2;
    if(resto == 0){
        contadorPares++;
        acumuladorPares += iterador;
    } 
};

console.log("Contador Pares:", contadorPares);
console.log("Total acumulado suma números 1-100:", acumuladorPares);
