const Sequelize = require('sequelize');

const sequelize = require('./index');
const Department = require('./department');

const Employee = module.exports = sequelize.define('employee', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  departmentId: {
    type: Sequelize.INTEGER,
    references: {
        // This is a reference to another model
        model: Department,
        // This is the column name of the referenced model
        key: 'id'
    }
  }
});

sequelize.sync();
