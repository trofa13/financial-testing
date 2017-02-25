import {
    DEPARTMENTS_LOAD_START,
    DEPARTMENTS_LOAD_SUCCESS,
    DEPARTMENTS_LOAD_FAIL,
    DEPARTMENTS_ADD_START,
    DEPARTMENTS_ADD_SUCCESS,
    DEPARTMENTS_ADD_FAIL,
    DEPARTMENTS_REMOVE_START,
    DEPARTMENTS_REMOVE_SUCCESS,
    DEPARTMENTS_REMOVE_FAIL
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
    case DEPARTMENTS_ADD_SUCCESS:
      return { ...state, departments: state.departments.concat([action.payload])}
    case DEPARTMENTS_REMOVE_SUCCESS:
      return { ...state, departments: state.departments.filter(dep => dep.id !== action.payload)}
    default:
      return state;
  }
};