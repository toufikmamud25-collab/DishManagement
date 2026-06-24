require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const dishRoutes = require("./routes/dishRoutes");
const Dish = require("./models/Dish");

const app = express();
const server = http.createServer(app);

// Connect Database
connectDB();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PATCH"],
  }),
);

// Socket.IO Setup
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PATCH"],
  },
});

// Make io available in controllers
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api/dishes", dishRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Dish Dashboard API Running",
  });
});

// Socket Connection
io.on("connection", (socket) => {
  console.log(`Client Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Client Disconnected: ${socket.id}`);
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
