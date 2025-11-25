import React, { FC } from 'react';
import { ShopPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import DonateCards from '../../DonateCards/DonateCards';
import PrivilegeFeatures from '../../privilegeFeatures/PrivilegeFeatures';
import '../../../assets/styles/shopPage.css';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const ShopPage: FC<ShopPageProps> = (props) => {
  return (
    <div className="shoppage-wrapper">
      <Header />
      <motion.div
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <div className="hero-section shop-hero-section">
            <h1 className="text-accent">Магазин привилегий</h1>
            <p>Купите привилегии и станьте намного круче!<br />С ними вы получите уникальные возможности</p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <DonateCards />
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-accent privilege-features-header">Возможности при покупке привилегий</h3>
        </motion.div>
        <motion.div variants={itemVariants}>
          <PrivilegeFeatures />
        </motion.div>
        <motion.div variants={itemVariants} className="shop-fine-print">
          <h3>Привилегия приобретается отдельно на каждом сервере.</h3>
          <p>1 месяц равняется 31 дню.</p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ShopPage;