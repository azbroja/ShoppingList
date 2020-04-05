import React from "react";
import styles from "./Item.css";

import Title from "./Title";
import DelButton from "../components/Delete";

const Products = ({ products, onDelete }) => (
  <>
    <Title children={"List of products"} />
    <ul>
      {products.map((product) => (
        <li className={styles.wrapper} id={product.name}>
          <h3>Produkt: </h3>
          <h1>{product.name}</h1>
          <h3>Ilość: </h3>
          <h1>{product.count}</h1>
          <DelButton onDelete={onDelete} />
        </li>
      ))}
    </ul>
  </>
);

export default Products;
