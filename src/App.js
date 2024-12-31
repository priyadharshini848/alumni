import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Register from "./components/Register";
import Login from "./components/Login";
import StudentDashboard from "./components/StudentDashboard";
import AlumniLogin from "./components/Auth/AlumniLogin";
import AlumniDashboard from "./components/AlumniDashboard";
import AlumniDirectory from "./components/AlumniDirectory";
import JobPostings from "./components/JobPostings";
import MentorshipProgram from "./components/MentorshipProgram";
import Profile from "./components/Profile";
import FindMentor from "./components/FindMentor";
import JobsInternships from "./components/JobsInternships";
import YourProfile from "./components/YourProfile";
import QandAForum from "./components/Q&AForum";

function App() {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/register" element={<Register />} />

        {/* Student Routes */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/student-dashboard"
          element={
            <StudentDashboard
              FindMentor={FindMentor}
              JobsInternships={JobsInternships}
              YourProfile={YourProfile}
              QandAForum={QandAForum}
            />
          }
        />

        {/* Alumni Routes */}
        <Route path="/alumni-login" element={<AlumniLogin />} />
        <Route
          path="/alumni-dashboard"
          element={
            <AlumniDashboard
              AlumniDirectory={AlumniDirectory}
              JobPostings={JobPostings}
              MentorshipProgram={MentorshipProgram}
              Profile={Profile}
            />
          }
        />

        {/* Shared Jobs Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
