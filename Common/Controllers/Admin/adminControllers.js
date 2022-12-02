const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const asyncHandler = require("express-async-handler");
const { Admin } = require("../../Models/AdminSchema");
const { Verification } = require("../../Models/Verification");
const { User } = require("../../Models/UserSchema");
const multer = require("multer");
const path = require("path");

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


  axios
    .get(`${uri}/jobs/jobs`)
    .then(function (response) {
        console.log("im working you know..................");
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




const postJobs = asyncHandler(async (req, res) => {
  
  console.log(req.file)

    try {
      const storage = multer.diskStorage({
        destination: path.join(__dirname, "../../public/images"),
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + ".png");
        },
      });

      const upload = multer({ storage: storage }).single("file");

      upload(req, res, async (err) => {
        if (!req.file) {
          console.log("no image");
          res.json({ noImage: "select image" });
        }

        try {
          axios
            .post(`${uri}/jobs/job`, {
              key: req.query,
              image: req.file.filename,
            })
            .then(function (response) {
              console.log(response, "yes........", Math.random());
              res
                .status(200)
                .json({data:response.data, status: true, message: "operation success" });
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      res.status(500).json({ err, status: false, message: "operation failed" });
      console.log(error);
    }
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
  postJobs,
};
