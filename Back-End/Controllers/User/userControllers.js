const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { User } = require("../../Models/UserSchema");




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

    if (user) {
      res.status(201).json({
        email: user.email,
        _id: user._id,
        status: true,
        message:"account created successfully"
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
  } else {
    res.status(400).json({status:false,message:"invalid user credentials"});
    throw new Error("invalid  details");
  }
});



module.exports = {
  registerUser,
   loginUser,
//   getMe,
//   findOneuser,
//   findUsers,
//   deleteUser,
//   editUser,
};
