import React from 'react'
import ItemCart from '../../components/cart/ItemCart'
import styled from 'styled-components'

const CartContainer = styled.div`
    width: 93vw;
    background-color:#eaecef;
    font-size:24px;
    font-weight:600;
    position:relative;
    padding:15px;
    margin-left: 75px;
    margin-top: 66px;
    @media (min-width: 320px) and (max-width: 480px){
        width: 85%;
        margin-left: 60px;
    }
`

const Cart = () => {
    return (
        <CartContainer>
            Cart
            <br />
            <br />
            <ItemCart />
        </CartContainer>
    )
}

export default Cart
