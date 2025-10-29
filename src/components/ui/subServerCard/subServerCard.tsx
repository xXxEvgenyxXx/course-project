import React, { FC } from 'react';
import { SubServerCardUIProps } from './type';
import '../../../assets/styles/subServerCard.css'


const SubServerCardUI: FC<SubServerCardUIProps> = (props) => {
  const background: React.CSSProperties = {
    backgroundImage: `url(${props.background})`
  }

  return (
    <div style={background} className="subserver-card">
      <h1>{props.name}</h1>
      <p>{props.online}</p>
    </div>
  );
};

export default SubServerCardUI;