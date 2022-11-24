const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://dennys:dennys@cluster0.yj7i19b.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .then(() => {
      console.log("job db connected");
    })
    .catch((e) => {
      console.log("job db not connected");
    });
};

module.exports = connect;
