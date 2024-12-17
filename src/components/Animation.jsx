import React, { useEffect, useState } from 'react';
import '../pages/styles.css';
import image1 from './../assets/image_1.jpg';
import image3 from './../assets/image_3.jpg';


const images = [
  image3,
  image1
];

const Animation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true);
      }, 1000); // Duration of fade out
    }, 3000); // Interval duration (3 seconds for example)
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className={`fade-in-animation ${isVisible ? 'visible' : ''}`}
      />
    </div>
  );
};

export default Animation;