import React from "react";
import AppContext from "../context";
import styles from "./Add.css";
import styled from "styled-components";

const Input = styled.input`
  background-color: #0ff000;
  width: "150px";
  height: "30px";
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 300;
  font-size: "8px";
  text-transform: uppercase;
  padding: 10px;
  margin: 2px;
`;
class Add extends React.Component {
  state = {
    name: "",
    count: "",
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <form
            className={styles.main}
            onSubmit={(e) => context.addHandler(e, this.state)}
          >
            <label>Produkt: </label>
            <input onChange={this.inputChange} name="name" type="text" />
            <br />
            <label>Ilość: </label>
            <input onChange={this.inputChange} name="count" type="number" />
            <br />
            <Input type="submit" value="Dodaj nowy produkt" />
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Add;
