import React from "react";
import AppContext from "../context";

import Item from "../components/Item";

const Dashboard = () => (
  <ul>
    <AppContext.Consumer>
      {(context) => (
        <Item products={context.list} onDelete={context.deleteListItem} />
      )}
    </AppContext.Consumer>
  </ul>
);

export default Dashboard;

/* 
  Stan może mieć wartość numeryczną lub graficzną w postaci np. paska – użyj wyobraźni
  Każdy element można łatwo usunąć z listy (wymagane potwierdzenie przed usunięciem).
*/
