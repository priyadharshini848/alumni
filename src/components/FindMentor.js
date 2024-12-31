import React, { useState } from "react";
import "./FindMentor.css";

const mentorsList = [
  {
    name: "John Doe",
    expertise: "Software Development",
    contact: "johndoe@email.com",
    bio: "John has over 10 years of experience in software development, specializing in backend technologies.",
    location: "New York, USA",
    availability: "Weekdays 9AM - 5PM",
    image: "https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
  },
  {
    name: "Jane Smith",
    expertise: "Marketing",
    contact: "janesmith@email.com",
    bio: "Jane is a digital marketing strategist with a passion for creating impactful brand stories.",
    location: "London, UK",
    availability: "Weekends 10AM - 4PM",
    image: "https://t3.ftcdn.net/jpg/03/02/88/46/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg"
  },
  {
    name: "Mark Lee",
    expertise: "Product Management",
    contact: "marklee@email.com",
    bio: "Mark has successfully launched numerous products in the tech industry, with a strong focus on user experience.",
    location: "San Francisco, USA",
    availability: "Weekdays 10AM - 6PM",
    image: "https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
  },
  {
    name: "Sara Green",
    expertise: "Data Science",
    contact: "saragreen@email.com",
    bio: "Sara specializes in machine learning and data analysis, helping companies turn data into actionable insights.",
    location: "Berlin, Germany",
    availability: "Weekdays 8AM - 4PM",
    image: "https://t4.ftcdn.net/jpg/01/87/53/55/240_F_187535523_i1AuPUR5LG5o8wu2JLlFpWPoAjYGj1xH.jpg"
  },
  {
    name: "Emily Brown",
    expertise: "UI/UX Design",
    contact: "emilybrown@email.com",
    bio: "Emily is a passionate designer focusing on creating user-friendly interfaces with a keen eye for detail.",
    location: "Toronto, Canada",
    availability: "Weekdays 11AM - 5PM",
    image: "https://t3.ftcdn.net/jpg/02/30/40/74/240_F_230407433_uF2iM6tUs1Sge24999FWdo241t8FMBi7.jpg"
  },
  {
    name: "Michael Taylor",
    expertise: "Cybersecurity",
    contact: "michaeltaylor@email.com",
    bio: "Michael is a cybersecurity expert who helps organizations protect their data from evolving cyber threats.",
    location: "Sydney, Australia",
    availability: "Weekdays 9AM - 3PM",
    image: "https://t3.ftcdn.net/jpg/02/43/76/54/240_F_243765470_a0hN5zuTKIonTbRGldi8KajuvhSiWvDx.jpg"
  }
];

const FindMentor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [message, setMessage] = useState("");

  const filteredMentors = mentorsList.filter((mentor) =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openMessageModal = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const closeMessageModal = () => {
    setIsModalOpen(false);
    setMessage("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (selectedMentor) {
      // Show a confirmation message instead of opening mail client
      alert(`Your message to ${selectedMentor.name} has been sent.`);
      
      // Close the modal after sending
      closeMessageModal();
    }
  };

  return (
    <div className="find-mentor-container">
      <h2 className="find-mentor-title">Find a Mentor</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for mentors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mentors-list">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor, index) => (
            <div key={index} className="mentor-card">
              <img src={mentor.image} alt={mentor.name} className="mentor-image" />
              <h3>{mentor.name}</h3>
              <p><strong>Expertise:</strong> {mentor.expertise}</p>
              <p><strong>Location:</strong> {mentor.location}</p>
              <p><strong>Availability:</strong> {mentor.availability}</p>
              <p><strong>Bio:</strong> {mentor.bio}</p>
              <button onClick={() => openMessageModal(mentor)} className="message-button">Message</button>
            </div>
          ))
        ) : (
          <p className="no-results">No mentors found with that name. Try another search.</p>
        )}
      </div>

      {/* Message Modal */}
      {isModalOpen && (
        <div className="message-modal">
          <div className="modal-content">
            <h3>Message {selectedMentor.name}</h3>
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Write your message here..."
            />
            <div className="modal-buttons">
              <button onClick={sendMessage}>Send Message</button>
              <button onClick={closeMessageModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindMentor;
