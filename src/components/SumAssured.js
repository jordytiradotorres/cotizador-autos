import React from 'react';

const SumAssured = ({ sum, handleSum, handleRes }) => {
  return (
    <div className="sumAssured">
      <div className="container">
        <div className="sumAssured__minmax">
          <h4>Indica la suma asegurada</h4>
          <div>
            <span>MIN $12.500</span>
            <span className="pipe">|</span>
            <span>MAX $16,500</span>
          </div>
        </div>

        <div className="sumAssured__amount">
          <button type="button" onClick={handleRes}>
            -
          </button>
          <div>$ {sum.toFixed(3)}</div>
          <button type="button" onClick={handleSum}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SumAssured;
