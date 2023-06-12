import React, { useState } from "react";
import { FaUsers, FaBars } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import CustomCalendar from "../Calendar/CustomCalendar";
import AddPatientForm from "../../Pages/Dashboard/AddPatientForm";
import { createPatientsRequest } from "../../store/patientActions";
import { useDispatch } from "react-redux";

import "./Sidebar.scss";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPatientButtons, setShowPatientButtons] = useState(false);
  const [isAddPatient, setIsAddPatient] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePatientsClick = () => {
    setShowPatientButtons(!showPatientButtons);
  };
  const handleSubmitAddPatient = (formData) => {
    dispatch(createPatientsRequest(formData));
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
  return (
    <>
      <div className="main-container">
        <div className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
          <div className="sidebar-header">
            <div className="sidebar-icon">
              <FaBars size={22} onClick={handleSidebarToggle} />
            </div>
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
        {isModalOpen && <CustomCalendar onClose={handleModalClose} />}
        {isAddPatient && (
          <AddPatientForm
            onSubmit={handleSubmitAddPatient}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
