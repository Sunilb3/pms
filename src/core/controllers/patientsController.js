const models = require("../models/index");

//Get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await models.Patients.findAll();
    if (!patients || patients.length === 0) {
      return res.status(404).json({ error: "No patients found" });
    }
    res.json({ patients });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve patients", error });
  }
};

//Get patient by id
const getPatientById = async (req, res) => {
  try {
    const patientId = req.query.patientId;

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
    const requiredParameters = [
      "hospitalId",
      "fullName",
      "age",
      "dateOfBirth",
      "gender",
      "email",
      "contactNumber",
      "nationality",
    ];

    // Check if all required parameters are present
    const missingParameters = requiredParameters.filter(
      (param) => !(param in req.body)
    );
    if (missingParameters.length > 0) {
      return res.status(400).json({
        error: `Missing required parameters: ${missingParameters.join(", ")}`,
      });
    }
    const patient = await models.Patients.create(req.body);
    res.status(201).json({ patient });
  } catch (error) {
    res.status(500).json({ error: "Failed to create patient", error });
  }
};

// delete patient
const deletePatient = async (req, res) => {
  try {
    const { patientId } = req.query;
    if (!patientId) {
      return res.status(400).json({ error: "Patient ID is required" });
    }
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
    if (!id) {
      return res.status(400).json({ error: "Patient ID is required" });
    }
    const {
      hospitalId,
      fullName,
      age,
      dateOfBirth,
      gender,
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
        gender,
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
  getAllPatients,
  getPatientById,
  createPatient,
  deletePatient,
  updatePatient,
  patchPatient,
};
