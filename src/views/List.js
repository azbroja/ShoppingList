import React from "react";
import AppContext from "../context";

import List from "../components/List";
import Title from "../components/Title";

const ListView = () => (
  <>
    <div className="main">
      <AppContext.Consumer>
        {(context) => (
          <>
            <Title
              children={`Lita zakupów dla ilości mniejszej niż ${context.limit} szt..`}
            />

            {context.list.map((product) =>
              product.count <= context.limit ? (
                <List key={product.name} {...product} />
              ) : null
            )}
          </>
        )}
      </AppContext.Consumer>
    </div>
  </>
);
export default ListView;

/*
  -Lista zakupów generuje się automatycznie jeśli poziom jakiegoś produktu przekroczy określone minimum 
  –wtedy produkt sam wskakuje nam do listy, aby kupić go w sklepie
*/
