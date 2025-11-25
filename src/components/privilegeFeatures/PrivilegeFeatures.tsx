import React from 'react';
import { listOfPrivilegeFeatures } from '../../assets/data/listOfPrivilegeFeatures';
import PrivilegeFeatureUI from '../ui/privilegeFeature/privilegeFeature';
import '../../assets/styles/privilegeFeatures.css'

const PrivilegeFeatures = () => {
  return (
    <div className="privilege-feats-wrapper">
      {listOfPrivilegeFeatures.map((privilegeFeat, index) => (
        <PrivilegeFeatureUI 
          key={index}
          name={privilegeFeat.name}  
          availableFor={privilegeFeat.availableFor}
          shortDesc={privilegeFeat.shortDesc || ''}
          index={index}
        />
      ))}
    </div>
  );
};

export default PrivilegeFeatures;