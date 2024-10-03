import React from "react";
import toursCSS from './../Tours/Tours.module.css'

import tourImg1 from './../../assets/TourImg1.jpg'
import tourImg2 from './../../assets/TourImg2.jpg'
import tourImg3 from './../../assets/TourImg3.jpg'
import tourImg4 from './../../assets/TourImg4.jpg'
import tourImg5 from './../../assets/TourImg5.jpg'
import tourImg6 from './../../assets/TourImg6.jpg'

function Tours () {
    return (
          <div className={`${toursCSS.Tours_wrapper} section`}>
               <small className="section_title">Popular Tours</small>
            <div className={toursCSS.section_heading}>
                
                <h2>Most Popular Tours</h2>
                <p><a href="#">View All Tours <i className="ri-arrow-right-line"></i></a></p>
            </div>

            <div className={toursCSS.tours_cards}>
                <div className={toursCSS.tours_card}>
                    <img src={tourImg1} alt="tour-img" />
                    <div className={toursCSS.tours_info}>
                        <small><i className="ri-map-pin-line"></i>Buenos alias</small>
                        <h3>Buenos alias Calafate, <br /> Chalten & Ushuaia</h3>
                        <p>from <span>$196.99</span></p>
                        <a href="#">More Information <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
                <div className={toursCSS.tours_card}>
                    <img src={tourImg2} alt="tour-img" />
                    <div className={toursCSS.tours_info}>
                        <small><i className="ri-map-pin-line"></i>Edinburgh Scottland</small>
                        <h3>Orcano Cristales, <br /> River Trip</h3>
                        <p>from <span>$206.99</span></p>
                        <a href="#">More Information <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
                <div className={toursCSS.tours_card}>
                    <img src={tourImg3} alt="tour-img" />
                    <div className={toursCSS.tours_info}>
                        <small><i className="ri-map-pin-line"></i>Orca Camp</small>
                        <h3>Orca Camp, <br /> Kayaking Trip</h3>
                        <p>from <span>$199.99</span></p>
                        <a href="#">More Information <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
                <div className={toursCSS.tours_card}>
                    <img src={tourImg4} alt="tour-img" />
                    <div className={toursCSS.tours_info}>
                        <small><i className="ri-map-pin-line"></i>Costa Rica</small>
                        <h3>7 Days in Costa Rica, <br /> Classic (Self Drive) </h3>
                        <p>from <span>$350.45</span></p>
                        <a href="#">More Information <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
                <div className={toursCSS.tours_card}>
                    <img src={tourImg5} alt="tour-img" />
                    <div className={toursCSS.tours_info}>
                        <small><i className="ri-map-pin-line"></i>New York City</small>
                        <h3>YellowStone & Ground, <br /> Teton Adventure - 6 Day</h3>
                        <p>from <span>$299.99</span></p>
                        <a href="#">More Information <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
                <div className={toursCSS.tours_card}>
                    <img src={tourImg6} alt="tour-img" />
                    <div className={toursCSS.tours_info}>
                        <small><i className="ri-map-pin-line"></i>Tokyo</small>
                        <h3>Mt. Fuji, Hakone lake, <br /> Lake Ashi </h3>
                        <p>from <span>$550.45</span></p>
                        <a href="#">More Information <i className="ri-arrow-right-line"></i></a>
                    </div>
                </div>
            </div>

          </div>
    )
}

export default Tours