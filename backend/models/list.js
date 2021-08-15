module.exports = (sequelize, Sequelize) => {
    return sequelize.define("List", {
      description: {
        type: Sequelize.STRING
      }
    },{
      timestamps: false
    });
  };