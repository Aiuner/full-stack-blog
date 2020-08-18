import React from "react";
import { Link } from "react-router-dom";

import './nav.css'

const Nav = () => {
  return (
    <nav>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-new-post">New Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
