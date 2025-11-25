import React from 'react';
import { listOfSubServers } from '../../assets/data/listOfSubServers';
import SubServerCardUI from '../ui/subServerCard/subServerCard';
import '../../assets/styles/subServerCards.css';

const SubServersCards = () => {
  return (
    <div className="subservers-cards-wrapper">
      {listOfSubServers.map((subServer) => (
        <SubServerCardUI
          status={subServer.status}
          name={subServer.name}
          background={subServer.cardBackground}
          online={subServer.online}
        />
      ))}
    </div>
  );
};

export default SubServersCards;
