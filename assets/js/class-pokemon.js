class Pokemon {
    constructor(number, name, photo) {
      this.number = number
      this.name = name
      this.types = []
      this.photo = photo
    }
    
    static weight = null
    static height = null
    static abilities = []
    static stats = []
    static evolutions = [{}]
    static eggGroups = []
    static eggCycle = null
    static gender = null

    convertTypesToList = (pokemonTypes) =>
      pokemonTypes.map((type) => type.type.name)

    convertAbilitiesToList = (pokemonAbilities) =>
      pokemonAbilities.map((ability) => ability.ability.name)

    convertStatsToList = (pokemonStats) =>
      pokemonStats.map((stat) => stat.base_stat)

    convertEggGroupsToList = (pokemonEggGroups) =>
      pokemonEggGroups.map((eggroup) => eggroup.name)
  }



  