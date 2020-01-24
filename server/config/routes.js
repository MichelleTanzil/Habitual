var habitsController = require("../controllers/habits.js");
var userController = require("../controllers/users.js");
const path = require("path");

module.exports = function(app) {
  //User Routes
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
  app.get("/api/current-user", userController.getCurrentUser);
  app.delete("/api/logout", userController.logout);

  //Habit Routes
  // Get all habits
  app.get("/api/habits", habitsController.getAllForUser);
  // Get one habit
  app.get("/api/habits/:id", habitsController.getOneForUser);
  //Create new habit
  app.post("/api/habits", habitsController.createHabit);
  // //Delete habit
  // app.post("/habits/:id", habitsController.delete);
  // //Update habit
  // app.put("/habits/:id", habitsController.update);
  //Default route
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
