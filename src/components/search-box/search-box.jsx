import React from 'react'
import "../../App.css"
const SearchBox = ({onSearchChange,label}) => {
  return (
        <input 
          className='search'
          type='search' 
          placeholder={label} 
          onChange={onSearchChange}
        />
  )
}

export default SearchBox