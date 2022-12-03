const mongoose = require("mongoose");

const ReportPostSchema = new mongoose.Schema({
  reportedPostId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "post",
  },
  autherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  reasons: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      reason: String,
    },
  ],
});

const ReportPost = mongoose.model("ReportPost", ReportPostSchema);
module.exports = { ReportPost };
