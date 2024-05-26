const userModel = require("../models/userModel");
// -------------------------
// REGISTER USER || POST
// -------------------------
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.create({
      name,
      email,
      password,
    });
    res
      .status(201)
      .json({ success: true, message: "Register Successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// -------------------------
// LOGIN USER || POST
// -------------------------
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Login Successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { loginController, registerController };
