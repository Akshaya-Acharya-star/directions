import React from "react";
import Slider from '../inc/Slider';
import SubSlider from '../inc/SubSlider';
function Home(){
    return(
        <div>
          <Slider />
       
<div className="section">
    <div className="container">
        <div className="row">
        <div className="col-md-12 text-center">
            <h2 className="main-heading text-decoration-underline underline_text">Directions Overview</h2>
            <p className="text-justify">
            Direction is one of the most leading insect screen and blends manufacturer and 
            supplier companies. It decorates and gives more attention to doors and windows. 
            The Insect screens prevent most of the disease which originates from insect bites.<br/>
            Because of the modern look and trendy design with high quality guards which gives a graceful look to the house.<br/>
            Why we want “directions”<br/>
            <ul>
              <li>Awesome customer service.</li>
              <li>Quality products.</li>
              <li>Graceful look.</li>
              <li>Long life</li>
            </ul>
            </p>
        </div>
        </div>
    </div>
</div>
<div id="our-values" className="container">
    <div className="container-fluid">
 <div className="row text-center">
 <h2 className="main-heading text-decoration-underline underline_text">Our Values</h2>
   <div className="row slideanim container">
    <div className="col-sm-12 col-xs-12 col-lg-6">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h4>Vision</h4>
        </div>
        <div className="panel-body">
          <p className="text-justify">
          Deliver the trendy, modern product with high quality attractive offerings for doors and windows.
      </p>
        </div>
     </div>      
    </div>     
    
    <div className="col-sm-12 col-xs-12 col-lg-6">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h4>Mission</h4>
        </div>
        <div className="panel-body">
        <p className="text-justify">
        Provide a wide variety of designs for interior products which increases the selection process more attractively.
Build product market with efficiency, durability and low cost, offer excellent service to enhance the quality for customers.
 </p>
        </div>
       </div>      
    </div>    
  </div>
</div>
</div>
<hr />
<SubSlider />
</div>


</div>
    );
}

export default Home;