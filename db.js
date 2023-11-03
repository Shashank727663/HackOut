const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://shashankkrishu99:B6l8PLY3U3okPqsJ@cluster0.utzqtzp.mongodb.net/";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(connectionString, {
      useUnifiedTopology: true
    });

    console.log(`db connection established.... ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectdb;
