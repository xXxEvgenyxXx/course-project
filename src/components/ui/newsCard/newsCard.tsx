import React, { FC } from 'react';
import { NewsCardUIProps } from './type';
import '../../../assets/styles/newsCard.css'

const NewsCardUI: FC<NewsCardUIProps> = (props) => {
  return (
    <div className="news-card">
      <img className="news-img" alt="Картинка новости" src={props.image} />
      <div className="news-content">
        <p>{props.date}</p>
        <h3 className="text-accent">{props.title}</h3>
        <p className="news-text">{props.desc}</p>
      </div>
    </div>
  );
};

export default NewsCardUI;