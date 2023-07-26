import { call, put, takeEvery, delay } from "redux-saga/effects";
import axios from "axios";
import { FETCH_PATIENTS_REQUEST } from "../../../constants/constants";
import {
  fetchPatientsSuccess,
  fetchPatientsFailure,
} from "../../patientActions";

const apiUrl = process.env.REACT_APP_API_PATH;

function* fetchPatientsSaga() {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    if (!accessToken) {
      yield delay(2000);
    }
    const updatedAccessToken = sessionStorage.getItem("accessToken");
    const headers = { Authorization: `Bearer ${updatedAccessToken}` };
    const response = yield call(axios.get, `${apiUrl}patients`, { headers });
    const patients = response.data.patients;
    yield put(fetchPatientsSuccess(patients));
  } catch (error) {
    yield put(fetchPatientsFailure(error.message));
  }
}

export function* fetchPatients() {
  yield takeEvery(FETCH_PATIENTS_REQUEST, fetchPatientsSaga);
}
