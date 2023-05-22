import {
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_FAILURE,
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
    default:
      return state;
  }
};

export default patientReducer;
