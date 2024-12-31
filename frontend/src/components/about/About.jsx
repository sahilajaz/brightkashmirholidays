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

    

    return (
        <div className="about">
            <div className="container">
                <h1>About Us</h1>
                <div className="para-div">
                    <p className="paragraph">
                    This is the official website of  Bright Kashmir Holidays , the largest travel operators in Kashmir. We are specialized in providing perfect services to all kind of travellers. We provide you complete information about all the regions of Jammu & Kashmir. On our official website all your questions, queries and apprehensions shall be answered.Our information is up-to-date and complete, so that you don’t find yourself in any sort of trouble on your journey. Before you leave for the Earthly Paradise, you need to know a lot of things. Travel to Kashmir could be a spellbinding experience, but if you do not know certain basic things, you may end up missing a lot of things in Kashmir. Being headquartered in Kashmir, we know the places very well. We provide you complete information about Jammu Kashmir. Our motive is to make your tour successful, pleasant, perfect and unforgettable.

                    Our company provides you with the best and complete travelling facilities on during your stay in Jammu and Kashmir to the end of your trip. The company has a great reputation in the travel industry. The expert team of concierges and travel assistants at KASHMIR TRAVEL GUIDE has made strenuous efforts to make it possible for international travelers to know, plan, organize and book all activities they wish to do in Jammu Kashmir, all from their homes.

                    Visit to Kashmir is an enchanting and a lifetime experience, so you need to plan it carefully to make it perfect for you. We at Kashmir Travels are completely familiar with the region and we understand your needs better than anyone else. With us your tour will never be disappointing. Explore everything Jammu Kashmir offers. Tell us your interests and we will come up with the best tour for you. We make sure to make your trip to Kashmir and your stay extremely pleasant and memorable. Kashmir is a perfect place to enjoy you holiday or your honeymoon in the lap of Mother Nature. The heavenly landscape, mesmerizing lakes, rivers, dancing springs and streams, majestic snow covered mountains, lush green meadows, high altitude hills, colorful spring blossoms, huge Chinar trees, alpine forests, artificial gardens and much more makes your holiday absolutely fascinating. However, landing in Kashmir at a wrong time may spoil your tour. So, before you plan your tour, go through the entire information available on our website.

                    Bright Kashmir Holidays, operating with the main objective of showing our beautiful Motherland to the world and enhancing Kashmir tourism, provides its guests the best possible facilities during the stay. Kashmiri people are famous for their hospitality. We arrange your stay in top luxurious hotels and houseboats. During your stay you are our guests and it is our duty to make you feel home in Kashmir. At the same time our expert team, constantly at your disposal, makes sure to maintain a high level of professionalism and make available to you all the things you need during your stay. We strongly wish and strive to see you off with the strong desire of visiting Kashmir again. In Kashmir you will not miss your home. So plan your tour and contact us. We love to serve you.
                    </p>
                </div>
                <div>
                <p style={{marginLeft: '500px' , marginBottom: '-2px'}}><strong>CEO speaks</strong></p>
                <p style={{marginLeft: '605px'}}> <strong>Bright Kashmir Holidays</strong></p>
                </div>
            </div>
        </div>
    );
}

export default About;
