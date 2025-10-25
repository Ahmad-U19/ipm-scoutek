import React, { useEffect } from "react";
import "../Components/Contact.css";

function Contact() {
    useEffect(() => {
        document.title = "Contact | IPM Scoutek";
    }, []);

    return (
        <div>
            <form action="book-a-demo">
                <h2>Book A Demo</h2>

                <div className="name">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Full Name" required />
                </div>

                <div className="job">
                    <label htmlFor="job">Job Title</label>
                    <input type="text" placeholder="Job Title" required />
                </div>

                <div className="company">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" placeholder="Company Name" required />
                </div>

                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" required />
                </div>

                <div className="phone">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" placeholder="Phone Number" required />
                </div>
            </form>
        </div>
    );
}

export default Contact;
