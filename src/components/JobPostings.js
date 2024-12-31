import React, { useState } from "react";
import axios from "axios";
import "./JobPostings.css";

const JobPostings = () => {
  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    location: "",
    jobType: "",
    company: "",
    skills: "",
    description: "",
    date: "",
  });
  const [jobFormError, setJobFormError] = useState("");

  const handleAddJob = async () => {
    if (
      !newJob.title ||
      !newJob.location ||
      !newJob.jobType ||
      !newJob.company ||
      !newJob.skills ||
      !newJob.description ||
      !newJob.date
    ) {
      setJobFormError("Please fill all the required fields.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      });
  
      if (!response.ok) {
        throw new Error("Failed to post job. Try again.");
      }
  
      const result = await response.json();
      console.log(result.message); // Debugging purpose
      setJobData([...jobData, newJob]);
      setNewJob({
        title: "",
        location: "",
        jobType: "",
        company: "",
        skills: "",
        description: "",
        date: "",
      });
      setShowForm(false);
      setJobFormError("");
    } catch (error) {
      console.error(error.message);
      setJobFormError(error.message);
    }
  };
  
  

  return (
    <div className="job-postings">
      <h2>Job Postings</h2>

      <button onClick={() => setShowForm(true)} className="add-job-btn">
        Add Job Now
      </button>

      {showForm && (
        <div className="job-form">
          <h3>Post a Job</h3>
          {jobFormError && <p className="error">{jobFormError}</p>}
          <input
            type="text"
            placeholder="Job Title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
          />
          <select
            value={newJob.jobType}
            onChange={(e) => setNewJob({ ...newJob, jobType: e.target.value })}
          >
            <option value="">Select Job Type</option>
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
          </select>
          <input
            type="text"
            placeholder="Company Name"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
          />
          <input
            type="text"
            placeholder="Skills Required"
            value={newJob.skills}
            onChange={(e) => setNewJob({ ...newJob, skills: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={newJob.description}
            onChange={(e) =>
              setNewJob({ ...newJob, description: e.target.value })
            }
          ></textarea>
          <input
            type="date"
            value={newJob.date}
            onChange={(e) => setNewJob({ ...newJob, date: e.target.value })}
          />
          <button onClick={handleAddJob}>Add Now</button>
        </div>
      )}
    </div>
  );
};

export default JobPostings;
