import React, { Component } from 'react';

export default class Employees extends Component{
    render(){
        const { id } = this.props.params;
        console.log(id)
        return(
            <div>Employeeess</div>
        )
    }
}