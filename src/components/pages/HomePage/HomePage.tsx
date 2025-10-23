import React, { FC } from 'react';
import { HomePageProps } from './type';
import Header from '../../ui/Header/Header';
import ServerDescription from '../../ui/ServerDescription/ServerDescription';
import SubServersList from '../../SubServersList/SubServersList';
import '../../../assets/styles/header.css'

const HomePage: FC<HomePageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="homepage-wrapper">
      <Header/>
      <ServerDescription />
      <SubServersList />
    </div>
  );
};

export default HomePage;