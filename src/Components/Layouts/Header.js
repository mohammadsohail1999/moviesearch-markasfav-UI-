import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h2>Movie App</h2>
      </Link>
      <Link to="/fav">
        <h2>
          Favorites <i className="far fa-heart"></i>
        </h2>
      </Link>
    </nav>
  );
};

export default Header;
