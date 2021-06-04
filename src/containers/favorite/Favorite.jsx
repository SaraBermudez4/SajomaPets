import React from 'react'
import { Link } from 'react-router-dom'

const Favorite = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Link to='/'>Volver </Link>
            <h1>Favorite</h1>
        </div>
    )
}

export default Favorite