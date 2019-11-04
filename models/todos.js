module.exports = function(sequelize, DataTypes) {
  var ToDos = sequelize.define("ToDos", {
    priority: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    dueDate: DataTypes.DATE,
});
  return ToDos;
};
