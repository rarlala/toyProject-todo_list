const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Todo', 'root', 'alswo0613!', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = { sequelize };