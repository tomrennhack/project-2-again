var db = require("../models");

module.exports = function(app) {
  app.post("/api/signup", function(req, res) {
    // get form values from req.body
    console.log(req.body) 
    const body = {fullName:req.body.fullName, email:req.body.email, username:req.body.username, password:req.body.psw};  
    //create a user const newUser = await User.create(body); 
    //create a user const newUser = await User.create(body);
    // add to db.fkntodolist_users table
    // redirect to todo
    db.UserInfo.create(body).then(function(fknUsers) {
    res.redirect('/todos');
      // return user ID
      //res.json(fknUsers.id);
    });
  });
};
