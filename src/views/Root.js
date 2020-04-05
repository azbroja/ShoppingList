import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../context";
import "./Root.css";

import Sidebar from "../components/Sidebar";
import Add from "./Add";
import Edit from "./Edit";
import List from "./List";
import Settings from "./Settings";

class Root extends React.Component {
  state = {
    list: [],
    limit: 3,
  };

  componentDidMount() {
    localStorage.getItem("list") &&
      this.setState({
        list: JSON.parse(localStorage.getItem("list")),
      });
    localStorage.getItem("update") &&
      this.setState({
        update: localStorage.getItem("update"),
      });
    localStorage.getItem("limit") &&
      this.setState({
        limit: localStorage.getItem("limit"),
      });
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("list", JSON.stringify(nextState.list));
    localStorage.setItem("update", nextState.update);
    localStorage.setItem("limit", nextState.limit);
  }

  addHandler = (e, newProduct) => {
    e.preventDefault();
    const list = [...this.state.list];
    list.push(newProduct);
    this.setState((prevState) => ({
      list: list,
    }));
    localStorage.setItem("listState", JSON.stringify(newProduct));
    e.target.reset();
  };

  editHandler = (event) => {
    const id = this.state.list.findIndex(
      ({ name }) => name === event.target.parentNode.id
    );
    const list = [...this.state.list];
    console.log(list);

    list[id].name = event.target.value;
    this.setState({
      list: list,
    });
  };

  countHandler = (event) => {
    console.log({ event });

    const id = this.state.list.findIndex(
      ({ id }) => id === event.target.parentNode.id
    );
    const secondaryList = [...this.state.list];
    secondaryList[id].count = event.target.value;
    this.setState({
      list: secondaryList,
    });
  };

  deleteListItem = (event) => {
    if (window.confirm("Potwierdz usuniecie produktu")) {
      const list = [...this.state.list];
      const idToDelete = list.findIndex(
        ({ id }) => id === event.target.parentNode.id
      );
      const rm = [...list.splice(idToDelete, 1)];
      this.setState({ list: list });
    }
  };

  limitOnChange = (event) => {
    this.setState({
      limit: event.target.value,
    });
  };

  render() {
    const contextElements = {
      ...this.state,
      deleteListItem: this.deleteListItem,
      editHandler: this.editHandler,
      countHandler: this.countHandler,
      addHandler: this.addHandler,
      limitOnChange: this.limitOnChange,
    };

    return (
      <BrowserRouter>
        <Sidebar />
        <AppContext.Provider value={contextElements}>
          <Switch>
            <Route exact path="/" component={List}></Route>
            <Route path="/add" component={Add}></Route>
            <Route path="/edit" component={Edit}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/settings" component={Settings}></Route>
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
