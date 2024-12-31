import React, { useState } from "react";
import "./AlumniDirectory.css";

const alumniData = [
  { name: "John Doe", batch: "2020", experience: "Software Engineer at XYZ Corp", image: "https://st2.depositphotos.com/2931363/6569/i/380/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg", currentRole: "Full-stack Developer" },
  { name: "Jane Smith", batch: "2021", experience: "Marketing Manager at ABC Ltd.", image: "https://st2.depositphotos.com/1662991/43758/i/380/depositphotos_437580158-stock-photo-happy-hispanic-young-guy-his.jpg", currentRole: "Brand Strategist" },
  { name: "Alice Johnson", batch: "2020", experience: "Product Designer at DEF Co.", image: "https://st4.depositphotos.com/12985790/25235/i/380/depositphotos_252354162-stock-photo-excited-curly-african-american-girl.jpg", currentRole: "Senior Product Designer" },
  { name: "Bob Lee", batch: "2022", experience: "Financial Analyst at GHI Group", image: "https://st3.depositphotos.com/9881890/13879/i/380/depositphotos_138797442-stock-photo-smiling-young-woman.jpg", currentRole: "Finance Consultant" },
  { name: "Charlie Brown", batch: "2021", experience: "Data Scientist at JKL Analytics", image: "https://st4.depositphotos.com/12982378/38366/i/380/depositphotos_383666016-stock-photo-happy-man-looking-camera-while.jpg", currentRole: "Lead Data Scientist" },
  { name: "Megan Clark", batch: "2020", experience: "HR Specialist at MNO HR", image: "https://static9.depositphotos.com/1518767/1119/i/380/depositphotos_11193548-stock-photo-smiling-male-student-working.jpg", currentRole: "HR Manager" },
];

const AlumniDirectory = () => {
  const [search, setSearch] = useState("");
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = alumniData.filter(
      (alumni) =>
        alumni.name.toLowerCase().includes(value.toLowerCase()) ||
        alumni.batch.includes(value)
    );
    setFilteredAlumni(filtered);
  };

  const handleChoose = (alumni) => {
    setSelectedAlumni(alumni);
  };

  const handleCloseDetails = () => {
    setSelectedAlumni(null);
  };

  const handleRequest = () => {
    alert("Request sent");
  };

  return (
    <div className="alumni-directory">
      <h2>Alumni Directory</h2>
      <p>Connect with fellow alumni and students.</p>
      <input
        type="text"
        placeholder="Search by name or batch"
        value={search}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="alumni-list">
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumni, index) => (
            <div key={index} className="alumni-item">
              <div className="alumni-image">
                <img src={alumni.image} alt={alumni.name} />
              </div>
              <div className="alumni-details">
                <p><strong>Name:</strong> {alumni.name}</p>
                <p><strong>Batch:</strong> {alumni.batch}</p>
                <p><strong>Experience:</strong> {alumni.experience}</p>
                <p><strong>Current Role:</strong> {alumni.currentRole}</p>
              </div>
              <button className="choose-btn" onClick={() => handleChoose(alumni)}>
                Choose
              </button>
            </div>
          ))
        ) : (
          <p>No alumni found</p>
        )}
      </div>

      {selectedAlumni && (
        <div className="selected-alumni-details">
          <div className="details-header">
            <h3>Selected Alumni</h3>
            <button onClick={handleCloseDetails} className="close-btn">×</button>
          </div>
          <div className="details-content">
            <img src={selectedAlumni.image} alt={selectedAlumni.name} />
            <p><strong>Name:</strong> {selectedAlumni.name}</p>
            <p><strong>Batch:</strong> {selectedAlumni.batch}</p>
            <p><strong>Experience:</strong> {selectedAlumni.experience}</p>
            <p><strong>Current Role:</strong> {selectedAlumni.currentRole}</p>
            <button className="request-btn" onClick={handleRequest}>
              Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniDirectory;
