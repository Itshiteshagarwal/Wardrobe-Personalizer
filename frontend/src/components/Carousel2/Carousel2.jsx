import React, { useState, useEffect } from 'react';
import './Carousel2.css';

const Carousel2 = () => {
  const images = [
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/1440x128-%20UHP%20web%20RRL_SBI.jpg' },
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-bankoffers-Z1-5instant-prepaid.jpg' },
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/1440x128-au.jpg' },
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png' },
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-BANKOFFERS-relianceone.jpg' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 4000); 
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-images" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Slide ${index}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel2;
