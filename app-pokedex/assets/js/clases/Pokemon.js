const generarUUID = () => {
    return crypto.randomUUID();
}

class Pokemon {
    constructor(numeroPokedex, nombre, peso, estatura, imagen, tipo){
        this.uuid = generarUUID();
        this.pokedex = numeroPokedex;
        this.nombre = nombre;
        this.peso = peso;
        this.estatura = estatura;
        this.imagen =  imagen;
        this.tipo = tipo;
    }
}


export default Pokemon;