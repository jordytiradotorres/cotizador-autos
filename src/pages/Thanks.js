import React from 'react';
import { useNavigate } from 'react-router-dom';
import thanksMobile from '../assets/images/thanks-mobile.svg';
import thanksDesktop from '../assets/images/thanks-desktop.png';
import Button from '../components/Button';
import { useSelector } from 'react-redux';

const Thanks = () => {
  const navigate = useNavigate();

  const { userPhone } = useSelector((state) => state.cotizador);
  const { email } = userPhone[0] || 'jordytiradotorres20@gmail.com';

  const handleClick = () => {
    navigate('/assured');
  };

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
            tu correo: <span className="email">{email}</span>
          </p>

          <Button
            text="cómo usar mi seguro"
            type="button"
            handleClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Thanks;
