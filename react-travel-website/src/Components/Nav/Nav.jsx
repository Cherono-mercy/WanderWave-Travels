import React, { useRef } from "react";
import navCSS from './../Nav/Nav.module.css'

function Nav () {

        const menu = useRef();

        const menuHandler = () => {
            menu.current.classList.toggle(navCSS.showNav)
        }



    return (
        <div className={navCSS.Nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#">WanderWave</a>
            </div>
            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Tours</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className={navCSS.nav_btns}>
                <button>Sign Up

                    <i className="ri-arrow-right-s-line"></i>
                </button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    )
}

export default Nav