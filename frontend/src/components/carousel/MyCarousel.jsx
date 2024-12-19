import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import './MyCarousel.css'; // Import the CSS file

const MyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesArr = [
        { id: 1, path: "packege-1.png" },
        { id: 2, path: "packege-2.jpg" },
        { id: 3, path: "packege-3.jpg" }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagesArr.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagesArr.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={{ position: 'relative' }}>
            <Carousel
                index={currentIndex}
                autoPlay={true}
                interval={4000}
                indicators={false}
                navButtonsAlwaysInvisible={true}
                onChange={(index) => setCurrentIndex(index)}
            >
                {imagesArr.map((image) => (
                    <div
                        key={image.id}
                        style={{
                            position: 'relative',
                            textAlign: 'center',
                            padding: '1px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxHeight: '700px',
                                overflow: 'hidden',
                                borderRadius: '15px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <img
                                src={image.path}
                                alt={`Package ${image.id}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    zIndex: 1,
                                }}
                            ></div>
                            <div
                                className="carousel-text"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white',
                                    textAlign: 'center',
                                    zIndex: 2,
                                    padding: '0 10px',
                                }}
                            >
                                <h1>Welcome to Bright Kashmir Holidays</h1>
                                <p>Journeys worth remembering!</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* Left Button */}
            <IconButton
                sx={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    zIndex: 10,
                    '&:hover': {
                        backgroundColor: 'black',
                    },
                    '@media (max-width: 600px)': {
                        width: '20px',
                        height: '20px',
                        top: '15%'
                    },
                }}
                onClick={handlePrev}
            >
                <ChevronLeft sx={{ fontSize: '30px', color: 'white' }} />
            </IconButton>

            {/* Right Button */}
            <IconButton
                sx={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    zIndex: 10,
                    '&:hover': {
                        backgroundColor: 'black',
                    },
                    '@media (max-width: 600px)': {
                        width: '20px',
                        height: '20px',
                        top: '15%'
                    },
                }}
                onClick={handleNext}
            >
                <ChevronRight sx={{ fontSize: '30px', color: 'white' }} />
            </IconButton>
        </div>
    );
};

export default MyCarousel;
