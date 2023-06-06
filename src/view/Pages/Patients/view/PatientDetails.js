import React, { useState } from "react";
import { FaUserAlt, FaEdit } from "react-icons/fa";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./PatientDetails.scss";
import EditPatient from "../edit/EditPatient";

const PatientDetails = () => {
  const [showEditModal, setShowEditModal] = useState(false);

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

  const openEditModal = () => {
    console.log("open modal");
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    console.log("close modal");
    setShowEditModal(false);
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
            <div className="right-card-container">
              <div className="right-card-heading">
                <p>Age </p>
                <p>Date Of Birth </p>
                <p>Gender </p>
                <p>Address </p>
                <p>Nationality </p>
              </div>

              <div className="rigt-card-sub">
                <p> {patient.age}</p>
                <p>{patient.dateOfBirth}</p>
                <p>{patient.gender}</p>
                <p>#23 building no.9 BGL</p>
                <p>{patient.nationality}</p>
              </div>
            </div>

            <div className="edit-button">
              <FaEdit size={20} onClick={() => openEditModal()} />
              <br />
              Edit
            </div>
          </div>
          {showEditModal && (
            <EditPatient patient={patient} onCloseEditModal={closeEditModal} />
          )}
        </div>
      ))}

      <Footer />
    </>
  );
};

export default PatientDetails;
