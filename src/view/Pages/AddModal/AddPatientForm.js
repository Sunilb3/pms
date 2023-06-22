import React, { useState } from "react";
import "./AddpatientForm.scss";
import Button from "../../components/Button/Button";

const AddPatientForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    contactNumber: "",
    nationality: "",
    hospitalId: "",
    dateOfBirth: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="add-modal">
      <div className="add-modal-content">
        <h2>Add Patient Details</h2>
        <div className="add-modal-container">
          <form>
            <div className="left-form">
              <label>
                Hospital Id
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
              name="Submit"
              className="button button--secondaryButton"
              onClick={handleSubmit}
            />
            <Button
              name="Cancel"
              className="button button--secondaryButton"
              onClick={onClose}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatientForm;
