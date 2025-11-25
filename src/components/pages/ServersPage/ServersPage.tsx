import React, { FC } from 'react';
import { ServerPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import SubServersCards from '../../SubServersCards/SubServersCards';
import '../../../assets/styles/serversPage.css';
import ServerStats from '../../serverStats/serverStats';
import ServersGallery from '../../serversGallery/serversGallery';
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

const ServersPage: FC<ServerPageProps> = (props) => {
  return (
    <div className="serverspage-wrapper">
      <Header />
      <motion.div
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <div className="hero-section servers-hero-section">
            <h1>Наши серверы</h1>
            <p>
              Мы создаем неповторимые серверы, дополняя их своими уникальными
              разработками. Для каждой сборки мы отбираем интересные моды, делаем
              направления развития железных дорог и пишем квесты
            </p>
            <ServerStats />
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <SubServersCards />
        </motion.div>
        <motion.div variants={itemVariants} className="begin-your-journey">
          <h2>Начните своё приключение</h2>
          <p>Отправьтесь в своё неповторимое путешествие на наших серверах</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <ServersGallery />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ServersPage;