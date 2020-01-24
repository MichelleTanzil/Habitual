const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
mongoose.connect("mongodb://localhost/habitv2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

require("../models/user")
require("../models/habitTemplate")
require("../models/habit");
