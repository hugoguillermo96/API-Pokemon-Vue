import pokemonApi from "@/api/pokemonApi";

// Funcion crear el rreglo de 650 posisiones
const getPokemonts = () => {

    // Asi se forma un array de una loggitud en especifico
    const pokemontArr = Array.from( Array(650) );

    // console.log(pokemontArr)

    return pokemontArr.map((value, index) => index + 1)
}



// Funcion de mesclar el arreglo
const getPokemontOptions = async () => {

     const mixedPokemons = getPokemonts().sort(() => Math.random() -0.5 );

    // console.log(mixedPokemons);

  const pokemos = await getNamePokemon(mixedPokemons.splice(0,4));

  // console.table(pokemos);
  return pokemos;
}

// Funcion obtener el nombre de los pokemons que se encuentran en el arreglo
const getNamePokemon = async( [a,b,c,d] = []) => {


    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp)
    // console.log(a,b,c,d)
    // Disparando las cuatro peticiones de la funcion a,b,c,d
   const promiseArr = 
   [
    pokemonApi.get(`/${ a }`),
    pokemonApi.get(`/${ b }`),
    pokemonApi.get(`/${ c }`),
    pokemonApi.get(`/${ d }`),
   ]

  const [ p1,p2,p3,p4 ] = await Promise.all( promiseArr)

  return [
    { name: p1.data.name , id: p1.data.id },
    { name: p2.data.name , id: p2.data.id },
    { name: p3.data.name , id: p3.data.id },
    { name: p4.data.name , id: p4.data.id },
  ]


//   console.log(resps);


}



export default getPokemontOptions
