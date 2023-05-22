const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "../../.env" });
app.use(cors());

const patientsContr = require("./controllers/patientsController");
const port = 8080;

app.get("/patients", patientsContr.getPatients);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
