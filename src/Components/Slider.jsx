import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Slider.css";

const images = [
  "https://m.media-amazon.com/images/I/71fJ-gmBZtL._AC_SL1500_.jpg",
  "https://images.meesho.com/images/products/539244586/t7gpi_512.avif",
  "https://m.media-amazon.com/images/I/71fJ-gmBZtL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71HblAHs5xL._AC_UL1500_.jpg",
  "https://m.media-amazon.com/images/I/71fJ-gmBZtL._AC_SL1500_.jpg",
  "https://m.media-amazon.com/images/I/71HblAHs5xL._AC_UL1500_.jpg",
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Previous and Next button handlers
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <img
        className="slider-image"
        src={images[index]}
        alt="slider"
        onClick={() =>
          navigate("/Productmainselect", {
            state: {
              name: "Slider Product",
              price: 1500,
              oldprice: 2000,
              src: images[index],
            },
          })
        }
        style={{ cursor: "pointer" }}
      />
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
