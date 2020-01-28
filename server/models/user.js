const mongoose = require("mongoose");
// const HabitTemplateSchema = require(__dirname + "/habitTemplate");

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
      unique: [true, "Please use a different email address"],
      required: [true, "An email is required."],
      validate: [validateEmail, "Please use a valid email address"]
    },
    password: {
      type: String,
      required: [true, "A password is required."],
      minlength: [6, "Your password should be at least 6 characters long"]
    },
    habits: [
      {
        title: {
          type: String,
          required: [true, "A name is required for a habit"],
          minlength: [3, "The habit's name should be longer than 3 characters"]
        },
        importance: {
          type: String,
          required: [true, "A habit must have an importance level"],
          enum: ["High", "Medium", "Low"]
        },
        // frequency: {
        //   type: Number,
        //   required: [true, "Let me know how often this habit should occur"]
        // },
        isArchived: {
          type: Boolean,
          default: false
        },
        habitType: {
          type: String,
          required: [true, "A habit type is required"],
          enum: ["ToDo", "Stop"]
        },
        history: [
          {
            isCompleted: {
              type: Boolean,
              default: false
            },
            completedAt: {
              type: Date
            }
          }
        ]
      }
    ]
  },
  { timestamps: true }
);

mongoose.model("User", UserSchema);
