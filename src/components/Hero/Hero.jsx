import React from 'react';
import heroImg from '../../assets/images/events-colo.png';

export const Hero = () => {
  return (
    <>
      <section className="hero container">
        <div className="row" style={{ flexDirection: 'row-reverse' }}>
          <div className="col-md-6 col-sm-12 heroImg">
            <img src={heroImg} alt="heroImg" />
            <div className="box"></div>
          </div>

          <div className="col-md-6 col-sm-12 content">
            <h1 className="mb-3">Engineering & 
                                Technology 
                                Society, Pantnagar</h1>
            <p className="mb-4">
            The only Society taking responsibility to organize all the major and minor events in College of Technology Pantnagar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
