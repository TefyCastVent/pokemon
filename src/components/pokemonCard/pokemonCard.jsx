import React from 'react'
import { useState,useEffect} from 'react'
import "../../App.css"
import {Link} from 'react-router-dom'

const pokemonCard = ({pokemon}) => {
  const {name, url} = pokemon
  const [poke,setPoke] = useState ([])

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((pokemon)=>setPoke(pokemon))
  },[url])

  const img= poke.sprites ? poke.sprites.other.home.front_default: name


  return (
    <Link className='pokemon-card' to={`/pokemon/${name}`}>
        <img alt={`imagen ${name}`} src={img} />
        <h3 className='nombre' >{name.toUpperCase()}</h3>
    </Link>
  )
}

export default pokemonCard