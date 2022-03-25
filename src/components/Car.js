import React from 'react';
import { useSelector } from 'react-redux';
import person from '../assets/images/person.svg';

const Car = () => {
  const { formValues } = useSelector((state) => state.cotizador);
  const { plate } = formValues;

  return (
    <div className="car">
      <h3 className="car__plate">Placa: {plate}</h3>
      <h5 className="car__anio">Wolkswagen 2019</h5>
      <h5 className="car__model">Golf</h5>
      <figure className="car__image">
        <img src={person} alt="person" />
      </figure>
    </div>
  );
};

export default Car;
