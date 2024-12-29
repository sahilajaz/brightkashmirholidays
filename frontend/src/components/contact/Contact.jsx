import {useState} from 'react';
import './Contact.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Contact() {
    const[loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const baseUrl = 'http://localhost:3000';

    const handleChange = async (e) => {
        e.preventDefault();

        // Check for required fields
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill out all fields');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${baseUrl}/razorpay/customer-query`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setLoading(false);

            if (result.success) {
                toast.success('Message sent');
                setFormData({ name: "", email: "", message: "" }); // Reset form
            } else {
                toast.error(result.message || 'Something went wrong');
            }
        } catch (error) {
            setLoading(false);
            toast.error('Failed to sent message');
            console.error('Error:', error);
        }
    };



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
                    <p>contact@brightkashmirholidays.in</p>
                </div>
                <div className="info-item">
                    <h2>Address</h2>
                    <p>NH Pazalpora Near Horticulture Office
                    Deewan Bagh Bijbehara Anantnag 192124</p>
                </div>
                <div className="info-item">
                    <h2>Working Hours</h2>
                    <p>Sunday - Saturday: 8 AM - 10 PM </p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleChange}>
                    <input type="text" placeholder="Your Name" required
                           onChange={(e) => setFormData((prevData) => ({...prevData , name: e.target.value}))} />
                    <input type="email" placeholder="Your Email" required
                    onChange={(e) => setFormData((prevData) => ({...prevData , email: e.target.value })) }
                    />
                    <textarea placeholder="Your Message" rows="5" required
                    onChange={(e) => setFormData((prevData) => ({...prevData , message: e.target.value }))}
                    />
                    <button type="submit">
                        {
                            loading ? 'Sending...' : 'Submit'
                        }
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Contact;
