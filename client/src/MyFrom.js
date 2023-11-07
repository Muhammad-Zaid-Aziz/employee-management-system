import React, { Fragment, useState } from "react";
// import ReactDOM from "react-dom/client";
const MyFrom = () => {
  const [name, setName] = useState("");
  const [idNo, setIdNo] = useState("");
  const [phone, setPhone] = useState("");
  let [workingStatus, setWorkingStatus] = useState(false);
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");
  const [action, setAction] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Employee name: ${name}
    Id: ${idNo}
    Phone: ${phone}
    workingStatus: ${workingStatus}
    department: ${department}
    address: ${address}
    action: ${action}`);

    <table>
      <th></th>
    </table>;
  };

  function refreshPage() {
    return window.location.reload(false);
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          ID:
          <input
            type="text"
            value={idNo}
            onChange={(e) => setIdNo(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          PHONE:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          WORKING STATUS:
          <input
            type="checkbox"
            defaultChecked={workingStatus}
            //   value={workingStatus}
            onChange={(e) => setWorkingStatus(!workingStatus)}
          />
        </label>{" "}
        <br />
        <label>
          SELECT DEPARTMENT:
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value=""></option>
            <option value="None of them">None of them</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Chemical Engineering">Chemical Engineering</option>
          </select>
        </label>{" "}
        <br />
        <label>
          ADDRESS:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />{" "}
          <br />
        </label>
        <label>
          ACTION:
          <input
            type="text"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          />
        </label>{" "}
        <br />
        <input type="submit" />
      </form>
      <button onClick={refreshPage}>Reset</button>
    </Fragment>
  );
};

export default MyFrom;
