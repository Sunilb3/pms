import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import { AiFillDelete } from "react-icons/ai";
import { MdFace6 } from "react-icons/md";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPatientsRequest,
  deletePatientsRequest,
} from "../../store/patientActions";

import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  const patients = useSelector((state) => state.patients.patients);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.patients.error);

  const fetchPatients = () => dispatch(fetchPatientsRequest());
  useEffect(() => {
    fetchPatients();
  }, []);

  const handleDeletePatient = (patientId) => {
    dispatch(deletePatientsRequest(patientId));
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main">
        <div className="main-content">
          <div className="main-cards">
            {error && <p>Error :{error}</p>}
            {Array.isArray(patients) && patients.length > 0 ? (
              patients.map((patient) => (
                <div
                  className="sub-card"
                  key={patient.id}
                  id={`patient-${patient.id}`}
                >
                  <MdFace6 size={45} className="icon" />
                  <h3>{patient.fullName}</h3>
                  <div className="delete-icon">
                    <AiFillDelete
                      size={20}
                      onClick={() => handleDeletePatient(patient.patientId)}
                    />
                  </div>
                  <div className="card-info">
                    <div className="left-info">
                      <p>Age: {patient.age}</p>
                      <p>Email: {patient.email}</p>
                    </div>
                    <div className="right-info">
                      <p>Contact: {patient.contactNumber}</p>
                      <p>Nationality: {patient.nationality}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No patients found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
