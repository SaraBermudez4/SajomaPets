import React from 'react'
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { startDeletingCrt } from "../../actions/productAction";
import { BiDollar } from "react-icons/bi";

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border: 10px double #eaecef;
  height: 300px;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  @media screen and (max-width: 900px) {
    width: auto;
  }
`;


const ItemCart = () => {

    const dispatch = useDispatch();

    const handleDeleteCrt = (crt) => {
        dispatch(startDeletingCrt(crt.id));
    };

    const { cart } = useSelector(state => state.products)

    return (
        <>
            {cart.map((item, index) => (
                <CartItem key={index}>
                    <img src={item.img_url} alt={item.name} />
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        <CenterDiv style={{ flexDirection: "column", textAlign: "center" }}>
                            <h3 style={{ width: "inherit" }}>{item.name}</h3>
                            <span>
                                <h3
                                    style={{
                                        display: "flex",
                                        fontSize: "20px",
                                        marginBottom: "5px",
                                        color: "rgba(0, 0, 0, 0.54)",
                                    }}
                                >
                                    <BiDollar
                                        style={{ marginRight: "10px", marginTop: "5px" }}
                                    />
                                    {item.price}
                                </h3>
                            </span>
                        </CenterDiv>
                        <CenterDiv style={{ textAlign: "center" }}>
                            <Button
                                variant="transparent"
                                color="primary"
                                style={{ textAlign: "center" }}
                                onClick={() => handleDeleteCrt(item)}
                            >
                                Delete
                            </Button>
                        </CenterDiv>
                    </div>

                    <hr />
                </CartItem>
            ))}
        </>
    )
}

export default ItemCart
