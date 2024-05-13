import React from "react";

export default function Donation({data}) {
  
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="single_causes">
          <h4>{data.title}</h4>
          <img src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${data.photo}`} alt="" />
          <p>
            {data.details}
          </p>
        </div>
      </div>
    </>
  );
}
