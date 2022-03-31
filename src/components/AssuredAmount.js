import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import check from '../assets/images/check.png';

const AssuredAmount = ({ sumTotal, insuranceIncludes }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/thanks');
  };

  return (
    <div className="assured__amount">
      <div className="container">
        <div className="total">
          <h4>Monto</h4>
          <div>${sumTotal().toFixed(2)}</div>
          <span>mensuales</span>
        </div>

        <div className="includes">
          <h4>El precio incluye:</h4>
          <ul>
            {insuranceIncludes.map((elem, index) => (
              <li key={index}>
                <img src={check} alt="check" />
                <span>{elem}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button text="lo quiero" type="button" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default AssuredAmount;
