import React from "react";

export default function EventHelp({data}) {
  return (
    <>
      <div className="col-lg-6">
        <div className="single_event">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <figure>
              <img className="img-fluid w-100" src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${data.photo}`} alt="" />
                {/* <img
                  className="img-fluid w-100"
                  src="img/event/e1.jpg"
                  alt=""
                /> */}
                <div className="img-overlay" />
              </figure>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="content_wrapper">
                <h3 className="title">
                  <a href="event-details.html">{data.title}</a>
                </h3>
                <p>
                {data.details}
                </p>
                <div className="d-flex count_time" id="clockdiv1">
                  <div className="mr-25">
                    <h4 className="days">{data.days}</h4>
                    <p>Days</p>
                  </div>
                  <div className="mr-25">
                    <h4 className="hours">{data.hours}</h4>
                    <p>Hours</p>
                  </div>
                  <div className="mr-25">
                    <h4 className="minutes">{data.minutes}</h4>
                    <p>Minutes</p>
                  </div>
                  <div>
                    <h4 className="seconds">{data.seconds}</h4>
                    <p>Seconds</p>
                  </div>
                </div>
                <a href="#" className="primary_btn">
                {data.btn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
