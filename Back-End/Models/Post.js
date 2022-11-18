
const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    name:{type:String,required:true},
    userId:{type:String,required:true},
    description: { type: String },
    image: { type: String },
    video:{type:String},
    likes: [{ type: String }],
    comments:[{type:Object,required:true}],
    date: { type: String, required: true },
    timeStamp:{type:String,required:true}
});



const Post = mongoose.model("post", postSchema);

module.exports = { Post };
