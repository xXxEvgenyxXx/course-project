import React, { FC } from 'react';
import { HomePageProps } from './type';
import Header from '../../ui/Header/Header';
import ServerDescription from '../../ui/ServerDescription/ServerDescription';
import SubServersList from '../../SubServersList/SubServersList';
import '../../../assets/styles/header.css'
import { footerLinks } from '../../../assets/data/footerLinks';
import Footer from '../../Footer/Footer';

const HomePage: FC<HomePageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="homepage-wrapper">
      <Header/>
      <ServerDescription />
      <SubServersList />
      <Footer links={footerLinks} />
    </div>
  );
};

export default HomePage;