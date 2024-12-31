import React from 'react';
import './Card.css';

const servicesArray = [
  {
    id: 1,
    "name": "Srinagar",
    "pic": "Srinagar.jpeg",
    "info": "Srinagar, the 'Summer Capital of Jammu and Kashmir,' is famous for its iconic Dal Lake, houseboats, and Mughal gardens, offering a unique blend of natural beauty and cultural heritage.",
    "price": "8999 per person",
    "details": "Srinagar is a city of timeless charm, with its serene lakes, vibrant gardens, and bustling markets. A shikara ride on Dal Lake or a stay in a traditional houseboat offers a truly unique experience. The city's Mughal gardens, such as Shalimar Bagh and Nishat Bagh, showcase stunning Persian-style landscaping. Srinagar is also a cultural hub, offering a glimpse into traditional Kashmiri arts, crafts, and cuisine."
},
  {
    id: 2,
    name: 'Sonamarg',
    pic: 'soonmarg.jpg',
    info: 'Sonamarg, meaning "Meadow of Gold," is a breathtakingly beautiful valley located in the Kashmir region. Known for its wide golden meadows and pristine rivers.',
    price: '7999 per person',
  },
  {
    id: 3,
    name: 'Pahalgam',
    pic: 'phahalgam.jpg',
    info: 'Pahalgam, often referred to as the "Valley of Shepherds," is a picturesque town in Kashmir, known for its breathtaking landscapes and tranquil environment.',
    price: '7999 per person',
  },
  {
    id: 4,
    "name": "Doodhpathri",
    "pic": "doodh.jpeg",
    "info": "Doodhpathri, meaning 'Valley of Milk,' is a serene and enchanting hill station in Jammu and Kashmir. Known for its lush green pastures, sparkling streams, and tranquil atmosphere, Doodhpathri offers a peaceful retreat for nature lovers and adventure seekers alike.",
    "price": "7999 per person",
    "details": "Nestled amidst the majestic Pir Panjal range, Doodhpathri is famed for its velvety meadows and crystal-clear streams that are said to resemble milk, giving the valley its unique name. The pristine beauty of this hidden gem makes it an ideal destination for picnics, trekking, and leisurely walks. The cool breeze, snow-capped peaks, and the gentle sound of flowing water create a tranquil ambiance. Doodhpathri remains untouched by commercial tourism, offering visitors an authentic and serene experience. The hospitality of the locals adds to the charm of this picturesque valley, ensuring a memorable visit."
  },
  {
    id: 5,
    "name": "Ladakh",
    "pic": "Ladakh.jpeg",
    "info": "Ladakh, known as the 'Land of High Passes,' is a stunning region in the northernmost part of India, renowned for its rugged landscapes, Buddhist monasteries, and adventurous activities.",
    "price": "15999 per person",
    "details": "Ladakh's mesmerizing landscapes include the Pangong Lake, Nubra Valley, and the Magnetic Hill. Visitors can explore ancient monasteries like Hemis, Thiksey, and Diskit, or embark on thrilling adventures like trekking, biking, and river rafting. The region's unique culture and breathtaking vistas make it a dream destination for travelers seeking adventure and spirituality."
},
];

const Card = () => {

  const openWhatsApp = () => {
    const phoneNumber = "+916006151196"
    const url = `https://wa.me/${phoneNumber}`
    window.open(url , "_blank")
  }


    const downloadPdf = () => {
        const link = document.createElement('a')
        link.href = 'eg.pdf'
        link.download = name
        link.click()
    }

  return (
    <div className="card-container">
      {servicesArray.map((service) => (
        <div key={service.id} className="card">
          <img src={service.pic} alt={service.name} className="card-img" />
          <h3 className="card-title">{service.name}</h3>
          <p className="card-info">{service.info}</p>
          <div className="card-buttons">
            <button className="card-button view-details" onClick={openWhatsApp}>Chat with us</button>
            <button className="card-button book-now" onClick={downloadPdf}>Discover More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
