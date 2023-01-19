const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      PROCESS.env.DB_URL,
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
