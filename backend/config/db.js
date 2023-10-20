import mongoose from "mongoose";

// Set up MongoDB connection
const connectDB = async () =>
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "social_cruise",
  });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default connectDB;
