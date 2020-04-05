import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.css";

const Sidebar = () => (
  <nav>
    <div className="sidenav">
      <NavLink activeClassName={styles.active} to="/list">
        Lista zakupów
      </NavLink>

      <NavLink activeClassName={styles.active} to="/edit">
        Edytuj produkty
      </NavLink>

      <NavLink activeClassName={styles.active} to="/add">
        Dodaj produkt
      </NavLink>

      <NavLink activeClassName={styles.active} to="/settings">
        Ustawienia
      </NavLink>
    </div>
  </nav>
);

export default Sidebar;
