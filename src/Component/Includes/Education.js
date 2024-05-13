import React from "react";

export default function Education({data}) {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="card">
          <div className="card-body">
            <figure>
              <img
                className="card-img-top img-fluid"
                src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${data.photo}`}
                alt="Card image cap"
              />
            </figure>
            <div className="card_inner_body">
              <h4 className="card-title">{data.title}</h4>
              <p className="card-text">
               {data.details}
              </p>
              <div className="d-flex justify-content-between raised_goal">
                <p>Raised: ${data.raised}</p>
                <p>
                  <span>Goal: ${data.goal}</span>
                </p>
              </div>
              <div className="d-flex justify-content-between donation align-items-center">
                <a href="#" className="primary_btn">
                  {data.btn}
                </a>
                <p>
                  <span className="lnr lnr-heart" />{data.donors}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
