const pokemonData = JSON.parse(sessionStorage.getItem('pokemon'));
//Pokemon object
const pokemonProfile = new Pokemon(pokemonData.number, pokemonData.name, pokemonData.photo)
pokemonProfile.types = pokemonData.types

//API function
const pokeApi = {}

function getGenderPercentages(gender_rate) {
    switch (gender_rate) {
        case -1:
            return { male: 0, female: 0, genderless: 100 };
        case 0:
            return { male: 100, female: 0 };
        case 1:
            return { male: 87.5, female: 12.5 };
        case 2:
            return { male: 75, female: 25 };
        case 3:
            return { male: 62.5, female: 37.5 };
        case 4:
            return { male: 50, female: 50 };
        case 5:
            return { male: 37.5, female: 62.5 };
        case 6:
            return { male: 25, female: 75 };
        case 7:
            return { male: 12.5, female: 87.5 };
        case 8:
            return { male: 0, female: 100 };
        default:
            throw new Error("Invalid gender_rate value");
    }
}

function convertpokeApiGender(pokeSpecie, pokemonProfile){
    pokemonProfile.gender = getGenderPercentages(pokeSpecie.gender_rate)
    pokemonProfile.eggGroups = pokemonProfile.convertEggGroupsToList(pokeSpecie.egg_groups)
    pokemonProfile.eggCycle = pokeSpecie.hatch_counter * 255

    return pokemonProfile
}

pokeApi.getPokeGender = (pokemonProfile) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.number}/`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => convertpokeApiGender(jsonBody, pokemonProfile))
}

pokeApi.getPokemonGeneral = () => {
    const url =`https://pokeapi.co/api/v2/pokemon/${pokemonData.number}/`

    return fetch(url)
        .then((response) => response.json())
        .then((pokemonSelected) => {
            pokemonProfile.weight = pokemonSelected.weight
            pokemonProfile.height = pokemonSelected.height
            pokemonProfile.abilities = pokemonProfile.convertAbilitiesToList(pokemonSelected.abilities)
            return pokemonProfile})
        .then((pokemonProfile) => pokeApi.getPokeGender(pokemonProfile))
        .catch((error) => {
            console.error('Erro:', error)
    })
}

pokeApi.getPokemonStats = () => {
    const url =`https://pokeapi.co/api/v2/pokemon/${pokemonData.number}/`

    return fetch(url)
        .then((response) => response.json())
        .then((pokemonSelected) => {
            pokemonProfile.stats = pokemonProfile.convertStatsToList(pokemonSelected.stats)
            console.log(pokemonProfile)
            return pokemonProfile})
        .catch((error) => {
            console.error('Erro:', error)
    })
}