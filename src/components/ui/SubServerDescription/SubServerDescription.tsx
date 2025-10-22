import React, { FC } from 'react';
import { SubServerDescriptionProps } from './type';
import '../../../assets/styles/subServerDescription.css'

const SubServerDescription: FC<SubServerDescriptionProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="subserver-description-wrapper">
      <h2 className="text-accent subserver-desc-header">{props.name}</h2>
      <p className="subserver-desc"><span className="text-accent">{props.name}</span> — {props.description}</p>
    </div>
  );
};

export default SubServerDescription;