const User = require("mongoose").model("User");

const bcrypt = require("bcryptjs");
module.exports = {
  getCurrentUser: (req, res) => {
    if (req.session.uId) {
      User.findOne({ _id: req.session.uId }, (err, user) => {
        if (err) {
          res.json(err)
        }
        else {
          res.json(user)
        }
      })
    } else {
      res.json({ sessionStatus: false });
    }
  },
  register: (req, res) => {
    console.log("in the register");
    console.log(req.body);
    bcrypt.hash(req.body.password, 8, function(err, hash) {
      if (err) {
        res.json(err);
      } else {
        res.body.password = hash;
        User.create(req.body, (err, user) => {
          if (err) {
            res.json(err);
          } else {
            req.session.uId = user._id;
            res.json(user);
          }
        });
      }
    });
  },
  login: function(req, res) {
    console.log("in the login");
    User.findOne({ email: req.body.email }, (err, user) => {
      if (user === null) {
        res.json({ errors: "Invalid Credentials" });
      }
      if (user) {
        console.log("user: ", user)
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            res.json({ success: "Successfully logged in" });
          } else {
            res.json({ errors: "Invalid Credentials" });
          }
        });
      }
    });
  }
};
