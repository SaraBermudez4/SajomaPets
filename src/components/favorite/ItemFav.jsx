import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

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

const ItemFav = (props) => {

    const { favorite } = useSelector(state => state.products)
    console.log(favorite);
    // const { id, image, nombre, precio } = props
    return (
        <>
            {
                favorite.map((item, index) =>
                    <FavItem>
                        <div></div>
                        <img src={item.img_url} alt={item.name} />
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <CenterDiv style={{ flexDirection: 'column', textAlign: 'center' }}>
                                <h3 style={{ width: 'inherit' }}>{item.name}</h3>
                                <span><h3>{item.price}</h3></span>
                            </CenterDiv>
                            <CenterDiv style={{ textAlign: 'center' }}>
                                <Button variant="contained" color="primary" style={{ textAlign: 'center' }}>
                                    Add cart
                                </Button>

                            </CenterDiv>

                        </div>

                        <hr />
                    </FavItem>
                )
            }
        </>
    );
}

export default ItemFav;