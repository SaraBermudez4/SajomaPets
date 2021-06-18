import React from "react";
import { Link } from "react-router-dom";
import DetailProductItem from "../../components/detailProduct/DetailProductItem.jsx";

const DatailProduct = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <DetailProductItem />
    </div>
  );
};

export default DatailProduct;
