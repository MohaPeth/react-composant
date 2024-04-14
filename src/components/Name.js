import React from "react";
import products from "../product";

const Name = ({ index }) => {
  return <h3>{products[index].name}</h3>;
};

export default Name;
