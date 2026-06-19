const ruts = ["1-1", "2-2", "3-3", "4-4"];

let rutBuscado = "5-5";

let foundRut = ruts.find((rut) => rut == rutBuscado);

if(foundRut){
    console.log("Se encontró a cliente... con rut:", foundRut);
}else{
    console.log("No existe ningún cliente con rut:", rutBuscado);
}