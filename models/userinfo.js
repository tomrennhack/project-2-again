module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    emailf1: DataTypes.STRING,
    emailf2: DataTypes.STRING,
    emailf3: DataTypes.STRING
  });
  return UserInfo;
};
