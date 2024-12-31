import React from 'react';
import './HeroSection.css';
import heroImage from '../../Assets/hero_image.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>
          Skip the travel! Find Online <br />
          <span className="highlight">Medical <span className='hero__blued'>Centers</span></span>
        </h1>
        <p>
          Connect instantly with a 24x7 specialist or choose to <br />
          video visit a particular doctor.
        </p>
        <button className="hero__button">Find Centers</button>
      </div>
      <div className="hero__img">
        <img src={heroImage} alt="Doctors" width="585px" height="550px"/>
      </div>
    </section>
  );
};

export default HeroSection;
