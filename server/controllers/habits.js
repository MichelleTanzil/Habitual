const User = require("mongoose").model("User");
const Habit = require("mongoose").model("Habit");
const HabitTemplate = require("mongoose").model("HabitTemplate");
var moment = require("moment");
const bcrypt = require("bcryptjs");

module.exports = {
  getAllForUser: function(req, res) {
    User.findById({ _id: req.session.uId})
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
  // create: function(req, res) {
  //   const product = new HabitTemplate(req.body);
  //   product
  //     .save()
  //     .then(product => res.json(product))
  //     .catch(err => {
  //       console.log("We have an error!", err);
  //       for (var key in err.errors) {
  //         req.flash("new_product", err.errors[key].message);
  //       }
  //       res.json(err);
  //     });
  // },
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
  // delete: function(req, res) {
  //   console.log("product id: " + req.params.id);
  //   Product.deleteOne({ _id: req.params.id })
  //     .then(() => res.json({ message: "Success" }))
  //     .catch(err => res.json(err));
  // },
  // like: (req, res) => {
  //   console.log("Liking a pet");
  //   // Pet.findByIdAndUpdate({_id: req.params.id}, {$inc: {likes: 1} }, { runValidators: true, context: 'query'}, (err, petsInDB) => {
  //   Pet.findByIdAndUpdate(
  //     { _id: req.params.id },
  //     { $set: { likes: req.body.likes } },
  //     { runValidators: true, context: "query" },
  //     (err, petsInDB) => {
  //       if (err) {
  //         console.log(err);
  //         res.json({ message: "Error", error: err });
  //       } else {
  //         res.json({ message: "Success", pets: petsInDB });
  //       }
  //     }
  //   );
  // },

  // createReview: function(req, res) {
  //   console.log("cake id: " + req.params.id);
  //   const newReview = new Review(req.body);
  //   console.log("Creating a new review" + newReview);
  //   newReview
  //     .save()
  //     .then(review => {
  //       Cake.findOneAndUpdate(
  //         { _id: req.params.id },
  //         { $push: { reviews: review } }
  //       )
  //         .then(cake => {
  //           cake.updated_at = Date.now();
  //           console.log("Found Cake! ", cake);
  //         })
  //         .catch(err => {
  //           console.log("We have an error!", err);
  //           for (var key in err.errors) {
  //             req.flash("cake", err.errors[key].message);
  //           }
  //           res.json(err);
  //         });
  //     })
  //     .then(review => res.json(review))
  //     .catch(err => {
  //       console.log("We have an error!", err);
  //       for (var key in err.errors) {
  //         req.flash("new_review", err.errors[key].message);
  //       }
  //       res.json(err);
  //     });
  // }
};
