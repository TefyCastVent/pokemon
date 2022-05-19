import React from 'react'
import { useState, useEffect } from 'react'
import SearchBox from '../../components/search-box/search-box'
import PokemonContenedor from '../../components/pokemon-contenedor/pokemon-contenedor'
import '../../App.css'

const HomePokemons = () => {
    const [pokemons, setPokemons] = useState([])
    const [filterPokemons, setFilterPokemons] = useState(pokemons)
    const [searchField, setSearchField] = useState ("")
  
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        .then((response)=>response.json())
        .then((pokemones)=>setPokemons([...pokemones.results]))  
    },[])

    useEffect(()=>{
        const newPokemons=pokemons.filter((pokemon)=>pokemon.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
        setFilterPokemons(newPokemons)
    },[pokemons,searchField])

    const pokemonSearch = (event) => {
        setSearchField(event.target.value)
    }

    return (
        <>
            <h1 className='titulo-search'>Busca tu pokemon por su nombre</h1>
            <SearchBox onSearchChange={pokemonSearch} label={'Nombre de tu pokemon'}/>
            <PokemonContenedor pokemons={filterPokemons}/>
        </>
    )
}

export default HomePokemons