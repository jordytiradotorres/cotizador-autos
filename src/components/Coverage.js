import React from 'react';
import arrowTop from '../assets/images/arrow-top.png';
import arrowBottom from '../assets/images/arrow-bottom.png';
import arrowRedTop from '../assets/images/arrow-red-top.png';
import arrowRedBottom from '../assets/images/arrow-red-bottom.png';
import iconMinus from '../assets/images/icon-minus.png';
import iconPlus from '../assets/images/icon-plus.png';

const Coverage = ({
  show,
  handleShow,
  llanta,
  handleLlanta,
  img,
  id,
  title,
  description,
}) => {
  return (
    <div className="addOrRemove__content--protect">
      <figure>
        <img src={img} alt={title} />
      </figure>

      <div className="addOrRemove__content--description">
        <h3>{title}</h3>
        {show && (
          <>
            <p>{description}</p>
            <button type="button" onClick={handleShow} className="show-minus">
              ver menos <img src={arrowTop} alt="arrow top" />
            </button>
          </>
        )}
        {!show && (
          <button type="button" onClick={handleShow} className="show-more">
            ver más <img src={arrowBottom} alt="arrow top" />
          </button>
        )}
      </div>

      <input
        type="checkbox"
        id={id}
        value={llanta}
        onChange={handleLlanta}
        className="show-mobile-input"
      />
      <label htmlFor={id} className="show-mobile-label">
        Toggle
      </label>

      <input
        className="show-mobile-input agregar"
        value={llanta}
        id={id}
        type="checkbox"
        onChange={handleLlanta}
      />
      <label htmlFor={id} className="show-mobile-label quitar">
        {llanta ? (
          <div>
            <img src={iconMinus} alt="icon" />
            <span>Quitar</span>
          </div>
        ) : (
          <div>
            <img src={iconPlus} alt="icon" />
            <span>Agregar</span>
          </div>
        )}
      </label>

      {show && (
        <button type="button" onClick={handleShow} className="arrow-red-top">
          <img src={arrowRedTop} alt="arrow red top" />
        </button>
      )}
      {!show && (
        <button type="button" className="arrow-red-bottom" onClick={handleShow}>
          <img src={arrowRedBottom} alt="arrow red bottom" />
        </button>
      )}
    </div>
  );
};

export default Coverage;
