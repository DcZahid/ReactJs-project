import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function VolunteerList() {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get(
          "http://localhost/Reactjs/31-01-24/seelife/backend/crud/volunteer/getVolunteer.php"
        )
        .then((res) => setData(res.data));
    }, []);
    const deleteCause = (id) => {
      axios
        .get(
          `http://localhost/Reactjs/31-01-24/seelife/backend/crud/volunteer/deleteVolunteer.php?id=${id}`
        )
        .then((res) => {
          console.log(res.data);
          axios
            .get(
              "http://localhost/Reactjs/31-01-24/seelife/backend/crud/volunteer/getVolunteer.php"
            )
            .then((res) => setData(res.data));
        });
    };
  
    return (
      <>
        <Admin2_asidebar />
        <div className="content">
          <Admin2_nav />
  
          <main>
            <div className="card card-body">
              <div>
                <div class="row mb-2">
                  <div class="col-sm-6">
                    <h1>Volunteer List</h1>
                  </div>
                  <div class="col-sm-6">
                    <ol
                      class="breadcrumb float-sm-right"
                      style={{ marginLeft: "490px" }}
                    >
                      <li class="breadcrumb-item">
                        <NavLink
                          className="btn btn-primary"
                          to={`/admin/addvolunteer`}
                        >
                          <h4 className="btn btn-primary">Add New</h4>
                        </NavLink>
                      </li>
                    </ol>
                  </div>
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Title</th>
                      <th>Details</th>
                      <th>Button</th>
                      <th>Photo</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((d, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{d.title}</td>
                          <td>{d.details}</td>
                          <td>{d.btn}</td>
                          <td>
                            <img
                              src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${d.photo}`}
                              alt={d.title}
                              height={100}
                            />
                          </td>
                          <td>
                            <NavLink to={`/admin/updatevolunteer/${d.id}`}>
                              <button className="btn btn-info">Edit</button>
                            </NavLink>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteCause(d.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </>
    );
}
