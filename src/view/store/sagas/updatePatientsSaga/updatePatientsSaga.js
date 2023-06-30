import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { UPDATE_PATIENT_REQUEST } from "../../../constants/constants";
import {
  updatePatientsFailure,
  updatePatientsSuccess,
  fetchPatientsRequest,
} from "../../patientActions";

const apiUrl = process.env.REACT_APP_API_PATH;

function* updatePatientSaga(action) {
  try {
    const { patientId, patientData } = action.payload;

    const response = yield call(
      axios.put,
      `${apiUrl}patients/${patientId}`,
      patientData
    );
    if (response.status === 200) {
      yield put(updatePatientsSuccess(patientId));
      yield put(fetchPatientsRequest());
    } else {
      yield put(updatePatientsFailure("Error updating patient"));
    }
  } catch (error) {
    yield put(updatePatientsFailure(error.message));
  }
}

export function* updatePatient() {
  yield takeEvery(UPDATE_PATIENT_REQUEST, updatePatientSaga);
}
