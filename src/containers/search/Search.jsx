import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Link to='/'>Volver </Link>
            <h1>Search</h1>
        </div>
    )
}

export default Search