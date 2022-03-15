require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(PORT, () => {
      console.log("You are listening at port " + PORT);
    });
  });
