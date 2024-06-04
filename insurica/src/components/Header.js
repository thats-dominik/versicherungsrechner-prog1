import React from 'react';
import carImage from '../assets/images/car-insurica-FINALISTISCH.png';
import { scrollToSection } from '../utils';

const Header = () => (
  <header id="header">
    <h1>INSURICA</h1>
    <h2>VERSICHERUNGSRECHNER</h2>
    <p className="slogan">BERECHNEN SIE IHRE AUTOVERSICHERUNG</p>
    <button onClick={() => scrollToSection('step1')}>JETZT STARTEN</button>
    <img src={carImage} alt="Auto Illustration" className="car-image" />
  </header>
);

export default Header;
