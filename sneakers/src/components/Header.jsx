import React from 'react';

const Header = () => {
  return <div>
      <header>
        <div className="header-left">
          <img width={40} height={40} src="/img/zara1.png" />
          <div className="header-info">
            <h3>React Sneakers</h3>
            <p>shoose magnaise</p>
          </div>
        </div>

        <div className="header-right">
        <ul>
          <li>
          <img width={18} height={18} src="/img/zara1.png" />
            <span>1205 uah</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/zara1.png" />
          </li>
        </ul>
        </div>
      </header>
  </div>;
};

export default Header;
