import React, { useState } from 'react';
import { scrollToSection, validateFormStep1 } from '../utils';

const Step1 = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [license, setLicense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormStep1(age, license)) {
      scrollToSection('step2');
    }
  };

  return (
    <section id="step1" className="step-section">
      <h3>SCHRITT 1</h3>
      <p className="section-subtitle">ANGABE PERSÖNLICHER DATEN</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="age">ALTER</label>
          <input type="number" id="age" name="age" min="18" max="99" required
            value={age} onChange={(e) => setAge(e.target.value)} />
          <span className="error-message" id="age-error">Alter muss zwischen 18 und 99 liegen.</span>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="gender">GESCHLECHT</label>
          <div className="radio-group">
            <span id="male" className={`radio-option ${gender === 'male' ? 'selected' : ''}`} 
            onClick={() => setGender('male')}>MÄNNLICH</span>
            <span>|</span>
            <span id="female" className={`radio-option ${gender === 'female' ? 'selected' : ''}`} 
            onClick={() => setGender('female')}>WEIBLICH</span>
          </div>
          <input type="hidden" id="gender" name="gender" value={gender} />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="location">WOHNKANTON</label>
          <input type="text" id="location" name="location" required
            value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="license">FÜHRERSCHEIN SEIT (J.)</label>
          <input type="number" id="license" name="license" min="0" max="80" required
            value={license} onChange={(e) => setLicense(e.target.value)} />
          <span className="error-message" id="license-error">Jahre müssen zwischen 0 und 80 liegen.</span>
        </div>
        <hr />
        <button type="submit">NÄCHSTER SCHRITT</button>
      </form>
    </section>
  );
};

export default Step1;
