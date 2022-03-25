import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/images/arrow.png';
import arrowRed from '../assets/images/arrow-red.png';
import progressBlue from '../assets/images/progress-blue.png';
import progressMask from '../assets/images/progress-mask.png';

import Text from '../components/Text';
import { useSelector } from 'react-redux';
import Car from '../components/Car';
import SumAssured from '../components/SumAssured';

const Assured = () => {
  // const { userPhone } = useSelector((state) => state.cotizador);

  // const { name } = userPhone && userPhone !== undefined && userPhone[0];

  // console.log(name);

  const [sum, setSum] = useState(14.3);

  const handleSum = () => {
    setSum(sum + 0.1);

    if (sum > 16.4) {
      setSum(16.5);
    }
  };
  const handleRes = () => {
    setSum(sum - 0.1);

    if (sum < 12.6) {
      setSum(12.5);
    }
  };

  return (
    <section className="assured">
      <div className="assured__step">
        <div className="container">
          <div className="step mobile">
            <figure className="step__image">
              <img src={arrow} alt="icon arrow" />
            </figure>
            <p className="step__number">Paso 2 de 2</p>
            <figure className="step__progress">
              <img src={progressBlue} alt="progress" />
            </figure>
          </div>

          <div className="step desktop">
            <div className="step__one">
              <span>1</span>
              <p>Datos</p>
            </div>
            <figure className="step__progress">
              <img src={progressMask} alt="progress" />
            </figure>
            <div className="step__two">
              <span>2</span>
              <p>Arma tu plan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="assured__coverage">
        <div className="wrapper">
          <div className="container">
            <Link to="/" className="back">
              <figure className="back__image">
                <img src={arrowRed} alt="arrow" />
              </figure>
              <span className="back__text">VOLVER</span>
            </Link>

            <div className="wrapperText">
              <Text
                title="Mira las coberturas"
                description="Conoce las coberturas para tu plan"
              />
              <Text
                title="¡Hola, "
                subtitle={'undefined'}
                description="Conoce las coberturas para tu plan"
              />
            </div>

            <Car />
          </div>
        </div>

        <SumAssured sum={sum} handleSum={handleSum} handleRes={handleRes} />
      </div>
      <div className="assured__amount">monto</div>
    </section>
  );
};

export default Assured;
