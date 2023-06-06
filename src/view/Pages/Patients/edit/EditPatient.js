import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import "./EditPatient.scss";

const EditPatient = ({ patient, onCloseEditModal }) => {
  const [editedPatient, setEditedPatient] = useState({
    fullName: patient.fullName,
    age: patient.age,
    gender: patient.gender,
    dateOfBirth: patient.dateOfBirth,
    email: patient.email,
    contactNumber: patient.contactNumber,
    nationality: patient.nationality,
  });

  const [showEditModal, setShowEditModal] = useState(true);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === "radio" ? value : value.trim();
    setEditedPatient((prevPatient) => ({
      ...prevPatient,
      [name]: newValue,
    }));
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleUpdatePatient = () => {
    console.log(editedPatient);
    closeEditModal();
  };
  return (
    <>
      {showEditModal && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h2>Edit Patient Details</h2>
            <div className="modal-container">
              <form>
                <div className="left-form">
                  <label>
                    Full Name
                    <input
                      type="text"
                      name="fullName"
                      value={editedPatient.fullName}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Age
                    <input
                      type="number"
                      name="age"
                      value={editedPatient.age}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>Gender</label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={editedPatient.gender === "male"}
                    onChange={handleInputChange}
                  />
                  <br />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={editedPatient.gender === "female"}
                    onChange={handleInputChange}
                  />
                  <br />
                  Female
                  <label>
                    Date of Birth
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={editedPatient.dateOfBirth}
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
                      value={editedPatient.email}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Contact Number
                    <input
                      type="text"
                      name="contactNumber"
                      value={editedPatient.contactNumber}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Nationality
                    <input
                      type="text"
                      name="nationality"
                      value={editedPatient.nationality}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <Button
                  name="Update"
                  className="button button--secondaryButton"
                  onClick={handleUpdatePatient}
                />
                <Button
                  name="Cancel"
                  className="button button--secondaryButton"
                  onClick={onCloseEditModal}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPatient;
