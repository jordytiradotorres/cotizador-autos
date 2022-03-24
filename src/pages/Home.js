import React from 'react';
import heroMobile from '../assets/images/hero-mobile.png';
import heroDesktop from '../assets/images/hero-desktop.png';
import Form from '../components/Form';
import Text from '../components/Text';

const Home = () => {
  return (
    <section className="home">
      <div className="wrapper">
        <div className="container">
          <div className="home__information">
            <span>¡NUEVO!</span>
            <Text
              title="Seguro Vehicular"
              subtitle="Tracking"
              description="Cuentanos donde le haras seguimiento a tu seguro"
            />
            <figure className="home__figure">
              <img src={heroMobile} alt="hero mobile" />
            </figure>
          </div>
        </div>
      </div>

      <figure className="home__hero">
        <img src={heroDesktop} alt="hero desktop" />
      </figure>

      <Form />
    </section>
  );
};

export default Home;
