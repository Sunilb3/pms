import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import { FaUsers } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUserAdd, AiFillDelete } from "react-icons/ai";

import { MdFace6 } from "react-icons/md";
import CustomCalendar from "../../components/Calendar/CustomCalendar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPatientsRequest,
  createPatientRequest,
  deletePatientRequest,
} from "../../store/patientActions";
import AddPatientForm from "./AddPatientForm";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPatientButtons, setShowPatientButtons] = useState(false);
  const [isAddPatient, setIsAddPatient] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePatientsClick = () => {
    setShowPatientButtons(!showPatientButtons);
  };

  const patients = useSelector((state) => state.patients.patients);
  const dispatch = useDispatch();
  console.log(patients);

  const fetchPatients = () => dispatch(fetchPatientsRequest());
  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSubmitAddPatient = (formData) => {
    dispatch(createPatientRequest(formData));
    setFormData({
      fullName: "",
      age: "",
      email: "",
      contactNumber: "",
      nationality: "",
      hospitalId: "",
      dateOfBirth: "",
    });
    setIsAddPatient(false);
  };

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

  const handleDeletePatient = (patientId) => {
    dispatch(deletePatientRequest(patientId));
    console.log(patientId);
  };
  return (
    <>
      <Header />
      <div className="main">
        <div className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
          <div className="sidebar-header">
            <button className="sidebar-toggle" onClick={handleSidebarToggle}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
          <ul className="sidebar-menu">
            <li className={sidebarOpen ? "visible" : ""}>
              <MdCalendarMonth size={30} onClick={handleModalOpen} />
              <p>Calendar</p>
            </li>
            <li
              className={sidebarOpen ? "visible" : ""}
              onClick={handlePatientsClick}
            >
              <AiOutlineUserAdd size={30} />
              <p>Patients</p>
              {showPatientButtons && (
                <div className="patient-buttons">
                  <button onClick={() => setIsAddPatient(true)}>
                    (+) add patient
                  </button>
                </div>
              )}
            </li>
            <li className={sidebarOpen ? "visible" : ""}>
              <FaUsers size={30} />
              <p>My Peers</p>
            </li>
            <li className={sidebarOpen ? "visible" : ""}>
              <FiLogOut size={30} />
              <p>Log-out</p>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <div className="main-cards">
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
        {isAddPatient && (
          <AddPatientForm
            onSubmit={handleSubmitAddPatient}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {isModalOpen && <CustomCalendar onClose={handleModalClose} />}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
