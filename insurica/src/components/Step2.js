import React, { useState } from 'react';
import { scrollToSection } from '../utils';

const Step2 = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [parking, setParking] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    scrollToSection('step3');
  };

  return (
    <section id="step2" className="step-section">
      <h3>SCHRITT 2</h3>
      <p className="section-subtitle">ANGABE DER FAHRZEUGDETAILS</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="brand">FAHRZEUGMARKE</label>
          <input type="text" id="brand" name="brand" required
            value={brand} onChange={(e) => setBrand(e.target.value)} />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="model">FAHRZEUGMODELL</label>
          <input type="text" id="model" name="model" required
            value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="year">BAUJAHR</label>
          <input type="number" id="year" name="year" required
            value={year} onChange={(e) => setYear(e.target.value)} />
          <span className="error-message" id="year-error">Ungültiges Baujahr.</span>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="mileage">KILOMETERSTAND (KM)</label>
          <input type="number" id="mileage" name="mileage" required
            value={mileage} onChange={(e) => setMileage(e.target.value)} />
          <span className="error-message" id="mileage-error">Ungültiger Kilometerstand.</span>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="parking">ABSTELLORT</label>
          <input type="text" id="parking" name="parking" required
            value={parking} onChange={(e) => setParking(e.target.value)} />
        </div>
        <hr />
        <button type="submit">NÄCHSTER SCHRITT</button>
      </form>
    </section>
  );
};

export default Step2;
