// src/db/index.js
import mongoose from "mongoose";

// Since dbname is only needed here, let's define it directly
export const dbname = "FirstTry";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${dbname}`);
    console.log(`✅ Connected to MongoDB: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
