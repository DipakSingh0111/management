const express = require("express");
const {
  addTransection,
  getAllTransection,
} = require("../controllers/transectionController");

// router object
const router = express.Router();

// routes
// add transection || POST METHOD
router.post("/add-transection", addTransection);

// get transection || GET METHOD
router.post("/get-transection", getAllTransection);

module.exports = router;
