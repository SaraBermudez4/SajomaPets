import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import { Button, Card, CardActionArea, CardContent, CardMedia, fade, InputBase } from '@material-ui/core';
import { GoSearch } from "react-icons/go";
import styled from 'styled-components'
import '../../styles/style.css'
import img from '../../imagenes/perroConfundido.png'
import { starCleanSearch, startSearch } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { activeProduct } from '../../actions/productAction'
import { BiDollar } from 'react-icons/bi'
import { AiTwotoneShop } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'
import { GrShareOption } from 'react-icons/gr'
import { Fab } from '@material-ui/core'
import { LoadApiProducts } from '../../api/LoadApiProducts';
import ItemFav from '../../components/favorite/ItemFav';

const FavItem = styled.div`
display:flex;
justify-content:center;
background-color:white;
padding:20px;
border: 10px double #eaecef;
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
    const classes = useStyles();

    const { search } = useSelector(state => state.products)

    const dispatch = useDispatch()
    const handleClickProduct = (product, index) => {
        dispatch(
            activeProduct(index, {
                ...product
            })
        );
    }

    return (
        <div >

            {
                search.length < 1
                    ?
                    <div style={{ textAlign: "-webkit-center" }}>
                        <img src={img} alt="Icono de busqueda" width="480px" />
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
                                            <Button variant="contained" color="primary" style={{ textAlign: 'center', marginRight: '10px' }}>
                                                Add cart
                                            </Button>
                                        </CenterDiv>
                                    </div>

                                    <hr />
                                </FavItem>
                            )
                        }

                            // <Card className={classes.root} key={index} onClick={() => {
                            //     handleClickProduct(m)
                            // }}>
                            //     <CardActionArea>
                            //         <Link to={`/ detail / ${ m.id } `} >
                            //             <CardMedia
                            //                 className={classes.media}
                            //                 image={m.img_url}
                            //                 title={m.name}
                            //             />
                            //             <CardContent>
                            //                 <h3 style={{ fontSize: "23px" }}>
                            //                     {m.name}
                            //                 </h3>
                            //                 <div style={{ display: "flex", fontSize: "20px", marginBottom: "5px", color: "rgba(0, 0, 0, 0.54)" }}>
                            //                     <BiDollar style={{ marginRight: "10px", marginTop: "5px" }} />{m.price}
                            //                 </div>
                            //                 <div style={{ display: "flex", fontSize: "15px", marginBottom: "5px", color: "rgba(0, 0, 0, 0.54)" }}>
                            //                     <AiTwotoneShop style={{ marginRight: "10px", marginTop: "5px" }} />{m.brand}
                            //                 </div>
                            //                 <h3 style={{ color: "#00a650" }}>Envio gratis</h3>
                            //             </CardContent>
                            //         </Link>
                            //         <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "15px", paddingRight: "20px", position: "absolute", top: "0px", right: "0px", paddingTop: "5px" }}>
                            //             <Fab color="secondary" aria-label="favorite" style={{ width: "40px", height: "40px" }} onClick={() => {
                            //                 console.log(m.name, " añadido a favoritos");
                            //             }}>
                            //                 <FaHeart style={{ fontSize: "20px" }} />
                            //             </Fab>
                            //         </div>
                            //         <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "15px", paddingRight: "20px", position: "absolute", top: "120px", left: "0px" }}>
                            //             <Fab aria-label="share" style={{ width: "40px", height: "40px" }} onClick={() => {
                            //                 console.log(m.name, " compartido");
                            //             }}>
                            //                 <GrShareOption style={{ fontSize: "20px" }} />
                            //             </Fab>
                            //         </div>
                            //     </CardActionArea>
                            // </Card>
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
            <img src={img} alt="Icono de busqueda" width="480px" />
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


    const handleDataSearch = (e) => {
        e.preventDefault()
        // console.log(filter);
        // dispatch(startSearch(filter.toLowerCase()))
        // console.log(cats);
        // console.log(dogs);
        const busquedaCatsAlimento = cats[0].food.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaDogsAlimento = dogs[0].food.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaCatsAccesories = cats[1].accessories.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaDogsAccesories = dogs[1].accessories.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaCatsToys = cats[2].toys.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))
        const busquedaDogsAToys = dogs[2].toys.filter(productos => productos.name.toLowerCase().includes(filter.toLowerCase()))

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
        dispatch(startSearch(encontrado))
    }

    const handleLimpiar = () => {
        dispatch(starCleanSearch())
    }

    return (
        <StyledDivPrincipal >
            <div>
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