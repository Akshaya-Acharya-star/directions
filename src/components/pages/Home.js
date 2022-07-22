import React from "react";
import Slider from '../inc/Slider';
import SubSlider from '../inc/SubSlider';
import Navbar from '../inc/Navbar';
function Home(){
    return(
        <div>
          <Slider />
       
<div className="section">
    <div className="container">
        <div className="row">
        <div className="col-md-12 text-center">
            <h2 className="main-heading text-decoration-underline underline_text">Our Company</h2>
            <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
		  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
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
        <p className="text-justify">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
       </div>      
    </div>    
  </div>
</div>
</div>
<SubSlider />
</div>


</div>
    );
}

export default Home;