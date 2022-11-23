
const mongoose = require("mongoose");
const { User } = require("./UserSchema");



const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  userId: {
    type: String,
    required: true,
    ref: User,
  },
  description: { type: String },
  image: { type: String },
  video: { type: String },
  likes: [{ type: String }],

  comments: [
    {
      userId: {
        type: String,
        required: true,
        ref: User,
      },
      name: String,
      comment: String,
      timeStamp: Date,
    },
  ],
  date: { type: String, required: true },
  timeStamp: { type: String, required: true },
});



const Post = mongoose.model("post", postSchema);

module.exports = { Post };
