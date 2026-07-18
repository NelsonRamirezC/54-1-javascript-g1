import Pokemon from "./Pokemon.js";

class Pokedex{
    constructor(){
        this.pokemones = [];
    }

    actualizar(){
        this.#leerStorage();
    }

    registrarPokemon(pokemon){
        this.pokemones.push(pokemon);
        this.#persistirStorage();
    }

    eliminarPokemon(uuid){
        let indicePokemon = this.pokemones.findIndex(pokemon => pokemon.uuid == uuid);
        this.pokemones.splice(indicePokemon, 1);
        this.#persistirStorage();
        return true;
    }

    #persistirStorage(){
        localStorage.setItem("pokemones", JSON.stringify(this.pokemones));
    }

    #leerStorage(){
        let pokemonesStorage = localStorage.getItem("pokemones");

        if(pokemonesStorage){
            this.pokemones = JSON.parse(pokemonesStorage);
        }else {
            this.pokemones = [];
        }
    }
}

export default Pokedex;

