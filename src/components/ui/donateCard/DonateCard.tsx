import React, { FC } from 'react';
import { DonateCardUIProps } from './type';
import '../../../assets/styles/donateCard.css'

const DonateCardUI: FC<DonateCardUIProps> = (props) => {

  return (
    <div className="donate-card">
        <img className="donate-card-image" alt="Картинка доната" src={props.background} />
        <h3 className="donate-card-name text-accent">{props.name}</h3>
        <p className="donate-card-price">{props.price} ₽ / месяц</p>
    </div>
  );
};

export default DonateCardUI;