import React, { FC } from 'react';
import { PrivilegeFeatureUIProps } from './type';
import '../../../assets/styles/privilegeFeature.css'

const PrivilegeFeatureUI: FC<PrivilegeFeatureUIProps> = (props) => {
  return (
    <div className="privilege-feature">
      <div className="privilege-content">
        <h4 className="text-accent">{props.name}</h4>
        {props.shortDesc !== '' && <p>{props.shortDesc}</p>}
      </div>
      <p className="available-for">{props.availableFor}</p>
    </div>
  );
};

export default PrivilegeFeatureUI;