var db = require("../models");

module.exports = function (app) {
  // load todos page
  // app.get("/", function(req, res) {
  //     res.json("todos")
  // });
  // GET route for getting all of the posts
  // app.get("/api/todos", function(req, res) {
  //     db.todos.findAll()
  //     .then(function(dbfkntodolist) {
  //       res.json(dbfkntodolist);
  //     });
  //   });
  // GET route for getting all of the posts
  app.get("/api/todos/:todo", function (req, res) {
    db.todos.findOne({
      where: {
        todo: req.params.todo
      }
    })
      .then(function (dbfkntodolist) {
        res.json(dbfkntodolist);
      });
  });
  // POST route for saving a new post
  app.post("/api/todos", function (req, res) {
    console.log(req.body);
    db.ToDos.create({
      ...req.body,
      status: 0
    })
      .then(function (dbfkntodolist) {

        console.log(dbfkntodolist);
        res.redirect("/todos")
        // res.json(dbfkntodolist);
      });
  });
  // PUT route for updating posts
  app.post("/api/update/todos/:id", function (req, res) {
    db.ToDos.update(
      { status: req.body.status },
      { where: { id: req.params.id } }
    )
      .then(function (dbfkntodolist) {
       // res.json(dbfkntodolist);
       res.redirect("/todos")
      });
  });
};

