import React, { FC } from 'react';
import { ServerPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import SubServersCards from '../../SubServersCards/SubServersCards';
import '../../../assets/styles/serversPage.css'

const ServersPage: FC<ServerPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="serverspage-wrapper">
      <Header />
      <div className="hero-section">
        <h1>Наши серверы</h1>
        <p>Мы создаем неповторимые серверы, дополняя их своими уникальными разработками. Для каждой сборки мы отбираем интересные моды, делаем направления развития железных дорог</p>
      </div>
      <SubServersCards />
      <Footer />
    </div>
  );
};

export default ServersPage;