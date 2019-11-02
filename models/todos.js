module.exports = function(sequelize, DataTypes) {
    var ToDos = sequelize.define("ToDos", {
        todo: DataTypes.TEXT,
        deadline: DataTypes.INTEGER
    });
    return ToDos;
  };
  