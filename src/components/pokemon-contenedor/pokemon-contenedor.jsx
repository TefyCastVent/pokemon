import React from 'react'
import "../../App.css"
import PokemonCard from '../pokemonCard/pokemonCard'
const pokemonContenedor = ({pokemons}) => {
  return (
    <div className='pokemon-contenedor'>
        {pokemons.map((pokemon,index) =>
			{
				return (
                    <PokemonCard  key={index} pokemon={pokemon}/>
                )
			}
		)}
    </div>
  )
}

export default pokemonContenedor