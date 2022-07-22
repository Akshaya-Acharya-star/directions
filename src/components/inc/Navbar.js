import React from "react";
import {Link} from "react-router-dom";
import Navigation from './Navigation';

function Navbar(){
    return(
      <div>
     <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>


      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-12">
            <div className="float-right">
              <i className="mr-2 fa fa-envelope-o"> </i>
              <span className="d-none d-md-inline-block">info@yourdomain.com</span>
              <span className="mx-md-2 d-inline-block"></span>
              <i className="mr-2 fa fa-phone"> </i>
              <span className="d-none d-md-inline-block">1+ (234) 5678 9101</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <Link to="/" className="text-black logo">Directions</Link>
            </div>
            <div className="col-12">
            <Navigation />
            
            </div>

          </div>
         
        
        </div>
      </header>
     
</div>
    );
}

export default Navbar;