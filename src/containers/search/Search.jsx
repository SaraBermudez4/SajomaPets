import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { Button, fade, InputBase } from '@material-ui/core';
import { GoSearch } from "react-icons/go";
import styled from 'styled-components'
import '../../styles/style.css'
import { addCrtProduct, starCleanSearch, startSearch } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { LoadApiProducts } from '../../api/LoadApiProducts';

const FavItem = styled.div`
display:flex;
justify-content:center;
background-color:white;
padding:20px;
border: 10px double #eaecef;
height: 300px;
@media screen and (max-width: 900px) {
    flex-wrap:wrap;}
`
const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:320px;
@media screen and (max-width: 900px) {
   width:auto;      
}
`
const StyledDivPrincipal = styled.div`
/* margin-left: 83px;
margin-top: 56px; */
    width: 93vw;
    background-color:#eaecef;
    font-size: 24px;
    font-weight: 600;
    position: relative;
    padding: 15px;
    margin-left: 75px;
    margin-top: 66px;
    @media(min-width: 320px) and(max-width: 480px){
        width: 85%;
        margin-left: 60px;
    }
`
const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        display: 'flex'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#49519A"
    },
    inputRoot: {
        color: 'inherit',
        width: "75vw !important",
        [theme.breakpoints.up('sm')]: {
            width: '215px',
        },

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: "75vw !important",
        height: "30px",
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
        color: "#49519A",
        borderRadius: "20px",
        background: "#49519a38"
    },
}));

const RealizarBusqueda = () => {

    const dispatch = useDispatch()

    const { search } = useSelector(state => state.products)

    const { cart } = useSelector(state => state.products)

    const handleAddCartP = (product) => {

        const found = cart.find(element => element.name === product.name);

        if (found !== undefined) {
            alert('ya esta en el carrito')
        } else {
            dispatch(addCrtProduct(product.img_url, product.name, product.price, product.description, product.brand))
        }
    }

    return (
        <div >

            {
                search.length < 1
                    ?
                    <div style={{ textAlign: "-webkit-center" }}>
                        <img src='https://i.ibb.co/JqVkkyN/perro-Confundido.png' alt="Icono de busqueda" width="480px" />
                        <h1>Realiza una búsqueda</h1>
                    </div>
                    :
                    <div>
                        <h1>Resultados de la busqueda</h1>
                        {search.map((m, index) => {
                            return (

                                <FavItem key={index}>
                                    <img src={m.img_url} alt={m.name} />
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                        <CenterDiv style={{ flexDirection: 'column', textAlign: 'center' }}>
                                            <h3 style={{ width: 'inherit' }}>{m.name}</h3>
                                            <span><h3>{m.price}</h3></span>
                                        </CenterDiv>
                                        <CenterDiv style={{ textAlign: 'center' }}>
                                            {
                                                m.categorie
                                                    ?
                                                    <a href={`https://${m.website}`} target="_blank">
                                                        <Button variant="contained" color="primary" style={{ textAlign: 'center', marginRight: '10px' }}>
                                                            Ver sitio web
                                                        </Button>
                                                    </a>
                                                    :
                                                    <Button variant="contained" color="primary" style={{ textAlign: 'center', marginRight: '10px' }} onClick={() => {
                                                        handleAddCartP(m)
                                                    }}>
                                                        Add cart
                                                    </Button>
                                            }


                                        </CenterDiv>
                                    </div>

                                    <hr />
                                </FavItem>
                            )
                        }
                        )
                        }
                    </div>
            }
        </div>
    )
}

const NoEncontrado = () => {
    return (
        <div style={{ textAlign: "-webkit-center" }}>
            <img src='https://i.ibb.co/JqVkkyN/perro-Confundido.png' alt="Icono de busqueda" width="480px" />
            <h1>Realiza una búsqueda</h1>
        </div>
    )
}


const Search = () => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('')

    const { search } = useSelector(state => state.products)
    const cats = LoadApiProducts('https://sajoma.herokuapp.com/cat')
    const dogs = LoadApiProducts('https://sajoma.herokuapp.com/dog')
    const tiendas = LoadApiProducts('https://sajoma.herokuapp.com/stores')


    const handleDataSearch = (e) => {
        e.preventDefault()

        const busquedaCatsAlimento = cats[0].food.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaDogsAlimento = dogs[0].food.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaCatsAccesories = cats[1].accessories.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaDogsAccesories = dogs[1].accessories.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaCatsToys = cats[2].toys.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaDogsAToys = dogs[2].toys.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaTiendas = tiendas.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))

        const encontrado = [];

        if (busquedaCatsAlimento !== []) {
            busquedaCatsAlimento.map(p => {
                encontrado.push(p)
            })
        }

        if (busquedaDogsAlimento !== []) {
            busquedaDogsAlimento.map(p => {
                encontrado.push(p)
            })
        }
        if (busquedaCatsAccesories !== []) {
            busquedaCatsAccesories.map(p => {
                encontrado.push(p)
            })
        }

        if (busquedaDogsAccesories !== []) {
            busquedaDogsAccesories.map(p => {
                encontrado.push(p)
            })
        }
        if (busquedaCatsToys !== []) {
            busquedaCatsToys.map(p => {
                encontrado.push(p)
            })
        }

        if (busquedaDogsAToys !== []) {
            busquedaDogsAToys.map(p => {
                encontrado.push(p)
            })
        }
        if (busquedaTiendas !== []) {
            busquedaTiendas.map(p => {
                encontrado.push(p)
            })
        }
        dispatch(startSearch(encontrado))
    }

    const handleLimpiar = () => {
        dispatch(starCleanSearch())
    }

    return (
        <StyledDivPrincipal style={{ height: "100vh" }}>
            <div >
                <h1 style={{ fontSize: "30px" }}>
                    ¡Busca tu producto favorito o encuentra nuevos!
                </h1>
            </div>
            <div className={classes.search} style={{ width: "75vw", margin: "3%" }}>
                <form onSubmit={handleDataSearch}>
                    <div className={classes.searchIcon}>
                        <GoSearch />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        // style={{ width: "75vw" }}
                        type='search'
                        onChange={(e) => {
                            setFilter(e.target.value)
                        }}
                    />
                </form>
            </div>
            < div>
                <div xs={12}>
                    {
                        search ? <RealizarBusqueda /> : <NoEncontrado />
                    }
                </div>
            </ div>
        </StyledDivPrincipal>
    )
}

export default Search