const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// MongoDB connection
const MONGO_URI = "mongodb://localhost:27017/jobportal";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Schema and Model
const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  jobType: String,
  company: String,
  skills: String,
  description: String,
  date: String,
});

const Job = mongoose.model("Job", jobSchema);

// API Routes
app.post("/api/jobs", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: "Job posted successfully!" });
  } catch (error) {
    console.error("Error saving job:", error);
    res.status(500).json({ message: "Failed to post job. Try again." });
  }
});

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Failed to fetch jobs." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
