import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ItemFav from '../../components/favorite/ItemFav'

const FavContainer = styled.div`
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
const FavResults = styled.div`
    background-color:white;
    margin-left:30px;
    font-size:24px;
    font-weight:600;
    padding:50px 70px;
`
const Favorite = () => {
    return (

        <FavContainer>
            Favoritos
            <br />
            <br />
            <ItemFav />
        </FavContainer>


    )
}

export default Favorite