import React from 'react';

const Text = ({ title = '', subtitle = '', description = '' }) => {
  return (
    <div className="text">
      <h2 className="text__title">
        {title} <p className="text__subtitle">{subtitle}</p>
      </h2>
      <p className="text__description">{description}</p>
    </div>
  );
};

export default Text;
