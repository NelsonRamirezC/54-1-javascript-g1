const personas = ["Mario", "Miguel", "Josefa", "María"];

let continuar = true;
let indice = 0;

while(continuar){
    let persona = personas[indice]

    if(persona){
        console.log(persona);
    }else {
        continuar = false;
    }

    indice++;
};

console.log("Programa terminado...");