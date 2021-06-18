import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ItemFav from '../../components/favorite/ItemFav'
import NoHayProductos from '../../components/sinProductos/NoHayProductos';

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

const Favorite = () => {

    const { favorite } = useSelector((state) => state.products);

    return (

        <FavContainer>
            Favoritos
            <br />
            <br />
            {
                (favorite.length < 1)
                    ?
                    <NoHayProductos />
                    :
                    <ItemFav />
            }
        </FavContainer>


    )
}

export default Favorite