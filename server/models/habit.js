const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema(
  {
    isCompleted: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Date
    },
  },
  { timestamps: true }
);

mongoose.model("Habit", HabitSchema);