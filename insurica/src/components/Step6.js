import React from 'react';
import { resetAndRestart, createAccount } from '../utils';

const Step6 = () => (
  <section id="step6" className="step-section">
    <h3>SCHRITT 6</h3>
    <p className="section-subtitle">ERGEBNIS</p>
    <div id="result"></div>
    <div className="action-buttons">
      <button onClick={resetAndRestart}>NEU BERECHNEN</button>
      <button onClick={createAccount}>ACCOUNT ERSTELLEN</button>
    </div>
  </section>
);

export default Step6;
