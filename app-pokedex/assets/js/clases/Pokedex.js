import Pokemon from "./Pokemon.js";

class Pokedex{
    constructor(){
        this.pokemones = [];
    }

    registrarPokemon(pokemon){
        this.pokemones.push(pokemon);
    }
}

export default Pokedex;

