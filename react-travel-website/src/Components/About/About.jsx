import React from "react";
import aboutCSS from './../About/About.module.css'

import about_img from './../../assets/H5-img-1.jpg'
import about_img2 from './../../assets/H5-img-2.jpg'

import aboutSvg from './../../assets/about-svg.png'

function About () {
    return (
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={aboutCSS.about_content}>
                <small className="section_title">About Us</small>
                <h2>What Are Our Advantages <br/>Compared to Others</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti facere aliquam tempore aliquid, neque id consequuntur tenetur maxime soluta libero?</p>
                
                <div className={aboutCSS.about_cards}>
                    <div className={aboutCSS.about_Card}>
                        <div className={aboutCSS.about_title}>
                            <i className="ri-globe-line"></i>
                            <h3>Lots of Choices</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, iusto.</p>
                    </div>
                    <div className={aboutCSS.about_Card}>
                        <div className={aboutCSS.about_title}>
                            <i className="ri-calendar-view"></i>
                            <h3>Easy Booking</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, iusto.</p>
                    </div>
                    <div className={aboutCSS.about_Card}>
                        <div className={aboutCSS.about_title}>
                            <i className="ri-map-pin-user-line"></i>
                            <h3>Best Tour Guides</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, iusto.</p>
                    </div>
                    <div className={aboutCSS.about_Card}>
                        <div className={aboutCSS.about_title}>
                            <i className="ri-hotel-bed-line"></i>
                            <h3>Room Comfort</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, iusto.</p>
                    </div>
                </div>
            </div>
            <div className={aboutCSS.about_image}>
                <img src={about_img} alt="about-img" />
                <img src={about_img2} alt="about-img" />
                <img src={aboutSvg} alt="about-svg" id={aboutCSS.aboutSvg} />
            </div>
        </div>
    )
}

export default About