var db = require("../models");

module.exports = function(app) {
  require("./post-signup.js")(app);

  // Get all examples
  app.get("/api/todos", function(req, res) {
    console.log("api route");
    db.ToDos.findAll({}).then(function(dbToDos) {
      console.log(dbToDos);
      res.json(dbToDos);
    });
  });

  // Get all examples
  app.get("/api/signup", function(req, res) {
    console.log("api route");
    db.UserInfo.findAll({}).then(function(dbUserInfo) {
      console.log(dbUserInfo);
      res.json(dbUserInfo);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
