import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>Digital Mantraaz</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
