import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { addCrtProduct } from "../../actions/productAction";
import { BiDollar } from "react-icons/bi";

const DetailContainer = styled.div`
  width: 93vw;
  height: 100%;
  background-color: #eaecef;
  font-size: 24px;
  font-weight: 600;
  padding: 15px;
  margin-left: 75px;
  margin-top: 140px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 85%;
    margin-left: 60px;
  }
`;
const ItemContainer = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 0) and (max-width: 950px) {
    width: 100%;
    margin-left: 60px;
  }
`;

const TextDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 55%;
  @media (min-width: 0) and (max-width: 950px) {
    width: 100%;
    margin: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: "50px";
  margin: 10px;
`;

const DetailProductItem = () => {

  const dispatch = useDispatch()

  const { active } = useSelector((state) => state.products);

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
    <>
      <DetailContainer>
        <ItemContainer>
          <ImgDiv>
            <img src={active.img_url} alt="" style={{ height: "70vh" }} />
          </ImgDiv>
          <TextDetailsContainer>
            <span style={{ textAlign: "center", fontSize: "30px" }}>{active.name}</span>
            <span style={{ display: "flex", justifyContent: "center" }}>
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
                {active.price}
              </h3>
            </span>

            <div>
              <p style={{ fontSize: "20px", textAlign: "center" }}>
                {active.description}
              </p>
            </div>

            <ButtonContainer>
              <Button
                variant="contained"
                color="primary"
                style={{
                  textAlign: "center",
                  marginBottom: "5px",
                  width: "200px",
                }}
              >
                Comprar Ahora
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ textAlign: "center", width: "200px" }}
                onClick={() => {
                  handleAddCartP(active)
                }}
              >
                Agregar al carrito
              </Button>
            </ButtonContainer>
            {/* <span>{active.ingredients}</span> */}
          </TextDetailsContainer>
        </ItemContainer>
        {
          active.ingredients &&
          <>
            <h2>Ingredientes:</h2>
            <div style={{ fontSize: "15" }}>{active.ingredients}</div>
          </>
        }

      </DetailContainer>
    </>
  );
};

export default DetailProductItem;
