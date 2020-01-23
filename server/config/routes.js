var habitsController = require("../controllers/habits.js");
var userController = require("../controllers/user.js");

module.exports = function (app) {
  //User Routes
  app.post("/register", userController.register);
  app.post("/login", userController.login);
  app.get("/current-user", userController.getCurrentUser)
  //Habit Routes
  // Get all products
  app.get("/habits", habitsController.getAll);
  // Get one habit
  app.get("/habits/:id", habitsController.getOne);
  //Create new habit
  app.post("/habits", habitsController.create);
  //Delete habit
  app.post("/habits/:id", habitsController.delete);
  //Update habit
  app.put("/habits/:id", habitsController.update);
  //Default route
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });
};
