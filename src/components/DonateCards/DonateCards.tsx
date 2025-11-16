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

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < listOfDonates.length - 1;

  return (
    <div className="donate-carousel-container">
      {hasPrev && (
        <div className="side-card-wrapper left">
          <DonateCardUI
            name={listOfDonates[currentIndex - 1].name}
            background={listOfDonates[currentIndex - 1].background}
            price={listOfDonates[currentIndex - 1].price}
          />
        </div>
      )}

      <button
        className={`carousel-btn carousel-btn-left ${!hasPrev ? 'disabled' : ''}`}
        onClick={goToPrevious}
        disabled={!hasPrev}
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
        className={`carousel-btn carousel-btn-right ${!hasNext ? 'disabled' : ''}`}
        onClick={goToNext}
        disabled={!hasNext}
      >
        &gt;
      </button>

      {hasNext && (
        <div className="side-card-wrapper right">
          <DonateCardUI
            name={listOfDonates[currentIndex + 1].name}
            background={listOfDonates[currentIndex + 1].background}
            price={listOfDonates[currentIndex + 1].price}
          />
        </div>
      )}
    </div>
  );
};

export default DonateCards;