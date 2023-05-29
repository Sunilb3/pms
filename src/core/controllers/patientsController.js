const models = require("../models/index");

//Get all patients
const getPatients = async (req, res) => {
  try {
    const patients = await models.Patients.findAll();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve patients", error });
  }
};

//Get patient by id
const getPatientsbyid = async (req, res) => {
  try {
    const patientId = req.query.patientId; // Updated to retrieve patientId from query parameters

    if (!patientId) {
      return res.status(400).json({ error: "Patient ID is required" });
    }

    const patient = await models.Patients.findByPk(patientId);

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve patient", error });
  }
};

//create patient
const createPatient = async (req, res) => {
  try {
    const {
      hospitalId,
      fullName,
      age,
      dateOfBirth,
      email,
      contactNumber,
      nationality,
    } = req.body;
    const patient = await models.Patients.create({
      hospitalId,
      fullName,
      age,
      dateOfBirth,
      email,
      contactNumber,
      nationality,
    });
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: "Failed to create patient", error });
  }
};

// delete patient
const deletePatient = async (req, res) => {
  try {
    const { patientId } = req.query;
    const deletedPatient = await models.Patients.destroy({
      where: { patientId },
    });
    if (!deletedPatient) {
      res.status(404).json({ error: "Patient not found" });
    } else {
      res.json({ message: "Patient deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete patient", error });
  }
};

//update patient
const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      hospitalId,
      fullName,
      age,
      dateOfBirth,
      email,
      contactNumber,
      nationality,
    } = req.body;
    const updatedPatient = await models.Patients.update(
      {
        hospitalId,
        fullName,
        age,
        dateOfBirth,
        email,
        contactNumber,
        nationality,
      },
      {
        where: { patientId: id },
      }
    );
    if (updatedPatient[0] === 0) {
      res.status(404).json({ error: "Patient not found" });
    } else {
      res.json({ message: "Patient updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update patient", error });
  }
};

//update patient using patch
const patchPatient = async (req, res) => {
  try {
    const { patientId } = req.query;

    if (!patientId) {
      return res.status(400).json({ error: "Patient ID is required" });
    }

    const patient = await models.Patients.findByPk(patientId);

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    const updatedPatient = await patient.update(req.body);

    res.json({
      message: "Patient updated successfully",
      patient: updatedPatient,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update patient", error });
  }
};

module.exports = {
  updatePatient,
};

module.exports = {
  getPatients,
  getPatientsbyid,
  createPatient,
  deletePatient,
  updatePatient,
  patchPatient,
};
