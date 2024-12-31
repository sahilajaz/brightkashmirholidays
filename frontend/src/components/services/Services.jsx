import { useState } from 'react';
import './Services.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 const servicesArray = [
  {
      id: 1,
      "name": "Doodhpathri",
      "pic": "doodh.jpeg",
      "info": "Doodhpathri, meaning 'Valley of Milk,' is a serene and enchanting hill station in Jammu and Kashmir. Known for its lush green pastures, sparkling streams, and tranquil atmosphere, Doodhpathri offers a peaceful retreat for nature lovers and adventure seekers alike.",
      "price": "7999 per person",
      "details": "Nestled amidst the majestic Pir Panjal range, Doodhpathri is famed for its velvety meadows and crystal-clear streams that are said to resemble milk, giving the valley its unique name. The pristine beauty of this hidden gem makes it an ideal destination for picnics, trekking, and leisurely walks. The cool breeze, snow-capped peaks, and the gentle sound of flowing water create a tranquil ambiance. Doodhpathri remains untouched by commercial tourism, offering visitors an authentic and serene experience. The hospitality of the locals adds to the charm of this picturesque valley, ensuring a memorable visit."
  },
  {
      id: 2,
      "name": "Sonamarg",
      "pic": "soonmarg.jpg",
      "info": "Sonamarg, meaning 'Meadow of Gold,' is a breathtakingly beautiful valley located in the Kashmir region. Known for its wide golden meadows, pristine rivers, and snow-capped peaks, Sonamarg is a paradise for nature lovers and adventure enthusiasts. The valley is perfect for trekking, camping, and photography, offering mesmerizing views of the majestic Himalayan range.",
      "price": "7999 per person",
      "details": "Nestled in the heart of the Kashmir Valley, Sonamarg is a gateway to numerous trekking routes and is famous for its glaciers, including the Thajiwas Glacier. The valley is surrounded by lush green meadows, alpine forests, and crystal-clear streams that add to the natural beauty of the region. Sonamarg also offers a unique experience of traditional Kashmiri culture, with opportunities to interact with the warm and welcoming locals. Whether you're an adventure seeker or someone looking to relax in nature, Sonamarg is an unforgettable destination."
  },
  {
      id: 3,
      "name": "Pahalgam",
      "pic": "phahalgam.jpg",
      "info": "Pahalgam, often referred to as the 'Valley of Shepherds,' is a picturesque town in Kashmir, known for its breathtaking landscapes, lush greenery, and tranquil environment.",
      "price": "7999 per person",
      "details": "Pahalgam is a haven for outdoor enthusiasts, offering activities such as trekking, rafting, and horseback riding. The town serves as a starting point for the famous Amarnath Yatra pilgrimage. Visitors can explore the scenic beauty of Aru Valley and Betaab Valley or simply enjoy the serenity of the Lidder River. Pahalgam's charm lies in its peaceful atmosphere and the chance to experience nature at its best."
  },
  {
      id: 4,
      "name": "Gulmarg",
      "pic": "Gulmarg.jpg",
      "info": "Gulmarg, known as the 'Meadow of Flowers,' is a world-renowned ski resort and a paradise for nature lovers, located in the Baramulla district of Jammu and Kashmir.",
      "price": "9999 per person",
      "details": "Gulmarg is famous for its lush green meadows, vibrant flowers, and thrilling skiing opportunities during winter. The Gulmarg Gondola, one of the highest cable cars in the world, offers breathtaking views of the snow-covered mountains. During summer, the area transforms into a vibrant meadow, attracting trekkers and picnickers alike. Its unique beauty and year-round activities make Gulmarg a must-visit destination."
  },
  {
      id: 5,
      "name": "Srinagar",
      "pic": "Srinagar.jpeg",
      "info": "Srinagar, the 'Summer Capital of Jammu and Kashmir,' is famous for its iconic Dal Lake, houseboats, and Mughal gardens, offering a unique blend of natural beauty and cultural heritage.",
      "price": "8999 per person",
      "details": "Srinagar is a city of timeless charm, with its serene lakes, vibrant gardens, and bustling markets. A shikara ride on Dal Lake or a stay in a traditional houseboat offers a truly unique experience. The city's Mughal gardens, such as Shalimar Bagh and Nishat Bagh, showcase stunning Persian-style landscaping. Srinagar is also a cultural hub, offering a glimpse into traditional Kashmiri arts, crafts, and cuisine."
  },
  {
      id: 6,
      "name": "Ladakh",
      "pic": "Ladakh.jpeg",
      "info": "Ladakh, known as the 'Land of High Passes,' is a stunning region in the northernmost part of India, renowned for its rugged landscapes, Buddhist monasteries, and adventurous activities.",
      "price": "15999 per person",
      "details": "Ladakh's mesmerizing landscapes include the Pangong Lake, Nubra Valley, and the Magnetic Hill. Visitors can explore ancient monasteries like Hemis, Thiksey, and Diskit, or embark on thrilling adventures like trekking, biking, and river rafting. The region's unique culture and breathtaking vistas make it a dream destination for travelers seeking adventure and spirituality."
  },
  {
      id: 7,
      "name": "Amarnath",
      "pic": "Amarnath.jpeg",
      "info": "Amarnath, one of the holiest shrines in Hinduism, is located in a cave in Jammu and Kashmir and is dedicated to Lord Shiva. The site is known for its natural ice Shivlinga that forms during certain months of the year.",
      "price": "11999 per person",
      "details": "The Amarnath Yatra is a spiritual journey that attracts thousands of pilgrims annually. The trek to the shrine is both challenging and rewarding, offering breathtaking views of the surrounding mountains. The journey is marked by devotion and camaraderie, creating a deeply moving experience. With proper planning and guidance, the Amarnath Yatra is a once-in-a-lifetime spiritual pilgrimage."
  }
];



function Services() {
  const [loading, setLoading] = useState({}); 

    const openWhatsApp = () => {
      const phoneNumber = "+916006151196"
      const url = `https://wa.me/${phoneNumber}`
      window.open(url , "_blank")
    }

  return (
    <div className="services">
      <h1>Our Travel Packages</h1>
      <div className="packages">
        {servicesArray.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.pic} alt={pkg.name} className="package-image" />
            <h1 className="title">{pkg.name}</h1>
            <p className="description">{pkg.info}</p>
            <p className="price">Starting Price: {pkg.price}</p>
            <div className="button-div">
            <button
                onClick={() => openWhatsApp()}
                disabled={loading[pkg.id]}
                className="pay-button"
              >
                <img 
                  src="whatsapp-icon.png" 
                  alt="whatsapp-logo" 
                  style={{ height: '18px' }} 
                /><span style={{marginLeft: '7px', textAlign: 'justify' , fontSize:'0.9rem'}}>Chat with us</span>
              </button>
              <button
                onClick={() => toast.info(pkg.details)}
                className="info-button"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Services;

