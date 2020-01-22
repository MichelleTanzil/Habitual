const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A name is required for a habit"],
      minlength: [3, "The habit's name should be longer than 3 characters"]
    },
    importance: {
      type: String,
      required: [true, "A habit should have an importance level"],
      enum: ["High", "Medium", "Low"]
    },
    frequency: {
      type: Date,
      required: [true, "Let me know how often this habit should occur"]
    },
    isArchived: {
      type: Boolean,
      default: false
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: [Date]
    },
    history: {

    },
    habitType: {
      type: String,
      enum: ["Need", "StopNeed", "Should", "StopShould"]
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

mongoose.model("Habit", HabitSchema);