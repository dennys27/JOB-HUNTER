const mongoose = require("mongoose");


const jobSchema = mongoose.Schema({
  companyname: { type: String, required: true },
  designation: { type: String, required: true, },
  jobdescription: { type: String },
  companylogo: { type: String },
  jobdesummary: { type: String },
  skills:{ type: Array ,required:true},
  location: { type: String },
  applicants: { type: Array },
  aboutcompany: {type:String,required:true },
  userid: {type:String,required:true },
  date: { type: String, required: true },
  timeStamp: { type: String, required: true },
});

const Job = mongoose.model("job", jobSchema);

module.exports = { Job };
