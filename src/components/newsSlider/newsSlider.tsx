import React, { useState } from 'react';
import NewsCardUI from '../ui/newsCard/newsCard';
import { listOfNews } from '../../assets/data/listOfNews';
import '../../assets/styles/newsSlider.css';

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < listOfNews.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (listOfNews.length === 0) return null;

  return (
    <div className="news-slider-wrapper">
      <div className="news-slider-container">
        <button 
          className={`slider-btn prev-btn ${currentIndex === 0 ? 'disabled' : ''}`} 
          onClick={goToPrev}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        
        <div className="slider-content">
          <NewsCardUI 
            title={listOfNews[currentIndex].title} 
            desc={listOfNews[currentIndex].desc}
            image={listOfNews[currentIndex].image}
            date={listOfNews[currentIndex].date}
          />
        </div>
        
        <button 
          className={`slider-btn next-btn ${currentIndex === listOfNews.length - 1 ? 'disabled' : ''}`} 
          onClick={goToNext}
          disabled={currentIndex === listOfNews.length - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;