import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_PATIENTS_REQUEST } from "../../../constants/constants";
import {
  fetchPatientsSuccess,
  fetchPatientsFailure,
} from "../../patientActions";

const apiUrl = process.env.REACT_APP_API_PATH;

function* fetchPatientsSaga() {
  try {
    const response = yield call(axios.get, `${apiUrl}patients`);
    yield put(fetchPatientsSuccess(response.data));
  } catch (error) {
    yield put(fetchPatientsFailure(error.message));
  }
}

export function* fetchPatients() {
  yield takeEvery(FETCH_PATIENTS_REQUEST, fetchPatientsSaga);
}
