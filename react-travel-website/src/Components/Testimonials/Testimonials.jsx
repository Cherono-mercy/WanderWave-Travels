import React from "react";
import testimonialsCSS from './../Testimonials/Testimonials.module.css'

import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import profile1 from './../../assets/avatar-1.jpg'
import profile2 from './../../assets/avatar-2.jpg'
import profile3 from './../../assets/avatar-3.jpg'

function Testimonials () {
    return (
        <div className={`${testimonialsCSS.testimonials_wrapper} section`}>
            <small className="section_title">Testimonials</small>
            <h2>Travelers Love Our Locals</h2>

            <Splide
                options = {
                    {
                        perPage: 2,

                        breakpoints: {
                            900: {
                                perPage: 2
                            },
                            768: {
                                perPage: 1
                            },
                        }
                    }
                }
            >
                <SplideSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <div className={testimonialsCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iure et molestiae error atque beatae esse odit quam perspiciatis, quaerat quibusdam quisquam ex, distinctio amet. Veniam, amet voluptatibus?</p>

                        <div className={testimonialsCSS.profile}>
                            <img src={profile1} alt="profile-img" />
                            <p>Janne a <span>Istanbul , June 20</span></p>
                        </div>

                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <div className={testimonialsCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iure et molestiae error atque beatae esse odit quam perspiciatis, quaerat quibusdam quisquam ex, distinctio amet. Veniam, amet voluptatibus?</p>

                        <div className={testimonialsCSS.profile}>
                            <img src={profile2} alt="profile-img" />
                            <p>Lauren a <span>Istanbul , April 10</span></p>
                        </div>

                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <div className={testimonialsCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iure et molestiae error atque beatae esse odit quam perspiciatis, quaerat quibusdam quisquam ex, distinctio amet. Veniam, amet voluptatibus?</p>

                        <div className={testimonialsCSS.profile}>
                            <img src={profile3} alt="profile-img" />
                            <p>Rechain L <span>Istanbul , May 20</span></p>
                        </div>

                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Testimonials