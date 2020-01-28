const User = require("mongoose").model("User");
const Habit = require("mongoose").model("Habit");
const HabitTemplate = require("mongoose").model("HabitTemplate");
var moment = require("moment");
const cron = require("node-cron");

module.exports = {
  getAllForUser: function(req, res) {
    User.findById({ _id: req.session.uId })
      .then(user => {
        console.log("User's habits:", user.habits);
        res.json(user.habits);
      })
      .catch(err => res.json(err));
  },

  getOneForUser: function(req, res) {
    HabitTemplate.findOne({ _id: req.params.id })
      .then(habittemplate => {
        res.json(habittemplate);
      })
      .catch(err => res.json(err));
  },

  createHabit: function(req, res) {
    console.log("user id: " + req.session.uId);
    const newHabit = new HabitTemplate(req.body);
    newHabit
      .save()
      .then(habitTemplate => {
        console.log("Creating a new habit" + habitTemplate);
        User.findOneAndUpdate(
          { _id: req.session.uId },
          { $push: { habits: habitTemplate } }
        )
          .then(user => {
            user.updated_at = Date.now();
            console.log("Found user! ", user);
          })
          .catch(err => {
            console.log("We have an error!", err);
            for (var key in err.errors) {
              req.flash("user", err.errors[key].message);
            }
            res.json(err);
          });
      })
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("new_habit", err.errors[key].message);
        }
        res.json(err);
      });
  }

  // update: function(req, res) {
  //   console.log("update product id: " + req.params.id);
  //   req.body.updated_at = Date.now();
  //   Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
  //     runValidators: true,
  //     context: "query"
  //   })
  //     .then(product => res.json(product))
  //     .catch(err => {
  //       console.log("We have an error!", err);
  //       for (var key in err.errors) {
  //         req.flash("update_product", err.errors[key].message);
  //       }
  //       res.json(err);
  //     });
  // },
};

// cron.schedule("* * * * *",
// function() {
//   console.log("Running cron job every minute")
//     User.find()
//       .then(
//         HabitTemplate.find({ frequency: 8 })
//           .then(habitTemplate => {
//             let newHabit = new Habit();
//             habitTemplate.history.push(newHabit);
//           })
//           .catch(err => {
//             console.log(err);
//             res.json(err);
//           })
//       )
//       .catch(err => {
//         console.log(err);
//         res.json(err);
//       });
//   });
