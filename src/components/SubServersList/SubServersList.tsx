import React from 'react';
import { listOfSubServers } from '../../assets/data/listOfSubServers';
import SubServerDescription from '../ui/SubServerDescription/SubServerDescription';

const SubServersList = () => {
  return (
    <div className="subservers-list-wrapper">
      {listOfSubServers.map((subServer) => (
        <SubServerDescription
          name={subServer.name}
          description={subServer.description}
          background={subServer.background}
        />
      ))}
    </div>
  );
};

export default SubServersList;
