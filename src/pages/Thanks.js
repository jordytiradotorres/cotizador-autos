import React from 'react';
import thanksMobile from '../assets/images/thanks-mobile.svg';
import thanksDesktop from '../assets/images/thanks-desktop.png';
import Button from '../components/Button';

const Thanks = () => {
  return (
    <section className="thanks">
      <picture className="thanks__image">
        <source srcSet={thanksDesktop} media="(min-width: 800px)" />
        <img src={thanksMobile} alt="thanks mobile" />
      </picture>

      <div className="thanks__content">
        <div className="container">
          <h2>¡Te damos la bienvenida!</h2>
          <h5>Cuenta con nosotros para proteger tu vehículo</h5>
          <p>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo: <span className="email">joel.sanchez@gmail.com</span>
          </p>

          <Button text="cómo usar mi seguro" type="button" />
        </div>
      </div>
    </section>
  );
};

export default Thanks;
