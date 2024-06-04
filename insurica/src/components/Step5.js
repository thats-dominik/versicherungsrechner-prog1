import React from 'react';
import { calculate } from '../utils';

const Step5 = () => (
  <section id="step5" className="step-section">
    <h3>SCHRITT 5</h3>
    <p className="section-subtitle">ANGABENÜBERPRÜFUNG</p>
    <div id="summary">
      <div className="summary-item"><strong>S. 1</strong><p id="summary-step1"></p></div>
      <hr />
      <div className="summary-item"><strong>S. 2</strong><p id="summary-step2"></p></div>
      <hr />
      <div className="summary-item"><strong>S. 3</strong><p id="summary-step3"></p></div>
      <hr />
      <div className="summary-item"><strong>S. 4</strong><p id="summary-step4"></p></div>
      <hr />
      <button onClick={calculate}>BERECHNEN</button>
    </div>
  </section>
);

export default Step5;
