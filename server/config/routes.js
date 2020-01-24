var habitsController = require("../controllers/habits.js");
var userController = require("../controllers/users.js");
const path = require("path");

module.exports = function(app) {
  //User Routes
  app.post("/register", userController.register);
  app.post("/login", userController.login);
  app.get("/current-user", userController.getCurrentUser);
  app.delete("/logout", userController.logout);

  //Habit Routes
  // Get all habits
  app.get("/habits", habitsController.getAllForUser);
  // Get one habit
  app.get("/habits/:id", habitsController.getOneForUser);
  //Create new habit
  // app.post("/habits", habitsController.create);
  // //Delete habit
  // app.post("/habits/:id", habitsController.delete);
  // //Update habit
  // app.put("/habits/:id", habitsController.update);
  //Default route
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
