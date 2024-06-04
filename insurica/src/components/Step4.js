import React, { useState } from 'react';
import { showSummary, validateFormStep4 } from '../utils';

const Step4 = () => {
  const [price, setPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormStep4(price, downPayment, interestRate)) {
      showSummary();
    }
  };

  return (
    <section id="step4" className="step-section">
      <h3>SCHRITT 4</h3>
      <p className="section-subtitle">ANGABE DER FINANZIERUNGSDETAILS</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="price">KAUFPREIS FAHRZEUG</label>
          <input type="number" id="price" name="price" required
            value={price} onChange={(e) => setPrice(e.target.value)} />
          <span className="error-message" id="price-error">Ungültiger Kaufpreis.</span>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="down-payment">ANZAHLUNG</label>
          <input type="number" id="down-payment" name="down-payment" required
            value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
          <span className="error-message" id="down-payment-error">Ungültige Anzahlung.</span>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="loan-duration">LAUFZEIT KREDIT</label>
          <select id="loan-duration" name="loan-duration" required
            value={loanDuration} onChange={(e) => setLoanDuration(e.target.value)}>
            <option value="">...</option>
            <option value="1">1 Jahr</option>
            <option value="2">2 Jahre</option>
            <option value="3">3 Jahre</option>
            <option value="4">4 Jahre</option>
            <option value="5">5 Jahre</option>
          </select>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="interest-rate">ZINSSATZ</label>
          <input type="number" id="interest-rate" name="interest-rate" required
            value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
          <span className="error-message" id="interest-rate-error">Ungültiger Zinssatz.</span>
        </div>
        <hr />
        <button type="submit">NÄCHSTER SCHRITT</button>
      </form>
    </section>
  );
};

export default Step4;
