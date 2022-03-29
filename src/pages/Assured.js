import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../assets/images/arrow.png';
import arrowRed from '../assets/images/arrow-red.png';
import progressBlue from '../assets/images/progress-blue.png';
import progressMask from '../assets/images/progress-mask.png';

import Text from '../components/Text';
// import { useSelector } from 'react-redux';
import Car from '../components/Car';
import SumAssured from '../components/SumAssured';
import Button from '../components/Button';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';

import tire from '../assets/images/llanta-robada.png';
import choque from '../assets/images/choque.png';
import atropello from '../assets/images/atropello.png';
import arrowTop from '../assets/images/arrow-top.png';
import arrowBottom from '../assets/images/arrow-bottom.png';
import arrowRedTop from '../assets/images/arrow-red-top.png';
import arrowRedBottom from '../assets/images/arrow-red-bottom.png';

const Assured = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const refProtect = useRef();

  // const { userPhone } = useSelector((state) => state.cotizador);

  // const { name } = userPhone && userPhone !== undefined && userPhone[0];

  // console.log(name);

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

  const handleClick = () => {
    navigate('/thanks');
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

        <div className="addOrRemove">
          <div className="container">
            <h3 className="addOrRemove__title">Agrega o quita coberturas</h3>

            <Navigation />

            <div className="addOrRemove__content">
              <div ref={refProtect}>
                <div className="addOrRemove__content--protect">
                  <figure>
                    <img src={tire} alt="llanta robada" />
                  </figure>

                  <div className="addOrRemove__content--description">
                    <h3>Llanta robada</h3>
                    {show && (
                      <>
                        <p>
                          He salido de casa a las cuatro menos cinco para ir a
                          la academia de ingles de mi pueblo (Sant Cugat, al
                          lado de Barcelona) con mi bici, na llego a la academia
                          que está en el centro del pueblo en una plaza
                          medio-grande y dejo donde siempre la bici atada con
                          una pitón a un sitio de esos de poner las bicis
                        </p>
                        <button
                          type="button"
                          onClick={handleShow}
                          className="show-minus"
                        >
                          ver menos <img src={arrowTop} alt="arrow top" />
                        </button>
                      </>
                    )}

                    {!show && (
                      <button
                        type="button"
                        onClick={handleShow}
                        className="show-more"
                      >
                        ver más <img src={arrowBottom} alt="arrow top" />
                      </button>
                    )}
                  </div>

                  <input
                    type="checkbox"
                    id="llanta"
                    value="Llanta de repuesto"
                  />
                  <label htmlFor="llanta">Toggle</label>

                  {show && (
                    <button
                      type="button"
                      onClick={handleShow}
                      className="arrow-red-top"
                    >
                      <img src={arrowRedTop} alt="arrow red top" />
                    </button>
                  )}
                  {!show && (
                    <button
                      type="button"
                      className="arrow-red-bottom"
                      onClick={handleShow}
                    >
                      <img src={arrowRedBottom} alt="arrow red bottom" />
                    </button>
                  )}
                </div>

                <div className="addOrRemove__content--protect">
                  <figure>
                    <img src={choque} alt="choque y/o pasarse" />
                  </figure>

                  <div className="addOrRemove__content--description">
                    <h3>Choque y/o pasarte la luz roja </h3>
                    {showTwo && (
                      <>
                        <p>
                          He salido de casa a las cuatro menos cinco para ir a
                          la academia de ingles de mi pueblo (Sant Cugat, al
                          lado de Barcelona) con mi bici, na llego a la academia
                          que está en el centro del pueblo en una plaza
                          medio-grande y dejo donde siempre la bici atada con
                          una pitón a un sitio de esos de poner las bicis
                        </p>
                        <button
                          type="button"
                          onClick={handleShowTwo}
                          className="show-minus"
                        >
                          ver menos <img src={arrowTop} alt="arrow top" />
                        </button>
                      </>
                    )}

                    {!showTwo && (
                      <button
                        type="button"
                        onClick={handleShowTwo}
                        className="show-more"
                      >
                        ver más <img src={arrowBottom} alt="arrow top" />
                      </button>
                    )}
                  </div>

                  <input
                    type="checkbox"
                    id="choque"
                    value="Choque y/o pasarte de luz"
                  />
                  <label htmlFor="choque">Toggle</label>

                  {showTwo && (
                    <button
                      type="button"
                      onClick={handleShowTwo}
                      className="arrow-red-top"
                    >
                      <img src={arrowRedTop} alt="arrow red top" />
                    </button>
                  )}
                  {!showTwo && (
                    <button
                      type="button"
                      className="arrow-red-bottom"
                      onClick={handleShowTwo}
                    >
                      <img src={arrowRedBottom} alt="arrow red bottom" />
                    </button>
                  )}
                </div>

                <div className="addOrRemove__content--protect">
                  <figure>
                    <img src={atropello} alt="atropello" />
                  </figure>

                  <div className="addOrRemove__content--description">
                    <h3>Atropello en la vía Evitamiento </h3>
                    {showThree && (
                      <>
                        <p>
                          He salido de casa a las cuatro menos cinco para ir a
                          la academia de ingles de mi pueblo (Sant Cugat, al
                          lado de Barcelona) con mi bici, na llego a la academia
                          que está en el centro del pueblo en una plaza
                          medio-grande y dejo donde siempre la bici atada con
                          una pitón a un sitio de esos de poner las bicis
                        </p>
                        <button
                          type="button"
                          onClick={handleShowThree}
                          className="show-minus"
                        >
                          ver menos <img src={arrowTop} alt="arrow top" />
                        </button>
                      </>
                    )}

                    {!showThree && (
                      <button
                        type="button"
                        onClick={handleShowThree}
                        className="show-more"
                      >
                        ver más <img src={arrowBottom} alt="arrow top" />
                      </button>
                    )}
                  </div>

                  <input
                    type="checkbox"
                    id="atropello"
                    value="Atropello en la vía Evitamiento"
                  />
                  <label htmlFor="atropello">Toggle</label>

                  {showThree && (
                    <button
                      type="button"
                      onClick={handleShowThree}
                      className="arrow-red-top"
                    >
                      <img src={arrowRedTop} alt="arrow red top" />
                    </button>
                  )}
                  {!showThree && (
                    <button
                      type="button"
                      className="arrow-red-bottom"
                      onClick={handleShowThree}
                    >
                      <img src={arrowRedBottom} alt="arrow red bottom" />
                    </button>
                  )}
                </div>
              </div>

              {location.hash === '#encircle' && (
                <div id="encircle">
                  <h2>contenido rodean</h2>
                </div>
              )}
              {location.hash === '#better' && (
                <div id="better">
                  <h2>contenido mejora</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="assured__amount">
        <Button text="lo quiero" type="button" handleClick={handleClick} />
      </div>
    </section>
  );
};

export default Assured;
