require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");


const app = express();

app.use(cookieParser());
app.use(express.json()); // ✅ Move this up

// Routes
const authRoutes = require("./routes/auth-router");
const songRoutes = require("./routes/songRoutes");

// ✅ CORS Setup
const allowedOrigins = [
  "https://music-platform-v787.vercel.app",
  "http://localhost:5173",
];

app.use(cors({
  origin: ["https://music-platform-v787.vercel.app", "http://localhost:5173"],
  credentials: true
}));


// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI_USERS)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// ✅ Routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("Server running successfully ✅");
});

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
