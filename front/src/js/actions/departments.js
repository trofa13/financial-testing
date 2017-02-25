import axios from 'axios';
import {
    DEPARTMENTS_LOAD_START,
    DEPARTMENTS_LOAD_SUCCESS,
    DEPARTMENTS_LOAD_FAIL
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