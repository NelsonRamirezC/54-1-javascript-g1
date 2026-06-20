const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for (const vector of matriz) {
    console.log("Vector:",vector);
    for (const element of vector) {
        console.log(element)
    }
    console.log("*".repeat(25));
}