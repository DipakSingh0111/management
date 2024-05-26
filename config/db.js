const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connection Successfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDb ${error}`);
  }
};

module.exports = connectdb;
