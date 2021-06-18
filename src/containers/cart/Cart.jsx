import React from 'react'
import ItemCart from '../../components/cart/ItemCart'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { BiDollar } from "react-icons/bi";

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

    let acum = 0
    let precio

    const { cart } = useSelector(state => state.products)

    cart.forEach(crt => {
        precio = crt.price
        acum += precio
    })

    return (
        <CartContainer>
            Cart
            <div
                style={{
                    display: "flex",
                    fontSize: "20px",
                    marginBottom: "5px",
                    color: "rgba(0, 0, 0, 0.54)",
                    justifyContent: 'center'
                }}
            >
                Total
                <BiDollar
                    style={{ marginLeft: "10px", marginRight: '5px', marginTop: "5px" }}
                />
                {acum}
            </div>
            <br />
            <ItemCart />
        </CartContainer>
    )
}

export default Cart
