const pokeApi = {}


function createPokemon(pokemonAPI) {
    const pokemon = new Pokemon(pokemonAPI.id, pokemonAPI.name, pokemonAPI.sprites.other['official-artwork'].front_default, pokemonAPI.types)
    pokemon.types = pokemon.convertTypesToList(pokemonAPI.types)
    return pokemon
}

goToProfile = (number, name, photo, notArrayTypes) => {
    const types = notArrayTypes.split(',');
    const pokemon = {number, name, photo, types}
    sessionStorage.setItem('pokemon', JSON.stringify(pokemon));
    window.location.href = "pokemon-profile.html"
}


pokeApi.getPokemonDetail = (pokemon) => 
    fetch(pokemon.url)
        .then((pokemonList) => pokemonList.json())
        .then(createPokemon)

        
pokeApi.getPokemons = (offset = 0, limit = 16) => {
    const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'`

    return fetch(url)
        // método que pede uma resposta da API
        .then((response) => response.json())
        // o then pode ser usado em cadeia, e seu parâmetro será agora a resposta final da cadeia de cima
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((pokemonsDetail) => Promise.all(pokemonsDetail))
            //método que verifica erro
        .catch((error) => {
            console.error('Erro:', error);
    });
}
