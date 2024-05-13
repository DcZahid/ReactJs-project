import React, { useEffect, useState } from "react";
import News from "./Includes/News";
import axios from "axios";

export default function Story() {
  const [story,setStory]=useState([])
  useEffect(()=>{
axios.get("http://localhost/Reactjs/31-01-24/seelife/backend/crud/story/getstory.php")
.then((res)=>setStory(res.data));
  },[])
  return (
    <>
      <section className="section_gap story_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="main_title">
                <h2>Our latest Story</h2>
                <p>Open lesser winged midst wherein may morning</p>
              </div>
            </div>
          </div>
          <div className="row">
            {story.map((d,i)=><News data={d}/>)}
            
            {/* <News/>
            <News/> */}
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-story">
                <div className="story-thumb">
                  <img className="img-fluid" src="img/story/s1.jpg" alt="" />
                </div>
                <div className="story-details">
                  <div className="story-meta">
                    <a href="#">
                      <span className="lnr lnr-calendar-full" />
                      20th Sep, 2018
                    </a>
                    <a href="#">
                      <span className="lnr lnr-book" />
                      Company
                    </a>
                  </div>
                  <h5>
                    <a href="#">
                      Lime recalls electric scooters over battery fire.
                    </a>
                  </h5>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-story">
                <div className="story-thumb">
                  <img className="img-fluid" src="img/story/s2.jpg" alt="" />
                </div>
                <div className="story-details">
                  <div className="story-meta">
                    <a href="#">
                      <span className="lnr lnr-calendar-full" />
                      20th Sep, 2018
                    </a>
                    <a href="#">
                      <span className="lnr lnr-book" />
                      Company
                    </a>
                  </div>
                  <h5>
                    <a href="#">Apple resorts to promo deals trade to boost</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-story">
                <div className="story-thumb">
                  <img className="img-fluid" src="img/story/s3.jpg" alt="" />
                </div>
                <div className="story-details">
                  <div className="story-meta">
                    <a href="#">
                      <span className="lnr lnr-calendar-full" />
                      20th Sep, 2018
                    </a>
                    <a href="#">
                      <span className="lnr lnr-book" />
                      Company
                    </a>
                  </div>
                  <h5>
                    <a href="#">
                      Lime recalls electric scooters over battery fire.
                    </a>
                  </h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
