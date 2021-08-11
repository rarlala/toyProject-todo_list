const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', 'bbangya', 'alswo0613!', {
  host: 'todo.c6zkki5oydny.ap-northeast-2.rds.amazonaws.com',
  dialect: 'mysql',
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.List = require("./models/list")(sequelize,Sequelize);

module.exports = db;