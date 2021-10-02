const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/fastifyDB")
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
