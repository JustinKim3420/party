import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="left">
        <FontAwesomeIcon icon={faGlassCheers} className="nav-component nav-icon"/>
        <span className="nav-component">Browse</span>
      </div>
      <div className="right">
        <span className="nav-component">Log in</span>
        <span className="nav-component">Sign up</span>
      </div>
    </nav>
  );
};

export default Navbar;
