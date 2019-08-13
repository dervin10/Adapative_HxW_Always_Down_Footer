import React from "react";
import "./YesFlexbox.css";
import Main from "../Main/main";
import { Link } from "react-router-dom";

function YesFlexbox() {
  return (
    <div className="container">
      <nav className="flex-nav">
        <h1>Hello I'm a Navbar, and my parent it's call flexbox</h1>
        <Link to="/">No Flexbox</Link>
      </nav>
      <Main styles={`marginBottom: "0"`} />
      <footer className="flex-footer">
        <h1>Hello I'm a Footer, and my parent it's call flexbox</h1>
      </footer>
    </div>
  );
}

export default YesFlexbox;
