const mongoose = require("mongoose");
const HabitSchema = require(__dirname + "/habit");

const HabitTemplateSchema = new mongoose.Schema(
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
    frequency: {
      type: Number,
      required: [true, "Let me know how often this habit should occur"]
    },
    isArchived: {
      type: Boolean,
      default: false
    },
    habitType: {
      type: String,
      enum: ["Need", "StopNeed", "Should", "StopShould"]
    },
    history: [HabitSchema],

  },
  { timestamps: true}
);


mongoose.model("HabitTemplate", HabitTemplateSchema);
