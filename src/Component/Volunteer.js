import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Volunteer() {
  const [volunteer,setVolunteer]=useState([])
  useEffect(() => {
    axios
      .get(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/volunteer/getVolunteer.php"
      )
      .then((res) => setVolunteer(res.data[0]));
  }, []);
  return (
    <>
      <section className="about_area section_gap_bottom">
        <div className="container">
          <div className="row">
            <div className="single_about row">
              <div className="col-lg-6 col-md-12 text-center about_left">
                <div className="about_thumb">
                <img className="img-fluid" src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${volunteer.photo}`} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 about_right">
                <div className="about_content">
                  <h2>
                    {volunteer.title}
                  </h2>
                  <p>
                    {volunteer.details}
                  </p>
                  <a href="#" className="primary_btn">
                   {volunteer.btn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
