import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { getFormValues, getUserPhone } from '../redux/actions/cotizador';
import Button from './Button';

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userPhone } = useSelector((state) => state.cotizador);
  console.log(userPhone);

  const [values, handleInputChange, reset] = useForm({
    dni: '',
    phone: '',
    plate: '',
  });

  const { dni, phone, plate } = values;

  useEffect(() => {
    dispatch(
      getFormValues({
        dni,
        phone,
        plate,
      })
    );
    dispatch(getUserPhone(phone));
    // eslint-disable-next-line
  }, [dni, phone, plate]);

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');

  const handleChecked = () => {
    setChecked(!checked);
  };

  const validate = () => {
    let formatDNI = /^\d{8}(?:[-\s]\d{4})?$/;
    let formatPlate = /^[A-Z]{2}[-][0-9]{1,2}[-][A-Z]{1,2}[-][0-9]{3,4}$/;

    if (!formatDNI.test(dni)) {
      setError('Formato no valido para el DNI');
      return false;
    }

    if (phone === '') {
      setError('Ingresa un número de celular');
      return false;
    }
    if (!formatPlate.test(plate)) {
      setError('Error placa inválida, ejemplo de placa válida: AP-05-BJ-9353');
      return false;
    }

    if (checked === false) {
      setError('Acepta los términos y condiciones');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (
        userPhone.length > 0
          ? navigate('/assured')
          : alert('No se encontraron Registros')
      )
        reset();
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Déjanos tus datos</h2>

        {error && <p className="form__error">{error}</p>}
        <div className="form__field">
          <select>
            <option value="dni">DNI</option>
          </select>
          <input
            type="text"
            name="dni"
            placeholder="Nro. de doc"
            onChange={handleInputChange}
            value={dni}
            required
          />
        </div>

        <div className="form__field">
          <input
            type="text"
            name="phone"
            placeholder="Celular"
            onChange={handleInputChange}
            value={phone}
            required
          />
        </div>
        <div className="form__field">
          <input
            type="text"
            name="plate"
            placeholder="Placa"
            onChange={handleInputChange}
            value={plate}
            required
          />
        </div>

        <div className="form__field">
          <input type="checkbox" value={checked} onChange={handleChecked} />
          <label>
            Acepto la{' '}
            <a href="#politica">Política de Protecciòn de Datos Personales</a> y
            los <a href="#terminos">Términos y Condiciones.</a>
          </label>
        </div>

        <Button type="submit" text="cotízalo" />
      </form>
    </div>
  );
};

export default Form;
