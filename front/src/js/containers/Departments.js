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
        const { departments, error } = this.props.departments;
        console.log(this.props)
        return(
            <div>
                <h1 className="h1">DEPARTMENTS</h1>
                <DepartmentForm />
                {error ? <div><h2>An error occured, please try again later :)</h2>
                         <small>{error.message}</small></div> 
                       : <ul>
                            {departments.map(d => 
                                <li key={d.id}><Department name={d.name} /> </li>
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