import React from 'react';

const Header = () => {
  return (
    <header>
        <div className="server-name-wrapper">
            <a className="header-link" href="/">Project Novoakopovsk</a>
        </div>
        <nav>
            <a className="header-link" href="/">Главная</a>
            <a className="header-link" href="/servers">Серверы</a>
            <a className="header-link" href="/shop">Магазин</a>
        </nav>
    </header>
  );
};

export default Header;