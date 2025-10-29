import React, { FC } from 'react';
import { subServerCardUIProps } from './type';
import '../../../assets/styles/subServerCard.css'


const subServerCardUI: FC<subServerCardUIProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="subserver-card">
      <h1>{props.name}</h1>
      <p>{props.online}</p>
    </div>
  );
};

export default subServerCardUI;