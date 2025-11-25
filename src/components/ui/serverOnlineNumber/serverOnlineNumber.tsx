import React, { FC, useMemo } from 'react';
import { ServerOnlineNumberUIProps } from './type';
import '../../../assets/styles/serverOnlineNumber.css'

// #a0a0a0 при статусе оффлайн
// #4caf50 при статусе онлайн
const ServerOnlineNumberUI: FC<ServerOnlineNumberUIProps> = (props) => {
    const statusColor: React.CSSProperties = useMemo(() => {
        if (props.status === 'offline') {
            return {
                backgroundColor: '#a0a0a0',
            };
        } else {
            // Для онлайн-статуса добавляем анимацию мигания
            return {
                backgroundColor: '#4caf50',
                animation: 'pulse 1s infinite',
            };
        }
    }, [props.status]);

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