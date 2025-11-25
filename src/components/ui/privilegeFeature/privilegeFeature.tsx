import React, { FC } from 'react';
import { PrivilegeFeatureUIProps } from './type';
import '../../../assets/styles/privilegeFeature.css'
import { listOfDonates } from '../../../assets/data/listsOfDonates';

const PrivilegeFeatureUI: FC<PrivilegeFeatureUIProps> = (props) => {
  // Ищем цвет, используя find, а не forEach
  const foundDonate = listOfDonates.find(donate => props.availableFor === donate.name);
  const availableForColor = foundDonate?.color;

  const background: React.CSSProperties = {
    backgroundColor: availableForColor, // Используем backgroundColor вместо background
  };

  return (
    <div className="privilege-feature">
      <div className="privilege-content">
        <h4 className="text-accent">{props.name}</h4>
        {props.shortDesc !== '' && <p>{props.shortDesc}</p>}
      </div>
      <p style={background} className="available-for">
        {props.availableFor}
      </p>
    </div>
  );
};

export default PrivilegeFeatureUI;