import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { startDeletingFav } from "../../actions/productAction";

const FavItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 20px;
  border: 10px double #eaecef;
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

const ItemFav = (props) => {
  const dispatch = useDispatch();
  
  const handleDeleteFav = (fav) => {
    dispatch(startDeletingFav(fav.id));
  };

  const { favorite } = useSelector((state) => state.products);

  return (
    <>
      {favorite.map((item, index) => (
        <FavItem key={index}>
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
                <h3>{item.price}</h3>
              </span>
            </CenterDiv>
            <CenterDiv style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ textAlign: "center", marginRight: "10px" }}
              >
                Add cart
              </Button>
              <Button
                variant="transparent"
                color="primary"
                style={{ textAlign: "center" }}
                onClick={() => handleDeleteFav(item)}
              >
                Delete
              </Button>
            </CenterDiv>
          </div>

          <hr />
        </FavItem>
      ))}
    </>
  );
};

export default ItemFav;
