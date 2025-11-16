import React, { FC } from 'react';
import { DonateCardUIProps } from './type';

const DonateCardUI: FC<DonateCardUIProps> = (props) => {

  return (
    <div className="donate-card">
        <img alt="Картинка доната" src={props.background} />
        <h3>{props.name}</h3>
        <p>{props.price} {props.priceOption}</p>
    </div>
  );
};

export default DonateCardUI;