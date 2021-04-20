const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGO_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
    //handle error here or in server.js
    // (err) => {
    //   if (err) throw err.message;
    //   console.log("Mongodb connected!");
    // }
  );
  console.log("Mongodb connected!");
};

module.exports = connectDB;
