import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
  CREATE_PATIENT_REQUEST,
  DELETE_PATIENT_REQUEST,
} from "../constants/constants";

const initialState = {
  patients: [],
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
      };
    case CREATE_PATIENT_REQUEST:
      return {
        ...state,
        patients: [...state.patients, action.payload],
      };
    case DELETE_PATIENT_REQUEST:
      return {
        ...state,
        patients: state.patients.filter(
          (patient) => patient.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default patientReducer;
