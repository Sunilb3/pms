import React, { useState } from "react";
import { FaUserAlt, FaEdit } from "react-icons/fa";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import "./patient-details.scss";
import Sidebar from "../../components/Sidebar/Sidebar";

const PatientDetails = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedPatient, setEditedPatient] = useState({
    fullName: "",
    age: 0,
    gender: "",
    dateOfBirth: "",
    email: "",
    contactNumber: "",
    nationality: "",
  });

  const patients = [
    {
      fullName: "Tom",
      age: 23,
      gender: "female",
      dateOfBirth: "1999-05-20",
      email: "tom@example.com",
      contactNumber: "1234567890",
      nationality: "INDIAN",
    },
  ];

  const openEditModal = (patient) => {
    setEditedPatient(patient);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === "radio" ? value : value.trim();
    setEditedPatient((prevPatient) => ({
      ...prevPatient,
      [name]: newValue,
    }));
  };

  const handleUpdatePatient = () => {
    closeEditModal();
  };

  return (
    <>
      <Header />
      <Sidebar />

      <div className="centered-text">
        <h2>Patients Details</h2>
      </div>
      {patients.map((patient, index) => (
        <div className="cards-container" key={index}>
          <div className="left-card">
            <div className="flip-container">
              <div className="flipper">
                <div className="front">
                  <div className="avatar">
                    <div
                      className={`avatar ${
                        patient.gender === "male"
                          ? "male-color"
                          : "female-color"
                      }`}
                    >
                      <FaUserAlt size={200} />
                    </div>
                  </div>
                </div>
                <div className="back">
                  <h2>{patient.fullName}</h2>
                  <p>Email: {patient.email}</p>
                  <p>Contact: {patient.contactNumber}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-card">
            <div className="main-text-style">
              <p>Age </p>
              <br />
              <p>Date Of Birth </p>
              <br />
              <p>Gender </p>
              <br />
              <p>Address </p>
              <br />
              <p>Nationality </p>
              <br />
            </div>

            <div className="sub-text-style">
              <p> {patient.age}</p>
              <br />
              <p>{patient.dateOfBirth}</p>
              <br />
              <p>{patient.gender}</p>
              <br />
              <p>#23 building no.9 BGL</p>
              <br />
              <p>{patient.nationality}</p>
              <br />
            </div>

            <div className="edit-button">
              <FaEdit size={20} onClick={() => openEditModal(patient)} />
              <br />
              Edit
            </div>
          </div>
        </div>
      ))}

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
                  <label className="">Gender</label>
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
                  onClick={closeEditModal}
                />
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default PatientDetails;
