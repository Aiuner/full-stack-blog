import React from "react";
import "./layout.css";
import Nav from "../nav/Nav.jsx";

const Layout = (props) => (
  <div className="layout">
    <Nav />
    <div className="layout-children">{props.children}</div>
  </div>
);

export default Layout;
