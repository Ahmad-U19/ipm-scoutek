import React, { useEffect } from "react";
import "../Components/Contact.css";

function Contact() {
  useEffect(() => {
    document.title = "Contact | IPM Scoutek";
  }, []);

  return (
    <div className="contact-container">
      <form name="book-a-demo">
        <h2>Request A Demo</h2>

        <div className="name">
          <label htmlFor="name">Full Name</label><br />
          <input type="text" placeholder="Full Name" required />
        </div>

        <div className="job-company-row">
          <div className="job">
            <label htmlFor="job">Job Title</label><br />
            <input type="text" placeholder="Job Title" required />
          </div>

          <div className="company">
            <label htmlFor="company">Company Name</label><br />
            <input type="text" placeholder="Company Name" required />
          </div>
        </div>

        <div className="email">
          <label htmlFor="email">Email</label><br />
          <input type="email" placeholder="Email" required />
        </div>

        <div className="phone">
          <label htmlFor="phone">Phone Number</label><br />
          <input type="tel" placeholder="Phone Number" required />
        </div>

        <div className="cropType">
          <label htmlFor="cropType">Crop Type</label>
          <input type="text" placeholder="Crop Type" required />
        </div>

        <div className="cropAreaSize">
          <label htmlFor="cropAreaSize">Crop Area Size</label>
          <input type="number" placeholder="Crop Area Size" required />
        </div>

        <div className="dropdownUnit">
          <label htmlFor="unit">Unit</label>
          <select id="unit" name="unit" required>
            <option value="acres">Acres</option>
            <option value="hectares">Hectares</option>
          </select>
        </div>

        <label htmlFor="message">Message</label>
        <textarea name="Message" id="message" rows={5} placeholder="Enter your message here"></textarea>

        <button type="submit" className="submitBtn">Request a Demo</button>
      </form>
    </div>
  );
}

export default Contact;
