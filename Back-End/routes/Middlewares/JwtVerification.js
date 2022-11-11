const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let authHeader = req.headers.token;
  console.log(req.headers, "heyyyyyyyy");
  if (authHeader) {
    authHeader = authHeader.replaceAll('"', "");
    const token = authHeader.split(" ")[1];
    console.log(token, "user tokennnnn");
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
