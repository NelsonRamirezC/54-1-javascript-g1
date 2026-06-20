function crearSaludo(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}!`;
};

let saludo = crearSaludo("Juan", "Carcamo");

mostrarEnConsola(saludo);
