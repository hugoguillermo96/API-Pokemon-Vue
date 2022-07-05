<template>
  <div id="pokemon">
    <h1 v-if="!pokemon">Espere por favor ...</h1>

    <div v-else>
      <h1>¿Quien es este pokémon?</h1>
      <!-- TODO: img -->
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <!-- TODO: Opciones -->
      <PokemonOption :pokemons="pokemonArr" @selection="checkAnswer" />
    </div>

    <template v-if="showAnswer" class="fade-in">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOption from "@/components/PokemonOption";
import getPokemontOptions from "@/helper/getPokemonOption";

// console.log(getPokemontOptions());

export default {
  name: "pokemon",
  components: {
    PokemonPicture,
    PokemonOption,
  },
  data: function () {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemontOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(pokemonId) {
      // console.log("Pokemon llamado")
      this.showPokemon = true;
      this.showAnswer = true;

      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto ${this.pokemon.name}`;
      } else {
        this.message = `Ops el poken es ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    },
  },
  mounted: function () {
    this.mixPokemonArray();
    // console.log('mounted')
  },
};
</script>

<style>
</style>