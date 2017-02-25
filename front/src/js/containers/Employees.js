import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Employee from '../components/Employee';
import EmployeeForm from '../components/EmployeeForm';
import * as employeesActions from '../actions/employees';

export class Employees extends Component {
    
    componentDidMount(){
        const { loadAllEmployees } = this.props.employeesActions;
        loadAllEmployees();
    }


    render(){
        const { employees, departments, error, fetching } = this.props.employees;
        const { addEmployee, removeEmployee } = this.props.employeesActions;
        return(
            <div>
                <h1 className="h1">Employees</h1>
                <EmployeeForm addEmployee={addEmployee} departments={departments}/>
                {fetching ? <div>Loading ...</div> :
                    error ? <div><h2>An error occured, please try again later :)</h2>
                            <small>{error.message}</small></div> : 
                          <ul className="unmarked-list">
                                {employees.map(e => 
                                    <li key={e.id}>
                                        <Employee id={e.id}
                                        department={departments.find(d => e.departmentId == d.id)}
                                        firstName={e.firstName} 
                                        lastName={e.lastName}
                                        remove={removeEmployee}/>
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
        employees: state.employees
    }
}

function mapDispatchToProps(dispatch) {
  return {
    employeesActions: bindActionCreators(employeesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);