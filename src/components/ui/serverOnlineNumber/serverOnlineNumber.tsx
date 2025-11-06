import React, { FC } from 'react';
import { ServerOnlineNumberUIProps } from './type';
import '../../../assets/styles/serverOnlineNumber.css'
// #a0a0a0 при статусе оффлайн
// #4caf50 при статусе онлайн
const ServerOnlineNumberUI: FC<ServerOnlineNumberUIProps> = (props) => {
    let colorStatus: string = '#4caf50';
    if (props.status === 'offline') {
        colorStatus = '#a0a0a0';
    }
    const statusColor: React.CSSProperties = {
        backgroundColor: colorStatus
    }

    return (
        <div className="server-online-number-wrapper">
            <div className="server-online-number">
                <div style={statusColor} className="server-online-status"></div>
                <p>{props.statNumber}</p>
            </div>
            <p>{props.statName}</p>
        </div>
    );
};

export default ServerOnlineNumberUI;