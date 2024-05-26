const express = require("express");

const {
  loginController,
  registerController,
} = require("../controllers/userController");

// router object
const router = express.Router();

// -------------------------
// REGISTER USER || POST
// -------------------------
router.post("/register", registerController);

// -------------------------
// LOGIN USER || POST
// -------------------------
router.post("/login", loginController);

// exports
module.exports = router;
