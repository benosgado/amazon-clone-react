import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* logo on the left - > img tag*/}
      <Link to="/">
        <img
          alt=""
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <searchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      {/* Basket with a number */}
    </nav>
  );
}

export default Header;
