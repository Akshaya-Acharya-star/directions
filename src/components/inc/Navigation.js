import { useState } from "react";
import React from "react";
import {  NavLink } from "react-router-dom";
import "../../styles/navbar.css";

const Navigation = () => {
  const [showLinks, toggleShowLinks] = useState(false);

  const onClick = () => {
    toggleShowLinks((state) => !state);
  };

  return (
    <nav
      className="site-navigation text-right ml-auto navbar-expand-lg navbar-light bg-light"
      role="navigation"
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={onClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarNavDropdown"
        className={`collapse navbar-collapse ${showLinks ? "show" : "hide"}`}
      >
        <ul
          className="navbar-nav me-auto mb-2 mb-lg-0 site-menu main-menu d-lg-block"
          onClick={onClick}
        >
          <li className="navbar-nav-li">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </li>
          <li>
          <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          
         </li>
          {/*<li><Link to="/testimonia" className="nav-link">Testimonial</Link></li> 
          <li>
            <NavLink to="/gallery" className="nav-link">
              Gallery
            </NavLink>
          </li>
          */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
