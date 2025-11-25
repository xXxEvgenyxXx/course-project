import React, { FC } from 'react';
import { ServerPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import SubServersCards from '../../SubServersCards/SubServersCards';
import '../../../assets/styles/serversPage.css';
import ServerStats from '../../serverStats/serverStats';
import ServersGallery from '../../serversGallery/serversGallery';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <div className="hero-section servers-hero-section">
    <h1>Наши серверы</h1>
    <p>
      Мы создаем неповторимые серверы, дополняя их своими уникальными
      разработками. Для каждой сборки мы отбираем интересные моды, делаем
      направления развития железных дорог и пишем квесты
    </p>
    <ServerStats />
  </div>
);

const BeginJourneySection = () => (
  <div className="begin-your-journey">
    <h2>Начните своё приключение</h2>
    <p>Отправьтесь в своё неповторимое путешествие на наших серверах</p>
  </div>
);

const components = [
  { Component: HeroSection, props: {}, key: 'hero-section' },
  { Component: SubServersCards, props: {}, key: 'sub-servers-cards' },
  { Component: BeginJourneySection, props: {}, key: 'begin-journey' },
  { Component: ServersGallery, props: {}, key: 'servers-gallery' },
];

const ServersPage: FC<ServerPageProps> = (props) => {
  return (
    <div className="serverspage-wrapper">
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

export default ServersPage;