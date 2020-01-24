const mongoose = require("mongoose");
const HabitTemplateSchema = require(__dirname + "/habitTemplate");

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "A first name is required."],
      minlength: [3, "Your last name should be at least 3 characters long"]
    },
    lastName: {
      type: String,
      required: [true, "A last name is required."],
      minlength: [3, "Your last name should be at least 3 characters long"]
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "An email is required."],
      validate: [validateEmail, "Please fill a valid email address"]
    },
    passsword: {
      type: String,
      required: [true, "A password is required."],
      minlength: [6, "Your password should be at least 6 characters long"]
    },
    habits: [HabitTemplateSchema]
  },
  { timestamps: true }
);

mongoose.model("User", UserSchema);
