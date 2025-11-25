import React, { FC } from 'react';
import { ShopPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import DonateCards from '../../DonateCards/DonateCards';
import PrivilegeFeatures from '../../privilegeFeatures/PrivilegeFeatures';
import '../../../assets/styles/shopPage.css';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <div className="hero-section shop-hero-section">
    <h1 className="text-accent">Магазин привилегий</h1>
    <p>Купите привилегии и станьте намного круче!<br />С ними вы получите уникальные возможности</p>
  </div>
);

const PrivilegeFeaturesHeader = () => (
  <h3 className="text-accent privilege-features-header">Возможности при покупке привилегий</h3>
);

const FinePrintSection = () => (
  <div className="shop-fine-print">
    <h3>Привилегия приобретается отдельно на каждом сервере.</h3>
    <p>1 месяц равняется 31 дню.</p>
  </div>
);

const components = [
  { Component: HeroSection, props: {}, key: 'hero-section' },
  { Component: DonateCards, props: {}, key: 'donate-cards' },
  { Component: PrivilegeFeaturesHeader, props: {}, key: 'priv-features-header' },
  { Component: PrivilegeFeatures, props: {}, key: 'priv-features' },
  { Component: FinePrintSection, props: {}, key: 'fine-print' },
];

const ShopPage: FC<ShopPageProps> = (props) => {
  return (
    <div className="shoppage-wrapper">
      <Header />
      <div className="content-wrapper">
        {components.map((item, index) => {
          const { Component, props: componentProps, key } = item;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Component {...componentProps} />
            </motion.div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;