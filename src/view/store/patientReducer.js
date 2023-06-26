import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_FAILURE,
  DELETE_PATIENT_REQUEST,
  DELETE_PATIENT_FAILURE,
  UPDATE_PATIENT_REQUEST,
  UPDATE_PATIENT_FAILURE,
  UPDATE_PATIENT_SUCCESS,
} from "../constants/constants";

const initialState = {
  patients: [],
  error: null,
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENTS_REQUEST:
      return {
        ...state,
      };
    case FETCH_PATIENTS_SUCCESS:
      return {
        ...state,
        patients: action.payload,
      };
    case FETCH_PATIENTS_FAILURE:
      return {
        ...state,
        patients: [],
        error: action.payload,
      };
    case CREATE_PATIENT_REQUEST:
      return {
        ...state,
      };

    case CREATE_PATIENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_PATIENT_REQUEST:
      return {
        ...state,
      };

    case DELETE_PATIENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_PATIENT_REQUEST:
      return {
        ...state,
      };

    case UPDATE_PATIENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default patientReducer;
