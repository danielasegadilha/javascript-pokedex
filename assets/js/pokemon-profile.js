const pokemonBody = document.querySelector('body')
let pokemonContent = document.querySelector('.content')
let pokemonClick = document.querySelector('#click')
const pokemonHeader = document.querySelector('header')


let fillGeneral = () => {
    pokeApi.getPokemonGeneral()
    .then((pokemon) => {
        pokemonClick.innerHTML = `
        <ol>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Weight</span>
                <span class="txt-light-gray">${pokemon.weight}</span>
            </li>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Height</span>
                <span class="txt-light-gray">${pokemon.height}</span>
            </li>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Abilities</span>
                ${pokemon.abilities.map((ability) => `<span class="txt-light-gray">${ability}</span>`).join('')}
            </li>
        </ol>
        <h3 class="txt-dark-gray">Breeding</h3>
        <ol>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Gender</span>
                <span class="txt-dark-gray bold">Male: <span class="txt-light-gray">${pokemon.gender.male}</span></span>
                <span class="txt-dark-gray bold">Female:<span class="txt-light-gray"> ${pokemon.gender.female}</span></span>
            </li>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Egg Group</span>
                ${pokemon.eggGroups.map((eggGroup) => `<span class="txt-light-gray">${eggGroup}</span>`).join('')}
            </li>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Egg Cycle</span>
                <span class="txt-light-gray">${pokemon.eggCycle}</span>
            </li>
        </ol>`

    const buttonActived = document.querySelector(".active")
    buttonActived.classList.remove("active", "border-radius", "txt-dark-gray", `${pokemon.types[0]}`)
    buttonActived.classList.add(`txt-${pokemon.types[0]}`)

    const buttonSelected = document.querySelector("#general")
    buttonSelected.classList.add("active", "border-radius", "txt-dark-gray", `${pokemon.types[0]}`)
    buttonSelected.classList.remove(`txt-${pokemon.types[0]}`)})
}

let fillStats = () => {
    pokeApi.getPokemonStats()
    .then((pokemon) => {
        pokemonClick.innerHTML = `<ol>
            <li class="d-flex stat">
                <span class="stat-span txt-${pokemon.types[0]} bold">HP</span>
                <span class="txt-light-gray">${pokemon.stats[0]}</span>
                <div class="progress-bar-hp border-radius"></div>
            </li>
            <li class="d-flex stat"">
                <span class="stat-span txt-${pokemon.types[0]} bold">ATK</span>
                <span class="txt-light-gray">${pokemon.stats[1]}</span>
                <div class="progress-bar-atk border-radius"></div>
            </li>
            <li class="d-flex stat"">
                <span class="stat-span txt-${pokemon.types[0]} bold">DEF</span>
                <span class="txt-light-gray">${pokemon.stats[2]}</span>
                <div class="progress-bar-def border-radius"></div>
            </li>
            <li class="d-flex stat"">
                <span class="stat-span txt-${pokemon.types[0]} bold">SATK</span>
                <span class="txt-light-gray">${pokemon.stats[3]}</span>
                <div class="progress-bar-satk border-radius"></div>
            </li>
            <li class="d-flex stat"">
                <span class="stat-span txt-${pokemon.types[0]} bold">SDEF</span>
                <span class="txt-light-gray">${pokemon.stats[4]}</span>
                <div class="progress-bar-sdef border-radius"></div>
            </li>
            <li class="d-flex stat"">
                <span class="stat-span txt-${pokemon.types[0]} bold">SPD</span>
                <span class="txt-light-gray">${pokemon.stats[4]}</span>
                <div class="progress-bar-spd border-radius"></div>
            </li>
        </ol>`
    
    document.documentElement.style.setProperty('--progress-hp', `${pokemon.stats[0]}`);
    document.documentElement.style.setProperty('--progress-atk', `${pokemon.stats[1]}`);
    document.documentElement.style.setProperty('--progress-def', `${pokemon.stats[2]}`);
    document.documentElement.style.setProperty('--progress-satk', `${pokemon.stats[3]}`);
    document.documentElement.style.setProperty('--progress-sdef', `${pokemon.stats[4]}`);
    document.documentElement.style.setProperty('--progress-spd', `${pokemon.stats[5]}`);
    
    
    const buttonActived = document.querySelector(".active")
    buttonActived.classList.remove("active", "border-radius", "txt-dark-gray", `${pokemon.types[0]}`)
    buttonActived.classList.add(`txt-${pokemon.types[0]}`)

    const buttonSelected = document.querySelector("#stats")
    buttonSelected.classList.add("active", "border-radius", `${pokemon.types[0]}`)
    buttonSelected.classList.remove(`txt-${pokemon.types[0]}`)})
}

