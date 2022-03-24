import arrow from '../assets/images/arrow.png';
import progressBlue from '../assets/images/progress-blue.png';
import progressMask from '../assets/images/progress-mask.png';

const Assured = () => {
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
      <div className="assured__coverage">cobertura</div>
      <div className="assured__amount">monto</div>
    </section>
  );
};

export default Assured;
