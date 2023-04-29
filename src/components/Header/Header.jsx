import React, { useState } from 'react';
import ETSlogomobile from '../../assets/images/Stamp(Circle) final.png'
import hamburger from '../../assets/images/icon-hamburger.svg';
import close from '../../assets/images/icon-close.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import ETSlogo from '../../assets/images/Stamp_Circle__final-removebg.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-md pt-5 pb-4">
        <div className="container">
          <a className={`${isOpen ? 'd-none' : ' navbar-brand'}`} href="#">
            <img className='navLogo' src={ETSlogo} alt="logo" />
          </a>

          <div className="navMenu ms-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link" aria-current="page" href="#About">
                  ABOUT ETS
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#Bureaus">
                BUREAUS
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#Clubs">
                CLUBS
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#News" className="nav-link">
NEWS
                </a>
              </li>
            </ul>

          </div>

          <div className={`${isOpen ? 'd-none ' : 'togglerButton'}`}>
            {isOpen ? (
              ''
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <img src={hamburger} alt="hamburger" />
              </button>
            )}
          </div>

          <div className={`${isOpen ? 'mobileNav' : 'd-none'}`}>
            <div className="d-fixed">
              <div className="mobileLogo">
                <div className="logo">
                  <img className='etsMobileLogo' src={ETSlogomobile} alt="logoMobile" />
                </div>

                <button className="ms-auto" onClick={() => setIsOpen(false)}>
                  <img className="close" src={close} alt="close" />
                </button>
              </div>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item me-4">
                  <a className="nav-link" aria-current="page" href="#About">
                    ABOUT ETS
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#Bureaus">
                    BUREAUS
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a href="#Events" className="nav-link">
                    EVENTS
                  </a>
                </li>
                <li className="nav-item me-4">
                <a href="#News" className="nav-link">
NEWS
                </a>
              </li>
              </ul>

              <div className="social-icons">
                <img className="me-5" src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
