import React from "react";

const demo = () => {
  return (
    <div>
      <h1>Employee Managment System</h1>
      <p>Name:</p> <input id="name-id" />
      <hr />
      <p>ID:</p> <input id="id-id" />
      <hr />
      <p>PHONE:</p> <input id="phone-id" />
      <hr />
      <p>WORKING STATUS:</p> <input id="workingStatus-id" />
      <hr />
      <p>DEPARTMENT:</p> <input id="department-id" />
      <hr />
      <p>ADDRESS:</p> <input id="address-id" />
      <hr />
      <p>ACTION:</p> <input id="action-id" />
      <hr />
      <p id="demo">BMI</p>
      <button
        id="btn"
        onClick={() => {
          let name = document.getElementById("name-id").value;
          let id = document.getElementById("id-id").value;
          let phone = document.getElementById("phone-id").value;
          let workingStatus = document.getElementById("workingStatus-id").value;
          let department = document.getElementById("department-id").value;
          let address = document.getElementById("address-id").value;
          let action = document.getElementById("action-id").value;
          document.getElementById("demo").innerHTML = `<Fragment>
        <hr />
        <p>Name: ${name}</p>
        <p>Id: ${id}</p>
        <p>Phone: ${phone}</p>
        <p>workingStatus: ${workingStatus}</p>
        <p>department: ${department}</p>
        <p>address: ${address}</p>
        <p>action: ${action}</p>
        <hr />
        </Fragment>`;
        }}
      >
        Update
      </button>
    </div>
  );
};

export default demo;
