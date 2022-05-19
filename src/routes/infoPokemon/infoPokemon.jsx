import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
const InfoPokemon = () => {
    const {name} = useParams()
    const [dataPokemon,setDataPokemon] = useState([])
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(
            (response)=>response.json())
        .then(
            (pokemon)=>setDataPokemon(pokemon)
        )
    },[name])

    const img= dataPokemon.sprites && dataPokemon.sprites.other.home.front_default
    const habilidades= dataPokemon.abilities
    const tipos= dataPokemon.types

  return (
    <>
        <h1 style={{color:'crimson',fontSize:'3rem',margin:'4px'}}> {name.toUpperCase()}</h1>
        {dataPokemon && (
            <div className='poke-contenedor'>
                <div className='img-contenedor'>
                    <img className='img' alt={`pokemon ${name}`} src={img} />
                </div>
                <div className='poke-info'>
                    <h2>Experiencia base: {dataPokemon.base_experience}</h2>
                    <h2>Hablidades: </h2>
                    <ul>{habilidades && habilidades.map((hablidad,index)=>{
                        return (<li className='item-lista' key={index}>{hablidad.ability.name}</li>)
                    })}
                    </ul>
                    <h2>Tipos: </h2>
                    <ul>{tipos && tipos.map((tipo,index)=>{
                        return (<li className='item-lista' key={index}>{tipo.type.name}</li>)
                    })}
                    </ul>
                    <h2>Atura: {dataPokemon.height}</h2>
                    <h2>Peso: {dataPokemon.weight}</h2>
                </div>
            </div>
        )}
    </>
  )
}

export default InfoPokemon
