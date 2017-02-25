import React, { Component, PropTypes } from 'react';

const Department = ({name}) => {
    return(
        <div>
            <h1 className="h1">{name} deprartment</h1>
        </div>
    )
}

Department.propTypes = {
    name: PropTypes.string.isRequired
};

export default Department;