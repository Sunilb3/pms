const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "../../.env" });
app.use(cors());

app.use(express.json());

const patientsContr = require("./controllers/patientsController");
const port = 8080;

app.get("/patients", patientsContr.getPatients);
app.get("/patientsbyid", patientsContr.getPatientsbyid);
app.post("/patients", patientsContr.createPatient);
app.delete("/patients", patientsContr.deletePatient);
app.put("/patients/:id", patientsContr.updatePatient);
app.patch("/patients", patientsContr.patchPatient);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
