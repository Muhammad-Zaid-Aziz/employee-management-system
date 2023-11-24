import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    idNo: "",
    phone: "",
    workingStatus: false,
    department: "",
    address: "",
    action: "",
  });

  const [users, setUsers] = useState([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox separately due to its boolean nature
    const newValue = type === "checkbox" ? checked : value;
    // callback function which
    setFormData((prevData) => ({
      ...prevData, // spread operators
      [name]: newValue, // dynamically adds a new key-value pair
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUserIndex === null) {
      // Create a new user object
      const newUser = { ...formData };

      // Update the users state with the new user
      setUsers([...users, newUser]);
    } else {
      // Update existing user data
      const updatedUsers = [...users];
      updatedUsers[selectedUserIndex] = formData;
      setUsers(updatedUsers);

      // Reset the selectedUserIndex after updating
      setSelectedUserIndex(null);
    }

    // Clear the form fields
    setFormData({
      name: "",
      idNo: "",
      phone: "",
      workingStatus: false,
      department: "",
      address: "",
      action: "",
    });
  };

  const handleDelete = (index) => {
    // Remove the user at the specified index
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleUpdate = (index) => {
    // Set the form data to the selected user for updating
    const selectedUser = users[index];
    setFormData({ ...selectedUser });

    // Set the selected user index for tracking during update
    setSelectedUserIndex(index);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formData">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ID:
          <input
            type="text"
            name="idNo"
            value={formData.idNo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Working Status:
          <input
            type="checkbox"
            name="workingStatus"
            checked={formData.workingStatus}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Department:
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>

            <option value="Computer Science">Computer Science</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Chemical Engineering">Electrical Engineering</option>
            <option value="Chemical Engineering">Civil Engineering</option>
            <option value="None of them">None of them</option>
          </select>
        </label>

        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">
          {selectedUserIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>ID</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Department</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.idNo}</td>
              <td>{user.phone}</td>
              <td>{user.workingStatus ? "Active" : "Inactive"}</td>
              <td>{user.department}</td>
              <td>{user.address}</td>
              <td>
                {user.action}{" "}
                <button onClick={() => handleUpdate(index)}>Update</button>{" "}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyForm;
