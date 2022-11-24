const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { Admin } = require("../../Models/AdminSchema");

const adminLogin = asyncHandler(async (req, res) => {

  const { email, password } = req.body;
  const user = await Admin.findOne({ email });

  const token = await jwt.sign(
    { userId: user._id },
    process.env.JWTPRIVATEKEY,
    { expiresIn: "7d" }
  );


  if (user && (await bcrypt.compare(password, user.password))) {
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



module.exports = {
  adminLogin,
};
