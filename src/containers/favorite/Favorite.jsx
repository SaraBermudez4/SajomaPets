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
        width: 90%;
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
let producto = [
    {
        "image": "https://mascotasbichos.vteximg.com.br/arquivos/ids/162310-292-292/hills-small--Bites--SB-adultos-comida-Perro-1.png?v=637279459871530000",
        "nombre": "Alimento para perro C ADULT SB HILL'S adultos raza pequeña Pollo",
        "precio": "$124.800"
    },
    {
        "image": "https://mascotasbichos.vteximg.com.br/arquivos/ids/162491-292-292/52742289601-1.jpg?v=637336617668070000",
        "nombre": "Alimento Perro C ADULT SMALL TOY & BREED L&R 15,5LB",
        "precio": "$162.400"
    },
    {
        "image": "https://mascotasbichos.vteximg.com.br/arquivos/ids/156215-292-292/7896588947324.jpg?v=636639775374000000",
        "nombre": "Alimento Perro C EQUILIBRIO ADULTO LIGHT 15KG",
        "precio": "$235.770"
    },
    {
        "image": "https://mascotasbichos.vteximg.com.br/arquivos/ids/156213-292-292/7896588928361.jpg?v=636639775335900000",
        "nombre": "Alimento Perro C EQUILIBRIO MATURE 15KG",
        "precio": "$258.390"
    },
    {
        "image": "https://mascotasbichos.vteximg.com.br/arquivos/ids/156210-292-292/7896588947164.jpg?v=636639775298600000",
        "nombre": "Alimento Perro C EQUILIBRIO ADULTO R. GRANDE 15KG",
        "precio": "$236.640"
    }
]

const Favorite = () => {
    return (

        <FavContainer>
            Favoritos
            <br />
            <br />

            {producto.map((item, index) =>

                <ItemFav key={index}{...item} id={index} />

            )}


        </FavContainer>


    )
}

export default Favorite