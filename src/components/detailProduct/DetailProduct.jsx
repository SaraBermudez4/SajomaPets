import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ItemFav from '../../components/favorite/ItemFav'

const DetailContainer = styled.div`
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
const ItemContainer = styled.div`
    background-color:white;
    display: flex;
    flex-wrap: wrap;
`
const textDetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
`
const DetailProduct = () => {
    return (

        <DetailContainer>
           <ItemContainer>
               <img src="" alt="" style={{'width:60vw'}} />
                <textDetailsContainer>
                    <span>Title</span>
                    <span>Price</span>
                    <div><span>Description</span></div>
                    <div>
                        <button>Comprar Ahora</button>
                        <button>Agregar a carrito</button>
                    </div>
                </textDetailsContainer>

           </ItemContainer>

        </DetailContainer>


    )
}

export default Favorite