import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Contact = ({ isMenuOpen, setIsMenuOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function
      once: true, // Trigger animation only once
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send the data to a server)
    console.log(formData);
    alert("Form submitted!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className={`contact-section ${isMenuOpen ? "active" : ""}`}>
      <h2 data-aos="fade-in">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up">
        <div className="form-group" data-aos="fade-right">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" data-aos="fade-left">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group" data-aos="fade-right">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button" data-aos="fade-up">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
