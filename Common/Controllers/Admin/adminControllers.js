const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { Admin } = require("../../Models/AdminSchema");
const { Verification } = require("../../Models/Verification");
const { User } = require("../../Models/UserSchema");
   

const uri = "http://localhost:5001";

const adminLogin = asyncHandler(async (req, res) => {
 
 const user = await Admin.findOne({ email:req.body.email });
 console.log(user)
  const token = await jwt.sign(
    { userId: user._id },
    process.env.JWTPRIVATEKEY,
    { expiresIn: "7d" }
  );
 
  
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    console.log("sucesssss")
    res.send({
      name: user.name,
      email: user.email,
      _id: user._id,
      role: user.role,
      token,
    });
  } else {
    
    res
      .status(400)
      .json({ status: false, message: "invalid user credentials" });
    throw new Error("invalid  details");
  }
});


const verifications = asyncHandler(async (req, res) => {
  const accounts = await Verification.find().populate("user");

  if (accounts) {
    res.status(200).json(accounts);
  } else {
    res.status(400).json({ status: false, message: "no accounts found" });
    throw new Error("invalid  details");
  }
});


//admin get jobs

const getAdminJobs = asyncHandler(async (req, res) => {
  console.log("im working you know..................");

  axios
    .get(`${uri}/jobs/jobs`)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});



const adminGetUser = asyncHandler(async (req, res) => {
  
  const accounts = await User.find({_id:req.body._id});

  if (accounts) {
    res.status(200).json(accounts);
  } else {
    res.status(400).json({ status: false, message: "no accounts found" });
    throw new Error("invalid  details");
  }
});


//admin approve
const adminApprove = asyncHandler(async (req, res) => {
  console.log(req.body,"ffffffffffffffffff")
  const accounts = await User.findByIdAndUpdate(
    req.body.userId,
    {
      verification:"true"
    },
    {
      new:true
    }
  )

  if (accounts) {
    console.log(accounts)
    await Verification.deleteOne({ user: accounts._id }).then((data) => {
       res.status(200).json(accounts);
    })
     
  } else {
    res.status(400).json({ status: false, message: "no accounts found" });
    throw new Error("invalid  details");
  }
});


const adminGetUsers = asyncHandler(async (req, res) => {
  const accounts = await User.find({});

  if (accounts) {
    res.status(200).json(accounts);
  } else {
    res.status(400).json({ status: false, message: "no accounts found" });
    throw new Error("invalid  details");
  }
});




module.exports = {
  adminLogin,
  verifications,
  adminGetUsers,
  adminGetUser,
  adminApprove,
  getAdminJobs,
};
