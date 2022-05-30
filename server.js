require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI_LOCAL; //TODO: change to prod once deployed

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(PORT, () => {
      console.log("You are listening at port " + PORT);
    });
  });
