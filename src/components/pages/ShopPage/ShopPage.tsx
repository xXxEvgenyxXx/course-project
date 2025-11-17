import React, { FC } from 'react';
import { ShopPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import DonateCards from '../../DonateCards/DonateCards';
import '../../../assets/styles/shopPage.css'

const ShopPage: FC<ShopPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="shoppage-wrapper">
      <Header />
      <div className="hero-section shop-hero-section">
        <h1 className="text-accent">Магазин привилегий</h1>
        <p>Купите привилегии и станьте намного круче!<br/>С ними вы получите уникальные возможности</p>
      </div>
      <DonateCards />
      <Footer />
    </div>
  );
};

export default ShopPage;
