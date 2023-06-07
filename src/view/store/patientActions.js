import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
  CREATE_PATIENT_REQUEST,
  DELETE_PATIENT_REQUEST,
} from "../constants/constants";

export const fetchPatientsRequest = () => ({
  type: FETCH_PATIENTS_REQUEST,
});

export const fetchPatientsSuccess = (patients) => ({
  type: FETCH_PATIENTS_SUCCESS,
  payload: patients,
});

export const fetchPatientsFailure = (error) => ({
  type: FETCH_PATIENTS_FAILURE,
  payload: error,
});

export const createPatientRequest = (patients) => ({
  type: CREATE_PATIENT_REQUEST,
  payload: patients,
});

export const deletePatientRequest = (patientId) => ({
  type: DELETE_PATIENT_REQUEST,
  payload: patientId,
});
