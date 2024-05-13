import Admin2_asidebar from "../../Admin2_asidebar";
import Admin2_nav from "../../Admin2_nav";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTeam() {
    const { id } = useParams();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [details, setDetails] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(
      `http://localhost/Reactjs/31-01-24/seelife/backend/crud/team/editteam.php?id=${id}`)
      .then((res)=>{
        setName(res.data.name)
        setDesignation(res.data.designation)
        setDetails(res.data.name)
        setPhoto(res.data.photo)
      })
  },[]);
  const save = () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("designation", designation);
    formdata.append("details", details);
    formdata.append("photo", photo);
    formdata.append('id',id)

    axios
      .post(
        "http://localhost/Reactjs/31-01-24/seelife/backend/crud/team/updateteam.php",
        formdata,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setName("");
        setDesignation("");
        setPhoto("");
        setDetails("");
        navigate("/admin/teamlist");
      });
  };
  return (
    <>

<Admin2_asidebar/>
<div className="content">
   <Admin2_nav/>
   
<main>
   <div className='card card-body'>




   <div>
      <table className="table table-borderd">
        <tbody>
          <tr>
            <th>Name</th>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </td>
            <th>Photo</th>
            <td>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setPhoto(e.target.files[0])}
                
              />
              <div>
                <img height={100} src={`http://localhost/Reactjs/31-01-24/seelife/backend/crud/images/${photo}`}/>
              </div>
            </td>
          </tr>
          <tr>
            <th>Designation</th>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setDesignation(e.target.value)}
                value={designation}
              />
            </td>
            <th>Details</th>
            <td>
              <textarea
                className="form-control"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
              ></textarea>
            </td>
          </tr>
          <tr>
            <th>
              <button onClick={save} className="btn btn-success">Save</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>


   </div>
</main>
   
 </div>
</>
  )
}
