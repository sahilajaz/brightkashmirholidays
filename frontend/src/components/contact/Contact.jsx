import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p className='title-para'>
                We would love to hear from you! Reach out to us for bookings, inquiries, or any
                questions you may have.
            </p>
            <div className="contact-info">
                <div className="info-item">
                    <h2>Phone</h2>
                    <p>+91 6006151196</p>
                </div>
                <div className="info-item">
                    <h2>Email</h2>
                    <p>brightkashmirholidays@gmail.com</p>
                </div>
                <div className="info-item">
                    <h2>Address</h2>
                    <p>NH Pazalpora Near Horticulture Office
                    Deewan Bagh Bijbehara Anantnag 192124</p>
                </div>
                <div className="info-item">
                    <h2>Working Hours</h2>
                    <p>Working all week</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
