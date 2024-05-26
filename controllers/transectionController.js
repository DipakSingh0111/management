const transectionModel = require("../models/transectionModel");

// get transection || GET METHOD
const getAllTransection = async (req, res) => {
  try {
    const { frequency } = req.body;
    const transection = await transectionModel.find({
      userid: req.body.userid,
    });
    res.status(200).json(transection);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// add transection || POST METHOD
const addTransection = async (req, res) => {
  try {
    const newTransection = new transectionModel(req.body);
    await newTransection.save();
    res.status(201).send("Transection Created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getAllTransection, addTransection };
