import React from "react";
import Settings from "../components/Settings";
import AppContext from "../context";

import Title from "../components/Title";

const SettingsView = () => (
  <div className="main">
    <AppContext.Consumer>
      {(context) => (
        <>
          <Title children={"Ustawienia"} />

          <Settings
            text={"Ustal minimalną ilość produktów w spizarni"}
            change={context.limitOnChange}
            number={context.limit}
          />
        </>
      )}
    </AppContext.Consumer>
  </div>
);

export default SettingsView;
