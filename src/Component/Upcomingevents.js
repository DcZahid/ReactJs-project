import React, { useEffect, useState } from "react";
import EventHelp from "./Includes/EventHelp";
import axios from "axios";

export default function Upcomingevents() {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/event/getEvent.php"
      )
      .then((res) => setEvent(res.data));
  }, []);
  return (
    <>
      <section className="event_area section_gap_custom">
        <div className="container">
          <div className="main_title">
            <h2>Upcoming events</h2>
            <p>
              Creepeth called face upon face yielding midst is after moveth{" "}
            </p>
          </div>
          <div className="row">
          {event.map((d,i)=><EventHelp data={d}/>
              )
            }
            
            {/* <div className="col-lg-6">
              <div className="single_event">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <figure>
                      <img
                        className="img-fluid w-100"
                        src="img/event/e1.jpg"
                        alt=""
                      />
                      <div className="img-overlay" />
                    </figure>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="content_wrapper">
                      <h3 className="title">
                        <a href="event-details.html">
                          Working syrian childreen
                        </a>
                      </h3>
                      <p>
                        Be tree their face wont appear day to waters moved
                        fourth in theyre divide dont a youre were man.
                      </p>
                      <div className="d-flex count_time" id="clockdiv1">
                        <div className="mr-25">
                          <h4 className="days">552</h4>
                          <p>Days</p>
                        </div>
                        <div className="mr-25">
                          <h4 className="hours">08</h4>
                          <p>Hours</p>
                        </div>
                        <div className="mr-25">
                          <h4 className="minutes">45</h4>
                          <p>Minutes</p>
                        </div>
                        <div>
                          <h4 className="seconds">30</h4>
                          <p>Seconds</p>
                        </div>
                      </div>
                      <a href="#" className="primary_btn">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-6">
              <div className="single_event">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <figure>
                      <img
                        className="img-fluid w-100"
                        src="img/event/e2.jpg"
                        alt=""
                      />
                      <div className="img-overlay" />
                    </figure>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="content_wrapper">
                      <h3 className="title">
                        <a href="event-details.html">Help and homelesness</a>
                      </h3>
                      <p>
                        Be tree their face won't appear day to waters moved
                        fourth in they're divide don't a you're were man.
                      </p>
                      <div className="d-flex count_time" id="clockdiv2">
                        <div className="mr-25">
                          <h4 className="days">552</h4>
                          <p>Days</p>
                        </div>
                        <div className="mr-25">
                          <h4 className="hours">08</h4>
                          <p>Hours</p>
                        </div>
                        <div className="mr-25">
                          <h4 className="minutes">45</h4>
                          <p>Minutes</p>
                        </div>
                        <div>
                          <h4 className="seconds">30</h4>
                          <p>Seconds</p>
                        </div>
                      </div>
                      <a href="#" className="primary_btn">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-6">
              <div className="single_event">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <figure>
                      <img
                        className="img-fluid w-100"
                        src="img/event/e3.jpg"
                        alt=""
                      />
                      <div className="img-overlay" />
                    </figure>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="content_wrapper">
                      <h3 className="title">
                        <a href="event-details.html">Save the clean water</a>
                      </h3>
                      <p>
                        Be tree their face won't appear day to waters moved
                        fourth in they're divide don't a you're were man.
                      </p>
                      <div className="d-flex count_time" id="clockdiv3">
                        <div className="mr-25">
                          <h4 className="days">552</h4>
                          <p>Days</p>
                        </div>
                        <div className="mr-25">
                          <h4 className="hours">08</h4>
                          <p>Hours</p>
                        </div>
                        <div className="mr-25">
                          <h4 className="minutes">45</h4>
                          <p>Minutes</p>
                        </div>
                        <div>
                          <h4 className="seconds">30</h4>
                          <p>Seconds</p>
                        </div>
                      </div>
                      <a href="#" className="primary_btn">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-6">
              <div className="single_event">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <figure>
                      <img
                        className="img-fluid w-100"
                        src="img/event/e4.jpg"
                        alt=""
                      />
                      <div className="img-overlay" />
                    </figure>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="content_wrapper">
                      <h3 className="title">
                        <a href="event-details.html">
                          Foods for poor childreen
                        </a>
                      </h3>
                      <p>
                        Be tree their face won't appear day to waters moved
                        fourth in they're divide don't a you're were man.
                      </p>
                      <div className="d-flex count_time" id="clockdiv4">
                        <div className="mr-25">
                          <h4 className="days">552</h4>
                          <p>Days</p>
                        </div>
                        <div className="mr-25">
                          <h4 className="hours">08</h4>
                          <p>Hours</p>
                        </div>
                        <div className="mr-25">
                          <h4 className="minutes">45</h4>
                          <p>Minutes</p>
                        </div>
                        <div>
                          <h4 className="seconds">30</h4>
                          <p>Seconds</p>
                        </div>
                      </div>
                      <a href="#" className="primary_btn">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
