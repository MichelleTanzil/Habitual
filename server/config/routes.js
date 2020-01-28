// var habitsController = require("../controllers/habits.js");
var usersController = require("../controllers/users.js");
const path = require("path");

module.exports = function(app) {
  //User Routes
  app.post("/api/register", usersController.register);
  app.post("/api/login", usersController.login);
  app.get("/api/current-user", usersController.getCurrentUser);
  app.delete("/api/logout", usersController.logout);

  //Habit Routes
  // Get all habits
  app.get("/api/habits", usersController.getAllForUser);
  // Get one habit
  app.get("/api/habits/:id", usersController.getOneForUser);
  //Create new habit
  app.post("/api/habits", usersController.createHabit);
  // //Archive habit
  // app.put("/habits/:id", habitsController.archiveHabit);
  // //Update habit
  // app.put("/habits/:id", habitsController.updateHabit);
  //Default route
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
