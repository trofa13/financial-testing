import React, { PropTypes } from 'react';

const Employee = ({firstName, lastName, id, remove, department}) => {
    return(
        <div className="employee well">
            <span>Employee {firstName} {lastName}</span>
            <br/>
            <span>Department: {department.name}</span>
            <button 
                onClick={remove.bind(null, id)} 
                type="button" 
                className="btn btn-xs btn-danger">
                x
            </button>
        </div>
    )
}

Employee.propTypes = {
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    department: PropTypes.object,
    remove: PropTypes.func.isRequired
};

export default Employee;