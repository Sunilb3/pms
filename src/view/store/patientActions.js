import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_FAILURE,
  CREATE_PATIENT_SUCCESS,
  DELETE_PATIENT_REQUEST,
  DELETE_PATIENT_SUCCESS,
  DELETE_PATIENT_FAILURE,
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

export const createPatientsRequest = (patientsData) => ({
  type: CREATE_PATIENT_REQUEST,
  payload: patientsData,
});

export const createPatientsSuccess = (patients) => ({
  type: CREATE_PATIENT_SUCCESS,
  payload: patients,
});
export const createPatientsFailure = (error) => ({
  type: CREATE_PATIENT_FAILURE,
  payload: error,
});

export const deletePatientsRequest = (patientId) => ({
  type: DELETE_PATIENT_REQUEST,
  payload: patientId,
});

export const deletePatientsSuccess = (patientId) => ({
  type: DELETE_PATIENT_SUCCESS,
  payload: patientId,
});

export const deletePatientsFailure = (error) => ({
  type: DELETE_PATIENT_FAILURE,
  payload: error,
});
