import {
    DEPARTMENTS_LOAD_START,
    DEPARTMENTS_LOAD_SUCCESS,
    DEPARTMENTS_LOAD_FAIL
} from '../constants/departments';

const initialState = {
  departments: [],
  fetching: false
};

export default function departmentsState (state = initialState, action) {
  switch(action.type){
    case DEPARTMENTS_LOAD_START:
      return { ...state, fetching: true }
    case DEPARTMENTS_LOAD_SUCCESS:
      return { ...state, departments: action.payload, fetching: false }
    case DEPARTMENTS_LOAD_FAIL:
      return { ...state, error: action.payload, fetching: false }
    default:
      return state;
  }
};