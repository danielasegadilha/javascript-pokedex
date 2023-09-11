const pokemonsClass = document.querySelector('.pokemons');

let offset = 0
let limit = 16
let isLoadingPokemons = false


const convertPokemonToTag = (pokemon) => {
    return ` <li class="pokemon bg-${pokemon.types[0]}" onclick="goToProfile('${pokemon.number}', '${pokemon.name}','${pokemon.photo}', '${pokemon.types}')">
                <section class="pokemon-info">
                    <div class="number small">
                        #00${pokemon.number}
                    </div>
                    <div class="detail">
                        <ol class="types">
                            <li class="name">${pokemon.name}</li>
                            ${pokemon.types.map((type) => `<li class="small type type-${pokemon.types[0]} border-radius">${type}</li>`).join('')}
                        </ol>
                        <img loading="lazy" src="${pokemon.photo}" alt="${pokemon.name}" class="img-pokemon">
                    </div>
                </section>
            </li>`;
}

let loadPokemons = (offset, limit) => {
    isLoadingPokemons = true
    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => {
            pokemonsClass.innerHTML += pokemons.map(convertPokemonToTag).join('')
            isLoadingPokemons = false
        })
}

loadPokemons()

window.addEventListener('wheel', () => {
    if(window.innerHeight + window.scrollY + 300 > document.body.scrollHeight && !isLoadingPokemons) {      
        offset += limit;
        loadPokemons(offset, limit)
    }
})