const Sequelize = require('sequelize');

const sequelize = module.exports = new Sequelize('main', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: './models/main.db'
});