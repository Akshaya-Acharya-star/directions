import React from "react";
import magneticinsectscreens from "../images/magnetic-insect-screens.png"
import hingedscreen from "../images/hinged-screen.jpg"
import retractabledoorinsectscreen from "../images/retractable-door-insect-screen.png"
import rollerfabricblinds from "../images/roller-fabric-blinds.jpg"
import verticalblinds from "../images/vertical-blinds.jpg"
import woodenvenetianblinds from "../images/wooden-venetian-blinds.jpg"
import zebrablinds from "../images/zebra-blinds.jpg"
import tripleshadeblinds from "../images/triple-shade-blinds.jpg"
import balconyPVCblinds from "../images/balcony-PVC-blinds.jpg"
import bamboochickblinds from "../images/bamboo-chick-blinds.jpg"
import insulatedglassblinds from "../images/insulated-glass-blinds.jpg"
import honeycombblinds from "../images/honeycomb-blinds.jpg"
import pleatedblinds from "../images/pleated-blinds.jpg"
import romanblinds from "../images/roman-blinds.jpg"
import {  NavLink } from "react-router-dom";

function SubSlider(){
    return(
      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-bs-ride="carousel">
  <button className="carousel-control-prev" style={{width:"5%"}} type="button" data-bs-target="#multi-item-example" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" style={{width:"5%"}} type="button" data-bs-target="#multi-item-example" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    
    <div className="carousel-indicators">
    
    <button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="0" className="active" aria-current="true" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="1" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="2" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="3" className="active" aria-current="true" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="4" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="5" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="6" className="active" aria-current="true" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="7" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="8" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="9" className="active" aria-current="true" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="10" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="11" ></button>
<button type="button" data-bs-target="#multi-item-example" data-bs-slide-to="12" ></button>

    </div>
    <div className="carousel-inner" role="listbox">

     
      <div className="carousel-item active">

        <div className="row">
           <div className="col-md-4">
            <div className="card mb-2">
              <img className="card-img-top" src={magneticinsectscreens}
                   alt="A"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Magnetic</NavLink></h4>
                <p className="card-text">Traditional insect screens are translated to magnetic insect screens, which is an excellent solution for windows..</p>
                
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
             <div className="card mb-2">
              <img className="card-img-top" src={hingedscreen}
                   alt="B"/>
              <div className="card-body">
              <h4 className="card-title"><NavLink to="/Products" className="nav-link">Hinged</NavLink></h4>
                <p className="card-text">This has a framed screen which fits the door and window frame with hinges on the opening side and magnetic catch..</p>
               </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img className="card-img-top" src={retractabledoorinsectscreen}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Retractable</NavLink></h4>
                <p className="card-text">The insect mesh is fitted on the side of the door or window frame and the fly screen is pulled across the door..</p>
                 
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="carousel-item">

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2">
              <img className="card-img-top" src={rollerfabricblinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Roller Fabric Blinds</NavLink></h4>
                <p className="card-text">These come with a glossy design with a variety of durable fabrics for either room darkening or light filtering..</p>
                 
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img className="card-img-top" src={verticalblinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Vertical Blinds</NavLink></h4>
                <p className="card-text">It controls the heat and light which comes in glossy modern design, which incorporates the Ultimate Track System..</p>
                 
              </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
           <div className="card mb-2">
              <img className="card-img-top" src={woodenvenetianblinds}
                   alt="C"/>
              <div className="card-body">
              <h4 className="card-title"><NavLink to="/Products" className="nav-link">Wooden Venetian Blinds</NavLink></h4>
                <p className="card-text">For the classy look and stimber style of a venetian blind in a room, Wooden Blinds are the perfect solution..</p>
             </div>
            </div>
          </div>
        </div>

      </div>

      <div className="carousel-item">

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2">
              <img className="card-img-top" src={zebrablinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Zebra Blinds</NavLink></h4>
                <p className="card-text">Most customers demand day and night blinds which is a very interesting and innovative arrangement for windows..</p>
             </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img className="card-img-top" src={tripleshadeblinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Triple Shade Blinds</NavLink></h4>
                <p className="card-text">It combines drape, window screening and curtain blinds. It is made up of triple cell fabric which is resilient..</p>
             </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
           <div className="card mb-2">
              <img className="card-img-top" src={balconyPVCblinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Balcony PVC Blinds</NavLink></h4>
                <p className="card-text">It is fixed outside of your window or patio to block the sunlight partially to control the view and also gives..</p>
             </div>
            </div>
          </div>
        </div>

      </div>
	  
	  
	<div className="carousel-item">

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2">
              <img className="card-img-top" src={bamboochickblinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Bamboo Chick Blinds</NavLink></h4>
                <p className="card-text">The bamboo blinds create a casual but classy look. Advantage of this is, it has excellent insulating properties..</p>
             </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
            <div className="card mb-2">
              <img className="card-img-top" src={insulatedglassblinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Insulated Glass Blinds</NavLink></h4>
                <p className="card-text">Here the curtain is placed between two sheets of glass, in a sealed glass chamber. It takes place in a fully..</p>
             </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
              <img className="card-img-top" src={honeycombblinds}
                   alt="C"/>
              <div className="card-body">
              <h4 className="card-title"><NavLink to="/Products" className="nav-link">Honeycomb Blinds</NavLink></h4>
                <p className="card-text">Due to versatile light control, privacy gives ultimate shades with innovative design to any kind of room..</p>
             </div>
            </div>
          </div>
        </div>

      </div>
	  
	  	<div className="carousel-item">

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2">
              <img className="card-img-top" src={pleatedblinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Pleated Blinds</NavLink></h4>
                <p className="card-text">Attractive and versatile alternative to a venetian or roller blind. It has a very slim top and bottom rails draw..</p>
             </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
              <img className="card-img-top" src={romanblinds}
                   alt="C"/>
              <div className="card-body">
                <h4 className="card-title"><NavLink to="/Products" className="nav-link">Roman Blinds</NavLink></h4>
                <p className="card-text">It covers windows with a contemporary look and feel. It is available in different fabric types including room..</p>
             </div>
            </div>
          </div>

          <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
              <img className="card-img-top" src={magneticinsectscreens}
                   alt="A"/>
              <div className="card-body">
              <h4 className="card-title"><NavLink to="/Products" className="nav-link">Magnetic</NavLink></h4>
                <p className="card-text">Traditional insect screens are translated to magnetic insect screens, which is an excellent solution for windows..</p>
                
              </div>
            </div>
          </div>

        </div>

      </div>
	  
      </div>

  </div>

    );
}

export default SubSlider;