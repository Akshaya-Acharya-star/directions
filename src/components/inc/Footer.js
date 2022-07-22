import React from "react";

function Footer(){
    return(
      <div className="top-bar">
      <div className="container">
        <div className="row" style={{padding:"10px"}}>
        <div class="col-md-6 col-sm-12">
            <h5>Address</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
        </div>
        <div class="col-md-6 col-sm-12">
        <h5>Contact Us</h5>
        <p>Email : <span className="d-none d-md-inline-block">info@yourdomain.com</span> <i className="mr-2 fa fa-envelope-o"> </i></p>
        <p>Phone : <span className="d-none d-md-inline-block">1+ (234) 5678 9101</span> <i className="mr-2 fa fa-phone"> </i></p>
      
      </div>
        </div>
        </div>
        <br/>
        <br/>
       
      <div class="footer-copyright text-center py-3">© 2021 Copyright:directions.com</div>
    </div>
      
    );
}

export default Footer;