const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config()
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const asyncHandler = require("express-async-handler");
const { User } = require("../../Models/UserSchema");
const { Post } = require("../../Models/Post");


// const store = require("../../multer/multer");




//@description: Register new user
// @route : POST /api/users
// @access : public
 
const registerUser = asyncHandler(async (req, res) => { 
   
    const { email, password } = req.body;
    
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
 
 
    const userExists = await User.findOne({ email });
     console.log(userExists, "lets seeee");
  if (userExists) {
      res.status(400).json({message:"user already exists",status :false})
      console.log("error checked");
    // throw new Error("User already exists");
  } else {
    // Hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create User

    const user = await User.create({
      email,
      password: hashedPassword,
    });
    const token = await jwt.sign(
      { userId: user._id },
      process.env.JWTPRIVATEKEY,
      { expiresIn: "7d" }
    );

    if (user) {
      res.status(201).json({
        email: user.email,
        _id: user._id,
        status: true,
        message: "account created successfully",
        token
      });
    } else {
      res.status(400);
      throw new Error("invalid user details"); 
    }
  }
});

const loginUser = asyncHandler(async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email }); 

  const token = await jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, { expiresIn: "7d", });
 
  if (user && (await bcrypt.compare(password, user.password))) {
    
    res.send({
      name: user.name,
      email: user.email,
      _id: user._id,
      role: user.role,
      token
    });
    
  } else{
    console.log("dfhgssssssssssssssssssssssss");
   res.status(400).json({ message: "invalid credentials", status: false });
     throw new Error("invalid  details");
  }
});

 
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  email.toString();
  await User.updateOne({ email },{otp: Math.floor(1000 + Math.random() * 9000),});
  User.findOne({ email }).exec(async (error, data) => {
    if (error) {
      console.log(error);
    } else {
      try {

        if(data?._id){
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "dennysjoseph80@gmail.com",
              pass: process.env.GOOGLEAPPS,
            },
            tls: {
              rejectUnauthorized: false,
            },
          });

          let info = await transporter.sendMail({
            from: "dennysjoseph80@gmail.com",
            to: email,
            subject: "job-hunter - forgotpassword otp",
            text: `Your one time password is  ${data.otp}`,
          });

          res.send({ status: true, message: "success" });
        } else {
          res.send({ status: false, message: "account doesnot exist" });
        }
      } catch (err) {
        res.send({ status: false, message: "success" });
        console.log(err);
      }
    }
  });
 
})

const emailVerification = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {otp} = req.body;
  User.findOne({ otp }).exec(async (error, data) => { 
    console.log(data);
    if (data) {
       const token = await jwt.sign(
         { userId: data._id },
         process.env.JWTPRIVATEKEY,
         { expiresIn: "7d" }
      );
       await User.updateOne({  email:data.email }, { otp: 0 });
      res.status(200).json({ token: token, email: data.email,userId:data._id, status: true })
      
    } else {
      res.json({ message:"invalid otp", status: false });
    }

  })

});



const post = async (req, res) => {
 const data = req.query;

  userPost = {
    userId:"",
    description: "",
    image: "",
    video: "",
    likes: [],
    comments: [],
    date: "",
  }; 

        
    try {
      const storage = multer.diskStorage({
        destination: path.join(__dirname, "../../public/images"),
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + ".png");
        },
      });


    const upload = multer({ storage: storage }).single("file");

  upload(req, res,async (err) => {
        if (!req.file) {
          console.log("no image");
          res.json({ noImage: "select image" });
        } else {
          userPost.userId = data.userId
          userPost.description = data.description
          userPost.date = data.date
          userPost.timeStamp = data.timeStamp
          userPost.image = req.file.filename;

          const post = await Post(userPost).save()
          
          console.log(post, "post.....");
          
          if (post) {
            res.Status(201).json({status:true,message:"post created succesfully"})
          }
        }
    });
      
    } catch (error) {
      res.Status(500).json({err,status:false,message:"operation failed"})
      console.log(error);
  }
  


};




const feeds = asyncHandler(async (req, res) => {
  console.log("yup hitting........");


  Post.find().exec(async (error, data) => {
    if (error) {
      console.log(error);
    } else {
      try {
        console.log(data,"dddddddddatttttttttttttttt");
        res.json({data:data})
      } catch (err) {
        res.send({ status: false, message: "failed" });
        console.log(err);
      }
    }
  });
});




module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  emailVerification,
  post,
  feeds,
};
