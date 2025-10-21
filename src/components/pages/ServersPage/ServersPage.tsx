import React, { FC } from 'react';
import { ServerPageProps } from './type';

const ServersPage: FC<ServerPageProps> = (props) => {
  // const { title, count = 0, onClick } = props;

  return (
    <div>
      {/* Содержимое компонента */}
      <h1>Это страница с отображением серверов</h1>
    </div>
  );
};

export default ServersPage;