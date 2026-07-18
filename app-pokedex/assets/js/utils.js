export const getPokemonApi = async (idOrName) => {

    let urlBase = "https://pokeapi.co/api/v2/pokemon/"+idOrName;

    const response = await fetch(urlBase);

    if(response.status != 200){
        return false;
    }

    const data = await response.json();

    return data;

}