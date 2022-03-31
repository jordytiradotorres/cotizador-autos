import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../assets/images/arrow.png';
import arrowRed from '../assets/images/arrow-red.png';
import progressBlue from '../assets/images/progress-blue.png';
import progressMask from '../assets/images/progress-mask.png';

import Text from '../components/Text';
import { useSelector } from 'react-redux';
import Car from '../components/Car';
import SumAssured from '../components/SumAssured';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';

import tire from '../assets/images/llanta-robada.png';
import choqueImg from '../assets/images/choque.png';
import atropelloImg from '../assets/images/atropello.png';
import AssuredAmount from '../components/AssuredAmount';
import Coverage from '../components/Coverage';

const Assured = () => {
  const location = useLocation();
  const refProtect = useRef();

  const { userPhone } = useSelector((state) => state.cotizador);
  const { name } = userPhone[0];

  useEffect(() => {
    if (location.hash === '#encircle' || location.hash === '#better') {
      refProtect.current.style.display = 'none';
    } else {
      refProtect.current.style.display = 'block';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const [show, setShow] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);

  const [sum, setSum] = useState(14.3);
  const [insuranceIncludes, setInsuranceIncludes] = useState([
    'Analisis de motor',
    'Aros gratis',
  ]);

  // coverages y total
  const [llanta, setLlanta] = useState(false);
  const [choque, setChoque] = useState(false);
  const [atropello, setAtropello] = useState(false);

  const handleLlanta = () => {
    setLlanta(!llanta);
  };
  const handleChoque = () => {
    setChoque(!choque);
  };

  const handleAtropello = () => {
    setAtropello(!atropello);
  };

  useEffect(() => {
    if (sum > 16.0) {
      setChoque(false);
      document.getElementById('choque').checked = false;
      document.getElementById('choque').disabled = true;
    } else {
      document.getElementById('choque').disabled = false;
    }
  }, [sum]);

  const sumTotal = () => {
    let base = 20;
    let result = base;

    if (llanta) {
      result += 15;
    }
    if (choque) {
      result += 20;
    }
    if (atropello) {
      result += 50;
    }

    return result;
  };

  useEffect(() => {
    if (llanta) {
      setInsuranceIncludes(['Llanta de respuesto', ...insuranceIncludes]);
    } else {
      setInsuranceIncludes(
        insuranceIncludes.filter((elem) => elem !== 'Llanta de respuesto')
      );
    }
  }, [llanta]);

  useEffect(() => {
    if (choque) {
      setInsuranceIncludes([
        'Choque y/o pasarte la luz roja',
        ...insuranceIncludes,
      ]);
    } else {
      setInsuranceIncludes(
        insuranceIncludes.filter(
          (elem) => elem !== 'Choque y/o pasarte la luz roja'
        )
      );
    }
  }, [choque]);

  useEffect(() => {
    if (atropello) {
      setInsuranceIncludes([
        'Atropello en la vía Evitamiento',
        ...insuranceIncludes,
      ]);
    } else {
      setInsuranceIncludes(
        insuranceIncludes.filter(
          (elem) => elem !== 'Atropello en la vía Evitamiento'
        )
      );
    }
  }, [atropello]);

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

  const handleShow = () => {
    setShow(!show);
  };
  const handleShowTwo = () => {
    setShowTwo(!showTwo);
  };
  const handleShowThree = () => {
    setShowThree(!showThree);
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
                subtitle={name}
                description="Conoce las coberturas para tu plan"
              />
            </div>

            <Car />
          </div>
        </div>

        <SumAssured sum={sum} handleSum={handleSum} handleRes={handleRes} />

        <div className="addOrRemove">
          <div className="container">
            <h3 className="addOrRemove__title">Agrega o quita coberturas</h3>

            <Navigation />

            <div className="addOrRemove__content">
              <div ref={refProtect}>
                <Coverage
                  show={show}
                  handleShow={handleShow}
                  llanta={llanta}
                  handleLlanta={handleLlanta}
                  img={tire}
                  title="Llanta robada"
                  id="llanta"
                  description="He salido de casa a las cuatro menos cinco para ir a la academia
                  de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
                  bici, na llego a la academia que está en el centro del pueblo en
                  una plaza medio-grande y dejo donde siempre la bici atada con una
                  pitón a un sitio de esos de poner las bicis"
                />
                <Coverage
                  show={showTwo}
                  handleShow={handleShowTwo}
                  llanta={choque}
                  handleLlanta={handleChoque}
                  img={choqueImg}
                  id="choque"
                  title="Choque y/o pasarte la luz roja"
                  description="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis"
                />
                <Coverage
                  show={showThree}
                  handleShow={handleShowThree}
                  llanta={atropello}
                  handleLlanta={handleAtropello}
                  img={atropelloImg}
                  id="atropello"
                  title="Atropello en la vía Evitamiento"
                  description="He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis"
                />
              </div>

              {location.hash === '#encircle' && (
                <div id="encircle">
                  <h2 style={{ paddingBottom: '1.5rem' }}>contenido rodean</h2>
                </div>
              )}
              {location.hash === '#better' && (
                <div id="better">
                  <h2 style={{ paddingBottom: '1.5rem' }}>contenido mejora</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AssuredAmount
        sumTotal={sumTotal}
        insuranceIncludes={insuranceIncludes}
      />
    </section>
  );
};

export default Assured;
