import React, { FC } from 'react';
import { ShopPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import DonateCards from '../../DonateCards/DonateCards';
import PrivilegeFeatures from '../../privilegeFeatures/PrivilegeFeatures';
import '../../../assets/styles/shopPage.css'

const ShopPage: FC<ShopPageProps> = (props) => {

  return (
    <div className="shoppage-wrapper">
      <Header />
      <div className="hero-section shop-hero-section">
        <h1 className="text-accent">Магазин привилегий</h1>
        <p>Купите привилегии и станьте намного круче!<br/>С ними вы получите уникальные возможности</p>
      </div>
      <DonateCards />
      <h3 className="text-accent privilege-features-header">Возможности при покупке привилегий</h3>
      <PrivilegeFeatures />
      <div className="shop-fine-print">
        <h3>Привилегия приобретается отдельно на каждом сервере.</h3>
        <p>1 месяц равняется 31 дню.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
