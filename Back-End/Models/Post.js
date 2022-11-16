const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    userId:{type:String,required:true},
    description: { type: String, required: true },
    image: { type: String },
    video:{type:String},
    likes: { type: Array, required: true },
    comments:{type:Array,required:true},
    date: { type: String, required: true },
    timeStamp:{type:String,required:true}
});



const Post = mongoose.model("post", userSchema);

module.exports = { Post };
