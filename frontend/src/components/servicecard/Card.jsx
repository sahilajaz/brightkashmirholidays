import React from 'react';
import './Card.css';

const servicesArray = [
  {
    id: 1,
    name: 'Doodhpathri',
    pic: 'doodh.jpeg',
    info: 'Doodhpathri, meaning "Valley of Milk," is a serene and enchanting hill station in Jammu and Kashmir. Known for its lush green pastures, sparkling streams, and tranquil atmosphere.',
    price: '7999 per person',
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
