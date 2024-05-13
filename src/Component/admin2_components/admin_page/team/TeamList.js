import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function TeamList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/team/getteam.php"
      )
      .then((res) => setData(res.data));
  }, []);
  const deleteteam = (id) => {
    axios
      .get(
        `http://localhost/Reactjs/31-01-24/seelife/backend/crud/team/deleteteam.php?id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get(
            "http://localhost/Reactjs/31-01-24/seelife/backend/crud/team/getteam.php"
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
                  <h1>Team List</h1>
                </div>
                <div class="col-sm-6">
                  <ol
                    class="breadcrumb float-sm-right"
                    style={{ marginLeft: "490px" }}
                  >
                    <li class="breadcrumb-item">
                      <NavLink to={`/admin/addteam`}>
                        <button className="btn btn-primary">Add New</button>
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Details</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{d.name}</td>
                        <td>{d.designation}</td>
                        <td>{d.details}</td>
                        <td>
                          <img
                            src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${d.photo}`}
                            alt={d.title}
                            height={100}
                          />
                        </td>
                        <td>
                          <NavLink to={`/admin/updateteam/${d.id}`}>
                            <button className="btn btn-xs btn-info">
                              Edit
                            </button>
                          </NavLink>
                          <button
                            className="btn btn-xs btn-danger"
                            onClick={() => deleteteam(d.id)}
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
