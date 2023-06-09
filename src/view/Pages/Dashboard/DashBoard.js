import React from "react";
import "./dashboard.scss";
import { MdFace3, MdFace6 } from "react-icons/md";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  const patients = [
    {
      name: "Tom Dsoza",
      age: 25,
      email: "tom@gmail.com",
      contact: "7564367456",
      emergancyContact: "6354726457",
      isActive: true,
      gender: "male",
    },
    {
      name: "Jack Maa",
      age: 28,
      email: "jack@gmail.com",
      contact: "7564367456",
      emergancyContact: "5637243554",
      isActive: false,
      gender: "male",
    },
    {
      name: "Mick Howell",
      age: 26,
      email: "mick@gmail.com",
      emergancyContact: "563546375",
      contact: "7564367456",
      isActive: true,
      gender: "female",
    },
    {
      name: "Ervin Howell",
      age: 30,
      email: "sady@gmail.com",
      contact: "7564367456",
      emergancyContact: "57565354",
      isActive: false,
      gender: "female",
    },
    {
      name: "Jerry Tom",
      age: 28,
      email: "jerry@gmail.com",
      contact: "7564367456",
      emergancyContact: "6574645344",
      isActive: true,
      gender: "male",
    },
    {
      name: "Adrew Dietrich",
      age: 30,
      contact: "7564367456",
      emergancyContact: "7452536353",
      email: "adrew@gmail.com",
      isActive: true,
      gender: "female",
    },
    {
      name: "George Fernadies",
      age: 20,
      email: "george@gmail.com",
      contact: "7564367456",
      emergancyContact: "565464537",
      isActive: true,
      gender: "female",
    },
    {
      name: "George Fernadies",
      age: 34,
      email: "george@gmail.com",
      contact: "7564367456",
      emergancyContact: "5463543643",
      isActive: true,
      gender: "male",
    },
  ];

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main">
        <div className="main-content">
          <div className="main-cards">
            {patients.map((patient, index) => (
              <div className="sub-card" key={index}>
                {patient.gender === "male" ? (
                  <MdFace6 size={45} className="icon" />
                ) : (
                  <MdFace3 size={45} className="icon" />
                )}
                <p
                  className={`${
                    patient.isActive ? "active-dot" : "inactive-dot"
                  }`}
                ></p>
                <h3>{patient.name}</h3>

                <div className="card-info">
                  <div className="left-info">
                    <p>Age: {patient.age}</p>
                    <p>Email: {patient.email}</p>
                  </div>
                  <div className="right-info">
                    <p>Contact: {patient.contact}</p>
                    <p>Emergency: {patient.emergancyContact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
