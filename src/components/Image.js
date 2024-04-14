import React from "react";
import products from "../product";

const Image = ({ index }) => {
  return <img src={products[index].image} alt={products[index].name} />;
};

export default Image;
