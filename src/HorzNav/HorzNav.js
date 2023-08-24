import React from "react";
import "./HorzNav.css";

function HorzNav() {
  return (
    <div>
      <nav className="horz-navbar">
        <a className="horz-nav-link" aria-current="page" href="#"> Home </a>
        <a className="horz-nav-link" href="#"> Products </a>
        <a className="horz-nav-link" href="#"> About </a>
      </nav>
    </div>
  );
}

export default HorzNav;
