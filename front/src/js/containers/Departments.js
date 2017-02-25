import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Department from '../components/Department';
import DepartmentForm from '../components/DepartmentForm';
import * as departmentsActions from '../actions/departments';

export class Departments extends Component {
    
    componentDidMount(){
        const { loadAllDepartments } = this.props.departmentsActions;
        loadAllDepartments();
    }


    render(){
        const { departments, error, fetching } = this.props.departments;
        const { addDepartment, removeDepartment } = this.props.departmentsActions;
        return(
            <div>
                <h1 className="h1">DEPARTMENTS</h1>
                <DepartmentForm addDep={addDepartment}/>
                {fetching ? <div>Loading ...</div> :
                    error ? <div><h2>An error occured, please try again later :)</h2>
                            <small>{error.message}</small></div> : 
                          <ul className="unmarked-list">
                                {departments.map(d => 
                                    <li key={d.id}>
                                        <Department id={d.id} name={d.name} remove={removeDepartment}/>
                                    </li>
                                )}
                          </ul>
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        departments: state.departments
    }
}

function mapDispatchToProps(dispatch) {
  return {
    departmentsActions: bindActionCreators(departmentsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Departments);