const Sequelize = require('sequelize');
const sequelize = require('./index');

var Department = module.exports = sequelize.define('department', {
  name: Sequelize.STRING
});

sequelize.sync();
