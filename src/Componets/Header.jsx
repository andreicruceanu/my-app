import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">LogIn</Link>
        </li>
      </ul>
      <br></br>
      <br></br>
      <br></br>
    </nav>
  );
}

export default Header;
