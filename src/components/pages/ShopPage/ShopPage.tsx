import React, { FC } from 'react';
import { ShopPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';

const ShopPage: FC<ShopPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="shoppage-wrapper">
      <Header />
      <Footer />
    </div>
  );
};

export default ShopPage;