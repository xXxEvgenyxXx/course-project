import React, { FC } from 'react';
import { HomePageProps } from './type';

const HomePage: FC<HomePageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div>
      <h1>Это главная страница</h1>
    </div>
  );
};

export default HomePage;