import React, { FC } from 'react';
import { SubServerDescriptionProps } from './type';
import '../../../assets/styles/subServerDescription.css'
const SubServerDescription: FC<SubServerDescriptionProps> = (props) => {
  console.log(props.background);
  const background: React.CSSProperties = {
    backgroundImage: `url(${props.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={background} className="subserver-description-wrapper">
      <h2 className="text-accent subserver-desc-header">{props.name}</h2>
      <p className="subserver-desc"><span className="text-accent">{props.name}</span> — {props.description}</p>
    </div>
  );
};

export default SubServerDescription;