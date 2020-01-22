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
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/client/views");

//Database
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000, () => console.log("listening on port 8000"));
