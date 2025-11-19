import React, { FC } from 'react';
import { HomePageProps } from './type';
import Header from '../../ui/Header/Header';
import ServerDescription from '../../ui/ServerDescription/ServerDescription';
import SubServersList from '../../SubServersList/SubServersList';
import '../../../assets/styles/header.css';
import Footer from '../../Footer/Footer';
import NewsSlider from '../../newsSlider/newsSlider';
import '../../../assets/styles/homePage.css'

const HomePage: FC<HomePageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="homepage-wrapper">
      <Header />
      <ServerDescription />
      <SubServersList />
      <div className="news-header">
        <h3>Новости проекта</h3>
        <p>Погрузитесь в насыщенную историю нашего проекта</p>
      </div>
      <NewsSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
