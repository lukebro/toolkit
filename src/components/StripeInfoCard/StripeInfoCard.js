import React from 'react';
import './StripeInfoCard.css';

function StripeInfoCard({icon, title, children}) {
  return (
    <a href="#" className="StripeInfoCard">
      {icon}
      <h3 className="StripeInfoCard__title">{title}</h3>
      <p className="StripeInfoCard__text">
        {children}
      </p>
    </a>
  );
}

export default StripeInfoCard;