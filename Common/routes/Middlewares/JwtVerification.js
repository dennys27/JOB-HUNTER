const jwt = require("jsonwebtoken");



//user token verification
const verifyToken = (req, res, next) => {

  let authHeader = req.headers.token;

  if (authHeader) {
    authHeader = authHeader.replaceAll('"', "");
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWTPRIVATEKEY, (err, user) => {
      if (err) {
        console.log(err, "invalid token");
        res.status(403).json({ authError: true });
      } else {
        console.log("inside");
        next();
      }
    });
    
  } else {
    return res.status(401).json("you are not authenticated");
  }
};


//admin token verification
const AdminVerifyToken = (req, res, next) => {
  let authHeader = req.headers.token;
  if (authHeader) {
    authHeader = authHeader.replaceAll('"', "");
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWTPRIVATEKADMINKEY, (err, user) => {
      if (err) {
        res.status(403).json({ authError: true });
      } else {
        next();
      }
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};

module.exports = {
  verifyToken,
  AdminVerifyToken,
};
