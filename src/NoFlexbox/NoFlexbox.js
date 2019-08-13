import React, { Component } from "react";
import "./NoFlex.css";
import Main from "../Main/main";
import { Link } from "react-router-dom";

class NoFlexbox extends Component {
  render() {
    return (
      <>
        <nav className="nav">
          <h1>Hello I'm a Navbar</h1>
          <Link to="/flex">flexbox</Link>
        </nav>
        <Main />
        <footer className="footer">
          <h1>Hello I'm a Footer</h1>
        </footer>
      </>
    );
  }
}

export default NoFlexbox;
