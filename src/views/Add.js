import React from "react";
import Add from "../components/Add";
import Title from "../components/Title";

const AddItem = () => (
  <>
    <div className="main">
      <Title children={"Dodaj nową rzecz do spiżarni"} />
      <Add />
    </div>
  </>
);

export default AddItem;
