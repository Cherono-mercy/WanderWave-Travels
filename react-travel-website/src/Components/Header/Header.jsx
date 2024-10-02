import React from "react";
import headerCSS from './../Header/Header.module.css'

import hero_image from './../../assets/h5-slider02.png'
import element1 from './../../assets/h5-slider03.jpg'

import element2 from './../../assets/h5-fly1.svg'
import element3 from './../../assets/h5-fly2.svg'
import element4 from './../../assets/h5-slider01.png'

function Header () {
    return(
        <div className={`${headerCSS.header_wrapper} section`}>
            <div className={headerCSS.header_content}>
                <h3>Explore Your Life</h3>
                <h1>Enjoy Your Life <br /> and Go Explore</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, optio tempora. Officia saepe officiis nesciunt?</p>
            </div>
            <div className={headerCSS.header_image}>
                <img src={hero_image} alt="hero-img" />
            </div>
            <div className={headerCSS.header_element}>
                <img src={element1} alt="header-elements" />
            </div>
            <div className={headerCSS.header_element1}>
                <img src={element2} alt="header-elements" />
            </div>
            <div className={headerCSS.header_element2}>
                <img src={element3} alt="header-elements" />
            </div>
            <div className={headerCSS.header_element3}>
                <img src={element4} alt="header-elements" />
            </div>
            <span id={headerCSS.element2}></span>
        </div>
    )
}

export default Header