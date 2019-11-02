module.exports = function(sequelize, DataTypes) {
  var UserInfo = sequelize.define("UserInfo", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    twitterHandle: DataTypes.STRING
  });
  return UserInfo;
};
