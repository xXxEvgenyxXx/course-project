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

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <div className="homepage-wrapper">
      <Header />
      <motion.div
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <ServerDescription />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SubServersList />
        </motion.div>
        <motion.div variants={itemVariants} className="news-header">
          <h3>Новости проекта</h3>
          <p>Погрузитесь в насыщенную историю нашего проекта</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <NewsSlider />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default HomePage;