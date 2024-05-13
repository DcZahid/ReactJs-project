import React from "react";

export default function TeamMan({data}) {
  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="team_item">
          <div className="team_img">
            <img className="img-fluid" src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${data.photo}`} alt="" />
          </div>
          <div className="team_name">
            <h4>{data.name}</h4>
            <p>{data.designation}</p>
            <p className="mt-20">
            {data.details}
            </p>
            <div className="social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#" className="active">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
              <a href="#">
                <i className="fa fa-envelope-o" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
