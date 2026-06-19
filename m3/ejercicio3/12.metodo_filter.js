let valores = [1,2,3,4,5,6,7,8,9];

//DESPUÉS DE LA FLECHA (=>) VIENE LA PRUEBA LÓGICA QUE SE APLICARÁ A CADA UNO DE LOS ELEMENTOS
let filtrados = valores.filter(valor => valor > 5);

//VALIDAMOS SI SE ENCONTRARON ELEMENTOS QUE CUMPLAN LA PRUEBA LÓGICA

if(filtrados.length > 0){
    console.log("filtrados:", filtrados);
}else {
    console.log("Ningún valor pasa la prueba.");
}