import dotenv from "dotenv";
dotenv.config(
    {
        path: "./public/temp/.env.sample"
    }
);


import express from "express";
import connectDB, { dbname } from "./db/index.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

(async () => {
  try {
    // Connect to MongoDB first
    await connectDB();

    // Start Express server only if DB connection is successful
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
})();



// below is the first method to connect database and server
// steps we follow
// 1. Import the required modules like express and mongoose
// 2. Create an instance of the Express application
// 3. Define the database connection function
// 4. Start the server and connect to the database

// import express from "express";
// const app = express();

// async function connectDB() {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${dbname}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB successfully");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// connectDB();
