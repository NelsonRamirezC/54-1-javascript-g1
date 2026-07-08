import GestionTareas from "./clases/GestionTareas.js";

const gestorTareas = new GestionTareas();

const crearFilaTabla = (tarea) => {
    let { id, descripcion, estado, fechaCreacion } = tarea;
    return `
        <tr>
            <th scope="row">${id}</th>
            <td>${descripcion}</td>
            <td>${estado}</td>
            <td>${fechaCreacion}</td>
            <td>
                <button class="btn btn-warning" data-id="${id}">Finalizar</button>
                <button class="btn btn-danger" data-id="${id}">Eliminar</button>
            </td>
        </tr>
    `;
};

const cargarTareas = (tareas = []) => {
    if (tareas.length == 0) return;

    document.getElementById("texto-sin-tareas").classList.add("d-none");

    let acumuladorFilas = "";
    for (const tarea of tareas) {
        acumuladorFilas += crearFilaTabla(tarea);
    }

    document.getElementById("cuerpo-tabla-tareas").innerHTML = acumuladorFilas;

    document.getElementById("tabla-tareas").classList.remove("d-none");
};

const main = async () => {
    await gestorTareas.cargarDesdeLocalStorage();

    const tareas = gestorTareas.obtenerTareas();
    
    cargarTareas(tareas);
};

main();

//EVENTOS DEL DOM

const formAddTarea = document.getElementById("form-add-tarea");

formAddTarea.addEventListener("submit", (event) => {
    event.preventDefault();

    let descripcion = document.getElementById("descripcion").value;

    gestorTareas.crearTarea(descripcion);

    const tareas = gestorTareas.obtenerTareas();

    // BOTONES FORMULARIO
    const btnCrearTarea = document.getElementById("btn-crear-tarea");
    const btnSpinnerTarea = document.getElementById("btn-spinner-tarea");

    btnSpinnerTarea.classList.toggle("d-none");
    btnCrearTarea.classList.toggle("d-none");

    setTimeout(() => {
        cargarTareas(tareas);
        btnSpinnerTarea.classList.toggle("d-none");
        btnCrearTarea.classList.toggle("d-none");

        formAddTarea.reset();
    }, 2000);
});
