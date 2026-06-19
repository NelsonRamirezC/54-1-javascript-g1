// MÉTODO .splice()
// PERMITE agregar entre elementos / eliminar /reemplazar

const personas = ["Mario", "Miguel", "Josefa", "María"];

//ELIMINAR A Josefa -> ÍNDICE [2]
//SI SÓLO SE PONE UN VALOR, ELIMINA TODO A LA DERECHA DE LA POSICIÓN
//PRIMER ARGUMENTO -> Start -> índice de inicio
//SEGUNDO ARGUMENTO deleteCpunt -> Opcional -> cuántos elementos quiero eliminar
//TERCER ARGUMENTO (opcional)...items -> reemplazar por n cantidad de valores
personas.splice(2, 1, "Marta");

console.table(personas);

