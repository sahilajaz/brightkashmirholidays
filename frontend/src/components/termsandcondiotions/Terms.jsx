import './Terms.css'
const Terms = () => {
    return (
        <section className="Privacyandpolicy">
            <h1>Terms and Conditions</h1>
            <p className="title">
                Welcome to Bright Kashmir Holidays! By accessing or using our website and services, you agree to comply
                with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from
                using our website and services.
            </p>

            <h2 className="info-heading">1. Use of Our Website</h2>
            <p className="info">You must be at least 18 years old to use our services.</p>
            <ul>
                <li>You agree to provide accurate and complete information during bookings or inquiries.</li>
                <li>Unauthorized use of our website may result in legal action.</li>
            </ul>

            <h2 className="info-heading">2. Booking and Payments</h2>
            <p className="info">
                All bookings are subject to availability and confirmation. Payments are securely processed through
                Razorpay. We are not responsible for any payment gateway issues. Cancellations and refunds are subject
                to our cancellation policy.
            </p>

            <h2 className="info-heading">3. Intellectual Property</h2>
            <p className="description">
                All content on this website, including text, graphics, and logos, is the intellectual property of Bright
                Kashmir Holidays. Unauthorized reproduction or distribution of our content is strictly prohibited.
            </p>

            <h2 className="info-heading">4. Limitation of Liability</h2>
            <p className="Datasecurity">
                Bright Kashmir Holidays is not liable for any direct, indirect, or incidental damages resulting from the
                use of our services or website. We are not responsible for disruptions caused by third-party services,
                including airlines or hotels.
            </p>

            <h2 className="info-heading">5. Changes to Terms</h2>
            <p className="sharing">
                We reserve the right to modify these Terms and Conditions at any time. Any updates will be posted on
                this page.
            </p>
        </section>

    )
}

export default Terms;