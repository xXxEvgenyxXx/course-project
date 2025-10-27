import React, { FC } from 'react';
import { ServerPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import { footerLinks } from '../../../assets/data/footerLinks';

const ServersPage: FC<ServerPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="serverspage-wrapper">
      <Header />
      <Footer links={footerLinks} />
    </div>
  );
};

export default ServersPage;