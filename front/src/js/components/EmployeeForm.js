import React, { Component } from 'react';

export default class EmployeeForm extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render(){
        const { departments } = this.props;
        return(
        <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="employee-fn-input">New employee first name:</label>{'  '}
                <input 
                    className="form-control"
                    type="text"
                    placeholder="New employee first name"
                    id="employee-fn-input"
                    ref={(input) => this.fnInput = input}/>
            </div>
            <div className="form-group">
                <label htmlFor="employee-ln-input">New employee last name:</label>{'  '}
                <input 
                    className="form-control"
                    type="text"
                    placeholder="New employee last name"
                    id="employee-ln-input"
                    ref={(input) => this.lnInput = input}/>
            </div>
            <div className="form-group">
                <label htmlFor="employee-dep-input">Employee department:</label>{'  '}
                <select ref={(select) => this.select = select}>
                    {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
            </div>
            <button style={{ marginLeft: '20px' }} className="btn btn-primary" type="submit">Add</button>
          </form>
        </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.fnInput.value && this.lnInput.value){
            this.props.addEmployee({
                firstName: this.fnInput.value,
                lastName: this.lnInput.value,
                departmentId: this.select.value
            });
        }
    }
}