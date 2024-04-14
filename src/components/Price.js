import React from "react";
import products from "../product";

const Price = ({ index }) => {
  return <p>{products[index].price}</p>;
};

export default Price;
