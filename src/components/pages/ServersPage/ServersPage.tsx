import React, { FC } from 'react';
import { ServerPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import SubServersCards from '../../SubServersCards/SubServersCards';

const ServersPage: FC<ServerPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="serverspage-wrapper">
      <Header />
      <SubServersCards />
      <Footer />
    </div>
  );
};

export default ServersPage;