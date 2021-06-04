import React from 'react'
import { Link } from 'react-router-dom'

const DatailProduct = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Link to='/'>Volver </Link>
            <h1>Detalles Productos</h1>
        </div>
    )
}

export default DatailProduct
