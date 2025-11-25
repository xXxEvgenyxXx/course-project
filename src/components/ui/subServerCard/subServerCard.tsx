import React, { FC, useMemo } from 'react';
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
    } else if (props.online >= 0 && props.online <= 9) {
      widthPercentage = '40px';
    }
  }

  // Определяем стили в зависимости от статуса
  const colorStatusStyle: React.CSSProperties = useMemo(() => {
    if (props.status === 'offline') {
      return {
        backgroundColor: '#a0a0a0',
      };
    } else {
      // Для онлайн-статуса добавляем анимацию мигания
      return {
        backgroundColor: '#4caf50',
        animation: 'pulse 1s infinite',
      };
    }
  }, [props.status]);

  const onlineWrapperStyle: React.CSSProperties = {
    width: widthPercentage,
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