import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../../App.css'

const Layout = () => {
  return (
    <Fragment>
        <nav className='navegador'>
            <Link className='intem-navegador' to='/'>PokemonHome</Link>
        </nav>
        <Outlet/>
    </Fragment>
  )
}

export default Layout