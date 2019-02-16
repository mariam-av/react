import React from "react";
import Product from "./Product";
import products from "./vschoolproducts";

function ProductApp() {
  var Prods = products.map(product => (
    <Product key={product.id} name={product.name} price={product.price} />
  ));
  console.log(Prods);
  return <div>{Prods}</div>;
}

export default ProductApp;
