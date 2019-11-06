var db = require("../models");

module.exports = function(app) {
  app.post("/api/signup", function(req, res) {
    // get form values from req.body
    db.fknUsers.create(req.body).then(function(fknUsers) {
      // add to db.fkntodolist_users table

      // return user ID
      res.redirect(fknUsers.id);

      // redirect to home
    });
  });
};
