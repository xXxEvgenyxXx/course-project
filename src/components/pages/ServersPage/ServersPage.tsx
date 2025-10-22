import React, { FC } from 'react';
import { ServerPageProps } from './type';
import Header from '../../ui/Header/Header';

const ServersPage: FC<ServerPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="serverspage-wrapper">
      <Header />
    </div>
  );
};

export default ServersPage;