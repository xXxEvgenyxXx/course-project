import React, { FC } from 'react';
import { PrivilegeFeatureUIProps } from './type';

const PrivilegeFeatureUI: FC<PrivilegeFeatureUIProps> = (props) => {

  return (
    <div className="privilege-feature">
      <div className="privilege-content">
        <h4>{props.name}</h4>
        <p>{props.shortDesc}</p>
      </div>
      <p>{props.availableFor}</p>
    </div>
  );
};

export default PrivilegeFeatureUI;