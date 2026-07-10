class Pokemon {
    constructor(pokedex, nombre, peso, estatura, imagen) {
        this.pokedex = pokedex;
        this.nombre = nombre;
        this.peso = peso;
        this.estatura = estatura;
        this.imagen = imagen;
    }
}

const getPokemon = async (pokedex) => {
    try {
        let url = "https://pokeapi.co/api/v2/pokemon/" + pokedex;
        const response = await fetch(url);
        const data = await response.json();

        let { id, name: nombre, weight: peso, height: estatura } = data;
        let imagen = data.sprites.other.dream_world.front_default;

        const pokemon = new Pokemon(id, nombre, peso, estatura, imagen);

        return pokemon;

    } catch (error) {
        console.log(error);
    }
};


const mostrarPokemon = (pokemon) => {
    let { pokedex, nombre, peso, estatura, imagen } = pokemon;
    const pokemonImagenDom = document.getElementById("pokemon-imagen");
    const pokemonNombreDom = document.getElementById("pokemon-nombre");
    const pokemonPesoDom = document.getElementById("pokemon-peso");
    const pokemonEstaturaDom = document.getElementById("pokemon-estatura");

    pokemonImagenDom.setAttribute("src", imagen);
    pokemonImagenDom.setAttribute("alt", nombre);
    pokemonNombreDom.textContent = nombre;
    pokemonPesoDom.textContent = peso + " kgs."
    pokemonEstaturaDom.textContent = estatura + " Mts.";
};


let pokedex = 2;
const invertalPokemonID = setInterval(async ()=> {
    const pokemon = await getPokemon(pokedex++);

    mostrarPokemon(pokemon);
}, 5000);