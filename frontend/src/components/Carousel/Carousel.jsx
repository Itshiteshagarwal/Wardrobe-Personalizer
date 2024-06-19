import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const images = [
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-280424-DailyBanner-Z7-P1-GANT-Superdry-upto50.jpg' },
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-280424-DailyBanner-Z7-P3-KianahouseofFashion-SeeDesigns-FLAT70.jpg' },
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-280424-DailyBanner-Z7-P5-DNMX-Netplay-Under499.jpg' },
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-280424-DailyBanner-Z7-P4-Tedsmith-carltonlondon-starting499.jpg' },
    { url: 'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-28042024-MainBannerDailyChanging-Z1-P7-MnS-GAP-min40-extra750.jpg' },
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

export default Carousel;
