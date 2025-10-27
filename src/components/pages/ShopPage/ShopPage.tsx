import React, { FC } from 'react';
import { ShopPageProps } from './type';
import Header from '../../ui/Header/Header';
import Footer from '../../Footer/Footer';
import { footerLinks } from '../../../assets/data/footerLinks';

const ShopPage: FC<ShopPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div className="shoppage-wrapper">
      <Header />
      <Footer links={footerLinks} />
    </div>
  );
};

export default ShopPage;