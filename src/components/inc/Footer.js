import React from "react";

function Footer(){
    return(
      <div className="top-bar">
      <div className="container">
        <div className="row" style={{padding:"10px"}}>
        <div className="col-md-6 col-sm-12">
            <h5>Address</h5>
            <p>No.51,2nd Floor, CMH Road(Above Bombay Dying)</p>
            <p>Indiranagar, Bangalore - 560 038</p>
        </div>
        <div className="col-md-6 col-sm-12">
        <h5>Contact Us</h5>
        <p>Email : <span className="d-none d-md-inline-block">itsdirections@gmail.com</span> <i className="mr-2 fa fa-envelope-o"> </i></p>
        <p>Phone : <span className="d-none d-md-inline-block">(91) 8095006850</span> <i className="mr-2 fa fa-phone"> </i></p>
      
      </div>
        </div>
        </div>
        <br/>
        <br/>
       
      <div className="footer-copyright text-center py-3">©2022 Copyright:directions.com</div>
    </div>
      
    );
}

export default Footer;