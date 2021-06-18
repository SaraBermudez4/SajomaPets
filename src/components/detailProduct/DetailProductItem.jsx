import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { addCrtProduct } from "../../actions/productAction";

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
            <img src={active.img_url} alt="" style={{ width: "40vw" }} />
          </ImgDiv>
          <TextDetailsContainer>
            <span style={{ textAlign: "center" }}>{active.name}</span>
            <span style={{ textAlign: "center" }}>{active.price}</span>

            <div>
              <p style={{ fontSize: "12px", textAlign: "center" }}>
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
        <div>Ingredientes:{active.ingredients}</div>
      </DetailContainer>
    </>
  );
};

export default DetailProductItem;
