const User = require("mongoose").model("User");
const bcrypt = require("bcryptjs");

module.exports = {
  getCurrentUser: (req, res) => {
    console.log("in getCurrentUser function");
    if (req.session.uId) {
      User.findOne({ _id: req.session.uId }, (err, user) => {
        if (err) {
          res.json(err);
        } else {
          const user2 = { ...user };
          user2.sessionStatus = true;
          res.json(user2);
        }
      });
    } else {
      console.log("no user is logged in.");
      res.json({ sessionStatus: false });
    }
  },
  register: (req, res) => {
    console.log("in the register");
    console.log(req.body);
    bcrypt.hash(req.body.password, 8, function(err, hash) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        const user = {
          email: req.body.email,
          password: hash,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        };
        console.log(user);
        User.create(user, (err, user) => {
          if (err) {
            if (req.body.password.length == 0) {
              err.errors.password = "A password is required.";
            } else if (req.body.password.length < 6) {
              err.errors.password =
                "Your password should be at least 6 characters long";
            }
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
        console.log("user: ", user);
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            req.session.uId = user._id;
            res.json({ sessionStatus: true });
          } else {
            res.json({ sessionStatus: false });
          }
        });
      }
    });
  },
  logout: function(req, res) {
    req.session.uId = null;
    req.session.destroy();
    res.json({ message: "Sucessfully logged out" });
  }
};
