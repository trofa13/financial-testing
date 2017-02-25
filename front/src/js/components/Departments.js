import React, { Component } from 'react';

export default class Departments extends Component {
    render(){
        return(
            <div className="container">
                <h1 className="h1">DEPARTMENST</h1> 
                {this.props.children}
            </div>
        )
    }
}