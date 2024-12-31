import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JobsInternships.css";

const JobsInternship = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch jobs from the server
    axios
      .get("http://localhost:5000/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  return (
    <div className="jobs-internship">
      <h2>Jobs and Internships</h2>
      {jobs.length > 0 ? (
        <div className="job-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-item">
              <h3>{job.title}</h3>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Type:</strong> {job.jobType}
              </p>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p>
                <strong>Skills:</strong> {job.skills}
              </p>
              <p>
                <strong>Description:</strong> {job.description}
              </p>
              <p>
                <strong>Date:</strong> {job.date}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
};

export default JobsInternship;
