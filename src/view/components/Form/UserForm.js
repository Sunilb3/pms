import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./UserForm.scss";
const UserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    hospitalId: "",
    age: "",
    dateOfBirth: "",
    email: "",
    contactNumber: "",
    nationality: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        hospitalId: user.hospitalId,
        age: user.age,
        dateOfBirth: user.dateOfBirth,
        email: user.email,
        contactNumber: user.contactNumber,
        nationality: user.nationality,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <h2>{user ? "Edit Patient Details" : "New Patient Registration"}</h2>
        <div className="modal-container">
          <form onSubmit={handleSubmit}>
            <div className="left-form">
              <label>
                HospitalId
                <input
                  type="text"
                  name="hospitalId"
                  value={formData.hospitalId}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Full Name
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Age
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Date of Birth
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="right-form">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Contact Number
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Nationality
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <Button
              name={user ? "Update" : "Register"}
              className="button button--secondaryButton"
              type="submit"
            />
            <Button
              name="Cancel"
              className="button button--secondaryButton"
              onClick={handleCancel}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;