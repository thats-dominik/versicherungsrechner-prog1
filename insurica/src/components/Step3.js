import React, { useState } from 'react';
import { scrollToSection } from '../utils';

const Step3 = () => {
  const [insuranceType, setInsuranceType] = useState('');
  const [deductible, setDeductible] = useState('');
  const [customDeductible, setCustomDeductible] = useState('');
  const [duration, setDuration] = useState('');

  const handleDeductibleChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setDeductible('custom');
      setCustomDeductible('');
    } else {
      setDeductible(value);
      setCustomDeductible('');
    }
  };

  const handleCustomDeductibleChange = (e) => {
    setCustomDeductible(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalDeductible = deductible === 'custom' ? customDeductible : deductible;
    scrollToSection('step4');
  };

  return (
    <section id="step3" className="step-section">
      <h3>SCHRITT 3</h3>
      <p className="section-subtitle">ANGABE DER VERSICHERUNGSDETAILS</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="insurance-type">ART DER VERSICHERUNG</label>
          <select id="insurance-type" name="insurance-type" required
            value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)}>
            <option value="">...</option>
            <option value="haftpflicht">Haftpflicht</option>
            <option value="teilkasko">Teilkasko</option>
            <option value="vollkasko">Vollkasko</option>
          </select>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="deductible">SELBSTBETEILIGUNG</label>
          <select id="deductible" name="deductible" required
            value={deductible} onChange={handleDeductibleChange}>
            <option value="">...</option>
            <option value="500">500.-</option>
            <option value="1000">1000.-</option>
            <option value="1500">1500.-</option>
            <option value="custom">Andere</option>
          </select>
          {deductible === 'custom' && (
            <input 
              type="number" 
              id="custom-deductible" 
              name="custom-deductible" 
              placeholder="Eigener Betrag"
              value={customDeductible} 
              onChange={handleCustomDeductibleChange}
              required 
            />
          )}
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="duration">LAUFZEIT</label>
          <select id="duration" name="duration" required
            value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value="">...</option>
            <option value="1">1 Jahr</option>
            <option value="2">2 Jahre</option>
            <option value="3">3 Jahre</option>
          </select>
        </div>
        <hr />
        <button type="submit">NÄCHSTER SCHRITT</button>
      </form>
    </section>
  );
};

export default Step3;
