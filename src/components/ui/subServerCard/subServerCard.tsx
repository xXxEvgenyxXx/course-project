import React, { FC } from 'react';
import { SubServerCardUIProps } from './type';
import '../../../assets/styles/subServerCard.css';
// #a0a0a0 при статусе оффлайн
// #4caf50 при статусе онлайн
const SubServerCardUI: FC<SubServerCardUIProps> = (props) => {
  const background: React.CSSProperties = {
    backgroundImage: `url(${props.background})`,
  };
  let widthPercentage: string = '5%';

  if (!isNaN(props.online)) {
    if (props.online === 1000) {
      widthPercentage = '80px';
    } else if (props.online >= 100 && props.online <= 999) {
      widthPercentage = '65px';
    } else if (props.online >= 10 && props.online <= 99) {
      widthPercentage = '50px';
    } else if (props.online >= 0 && props.online <=9) {
      widthPercentage = '40px';
    }
  }

  let colorStatus: string = '#4caf50';
  if (props.status === 'offline') {
    colorStatus = '#a0a0a0';
  }

  const onlineWrapperStyle: React.CSSProperties = {
    width: widthPercentage,
  };

  const colorStatusStyle: React.CSSProperties = {
    backgroundColor: colorStatus,
  };

  return (
    <div style={background} className="subserver-card">
      <div className="subserver-card-content-wrapper">
        <h2>{props.name}</h2>
        <div className="subserver-card-content-wrapper">
          <div className="subserver-online-wrapper" style={onlineWrapperStyle}>
            <div
              style={colorStatusStyle}
              className="subserver-online-status"
            ></div>
            <p>{props.online}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServerCardUI;
