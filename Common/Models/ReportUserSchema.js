const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  reportedId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
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

const Report = mongoose.model("Report", ReportSchema);
module.exports = { Report };
