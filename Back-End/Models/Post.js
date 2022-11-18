const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    userId:{type:String,required:true},
    description: { type: String },
    image: { type: String },
    video:{type:String},
    likes: [{
        userId: String,
        timeStamp:String
    }],
    comments:{type:Array,required:true},
    date: { type: String, required: true },
    timeStamp:{type:String,required:true}
});



const Post = mongoose.model("post", userSchema);

module.exports = { Post };
