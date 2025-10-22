import React, { FC } from 'react';
import { HomePageProps } from './type';
import Header from '../../ui/Header/Header';
import ServerDescription from '../../ui/ServerDescription/ServerDescription';
import SubServerDescription from '../../ui/SubServerDescription/SubServerDescription';
import '../../../assets/styles/header.css'

const HomePage: FC<HomePageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="homepage-wrapper">
      <Header/>
      <ServerDescription />
      <SubServerDescription name="Novoakopovsk Transit Railway" description="это сервер, где вас ожидают незабываемые поездки по городу с модом Minecraft Transit Railway!" />
    </div>
  );
};

export default HomePage;