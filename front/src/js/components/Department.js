import React, { PropTypes } from 'react';

const Department = ({name, remove, id}) => {
    return(
        <div className="department well">
            <span>{name} deprartment</span> 
            <button 
                onClick={remove.bind(null, id)} 
                type="button" 
                className="btn btn-xs btn-danger">
                x
            </button>
        </div>
    )
}

Department.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired
};

export default Department;