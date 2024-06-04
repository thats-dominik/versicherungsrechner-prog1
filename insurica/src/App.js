import React from 'react';
import Header from './components/Header';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import Step6 from './components/Step6';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
    </div>
  );
}

export default App;
