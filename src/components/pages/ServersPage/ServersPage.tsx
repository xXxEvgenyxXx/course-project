import React, { FC } from 'react';
import { ServerPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';

const ServersPage: FC<ServerPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="serverspage-wrapper">
      <Header />
      <Footer />
    </div>
  );
};

export default ServersPage;