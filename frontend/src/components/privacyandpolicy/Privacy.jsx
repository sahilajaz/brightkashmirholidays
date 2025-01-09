import './Privacy.css'
const Privacy = () => {
    return (
        <section className="Privacyandpolicy">
            <h1>Privacy Policy</h1>
            <p className="title">
                Bright Kashmir Holidays is committed to protecting your privacy. This Privacy Policy explains how we
                collect, use,
                disclose, and safeguard your information when you visit our website,and use
                our services. By using our website and services, you agree to the terms outlined below.
            </p>

            <h2>1. Information We Collect</h2>
            <p className="description">
                - <strong>Personal Information:</strong> Name, email address, phone number, billing address, and other
                details
                provided during bookings or inquiries.<br/>
                - <strong>Payment Information:</strong> Payment details such as card information, UPI IDs, or net
                banking
                credentials are securely processed via Razorpay. We do not store payment details. (Refer to Razorpay’s
                privacy
                policy for more details).<br/>
                - <strong>Usage Data:</strong> Information such as IP address, browser type, device details, and pages
                visited on
                our website.
            </p>

            <h2 className="info-heading">2. Use of Your Information</h2>
            <p className="info"><strong>We use the information collected to:</strong></p>
            <ul>
                <li>Process and confirm bookings.</li>
                <li>Facilitate secure payment processing.</li>
                <li>Communicate updates about your reservations.</li>
                <li>Improve our website’s functionality and user experience.</li>
                <li>Send promotional emails (only with your consent).</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p className='sharing'>
                - <strong>Payment Gateway:</strong> We share your payment details with Razorpay for processing.<br/>
                - <strong>Travel Partners:</strong> Airlines, hotels, and other service providers for completing
                bookings.<br/>
                - <strong>Legal Compliance:</strong> If required by law or for protecting our rights.
            </p>

            <h2>4. Data Security</h2>
            <p className="Datasecurity">
                We implement encryption and secure servers to protect your data. While we take all necessary
                precautions, no
                method of electronic transmission or storage is completely secure.
            </p>
            <h2>5. Use of Images and Content</h2>
        <p className="sharing">
            All images, videos, text, and other content provided on this website are the exclusive property of Bright Kashmir Holidays. These materials are protected by copyright and cannot be copied, reproduced, distributed, or used in any other way without the express written consent of the company. Any unauthorized use of these materials is prohibited and may result in legal action. © 2025 Bright Kashmir Holidays. All rights reserved.
        </p>
        </section>
    );
};

export default Privacy;
