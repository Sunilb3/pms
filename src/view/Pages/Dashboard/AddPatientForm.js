import React, { useState } from "react";

const AddPatientForm = ({ onSubmit }) => {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="hospitalId"
        placeholder="HospitalId"
        value={formData.hospitalId}
        onChange={handleInputChange}
      />

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dateOfBirth"
        placeholder="DateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="contactNumber"
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="nationality"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPatientForm;
