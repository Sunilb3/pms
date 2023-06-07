import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_PATIENTS_REQUEST,
  CREATE_PATIENT_REQUEST,
  DELETE_PATIENT_REQUEST,
} from "../constants/constants";
import {
  fetchPatientsSuccess,
  fetchPatientsFailure,
  fetchPatientsRequest,
} from "./patientActions";

const apiUrl = process.env.REACT_APP_API_PATH;

function* performRequest(successAction, failureAction) {
  try {
    const response = yield call(axios.get, `${apiUrl}patients`);
    yield put(successAction(response.data));
  } catch (error) {
    yield put(failureAction(error.message));
  }
}
function* performPostRequest(action) {
  try {
    const response = yield call(
      axios.post,
      `${apiUrl}patients`,
      action.payload,
      console.log(action.payload)
    );
    yield put(fetchPatientsRequest());
    yield put(fetchPatientsSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    yield put(fetchPatientsFailure(error.message));
  }
}

function* fetchPatientsSaga() {
  yield* performRequest(fetchPatientsSuccess, fetchPatientsFailure);
}

function* performDeleteRequest(action) {
  try {
    console.log("hello");
    yield call(axios.delete, `${apiUrl}patients?patientId=${action.payload}`);
    console.log(action.payload);
    yield put(fetchPatientsRequest());
    console.log("hu");
  } catch (error) {
    yield put(fetchPatientsFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_PATIENTS_REQUEST, fetchPatientsSaga);
  yield takeEvery(CREATE_PATIENT_REQUEST, performPostRequest);
  yield takeEvery(DELETE_PATIENT_REQUEST, performDeleteRequest);
}

export default rootSaga;
