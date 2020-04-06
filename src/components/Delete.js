import React from "react";
import styles from "./Delete.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: #ff0000;
  width: "150px";
  height: "30px";
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 300;
  font-size: "8px";
  text-transform: uppercase;
`;

const Delete = ({ onDelete }) => (
  <Button onClick={onDelete} className={styles.button}>
    Usuń
  </Button>
);

export default Delete;
