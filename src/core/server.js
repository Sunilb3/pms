const express = require("express");
const app = express();

const patientsContr = require("./controllers/patientsController");
const port = 8080;

app.get("/patients", patientsContr.getPatients);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
