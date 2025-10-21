import React, { FC } from 'react';
import { ShopPageProps } from './type';

const ShopPage: FC<ShopPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div>
      <h1>Это магазин привилегий</h1>
    </div>
  );
};

export default ShopPage;