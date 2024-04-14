import React from "react";
import products from "../product";

const Description = ({ index }) => {
  return <p>{products[index].description}</p>;
};

export default Description;
