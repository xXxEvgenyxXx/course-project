import React, { useState, useEffect } from 'react';
import { listOfNews } from '../../assets/data/listOfNews';
import '../../assets/styles/serversGallery.css'

const ServersGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (listOfNews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % listOfNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (listOfNews.length === 0) {
    return <div className="servers-gallery-wrapper">Нет изображений</div>;
  }

  return (
    <div className="servers-gallery-wrapper">
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.8s ease-in-out',
          }}
        >
          {listOfNews.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img src={item.image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <h3>Скриншоты с серверов</h3>
    </div>
  );
};

export default ServersGallery;