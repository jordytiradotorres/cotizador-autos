import React from 'react';
import logo from '../assets/images/Logo.svg';
import phone from '../assets/images/phone.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <figure className="header__image">
          <img src={logo} alt="logo" />
        </figure>
        <div className="header__callUs">
          <p className="header__callUs--desktop">¿Tienes alguna duda?</p>
          <div>
            <img src={phone} alt="phone" />
            <a className="header__callUs--mobile" href="tel:014116001">
              Llámanos
            </a>
            <a className="header__callUs--desktop" href="tel:014116001">
              (01) 411 6001
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
