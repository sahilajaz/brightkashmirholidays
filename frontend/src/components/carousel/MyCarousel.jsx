import  { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "./MyCarousel.css";

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesArr = [
    // { id: 1, path: "packege-1.png" },
    { id: 1, path: "packege-2.jpg" },
    { id: 2, path: "packege-3.jpg" },
    {
      id: 3,
      path: "pic1.jpg"
    },
    {
      id: 3,
      path: "pic2.jpg"
    },
    {
      id: 5,
      path: "pic3.jpg"
    },
    {
      id: 6,
      path: "pic4.jpg"
    },
    {
      id: 7,
      path: "pic5.jpg"
    },
    {
      id: 8,
      path: "pic6.jpg"
    },
    {
      id: 9,
      path: "pic7.jpg"
    },
    {
      id: 10,
      path: "pic8.jpg"
    },
    {
      id: 11,
      path: "pic9.jpg"
    },
    {
      id: 12,
      path: "pic10.jpg"
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
    <div style={{ position: "relative"}}>
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
            <div className="carousel-overlay"></div>
            <div className="carousel-text">
              <h1>Bright Kashmir Holidays</h1>
              <p> Travel to Paradise</p>
            </div>
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
