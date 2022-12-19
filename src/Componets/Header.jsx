import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ReactComponent as ShoppimgCart } from "../assets/icons/shopping-cart.svg";
import "./header.css";

function Header() {
  return (
    <nav className="container pt-4 pb-4 d-flex align-items-center justify-content-between">
      <Link to="/">
        <img src={logo} alt="logo-site" width={130} />
      </Link>
      <div className="nav-right">
        <Link className="login" to="/Login">
          Logare
        </Link>
        <ShoppimgCart />
        <span className="count-cart">0</span>
      </div>
    </nav>
  );
}

export default Header;
