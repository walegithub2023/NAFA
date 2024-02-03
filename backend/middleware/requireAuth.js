//import jsonwebtoken
const jwt = require("jsonwebtoken");
const user = require("../models/user");

//function to...
async function requireAuth(req, res, next) {
  try {
    //Read token off cookies
    const token = req.cookies.Authorization;

    //Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    //Check token expiration(whether token has expired)
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    //Find user using decoded sub
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    //attach user to req
    req.user = user;

    //continue on
    console.log("In middleware");
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

module.exports = requireAuth;
