import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddEvent() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [btn, setBtn] = useState("");
  const navigate = useNavigate();
  const save = () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("photo", photo);
    formdata.append("details", details);
    formdata.append("days", days);
    formdata.append("hours", hours);
    formdata.append("minutes", minutes);
    formdata.append("seconds", seconds);
    formdata.append("btn", btn);

    axios
      .post(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/event/addEvent.php",
        formdata,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setPhoto("");
        setDetails("");
        setDays("");
        setHours("");
        setMinutes("");
        setSeconds("");
        setBtn("");
        navigate("/admin/eventlist");
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
                  <h1>Add Upcoming Events</h1>
                </div>
                <div class="col-sm-6">
                  <ol
                    class="breadcrumb float-sm-right"
                    style={{ marginLeft: "485px" }}
                  >
                    <li class="breadcrumb-item">
                      <NavLink className="btn" to={`/admin/eventlist`}>
                        <h4 className="btn btn-primary">Event list</h4>
                      </NavLink>
                    </li>
                  </ol>
                </div>
              </div>

              <table className="table table-borderd">
                <tbody>
                  <tr>
                    <th>Title</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </td>
                    <th>Photo</th>
                    <td>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setPhoto(e.target.files[0])}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Details</th>
                    <td>
                      <textarea
                        className="form-control"
                        onChange={(e) => setDetails(e.target.value)}
                        value={details}
                      ></textarea>
                    </td>
                    <th>Days</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setDays(e.target.value)}
                        value={days}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Hours</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setHours(e.target.value)}
                        value={hours}
                      />
                    </td>
                    <th>Minutes</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setMinutes(e.target.value)}
                        value={minutes}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Seconds</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setSeconds(e.target.value)}
                        value={seconds}
                      />
                    </td>
                    <th>Button</th>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setBtn(e.target.value)}
                        value={btn}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <button onClick={save} className="btn btn-success">
                        Save
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
