let valores = [5,3,5,6,2,8,9,10,11,44,4,41,6,7,81,4,5];

//ORDENA DE FORMA ASC
console.log("Orden ASC:", valores.sort((a, b) => a - b));

//ORDENA DE FORMA DESC
console.log("Orden DESC:", valores.sort((a, b) => b - a));


//DESC USANDO .reverse();
let ordenASC = valores.sort((a, b) => a - b);

console.log("Orden DESC:", ordenASC.reverse());