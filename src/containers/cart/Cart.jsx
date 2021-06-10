import React from 'react'
import { Link } from 'react-router-dom'
import Prueba from '../../components/favorite/Prueba'

const Cart = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Link to='/'>Volver </Link>
            <h1>Cart</h1>
            <Prueba />
        </div>
    )
}

export default Cart
