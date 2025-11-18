import React from 'react';
import { listOfPrivilegeFeatures } from '../../assets/data/listOfPrivilegeFeatures';
import PrivilegeFeatureUI from '../ui/privilegeFeature/privilegeFeature';
import '../../assets/styles/privilegeFeatures.css'

const PrivilegeFeatures = () => {
  return (
    <div className="privilege-feats-wrapper">
      {listOfPrivilegeFeatures.map((privilegeFeat) => (
        <PrivilegeFeatureUI 
          name={privilegeFeat.name}  
          availableFor={privilegeFeat.availableFor}
          shortDesc={privilegeFeat.shortDesc || ''}
        />
      ))}
    </div>
  );
};

export default PrivilegeFeatures;