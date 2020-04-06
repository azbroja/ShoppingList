import React from "react";
import AppContext from "../context";

import Edit from "../components/Edit";
import Title from "../components/Title";

const EditItem = () => (
  <>
    <div className="main">
      <Title children={"Edytuj produkty"} />
      <ul>
        <AppContext.Consumer>
          {(context) => (
            <ul>
              {context.list.map((product) => (
                <Edit
                  key={product.name}
                  onDelete={context.deleteItem}
                  onEdit={context.editHandler}
                  onCount={context.countHandler}
                  {...product}
                />
              ))}
            </ul>
          )}
        </AppContext.Consumer>
      </ul>
    </div>
  </>
);

export default EditItem;
