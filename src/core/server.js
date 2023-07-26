const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const { auth } = require("express-oauth2-jwt-bearer");

dotenv.config({ path: "../../.env" });
app.use(cors());

app.use(express.json());

const patientsContr = require("./controllers/patientsController");
const port = 8080;

const jwtCheck = auth({
  audience: "this is my identifier",
  issuerBaseURL: "https://pmsapplication.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

app.use(jwtCheck);

app.get("/patients", patientsContr.getAllPatients);
app.get("/patientsbyid", patientsContr.getPatientById);
app.post("/patients", patientsContr.createPatient);
app.delete("/patients", patientsContr.deletePatient);
app.put("/patients/:id", patientsContr.updatePatient);
app.patch("/patients", patientsContr.patchPatient);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
