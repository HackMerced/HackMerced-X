import React, { useState } from 'react';
import './ContactUs.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // functionality to be put in soon
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <main className="main-content">
        <section className="contact-section">
          <h1>Contact Us</h1>
          <p>Feel like contacting us? Submit your queries here and we will get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
