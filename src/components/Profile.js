import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const initialProfile = {
    name: "Jane Doe",
    role: "Graphic Designer",
    email: "jane.doe@example.com",
    phone: "+9876543210",
    about: "Creative and passionate about designing engaging visual content.",
    skills: ["Adobe Photoshop", "Illustrator", "InDesign", "Sketch", "Figma"],
    experience: [
      { company: "Creative Agency", position: "Lead Designer", year: "2020-2023" },
      { company: "Design Studio", position: "Junior Designer", year: "2018-2020" },
    ],
    education: "Bachelor of Arts in Graphic Design from ABC University",
    address: "456 Elm St, Downtown, NY, 10001",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/janedoe",
      github: "https://github.com/janedoe",
    },
    image: "https://st4.depositphotos.com/1000816/20208/i/380/depositphotos_202082830-stock-photo-successful-business-woman-standing-in.jpg", // Replace with an actual image URL
  };

  const [userProfile, setUserProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...initialProfile });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setUserProfile({ ...editedProfile });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedProfile({ ...userProfile });
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {isEditing ? (
          <div className="profile-edit">
            <h2>Edit Profile</h2>
            <div className="profile-header">
              <label>Profile Picture</label>
              <img src={userProfile.image} alt="Profile" />
            </div>
            <div className="profile-details">
              <div className="profile-detail">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedProfile.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-detail">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  value={editedProfile.role}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-detail">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={editedProfile.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-detail">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={editedProfile.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-detail">
                <label>About</label>
                <textarea
                  name="about"
                  value={editedProfile.about}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-detail">
                <label>Education</label>
                <input
                  type="text"
                  name="education"
                  value={editedProfile.education}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-detail">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={editedProfile.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="profile-actions">
              <button className="save-btn" onClick={handleSaveClick}>
                Save
              </button>
              <button className="cancel-btn" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="profile-header">
              <img src={userProfile.image} alt="Profile" />
              <div>
                <h2>{userProfile.name}</h2>
                <p>{userProfile.role}</p>
              </div>
            </div>
            <div className="profile-details">
              <div className="profile-detail">
                <h3>Email</h3>
                <p>{userProfile.email}</p>
              </div>
              <div className="profile-detail">
                <h3>Phone</h3>
                <p>{userProfile.phone}</p>
              </div>
              <div className="profile-detail">
                <h3>About</h3>
                <p>{userProfile.about}</p>
              </div>
              <div className="profile-detail">
                <h3>Skills</h3>
                <ul>
                  {userProfile.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="profile-detail">
                <h3>Experience</h3>
                <ul>
                  {userProfile.experience.map((exp, index) => (
                    <li key={index}>
                      <strong>{exp.position}</strong> at {exp.company} ({exp.year})
                    </li>
                  ))}
                </ul>
              </div>
              <div className="profile-detail">
                <h3>Education</h3>
                <p>{userProfile.education}</p>
              </div>
              <div className="profile-detail">
                <h3>Address</h3>
                <p>{userProfile.address}</p>
              </div>
              <div className="profile-detail">
                <h3>Social Links</h3>
                <p>
                  <a
                    href={userProfile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href={userProfile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
            <button className="edit-btn" onClick={handleEditClick}>
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
