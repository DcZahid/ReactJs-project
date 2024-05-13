import React from "react";

export default function News({data}) {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="single-story">
          <div className="story-thumb">
            <img className="img-fluid" src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${data.photo}`} alt="" />
          </div>
          <div className="story-details">
            <div className="story-meta">
              <a href="#">
                <span className="lnr lnr-calendar-full" />
                {data.date}
              </a>
              <a href="#">
                <span className="lnr lnr-book" />
               {data.company}
              </a>
            </div>
            <h5>
              <a href="#">{data.title}</a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
