import axios from 'axios';
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

export function loadAllEmployees() {
  return (dispatch) => {
    dispatch({type: EMPLOYEES_LOAD_START});

    axios.get('/api/employees')
        .then(employees => {
            axios.get('/api/departments')
            .then(departments => {
                dispatch({
                    type: EMPLOYEES_LOAD_SUCCESS,
                    payload: {
                        employees: employees.data,
                        departments: departments.data
                    }
                })
            })
        })
        .catch(e => {
            dispatch({
                type: EMPLOYEES_LOAD_FAIL,
                payload: e.response.data
            })
        });
  }
}

export function addEmployee(employee) {
  return (dispatch) => {
    dispatch({
        type: EMPLOYEES_ADD_START,
        payload: employee
    });

    axios.post('/api/employees', {
            firstName: employee.firstName,
            lastName: employee.lastName,
            departmentId: employee.departmentId
        })
        .then(resp => {
            if(resp.data[1]){
                dispatch({
                    type: EMPLOYEES_ADD_SUCCESS,
                    payload: resp.data[0]
                })
            }
        })
        .catch(e => {
            console.log('error!!!',e)
            dispatch({
                type: EMPLOYEES_ADD_FAIL,
                payload: e
            })
        });
  }
}

export function removeEmployee(id) {
  return (dispatch) => {
    dispatch({
        type: EMPLOYEES_REMOVE_START,
        payload: id
    });

    axios.delete('/api/employees/' + id)
        .then(resp => {
            dispatch({
                type: EMPLOYEES_REMOVE_SUCCESS,
                payload: id
            })
        })
        .catch(e => {
            dispatch({
                type: EMPLOYEES_REMOVE_FAIL,
                payload: e.response.data
            })
        });
  }
}