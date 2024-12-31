import React from 'react';
import './FixedContent.css';

const FixedContent = () => {
  return (
    <div className="fixed__content">
      <p className="fixed__content__heading">This World Oral Health Day,</p>
      <p className="fixed__content__subheading">
        Get a <span className="highlight">FREE </span>Appointment* with Top Dentists.
      </p>
      <div className="fixed__content__offerBanner">LIMITED PERIOD OFFER</div>
      <p className="fixed__content__hashtag">#BeSensitiveToOralHealth</p>
      <p className="fixed__content__terms">*T&C Apply - only consultation fee. Procedures / surgeries not covered</p>
    </div>
  );
};

export default FixedContent;
