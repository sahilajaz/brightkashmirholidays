import  { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "./MyCarousel.css";

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesArr = [
    { id: 1, path: "pic1.jpg" },
    { id: 2, path: "pic2.jpg" },
    {
      id: 3,
      path: "pic3.jpg"
    },
    {
      id: 5,
      path: "pic5.jpg"
    },
    {
      id: 6,
      path: "pic6.jpg"
    },
    {
      id: 7,
      path: "pic7.jpg"
    },
    {
      id: 8,
      path: "pic8.jpg"
    },
    {
      id: 9,
      path: "pic9.jpg"
    },
    {
      id: 10,
      path: "pic10.jpg"
    },
    {
      id: 11,
      path: "pic11.jpg"
    },
    {
      id: 12,
      path: "pic12.jpg"
    },
    {
      id: 13,
      path: "pic13.jpg"
    },
    {
      id: 14,
      path: "pic14.jpg"
    },
    {
      id: 15,
      path: "pic15.jpg"
    },
    {
      id: 16,
      path: "pic16.jpg"
    },
    {
      id: 17,
      path: "pic17.jpg"
    },
    {
      id: 18,
      path: "pic18.jpg"
    },
    {
      id: 19,
      path: "pic19.jpg"
    },
    {
      id: 20,
      path: "pic20.jpg"
    },
    {
      id: 21,
      path: "pic21.jpg"
    },
    {
      id: 22,
      path: "pic22.jpg"
    },
    {
      id: 23,
      path: "pic23.jpg"
    },
    {
      id: 24,
      path: "pic24.jpg"
    },
    {
      id: 25,
      path: "pic25.jpg"
    },
    {
      id: 26,
      path: "pic26.jpg"
    },
    {
      id: 27,
      path: "pic27.jpg"
    },
    {
      id: 28,
      path: "pic28.jpg"
    },
    {
      id: 29,
      path: "pic29.jpg"
    },
    {
      id: 30,
      path: "pic30.jpg"
    },
    {
      id: 31,
      path: "pic31.jpg"
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesArr.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ position: "relative" ,width:'100%'}}>
      <Carousel
        index={currentIndex}
        autoPlay={true}
        interval={4000}
        indicators={false}
        navButtonsAlwaysInvisible={true}
        onChange={(index) => setCurrentIndex(index)}
      >
        {imagesArr.map((image) => (
          <div key={image.id} className="carousel-container">
            <img
              src={image.path}
              alt={`Package ${image.id}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>

      {/* Left Button */}
      <IconButton
        sx={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "black",
          color: "white",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          zIndex: 10,
          "&:hover": {
            backgroundColor: "black",
          },
          "@media (max-width: 600px)": {
            width: "20px",
            height: "20px",
            top: "50%",
          },
        }}
        onClick={handlePrev}
      >
        <ChevronLeft sx={{ fontSize: "30px", color: "white" }} />
      </IconButton>

      {/* Right Button */}
      <IconButton
        sx={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "black",
          color: "white",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          zIndex: 10,
          "&:hover": {
            backgroundColor: "black",
          },
          "@media (max-width: 600px)": {
            width: "20px",
            height: "20px",
            top: "50%",
          },
        }}
        onClick={handleNext}
      >
        <ChevronRight sx={{ fontSize: "30px", color: "white" }} />
      </IconButton>
    </div>
  );
};

export default MyCarousel;
