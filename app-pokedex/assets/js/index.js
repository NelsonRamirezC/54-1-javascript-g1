import { getPokemonApi } from "./utils.js";
import Pokedex from "./clases/Pokedex.js";
import Pokemon from "./clases/Pokemon.js";

const formGetPokemon = document.getElementById("form-get-pokemon");
const btnAddPokemon = document.getElementById("btn-add-pokemon");

let currentPokemon;
const miPokedex = new Pokedex();


const previewPokemon = (pokemon) => {
    document.getElementById("pokemon-nombre").textContent = pokemon.nombre;
    document.getElementById("pokemon-peso").textContent = pokemon.peso;
    document.getElementById("pokemon-estatura").textContent = pokemon.estatura;
    document.getElementById("pokemon-tipo").textContent = pokemon.tipo;
    document.getElementById("pokemon-imagen").setAttribute("src", pokemon.imagen);

    document.getElementById("btn-add-pokemon").classList.remove("disabled");
};

const resetPreviewPokemon = (pokemon) => {
    currentPokemon = "";
    document.getElementById("pokemon-nombre").textContent = "...";
    document.getElementById("pokemon-peso").textContent = "";
    document.getElementById("pokemon-estatura").textContent = "";
    document.getElementById("pokemon-tipo").textContent = "";
    document.getElementById("pokemon-apodo").value = "";
    document.getElementById("pokemon-imagen").setAttribute("src", "./assets/img/base_imagen_pokemon.jpg");

    document.getElementById("btn-add-pokemon").classList.add("disabled");
};

formGetPokemon.addEventListener("submit", async (event) => {

    try {

        event.preventDefault();

        let idOrName = document.getElementById("id-or-name-pokemon").value;

        if (!isNaN(idOrName)) {
            if(idOrName < 1 || idOrName> 1025){
                resetPreviewPokemon();
                return alert("ID FUERA DE RANGO... [1-1025]");
            }
        }

        let data = await getPokemonApi(idOrName);

        if(!data){
            currentPokemon = "";
            
            return alert("Error al intentar buscar el pokémon, vuelva a intentar...");
        }

        let {id, name:nombre, weight:peso, height:estatura} = data;
        let imagen = data.sprites.other.dream_world.front_default;
        let tipo = data.types[0].type.name;

        currentPokemon = new Pokemon(id, nombre, peso, estatura, imagen, tipo);

        previewPokemon(currentPokemon);

        formGetPokemon.reset();
        
    } catch (error) {
        console.log(error);
        alert("Algo ha fallado, vuelva a intentar...");
    }
});


const mostrarPokemonesTabla = (pokemones = []) => {

    if(pokemones.length == 0){
        document.getElementById("cuerpo-tabla-pokemones").innerHTML = "";
    }

    let filaTablaPokemon = "";
    for (const pokemon of pokemones.reverse()) {

        let { uuid, pokedex, nombre, peso, estatura, tipo, imagen, apodo } = pokemon;
        filaTablaPokemon += 
        `
        <tr>
            <th scope="row">${pokedex}</th>
            <td>
                <img src="${imagen}" alt="${nombre}">
            </td>
            <td>${nombre}</td>
            <td>${apodo || "Sin apodo"}</td>
            <td>${peso} lbs.</td>
            <td>${estatura} pulgadas</td>
            <td>${tipo}</td>
            <td>
                <button class="btn btn-danger btn-eliminar" data-uuid="${uuid}">Eliminar</button>
                <a href="./pokemon-stats.html?id=${pokedex}" class="btn btn-info">Ver Stats</a>
                
            </td>
        </tr>
        `;
    }

    document.getElementById("cuerpo-tabla-pokemones").innerHTML = filaTablaPokemon;
}


//EVENTO REGISTRAR POKÉMON EN POKEDEX
btnAddPokemon.addEventListener("click", (event)=> {

    let pokemonApodo = document.getElementById("pokemon-apodo").value;
    currentPokemon.apodo = pokemonApodo;

    miPokedex.registrarPokemon(currentPokemon);

    mostrarPokemonesTabla(miPokedex.pokemones);
    resetPreviewPokemon();

    
    alert("Pokémon agregado correctamente...");

});



//EVENTO PARA ELIMINAR POKEMONES

document.getElementById("cuerpo-tabla-pokemones").addEventListener("click", (event)=> {

    const elemento = event.target;
    if(elemento.tagName == "BUTTON" && elemento.className.includes("btn-eliminar")){
        
        let uuid = elemento.dataset.uuid;

        miPokedex.eliminarPokemon(uuid);
        
        mostrarPokemonesTabla(miPokedex.pokemones);
    
    };

});


const main = () => {

    miPokedex.actualizar();

    mostrarPokemonesTabla(miPokedex.pokemones);
}
main();