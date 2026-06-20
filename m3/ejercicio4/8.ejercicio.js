let numeros = [4, 5, 1, 3, 8, 11, 26, 7, 3, 60, 24, 30];

const masBajo = (arr) => {
    let masBajo = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < masBajo) {
            masBajo = arr[i];
        }
    }
    console.log(`EL numero mas bajo es ${masBajo}`);
};
masBajo(numeros);

const masAlto = (arr) => {
    let masAlto = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > masAlto) {
            masAlto = arr[i];
        }
    }
    console.log(`EL numero mas alto es ${masAlto}`);
};
masAlto(numeros);
