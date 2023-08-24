import React from 'react';
import './VertNav.css';

function VertNav() {
  return (
    <div>
      <nav className="vert-navbar">
        <a className="vert-nav-link" aria-current="page" href="#"> Home </a>
        <a className="vert-nav-link" href="#"> Products </a>
        <a className="vert-nav-link" href="#"> About </a>
      </nav>
    </div>
  );
}

export default VertNav;
