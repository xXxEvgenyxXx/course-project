import DonateCardUI from "../ui/donateCard/DonateCard";
import { listOfDonates } from "../../assets/data/listsOfDonates";
import React from 'react';

const DonateCards = () => {
  return (
    <div className="donate-cards-wrapper">
      {listOfDonates.map((donateOption)=> (
        <DonateCardUI 
            name={donateOption.name} 
            background={donateOption.background} 
            price={donateOption.price}
        />
      ))}
    </div>
  );
};

export default DonateCards;