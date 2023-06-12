import { all } from "redux-saga/effects";
import { fetchPatients } from "./fetchPatientsSaga/fetchPatientsSaga";
import { createPatients } from "./createPatientsSaga/createPatientsSaga";
import { deletePatient } from "./deletePatientsSaga/deletePatientsSaga";

function* rootSaga() {
  yield all([fetchPatients(), createPatients(), deletePatient()]);
}

export default rootSaga;
