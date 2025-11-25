import React from 'react';
import ServerOnlineNumberUI from '../ui/serverOnlineNumber/serverOnlineNumber';
import { serverStats } from '../../assets/data/serverStats';

const ServerStats = () => {
  return (
    <div className='server-stats-wrapper'>
      {serverStats.map((serverStat) => (
        <ServerOnlineNumberUI statName={serverStat.statName} statNumber={serverStat.statNum} status={serverStat.status} />
      ))}
    </div>
  );
};

export default ServerStats;