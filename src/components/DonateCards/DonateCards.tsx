import DonateCardUI from "../ui/donateCard/DonateCard";
import { listOfDonates } from "../../assets/data/listsOfDonates";
import React, { useState } from 'react';
import '../../assets/styles/donateCards.css';

const DonateCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < listOfDonates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="donate-carousel-container">
      <button
        className={`carousel-btn carousel-btn-left ${currentIndex === 0 ? 'disabled' : ''}`}
        onClick={goToPrevious}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>

      <div className="active-card-wrapper">
        <DonateCardUI
          name={listOfDonates[currentIndex].name}
          background={listOfDonates[currentIndex].background}
          price={listOfDonates[currentIndex].price}
        />
      </div>

      <button
        className={`carousel-btn carousel-btn-right ${currentIndex === listOfDonates.length - 1 ? 'disabled' : ''}`}
        onClick={goToNext}
        disabled={currentIndex === listOfDonates.length - 1}
      >
        &gt;
      </button>
    </div>
  );
};

export default DonateCards;