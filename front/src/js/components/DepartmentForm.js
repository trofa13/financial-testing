import React, { Component } from 'react';

export default class DepartmentForm extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        return(
        <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="department-input">Add new department:</label>{'  '}
                <input 
                    className="form-control"
                    type="text"
                    placeholder="New department name"
                    id="department-input"
                    ref={(input) => this.input = input}/>
            </div>
            <button style={{ marginLeft: '20px' }} className="btn btn-primary" type="submit">Add</button>
          </form>
        </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.input.value)
    }
}