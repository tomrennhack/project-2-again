var db = require('../models');

module.exports = function (app) {
  // load index page
  app.get("/", function (req, res) {

    res.render("index");
  });

  // go to signup page
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/todos", function (req, res) {
    db.ToDos.findAll().then(function (dbData) {

      res.render("todos", { tasks: dbData });
    })
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.UserInfo.findOne({ where: { id: req.params.id } }).then(function (dbfkntodolist) {
      res.render("example", {
        example: dbfkntodolist
      });
    });


  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes

};
