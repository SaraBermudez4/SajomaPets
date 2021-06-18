import React from 'react'
import img from '../../imagenes/perroConfundido.png'

const NoHayProductos = () => {
    return (
        <div style={{ textAlign: "-webkit-center" }}>
            <img src={img} alt="Icono de busqueda" width="480px" />
            <h1>No hay productos</h1>
        </div>
    )
}

export default NoHayProductos
