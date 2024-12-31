import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
    const testimonialsRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (testimonialsRef.current) {
                testimonialsRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                if (
                    testimonialsRef.current.scrollLeft + testimonialsRef.current.offsetWidth >=
                    testimonialsRef.current.scrollWidth
                ) {
                    testimonialsRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);

    const testimonials = [
        {
            "id": 1,
            "name": "Bhavika Singh",
            "feedback": "Bright Kashmir Holidays offers an exceptional travel experience that captures the beauty and essence of Kashmir offering knowledgeable guides, excellent accommodations and other arrangements. The team is incredibly helpful and professional.Highly recommended for an unforgettable trip!"
        },
        {
            "id": 2,
            "name": "Rajeshwari Wagh",
            "feedback": "We  had a wonderful experience with Bright Kashmir Holidays, Bright Kashmir Holidays provided us with personalized services and also provided us with customized itinerary made our kashmir stay and Srinagar trip truly unforgettable. From the luxurious houseboat stay to the scenic sightseeing tours, Everything was very well planned and executed, the team's warm hospitality and dedication to ensuring a hassle free journey left us throughly amazed. We highly recommend Bright Kashmir Holiday for a memorable and magical experience in Kashmir"
        },
        {
            "id": 3,
            "name": "R Creation",
            "feedback": "Bright Kashmir Holidays has Exceptional service Friendly, efficient, and knowledgeable. Mr Sameer Nazir and his team Helped me with all my queries and made my experience truly seamless. Highly recommended."
        },
        {
            "id": 4,
            "name": "Neelam Singh",
            "feedback": "Bright Kashmir Holidays provided an amazing Kashmir experience! Well-planned itinerary, beautiful tours, and great hospitality. Highly recommend for a memorable trip!"
        }, 
        {
            "id": 5,
            "name": "Utkarsh Upadhyay",
            "feedback": "If you’re thinking about visiting Kashmir, Bright Kashmir Holidays is the travel agency to go with! Their perfectly planned itinerary, stunning tours, and warm hospitality ensure you’ll have the trip of a lifetime. Don’t miss out on this incredible experience!"
        },
        {
            "id": 6,
            "name": "Heena Ashraf",
            "feedback": "My recent trip to Kashmir with Bright Holiday was truly unforgettable.The accommodations arranged by Bright Holiday were excellent and offered a taste of Kashmir’s unique culture. We stayed in a variety of places, including a beautiful houseboat on Dal Lake and comfortable hotels in Gulmarg and Pahalgam.Our guide was knowledgeable, friendly, and professional.For the quality of service, accommodations, and experiences provided, the trip was excellent value for money."
        },
        {
            "id": 7,
            "name": "Munjad jalal",
            "feedback": "Our Kashmir trip with Bright Kashmir Holidays was exceptional! Mr. Sameer Nazir has arranged all the things/ services well in a professional and personalized way for us, making our tour memorable.Highly recommended"
        },
        {
            "id": 8,
            "name": "Sonali Wagh",
            "feedback": "Bright Kashmir Holidays truly exceeded our expectations. Their professionalism, knowledge, and passion for Kashmir's beauty shone through in every aspect of our trip. From the moment we arrived, they ensured a seamless and relaxing experience. The accommodations were cozy, the food was delicious, and the sightseeing tours were expertly guided. We particularly appreciated the flexibility and adaptability of the team, who went above and beyond to accommodate our preferences."
        },
        {
            "id": 9,
            "name": "Utkarsh Upadhyay",
            "feedback": "If you’re thinking about visiting Kashmir, Bright Kashmir Holidays is the travel agency to go with! Their perfectly planned itinerary, stunning tours, and warm hospitality ensure you’ll have the trip of a lifetime. Don’t miss out on this incredible experience!"
        },
        {
            "id": 10,
            "name": "Shaikh Zakir husain",
            "feedback": "It was very nice experience, i was lucky to get contacted with the agency  and explored the kashmir Valley 😊 Thank you"
        },
        {
            "id": 11,
            "name": "kailash panthi",
            "feedback": "I have done kashmir tour with this companyI got good price good guideI am highy recomonded to tham if you take any kashmir tour"
        },
    ]

    return (
        <div className="about">
            <div className="container">
                <h1>About Us</h1>
                <div className="para-div">
                    <p className="paragraph">
                    Bright Kashmir Holidays - Travel to Paradise. Discover the breathtaking beauty of Kashmir with us! Bright Kashmir Holidays is a 
                premier travel company dedicated to providing unforgettable experiences in this enchanting region. From majestic mountains to serene lakes and 
                vibrant Heritage and culture of Kashmir, we curate personalized tours that showcase the best of Kashmir and Ladakh With a team of experienced 
                professionals our expertise includes tour operations, Hotel bookings, Transportation, and MICE (Meetings, Incentives, Conferences, and Exhibitions) 
                and passion ensure a hassle-free journey, creating memories that will last a lifetime. Come, let us brighten your travels to Kashmir 🍁
                    </p>
                </div>
                <h2>What Our Customers Say</h2>
                <div ref={testimonialsRef} className="testimonials">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <p className="feedback">"{testimonial.feedback}"</p>
                            <h3>{testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
