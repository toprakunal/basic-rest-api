const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDB = async ()=> {
   const conn=  await mongoose.connect(process.env.MONGO_URI);

   console.log(`mongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;