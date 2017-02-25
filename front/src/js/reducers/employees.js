import {
    EMPLOYEES_LOAD_START,
    EMPLOYEES_LOAD_SUCCESS,
    EMPLOYEES_LOAD_FAIL,
    EMPLOYEES_ADD_START,
    EMPLOYEES_ADD_SUCCESS,
    EMPLOYEES_ADD_FAIL,
    EMPLOYEES_REMOVE_START,
    EMPLOYEES_REMOVE_SUCCESS,
    EMPLOYEES_REMOVE_FAIL
} from '../constants/employees';

const initialState = {
  employees: [],
  departments: [],
  fetching: false
};

export default function employeesState (state = initialState, action) {
  switch(action.type){
    case EMPLOYEES_LOAD_START:
      return { ...state, fetching: true }
    case EMPLOYEES_LOAD_SUCCESS:
      return { ...state, employees: action.payload.employees, departments: action.payload.departments, fetching: false }
    case EMPLOYEES_LOAD_FAIL:
      return { ...state, error: action.payload, fetching: false }
    case EMPLOYEES_ADD_SUCCESS:
      return { ...state, employees: state.employees.concat([action.payload])}
    case EMPLOYEES_REMOVE_SUCCESS:
      return { ...state, employees: state.employees.filter(emp => emp.id !== action.payload)}
    default:
      return state;
  }
};