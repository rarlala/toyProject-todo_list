const db = require("./db");
const List = db.List;

// Retrieve all Tutorials from the database.
exports.findAll = () => {
  const lists = List.findAll();
  return lists;
};