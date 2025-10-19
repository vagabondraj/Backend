import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Middleware to parse JSON and handle CORS
// Allow requests from the frontend origin specified in environment variables
// and enable credentials (cookies, authorization headers, etc.)
app.use(cors(
    {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    }
));

// Middleware to parse cookies
// and JSON bodies
// This is essential for handling requests with cookies and JSON payloads
// in a secure and efficient manner.
app.use(cookieParser());

// Middleware to parse JSON bodies
// This is essential for handling requests with JSON payloads
// in a secure and efficient manner.
app.use(express.json(
    {
        limit: '16kb' // Limit JSON body size to 16kb
    }
));

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running!");
});


// Middleware to parse URL-encoded bodies
// This is essential for handling form submissions and URL-encoded payloads
// in a secure and efficient manner.
app.use(express.urlencoded(
    { 
    extended: true,
    limit: '16kb' // Limit URL-encoded body size to 16kb
   }));

app.use(express.static('public')); // Serve static files from the 'public' directory

const app = express();

export default app;