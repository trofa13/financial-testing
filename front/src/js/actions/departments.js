import axios from 'axios';
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

export function loadAllDepartments() {
  return (dispatch) => {
    dispatch({type: DEPARTMENTS_LOAD_START});

    axios.get('/api/departments')
        .then(resp => {
            dispatch({
                type: DEPARTMENTS_LOAD_SUCCESS,
                payload: resp.data
            })
        })
        .catch(e => {
            dispatch({
                type: DEPARTMENTS_LOAD_FAIL,
                payload: e.response.data
            })
        });
  }
}

export function addDepartment(name) {
  return (dispatch) => {
    dispatch({
        type: DEPARTMENTS_ADD_START,
        payload: name
    });

    axios.post('/api/departments', {
            name
        })
        .then(resp => {
            if(resp.data[1]){
                dispatch({
                    type: DEPARTMENTS_ADD_SUCCESS,
                    payload: resp.data[0]
                })
            }
        })
        .catch(e => {
            dispatch({
                type: DEPARTMENTS_ADD_FAIL,
                payload: e.response.data
            })
        });
  }
}

export function removeDepartment(id) {
  return (dispatch) => {
    dispatch({
        type: DEPARTMENTS_REMOVE_START,
        payload: id
    });

    axios.delete('/api/departments/' + id)
        .then(resp => {
            dispatch({
                type: DEPARTMENTS_REMOVE_SUCCESS,
                payload: id
            })
        })
        .catch(e => {
            dispatch({
                type: DEPARTMENTS_REMOVE_FAIL,
                payload: e.response.data
            })
        });
  }
}