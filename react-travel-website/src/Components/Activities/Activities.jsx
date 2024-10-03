import React from "react";
import activitiesCSS from './../Activities/Activities.module.css'

function Activities () {
    return (
          <div className={`${activitiesCSS.activities_wrapper} section`}>
            <div className={activitiesCSS.activity_content}>
                <small className="section_title">Discover Weekly</small>
                <h2>Most Popular Activities</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, cumque! Esse minima quo pariatur dolorum?</p>
                <a href="#">View All Tours <i className="ri-arrow-right-line"></i></a>
            </div>
            <div className={activitiesCSS.activity_container}>
                <div className={activitiesCSS.activity_item}>
                    <i className="ri-ancient-gate-line"></i>
                    <h2>Hiking & Traking</h2>
                    <p>3 Tours</p>
                </div>
                <div className={activitiesCSS.activity_item}>
                    <i className="ri-service-line"></i>
                    <h2>Safari</h2>
                    <p>5 Tours</p>
                </div>
                <div className={activitiesCSS.activity_item}>
                    <i className="ri-bus-line"></i>
                    <h2>OverLand Truck</h2>
                    <p>2 Tours</p>
                </div>
                <div className={activitiesCSS.activity_item}>
                    <i className="ri-riding-line"></i>
                    <h2>Bicycle</h2>
                    <p>2 Tours</p>
                </div>
                <div className={activitiesCSS.activity_item}>
                    <i className="ri-exchange-2-line"></i>
                    <h2>Party & Festivals</h2>
                    <p>5 Tours</p>
                </div>
                <div className={activitiesCSS.activity_item}>
                    <i className="ri-ship-line"></i>
                    <h2>Sailing</h2>
                    <p>5 Tours</p>
                </div>
                <div className={activitiesCSS.activity_item}>
                    <i className="ri-compass-line"></i>
                    <h2>Explore Europe</h2>
                    <p>4 Tours</p>
                </div>
                <div className={activitiesCSS.activity_item}>
                    <i className="ri-ship-2-line"></i>
                    <h2>River Cruises</h2>
                    <p>4 Tours</p>
                </div>
            </div>
          </div>
    )
}

export default Activities