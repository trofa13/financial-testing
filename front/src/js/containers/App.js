import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
    <div className="container">
      <ul className="nav nav-pills">
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/employees">Employees</Link></li>
      </ul>
      {this.props.children}
    </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);