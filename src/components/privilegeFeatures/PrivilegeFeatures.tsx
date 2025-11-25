import React from 'react';
import { listOfPrivilegeFeatures } from '../../assets/data/listOfPrivilegeFeatures';
import PrivilegeFeatureUI from '../ui/privilegeFeature/privilegeFeature';
import '../../assets/styles/privilegeFeatures.css';
import { motion } from 'framer-motion';

const PrivilegeFeatures = () => {
  return (
    <div className="privilege-feats-wrapper">
      {listOfPrivilegeFeatures.map((privilegeFeat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="privilege-feat-motion-wrapper"
        >
          <PrivilegeFeatureUI
            name={privilegeFeat.name}
            availableFor={privilegeFeat.availableFor}
            shortDesc={privilegeFeat.shortDesc || ''}
            index={index}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PrivilegeFeatures;