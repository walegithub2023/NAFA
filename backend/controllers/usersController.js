//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

//import bcryptjs library
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//import User model
const User = require("../models/user");

//login
async function login(req, res) {
  try {
    //Get the svcNo and password off rq body
    const { svcNo, password } = req.body;
    //Find the user with requested svcNO
    const user = await User.findOne({ svcNo });
    if (!user) return res.sendStatus(401);
    //compare sent in password with found user password hash
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.sendStatus(401);
    //create an expiratation key for the token
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    //create a jwt token
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

    //Set the cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    //send it
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

//logout
function logout(req, res) {
  try {
    res.clearCookie("Authorization");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

//check authentication
function checkAuth(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}

//fetch all users
const fetchUsers = async (req, res) => {
  try {
    //find the users
    const users = await User.find();
    //respond with them
    res.json({ users: users });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//fetch single user
const fetchUser = async (req, res) => {
  try {
    //Get id off the url
    const userId = req.params.id;
    //find the user using the id
    const user = await User.findById(userId);
    //respond with user
    res.json({ user: user });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//post or insert or create user api or function
const createUser = async (req, res) => {
  try {
    //Get the sent in data off request body
    const svcNo = req.body.svcNo;
    const initials = req.body.initials;
    const surname = req.body.surname;
    const appt = req.body.appt;
    const rank = req.body.rank;
    const password = req.body.password;
    const category = req.body.category;

    //Hash Password
    const hashedPassword = bcrypt.hashSync(password, 8);

    //Create a user with it
    const user = await User.create({
      svcNo: svcNo,
      initials: initials,
      surname: surname,
      appt: appt,
      rank: rank,
      password: hashedPassword,
      category: category,
    });
    //respond with the new user
    res.json({ user: user });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//update user
const updateUser = async (req, res) => {
  try {
    //get id off url
    const userId = req.params.id;

    //get the data off the req body
    const svcNo = req.body.svcNo;
    const initials = req.body.initials;
    const surname = req.body.surname;
    const appt = req.body.appt;
    const rank = req.body.rank;
    const password = req.body.password;
    const category = req.body.category;

    //Hash Password
    const hashedPassword = bcrypt.hashSync(password, 8);

    //find user using the id and update user
    const user = await User.findByIdAndUpdate(userId, {
      svcNo: svcNo,
      initials: initials,
      surname: surname,
      appt: appt,
      rank: rank,
      password: hashedPassword,
      category: category,
    });

    //find updated user
    const updatedUser = await User.findById(userId);
    //respond with updated user
    res.json({ user: updatedUser });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    //get id off url
    const userId = req.params.id;

    //delete user using id
    /*   await User.deleteOne({ id: userId }); */
    await User.findByIdAndDelete(userId);

    //respond
    res.json({ success: "user deleted successfully" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

module.exports = {
  login,
  logout,
  fetchUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
  checkAuth,
};
