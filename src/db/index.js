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


// steps to connect database and server
// 1. Create a separate file for database connection (db/index.js).
// 2. Define the connection logic in a function and export it.
// 3. Import and call this function in the main server file (index.js) before starting the server.
// 4. Start the server only if the database connection is successful.
// 5. Handle errors appropriately to avoid starting the server without a database connection.
// src/index.js

// more detailed method to connect database and server
