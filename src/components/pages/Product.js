import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import magneticinsectscreens from "../images/magnetic-insect-screens.png"
import hingedscreen from "../images/hinged-screen.jpg"
import hingeddoor from "../images/hinged-door.jpg"
import retractabledoorinsectscreen from "../images/retractable-door-insect-screen.png"
import retractablewindowinsectscreen from "../images/retractable-window-insect-screen.png"
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

function Products(){
    document.title = "Product";
    return(
<div className="container">
    <div className="card mt-4">
        <div className="card-body">
        <h2 class="main-heading text-decoration-underline underline_text">Products</h2>
        </div>
        <div className="col-sm-12 col-xs-12 col-lg-12 p-3">
        <Tabs defaultActiveKey="insect-screen" id="products" className="mb-3" fill>
      <Tab eventKey="insect-screen" title="Insect screens" id="tab_heading">
           {/********** */}
           <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
    <div className="col-lg-6" style={{float: "left"}}>
        <h4 className="h4_sub_text">1. Magnetic</h4>
        <p className="text-justify">
        Traditional insect screens are translated to magnetic insect screens, which is an excellent solution for windows.For older nets can be replaced with magnetic nets which are invisible on most windows.<br/>
        The main advantage of this is,it is a flexible size fit which is attached with magnetic so it can fit for any size of windows and is easy to maintain.Anyone can peel back for opening or closing your window.<br/>
        These magnetic nets can be easily installed on the windows and provide protection against insects and mosquitoes<br/>
        <ul>
              <li>Invisible look on windows.</li>
              <li>So stylish and simple to handle.</li>
              <li>Wrinkle & Sag free on windows.</li>
              <li>Easy to clean by detaching the screens.</li>
              <li>Sizes are customizable with standard colors and it fit for any kind of windows.</li>
              <li>Fiberglass Insect screens are one of the mesh option we used which is imported from US</li>
            </ul>
        </p>
        </div>
        <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
        <img class="card-img-top" src={magneticinsectscreens} alt="Magnetic" />
        </div>
</div>
    <br/>
        {/********** */}
        <div className="col-sm-12 col-xs-12 col-lg-12 p-3">
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text">2. Hinged</h4>
       <p className="text-justify">There are 2 types of hinged <br/>
       <ol><li>Door Screen</li><li>Window Screen</li></ol>
       <h4 className="h4_sub_text_list">1.1 Door Screen</h4>
       This has a framed screen which fits the door frame with hinges on the opening side and magnetic catches on the other.It covers the door so it can open when the door is opens.The frame is made up of aluminum which has a channel / groove fitted by a rubber cord.Some more features, aluminum kick-plate at the bottom,a center handle bar etc are also available. It is Large and Robust Frame with a long life, Insect Screen can be replaceable.Handles matching the screen and door profile with custom sizes and colors.  It may be Single Framed Door / Double Framed doors aluminum insect screen or stainless steel insect screen.
       <br/><br/>
       <h4 className="h4_sub_text_list">1.2 Window Screen</h4>
       It is the same as the door screen difference is it is designed for windows.
       <br/><br/>
       </p>
        </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
          <br/>
       <img class="card-img-top" src={hingedscreen} alt="Hinged Window Screen" />
       <br/><br/>
       <img class="card-img-top" src={hingeddoor} alt="Hinged Door Screen" />
       </div>
            </div>
            <br/>
            {/*********** */}
            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text">3. Retractable</h4>
       <h4 className="h4_sub_text_list">3.1 Retractable Door Insect Screen:</h4>
       <p className="text-justify">
       The insect mesh is fitted on the side of the door frame and the fly screen is pulled across the door opening.The screen is stretched so that when we release it returns to its original position.It is made up of aluminum top and bottom guides for the screen which moves across the door opening and also ensures an all round seal is created.This can be fixed directly to the door frame or side walls of a door.
       <br/>
       <h4 className="h4_sub_text_list">3.2 Retractable Double Door Insect Screen:</h4>
       This is mainly designed for french doors, two cassettes fixed with insect mesh. Each cassette is fixed with each door frame side and screens are pulled across the door opening.The screen is stretched so that when we release it returns to its original position.It is made up of aluminum top and bottom guides for the screen which moves across the door opening and also ensures an all round seal is created.This can be fixed directly to the door frame or side walls of a door.
      <br/>
      <h4 className="h4_sub_text_list">3.3 Retractable Window Insect Screen:</h4>
      This operates in a similar way to a roller blind i.e.  The cassette sits at the top of the window and the fly screen is pulled down over the window. The screen is stretched with a spring so that when we release it returns to its original position. 
      </p> 
        </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left", width:"30%"}}>
           <br/><br/>
       <img class="card-img-top" src={retractabledoorinsectscreen} alt="retractable door insect screen" />
       <br/><br/>
       <img class="card-img-top" src={retractablewindowinsectscreen} alt="retractable window insect screen" />
       </div>
            </div>
      </Tab>
      {/*********blinds */}
      <Tab eventKey="blinds" title="Blinds" className="product_category">
      <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text">Blinds</h4>
       <h4 className="h4_sub_text_list">1. Roller Fabric Blinds:</h4>
       <p className="text-justify">
       These come with a glossy design with a variety of durable fabrics for either room darkening or light filtering. It is available in a wide range of styles and options, including with standard chain drive system. This is best suitable for small, large, corner or bay windows in any room in the home. And also it is available in a range of translucent, block out and sunscreen fabric types which can control heat, light and glare throughout the day while offering privacy at night.   <br/>
       With its classic design and simple appeal, which deliver practical operation and unobtrusive style to any home or office.
        </p> 
        </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/><br/>
       <img class="card-img-top" src={rollerfabricblinds} alt="Roller Fabric Blinds" />
       </div>
            </div>

            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">2. Vertical Blinds:</h4>
       <p className="text-justify">
       It controls the heat and light which comes in glossy modern design, which incorporates the Ultimate Track System. Which is available in translucent and block-out fabrics in a huge variety of colors. This is the ultimate solution for large glazing & office windows and offers perfect light protection feather closure to ensure minimal light leakage between blades.
  </p> 
        </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={verticalblinds} alt="Vertical Blinds" />
       </div>
            </div>

            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">3. Wooden Venetian blinds:</h4>
       <p className="text-justify">
       For the classy look and stimber style of a venetian blind in a room, Wooden Blinds are the perfect solution. The smooth finishing of this gives a practical alternative to wooden blinds. 
Here used bass wood (malaysian wood) which completely motorized the room.Traditional wooden blinds provide the natural timber with simple-to-use cord operation, the fabric tapes offer traditional styling to complement traditional homes.
   </p> 
        </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={woodenvenetianblinds} alt="Wooden Venetian blinds" />
       </div>
            </div>

            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">4. Zebra Blinds:</h4>
       <p className="text-justify">
       Most customers demand day and night blinds which is a very interesting and innovative arrangement for windows. It infinitely adjusts the sunlight amount in the room using two-layer fabric with different light transmission.
  </p> 
        </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={zebrablinds} alt="Zebra Blinds" />
       </div>
            </div>

            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">5. Triple Shade Blinds</h4>
       <p className="text-justify">
       It combines drape, window screening and curtain blinds. It is made up of triple cell fabric which is resilient to the pleated blind.Due to beautiful colors and exotic touch accentuate the interiors.
        </p> 
        </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={tripleshadeblinds} alt="Triple Shade Blinds" />
       </div>
            </div>

            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">6. Balcony PVC Blinds:</h4>
       <p className="text-justify">
       It is fixed outside of your window or patio to block the sunlight partially to control the view and also gives daytime privacy.while still allowing natural light and visibility on the inside. 
It is designed to be long lasting and durable in extremely hot climates and can even be rolled up through the winter. These blinds help to reduce the glare while still allowing lots of ambient light to enter.
 </p> 
        </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={balconyPVCblinds} alt="Balcony PVC Blinds" />
       </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">7. Bamboo Chick blinds:</h4>
       <p className="text-justify">
       The bamboo blinds create a casual but classy look. Advantage of this is, it has excellent insulating properties. Some areas looking for full privacy at that point this is a good choice. it can persist for long years. It has several shades to finish.</p> 
       </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={bamboochickblinds} alt="Bamboo Chick blinds" />
       </div>
            </div>

            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">8. Insulated Glass Blinds</h4>
       <p className="text-justify">
       Here the curtain is placed between two sheets of glass, in a sealed glass chamber. It takes place in a fully sealed environment.It gives absolute protection against soiling, dust, and weathering, and zero to minimum maintenance.The variety of models and their versatility offers 
solutions for any kind of window frame.</p>
  </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={insulatedglassblinds} alt="Insulated Glass Blinds" />
       </div>
            </div>

            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">9. Honeycomb Blinds:</h4>
       <p className="text-justify">
       Due to versatile light control, privacy gives ultimate shades with innovative design to any kind of room. These shades are available in different colors and fabrics.Used bonded polyester honeycomb structured fabric, Duette Shades materials keeps home warm in all seasons, saving on your energy costs. </p>
  </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={honeycombblinds} alt="Honeycomb Blinds" />
       </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">10. Pleated Blinds:</h4>
       <p className="text-justify">
       Attractive and versatile alternative to a venetian or roller blind. It has a very slim top and bottom rails draw up to the top of the window. It won't require a large size room like other types of blind. A free hanging blind for windows, conservatory glass walls and doors are 2 types of blind.
The rectangular skylight blind suitable for glass ceilings and roofs. Some more shades in plain design having a daylight control option.

       </p>
  </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left", width:"30%"}}>
           <br/>
       <img class="card-img-top" src={pleatedblinds} alt="Pleated Blinds" />
       </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-lg-12 p-3" style={{float: "left"}}>
        <div className="col-lg-6" style={{float: "left"}}>
       <h4 className="h4_sub_text_list">11. Roman Blinds:</h4>
       <p className="text-justify">
       It covers windows with a contemporary look and feel. It is available in different fabric types including room darkening, translucent and sunscreen fabrics. Our Roman Shades can be designed to suit your tastes and your home’s specific needs, not to mention style with 
One could choose from a range of tassels and color-coordinated cord cleats to add the perfect finishing touch to your blinds.

       </p>
  </div>
       <div className="col-sm-12 col-xs-12 col-lg-6 p-3" style={{float: "left",width:"30%"}}>
           <br/>
       <img class="card-img-top" src={romanblinds} alt="Roman Blinds" />
       </div>
            </div>
      </Tab>
      
    </Tabs>
    </div>
    </div>
    
</div>

    );
}

export default Products;