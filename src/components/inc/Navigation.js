import { useState } from "react";
import React from "react";
import {Link} from "react-router-dom";
import "../../styles/navbar.css";

const Navigation = () => {
  return(
    <nav className="site-navigation text-right ml-auto navbar-expand-lg navbar-light bg-light" 
    role="navigation">
    <button className="navbar-toggler" type="button" data-toggle="collapse" 
    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
    aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbarNavDropdown" className="collapse navbar-collapse" style={{float:"right"}}>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 site-menu main-menu d-none d-lg-block" >
     <li><Link to="/" className="nav-link active"  >Home</Link></li>
     <li><Link to="/about" className="nav-link">About Us</Link></li>
     <li><Link to="/contact" className="nav-link" >Contact Us</Link></li>
     <li><Link to="/product" className="nav-link" >Product</Link></li>
     <li><Link to="/testimonia" className="nav-link" >Testimonial</Link></li>
     <li><Link to="/gallery" className="nav-link" >Gallery</Link></li>
    </ul>
    </div>
    </nav>
  );
  }

export default Navigation;