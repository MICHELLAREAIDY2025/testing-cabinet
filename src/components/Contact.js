import React, { useState } from "react";
import Navbar from "./Navbar";  // Import the Navbar component
import "./Contact.css";
import insta from "../assets/images/download.jpeg";
import email from "../assets/images/download.png";
import phone from "../assets/images/images.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    persons: "1",
    message: "",
  });

  // List of current and upcoming events
  const events = [
    { title: "Glory from the Past - Exhibition", date: "Until April 25, 2025" },
    // Add more future events if needed
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your registration request has been sent!");
  };

  return (
    <div>
      <div className="hero-section">
        <h1>LET'S DISCUSS</h1>
        <p>
          Are you a healthcare professional interested in hosting an exhibition in your health centre?
          <br />
          Are you an artist who would like to take part in the Cabinet d'Artiste initiative?
          <br />
          Are you simply curious and would like to be kept informed of our latest news?
        </p>
        <div className="contact-info">
          <div className="icon">
            <img src={phone} alt="phone" />
            <p>+33 6 46 45 44 43</p>
          </div>
          <div className="icon">
            <img src={email} alt="email" />
            <p>cabinetdartistes@gmail.com</p>
          </div>
          <div className="icon">
            <img src={insta} alt="insta" />
            <p>@cabinetdartiste</p>
          </div>
        </div>
      </div>
      <div className="title">
        <p>Join Our Events</p>
      </div>

      {/* Contact Form Section */}
      <div className="contact-container">
        {/* Left Side: Event Information */}
        <div className="contact-info">
          <h2>For the event of your choice, for yourself and your friends!</h2>
          <p>All our events are free of charge (unless stated otherwise).</p>
          <p>Simply fill out the form, and our team will get back to you shortly with confirmation.</p>
          <p className="contact-thank-you">
            Thank you for your interest in our initiative, we look forward to welcoming you!
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-container">
          <h3>Event Registration Form</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {/* Dropdown for Selecting Event */}
            <select name="event" value={formData.event} onChange={handleChange} required>
              <option value="" disabled>Select an event</option>
              {events.map((event, index) => (
                <option key={index} value={event.title}>
                  {event.title} ({event.date})
                </option>
              ))}
            </select>

            {/* Dropdown for Number of Persons */}
            <select name="persons" value={formData.persons} onChange={handleChange} required>
              {[...Array(5)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} {i === 0 ? "person" : "persons"}
                </option>
              ))}
            </select>

            {/* Message Box */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {/* Submit Button */}
            <button type="submit">Submit Registration</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
