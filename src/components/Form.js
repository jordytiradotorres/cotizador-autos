import React from 'react';
import Button from './Button';

const Form = () => {
  return (
    <div className="container">
      <form className="form">
        <h2 className="form__title">Déjanos tus datos</h2>

        <div className="form__field">
          <select>
            <option value="dni">DNI</option>
          </select>
          <input type="text" name="dni" placeholder="Nro. de doc" />
        </div>

        <div className="form__field">
          <input type="text" name="phone" placeholder="Celular" />
        </div>
        <div className="form__field">
          <input type="text" name="plate" placeholder="Placa" />
        </div>

        <div className="form__field">
          <input type="checkbox" />
          <label>
            Acepto la{' '}
            <a href="#politica">Política de Protecciòn de Datos Personales</a> y
            los <a href="#terminos">Términos y Condiciones.</a>
          </label>
        </div>

        <Button type="button" text="cotízalo" />
      </form>
    </div>
  );
};

export default Form;