let fillEvolutions = () => {
    pokemonClick.innerHTML = `<div class="txt-dark-gray">Under construction</div>`
    
    const buttonActived = document.querySelector(".active")
    buttonActived.classList.remove("active", "border-radius", "txt-dark-gray", `${pokemonData.types[0]}`)
    buttonActived.classList.add(`txt-${pokemonData.types[0]}`)

    const buttonSelected = document.querySelector("#evolutions")
    buttonSelected.classList.add("active", "border-radius", "txt-dark-gray", `${pokemonData.types[0]}`)
    buttonSelected.classList.remove(`txt-${pokemonData.types[0]}`)}

let loadPokemonProfile = () => {
    pokeApi.getPokemonGeneral()
    .then((pokemon) => {
        pokemonBody.classList.add(`bg-${pokemon.types[0]}`)
        pokemonContent.innerHTML = `
            <img src="${pokemon.photo}" alt="" class="img-pokemon">
            <div class="pokemon-info txt-center">
                <ol class="types">
                    <li class="name txt-dark-gray"><h1>${pokemon.name}</h1></li>
                    <div class="d-flex-center">
                        ${pokemon.types.map((type) => `<li class="padding type name ${pokemon.types[0]} border-radius txt-white">${type}</li>`).join('')}
                    </div>
                </ol>
                <p class="txt-light-gray">Discover <span class="name">${pokemon.name}'s</span> ${pokemon.types[0]}-based powers and join its exciting journey in the world of Pokémon!</p>
            </div>
            <ol class="d-flex padding">
                <li>
                    <button id="general" class="active padding ${pokemon.types[0]} border-radius" onclick="fillGeneral()">General</button>
                </li>
                <li>
                    <button id="stats" class="padding txt-${pokemon.types[0]}" onclick="fillStats()">Stats</button>
                    </li>
                <li>
                    <button id="evolutions" class="padding txt-${pokemon.types[0]}" onclick="fillEvolutions()">Evolutions</button> 
                </li>  
            </ol>`
        pokemonClick.innerHTML = `
        <ol>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Weight</span>
                <span class="txt-light-gray">${pokemon.weight}</span>
            </li>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Height</span>
                <span class="txt-light-gray">${pokemon.height}</span>
            </li>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Abilities</span>
                ${pokemon.abilities.map((ability) => `<span class="txt-light-gray">${ability}</span>`).join('')}
            </li>
        </ol>
        <h3 class="txt-dark-gray">Breeding</h3>
        <ol>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Gender</span>
                <span class="txt-dark-gray bold">Male: <span class="txt-light-gray">${pokemon.gender.male}</span></span>
                <span class="txt-dark-gray bold">Female: <span class="txt-light-gray">${pokemon.gender.female}</span></span>
            </li>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Egg Group</span>
                ${pokemon.eggGroups.map((eggGroup) => `<span class="txt-light-gray">${eggGroup}</span>`).join('')}
            </li>
            <li class="list">
                <span class="txt-${pokemon.types[0]} bold">Egg Cycle</span>
                <span class="txt-light-gray">${pokemon.eggCycle}</span>
            </li>
        </ol>`
    })
}

loadPokemonProfile()