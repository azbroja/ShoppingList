import React from "react";
import styles from "./List.css";

const List = ({ name, count }) => (
  <li className={styles.wrapper} id={name}>
    Produkt: {name} Ilość: {count}
  </li>
);

export default List;
