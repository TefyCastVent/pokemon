import { useState,useEffect} from 'react'
import './App.css'
import SearchBox from './components/search-box/search-box'
import PokemonContenedor from './components/pokemon-contenedor/pokemon-contenedor'

import {Routes, Route} from 'react-router-dom'
import Layout from './routes/layout/layout'
import HomePokemons from './routes/home-pokemons/home-pokemons'
import InfoPokemon from './routes/infoPokemon/infoPokemon'


function App() {
  return(
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePokemons/>}/>
        <Route path='pokemon/:name' element={<InfoPokemon/>}/>
      </Route>
    </Routes>
  )
}

export default App
