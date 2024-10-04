import React from "react";
import blogCSS from './../Blog/Blog.module.css'

import blogImg1 from './../../assets/blog-06-740x560.jpg'
import blogImg2 from './../../assets/blog-03-740x560.jpg'
import blogImg3 from './../../assets/blog-07-740x560.jpg'
import blogImg4 from './../../assets/blog-14-740x560.jpg'

function Blog () {
    return (
        <div className={`${blogCSS.blog_wrapper} section`}>
            <small className="section_title">Our Blogs</small>
            <h2>Stories, Tips & Guides <a href="#">Read More <i className="ri-arrow-right-line"></i></a></h2>

            <div className={blogCSS.blog_cards_wrapper}>
                <div className={blogCSS.card}>
                      <img src={blogImg1} alt="blog-image" />
                      <div className={blogCSS.blog_content}>
                        <small>Future of Travel</small>
                        <h2>The surffing man will blow your mind</h2>
                        
                        <div className={blogCSS.Details}>
                            <p><i className="ri-calendar-line"></i>June 2024</p>
                            <p><i className="ri-pen-nib-line"></i>by Naim John</p>
                        </div>
                      </div>
                </div>

                <div className={blogCSS.blog_cards}>
                    <div className={blogCSS.item}>
                        <img src={blogImg2} alt="blog-image" />
                        <div className={blogCSS.item_detail}>
                            <small>Destinations</small>
                            <h2>The 5 Best Hikes in the World</h2>

                            <div className={blogCSS.Details}>
                            <p><i className="ri-calendar-line"></i>July 2024</p>
                            <p><i className="ri-pen-nib-line"></i>by Akinator John</p>
                        </div>
                        </div>
                    </div>
                    <div className={blogCSS.item}>
                        <img src={blogImg3} alt="blog-image" />
                        <div className={blogCSS.item_detail}>
                            <small>Creative</small>
                            <h2>Separated the Live in the Bookmarks Grove</h2>

                            <div className={blogCSS.Details}>
                            <p><i className="ri-calendar-line"></i>July 2024</p>
                            <p><i className="ri-pen-nib-line"></i>by Akinator John</p>
                        </div>
                        </div>
                    </div>
                    <div className={blogCSS.item}>
                        <img src={blogImg4} alt="blog-image" />
                        <div className={blogCSS.item_detail}>
                            <small>Creative</small>
                            <h2>Separated the Live in the Nation</h2>

                            <div className={blogCSS.Details}>
                            <p><i className="ri-calendar-line"></i>August 2024</p>
                            <p><i className="ri-pen-nib-line"></i>by Nilem John</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog