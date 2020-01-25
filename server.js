const cron = require("node-cron");
const express = require("express");
const app = express();
const session = require("express-session");
app.use(
  session({
    secret: "keyboardkitten",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
const flash = require("express-flash");
app.use(flash());
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json());

//Database
require("./server/config/mongoose.js");

//Cron jobs
// cron.schedule("", function() {
//   console.log("Running Cron Job");

// });

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000, () => console.log("listening on port 8000"));
