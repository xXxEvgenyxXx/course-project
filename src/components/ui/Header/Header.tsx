import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Импортируем Link и useLocation

const Header = () => {
  const location = useLocation(); // Получаем текущий путь

  return (
    <header>
      <div className="server-name-wrapper">
        <Link className={`header-link`} to="/">
          <img className="logo" src={require("../../../assets/images/logo.png")} alt="Logo" /> Project Novoakopovsk
        </Link>
      </div>
      <nav>
        <Link className={`header-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
          Главная
        </Link>
        <Link className={`header-link ${location.pathname === '/servers' ? 'active' : ''}`} to="/servers">
          Серверы
        </Link>
        <Link className={`header-link ${location.pathname === '/shop' ? 'active' : ''}`} to="/shop">
          Магазин
        </Link>
      </nav>
    </header>
  );
};

export default Header;