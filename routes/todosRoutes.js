var db = require("../models");

module.exports = function(app) {
app.get("/api/todos", function(req, res) {
    db.todos.findOne({
      where: {
        todo: req.params.todo
      }
    })
    .then(function(dbfkntodolist) {
      res.json(dbfkntodolist);
    });
  });
app.post("/api/todos", function(req, res) {
    console.log(req.body);
    db.todos.create({
        todo: req.body.todo,
        deadline: req.body.deadline,
        time: req.body.time
    })
    .then(function(dbfkntodolist) {
      res.json(dbfkntodolist);
    });
  });
};
