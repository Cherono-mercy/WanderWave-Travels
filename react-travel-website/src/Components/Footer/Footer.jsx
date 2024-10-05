import React from "react";
import footerCSS from './../Footer/Footer.module.css'

import img1 from './../../assets/gallery_1.jpg'
import img2 from './../../assets/gallery_2.jpg'
import img3 from './../../assets/gallery_3.jpg'
import img4 from './../../assets/gallery_4.jpg'
import img5 from './../../assets/gallery_5.jpg'

function Footer () {
    return (
        <div className={`${footerCSS.footer_wrapper} section`}>
                <div className={footerCSS.gallery}>
                    <div className={footerCSS.gallery_item}>
                        <img src={img1} alt="" />
                    </div>
                    <div className={footerCSS.gallery_item}>
                        <img src={img2} alt="" />
                    </div>
                    <div className={footerCSS.gallery_item}>
                        <img src={img3} alt="" />
                    </div>
                    <div className={footerCSS.gallery_item}>
                        <img src={img4} alt="" />
                    </div>
                    <div className={footerCSS.gallery_item}>
                        <img src={img5} alt="" />
                    </div>
                </div>

            <div className={footerCSS.footer_container}>
               <div className={footerCSS.footer_links}>
                <h3>Our Company</h3>
                <a href="#">Company</a>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">News & Blogs</a>
               </div>
               <div className={footerCSS.footer_links}>
                <h3>Quick Links</h3>
                <a href="#">View Account</a>
                <a href="#">Track Order</a>
                <a href="#">Exchange & Returns</a>
                <a href="#">Promotions</a>
               </div>
               <div className={footerCSS.footer_links}>
                <h3>Our Services</h3>
                <a href="#">Tour Guide</a>
                <a href="#">Tour Booking</a>
                <a href="#">Mobile App</a>
                <a href="#">Customer Services</a>
               </div>
               <div className={footerCSS.footer_links}>
                <h3>Our NewsLetter</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos officia voluptatibus earum dolor voluptatum. Aliquid!</p>
                <input type="text" placeholder="Enter Email -" />
                <button>Subscribe</button>
               </div>

            </div>   
        </div>
    )
}

export default Footer