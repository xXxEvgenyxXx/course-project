import React, { FC } from 'react';
import { HomePageProps } from './type';
import Header from '../../ui/Header/Header';
import ServerDescription from '../../ui/ServerDescription/ServerDescription';
import SubServersList from '../../SubServersList/SubServersList';
import '../../../assets/styles/header.css';
import Footer from '../../Footer/Footer';
import NewsSlider from '../../newsSlider/newsSlider';
import '../../../assets/styles/homePage.css';
import { motion } from 'framer-motion';

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <div className="homepage-wrapper">
      <Header />
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 * 0.1 }}
        >
          <ServerDescription />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 * 0.1 }}
        >
          <SubServersList />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
          className="news-header"
        >
          <h3>Новости проекта</h3>
          <p>Погрузитесь в насыщенную историю нашего проекта</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
        >
          <NewsSlider />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;