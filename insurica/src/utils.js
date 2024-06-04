export const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
  
  export const selectGender = (gender) => {
    document.getElementById('gender').value = gender;
    document.getElementById('male').classList.remove('selected');
    document.getElementById('female').classList.remove('selected');
    document.getElementById(gender).classList.add('selected');
  };
  
  export const validateFormStep1 = (age, license) => {
    const ageElement = document.getElementById('age');
    const licenseElement = document.getElementById('license');
  
    let valid = true;
  
    if (age < 18 || age > 99) {
      ageElement.classList.add('error');
      document.getElementById('age-error').style.display = 'block';
      valid = false;
    } else {
      ageElement.classList.remove('error');
      document.getElementById('age-error').style.display = 'none';
    }
  
    if (license < 0 || license > 80) {
      licenseElement.classList.add('error');
      document.getElementById('license-error').style.display = 'block';
      valid = false;
    } else {
      licenseElement.classList.remove('error');
      document.getElementById('license-error').style.display = 'none';
    }
  
    return valid;
  };
  
  export const validateFormStep4 = (price, downPayment, interestRate) => {
    const priceElement = document.getElementById('price');
    const downPaymentElement = document.getElementById('down-payment');
    const interestRateElement = document.getElementById('interest-rate');
  
    let valid = true;
  
    if (price <= 0) {
      priceElement.classList.add('error');
      document.getElementById('price-error').style.display = 'block';
      valid = false;
    } else {
      priceElement.classList.remove('error');
      document.getElementById('price-error').style.display = 'none';
    }
  
    if (downPayment < 0) {
      downPaymentElement.classList.add('error');
      document.getElementById('down-payment-error').style.display = 'block';
      valid = false;
    } else {
      downPaymentElement.classList.remove('error');
      document.getElementById('down-payment-error').style.display = 'none';
    }
  
    if (interestRate <= 0) {
      interestRateElement.classList.add('error');
      document.getElementById('interest-rate-error').style.display = 'block';
      valid = false;
    } else {
      interestRateElement.classList.remove('error');
      document.getElementById('interest-rate-error').style.display = 'none';
    }
  
    return valid;
  };
  
  export const showSummary = () => {
    document.getElementById('summary-step1').innerText = `${document.getElementById('age').value} | ${document.getElementById('gender').value} | ${document.getElementById('location').value} | ${document.getElementById('license').value} Jahre`;
    document.getElementById('summary-step2').innerText = `${document.getElementById('brand').value} | ${document.getElementById('model').value} | ${document.getElementById('year').value} | ${document.getElementById('mileage').value} km | ${document.getElementById('parking').value}`;
    document.getElementById('summary-step3').innerText = `${document.getElementById('insurance-type').value} | ${document.getElementById('deductible').value} € | ${document.getElementById('duration').value} Jahre`;
    document.getElementById('summary-step4').innerText = `${document.getElementById('price').value} € | ${document.getElementById('down-payment').value} € | ${document.getElementById('loan-duration').value} Jahre | ${document.getElementById('interest-rate').value}%`;
    scrollToSection('step5');
  };
  
  export const calculate = () => {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const location = document.getElementById('location').value;
    const licenseYears = parseInt(document.getElementById('license').value);
    const insuranceType = document.getElementById('insurance-type').value;
    const deductible = parseInt(document.getElementById('deductible').value);
    const duration = parseInt(document.getElementById('duration').value);
    const price = parseFloat(document.getElementById('price').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const loanDuration = parseInt(document.getElementById('loan-duration').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
  
    let basePremium = 500;
    if (age < 25) basePremium += 100;
    if (gender === 'male') basePremium += 50;
    if (location === 'ZH') basePremium += 20;
    if (licenseYears < 5) basePremium += 80;
    if (insuranceType === 'teilkasko') basePremium += 150;
    if (insuranceType === 'vollkasko') basePremium += 300;
  
    basePremium -= deductible / 10;
    basePremium *= duration;
  
    const totalLoanCost = (price - downPayment) * (1 + (interestRate / 100) * loanDuration);
  
    document.getElementById('result').innerHTML = `
        <p>Jährliche Versicherungsprämie: ${basePremium.toFixed(2)} €</p>
        <p>Gesamtkreditkosten: ${totalLoanCost.toFixed(2)} €</p>
    `;
  
    scrollToSection('step6');
  };
  
  export const createAccount = () => {
    alert('Account-Erstellung noch nicht implementiert.');
  };
  
  export const resetAndRestart = () => {
    document.querySelector('form').reset();
    scrollToSection('step1');
  };
  