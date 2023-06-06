import React, { useState } from "react";
import "./sidebar.scss";
import { FaUsers } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import CustomCalendar from "../Calendar/CustomCalendar";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="main-container">
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
            <li className={sidebarOpen ? "visible" : ""}>
              <AiOutlineUserAdd size={30} />
              <p>Patients</p>
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
      </div>
    </>
  );
};

export default Sidebar;
