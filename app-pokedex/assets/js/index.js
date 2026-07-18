import { getPokemonApi } from "./utils.js";
import Pokedex from "./clases/Pokedex.js";
import Pokemon from "./clases/Pokemon.js";

const formGetPokemon = document.getElementById("form-get-pokemon");

let currentPokemon;


const previewPokemon = (pokemon) => {
    document.getElementById("pokemon-nombre").textContent = pokemon.nombre;
    document.getElementById("pokemon-peso").textContent = pokemon.peso;
    document.getElementById("pokemon-estatura").textContent = pokemon.estatura;
    document.getElementById("pokemon-tipo").textContent = pokemon.tipo;
    document.getElementById("pokemon-imagen").setAttribute("src", pokemon.imagen);
};

formGetPokemon.addEventListener("submit", async (event) => {

    try {

        event.preventDefault();

        let idOrName = document.getElementById("id-or-name-pokemon").value;

        let data = await getPokemonApi(idOrName);

        if(!data){
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