import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientsRequest } from "../../store/patientActions";

const Patients = () => {
  const patients = useSelector((state) => state.patients.patients);
  const dispatch = useDispatch();
  const fetchPatients = () => dispatch(fetchPatientsRequest());
  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <>
      <h1>Patients Details</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Hospital ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} id={`patient-${patient.id}`}>
              <td>{patient.patientId}</td>
              <td>{patient.hospitalId}</td>
              <td>{patient.fullName}</td>
              <td>{patient.age}</td>
              <td>{patient.dateOfBirth}</td>
              <td>{patient.email}</td>
              <td>{patient.contactNumber}</td>
              <td>{patient.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Patients;
