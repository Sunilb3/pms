import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_PATIENTS_REQUEST } from "../constants/constants";
import { fetchPatientsSuccess, fetchPatientsFailure } from "./patientActions";

const apiUrl = process.env.REACT_APP_API_PATH;

function* performRequest(successAction, failureAction) {
  try {
    const response = yield call(axios.get, `${apiUrl}patients`);
    yield put(successAction(response.data));
  } catch (error) {
    yield put(failureAction(error.message));
  }
}

function* fetchPatientsSaga() {
  yield* performRequest(fetchPatientsSuccess, fetchPatientsFailure);
}

function* rootSaga() {
  yield takeEvery(FETCH_PATIENTS_REQUEST, fetchPatientsSaga);
}

export default rootSaga;
