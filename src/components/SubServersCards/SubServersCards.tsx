import React from 'react';
import { listOfSubServers } from '../../assets/data/listOfSubServers';
import SubServerCardUI from '../ui/SubServerCard/SubServerCard';

const SubServersCards= () => {
  return (
    <div className="subservers-cards-wrapper">
      {listOfSubServers.map((subServer) => (
        <SubServerCardUI name={subServer.name} background={subServer.background} online={subServer.online} />
      ))}
    </div>
  );
};

export default SubServersCards;