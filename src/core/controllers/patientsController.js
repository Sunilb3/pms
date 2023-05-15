const models = require("../models/index");

var getPatients = async (req, res) => {
  try {
    const patients = await models.Patients.findAll();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve patients", error });
  }
};

module.exports = {
  getPatients,
};
