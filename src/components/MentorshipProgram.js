import React, { useState } from "react";
import "./MentorshipProgram.css";

const MentorshipProgram = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    availability: "",
    bio: "",
    location: "",
    image: null, // Added field for image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for signing up as a mentor!");

    // Log form data to confirm image file
    console.log("Form Data: ", formData);
  };

  return (
    <div className="mentorship-container">
      <div className="header">
        <h2>Become a Mentor</h2>
        <p>Help shape the future by guiding students in their careers.</p>
      </div>

      <section className="details">
        <h3>Why Become a Mentor?</h3>
        <ul>
          <li>Guide students to success in their professional journey</li>
          <li>Enhance your leadership and coaching skills</li>
          <li>Make a lasting impact on the next generation</li>
        </ul>
      </section>

      <section className="form-container">
        <h3>Sign Up to Mentor</h3>
        <form className="mentor-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Full Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="expertise">Area of Expertise</label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              required
              placeholder="Your Expertise"
            />
          </div>

          <div className="form-group">
            <label htmlFor="availability">Availability (hours per week)</label>
            <input
              type="number"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              placeholder="Hours per Week"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              required
              placeholder="A one-line description about yourself"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Your Location"
            />
          </div>

          {/* Image Upload Section */}
          <div className="form-group">
            <label htmlFor="image">Profile Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default MentorshipProgram;
