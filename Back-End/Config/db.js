const mongoose = require("mongoose");

 const connect = () => {
    mongoose
      .connect(
        "mongodb+srv://dennys:dennys@cluster0.x45r5gj.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
        }
      )
      .then(() => {
        console.log("db connected");
      })
      .catch((e) => {
        console.log("db not connected");
      });
}

module.exports = connect;
