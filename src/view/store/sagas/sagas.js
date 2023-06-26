import { all } from "redux-saga/effects";
import { fetchPatients } from "./fetchPatientsSaga/fetchPatientsSaga";
import { createPatients } from "./createPatientsSaga/createPatientsSaga";
import { deletePatient } from "./deletePatientsSaga/deletePatientsSaga";
import { updatePatient } from "./updatePatientsSaga/updatePatientsSaga";

function* rootSaga() {
  yield all([
    fetchPatients(),
    createPatients(),
    deletePatient(),
    updatePatient(),
  ]);
}

export default rootSaga;
