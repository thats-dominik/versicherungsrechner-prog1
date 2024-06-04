# Insurica - Autoversicherungsrechner

## Inhaltsverzeichnis
- [Projektbeschreibung](#projektbeschreibung)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Projektstruktur](#projektstruktur)
- [Verwendete Technologien](#verwendete-technologien)
- [Schritte zur Umsetzung](#schritte-zur-umsetzung)
  - [HTML zu React](#html-zu-react)
  - [Formularlogik und Validierung](#formularlogik-und-validierung)
  - [Schriftarten und Stile](#schriftarten-und-stile)
  - [Benutzerdefinierte Selbstbeteiligung](#benutzerdefinierte-selbstbeteiligung)
  - [Logoerstellung](#logoerstellung)
- [Detailierter Planungsverlauf](#detailierter-planungsverlauf)
- [Autor](#autor)

## Projektbeschreibung

Insurica ist ein React-basiertes Webprojekt, das es Benutzern ermöglicht, ihre Autoversicherungsprämie zu berechnen. Das Projekt umfasst mehrere Schritte, in denen Benutzer persönliche Daten, Fahrzeugdetails, Versicherungsdetails und Finanzierungsdetails eingeben können. Basierend auf diesen Eingaben werden die jährliche Versicherungsprämie und die Gesamtkreditkosten berechnet.

## Screenshots
### Landing Page
<img width="1235" alt="Bildschirmfoto 2024-06-05 um 00 23 15" src="https://github.com/thats-dominik/versicherungsrechner-prog1/assets/129942592/e851a1a0-c050-4f68-9a71-04d309cb41fa">

### Page 1

<img width="1232" alt="Bildschirmfoto 2024-06-05 um 00 24 54" src="https://github.com/thats-dominik/versicherungsrechner-prog1/assets/129942592/20a7e5da-fd5a-4952-97e4-3be022e147af">

### Page 2

<img width="1233" alt="Bildschirmfoto 2024-06-05 um 00 25 24" src="https://github.com/thats-dominik/versicherungsrechner-prog1/assets/129942592/03d98d11-19d1-4c93-b3de-7268f0bafd48">

### Page 3...

### Page Summary
<img width="1235" alt="Bildschirmfoto 2024-06-05 um 00 26 53" src="https://github.com/thats-dominik/versicherungsrechner-prog1/assets/129942592/03491a9b-0220-4b2f-82f5-400864eaa71f">

### Page Calculated

<img width="1236" alt="Bildschirmfoto 2024-06-05 um 00 27 46" src="https://github.com/thats-dominik/versicherungsrechner-prog1/assets/129942592/60c3f247-65b1-4a0b-bf93-773403be3d29">


## Installation

1. Klonen Sie das Repository:
```sh 
git clone https://github.com/thats-dominik/versicherungsrechner-prog1.git
```
	
2. Wechseln Sie in das Projektverzeichnis:
```sh
cd insurica
```

3. Installieren Sie die Abhängigkeiten:
```sh
npm install
```

4. Starten Sie die Entwicklungsumgebung:
```sh
npm start
```

## Projektstruktur

```
insurica/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── Raleway-Light.ttf
│   │   │   ├── Raleway-ExtraLight.ttf
│   │   │   ├── Raleway-Thin.ttf
│   │   │   ├── Raleway-Regular.ttf
│   │   │   ├── Raleway-Bold.ttf
│   │   │   ├── Raleway-ExtraBold.ttf
│   │   └── images/
│   │       ├── car-insurica-FINALISTISCH.png
│   ├── components/
│   │   ├── Header.js
│   │   ├── Step1.js
│   │   ├── Step2.js
│   │   ├── Step3.js
│   │   ├── Step4.js
│   │   ├── Step5.js
│   │   ├── Step6.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── utils.js
│   └── ...
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Verwendete Programmiersprachen

- React
- CSS
- JavaScript

## Schritte zur Umsetzung

### HTML zu React

Die ursprüngliche HTML-Datei wurde in mehrere React-Komponenten aufgeteilt. Hier ein Beispiel für `Step1`:

```jsx
import React, { useState } from 'react';
import { scrollToSection, validateFormStep1 } from '../utils';

const Step1 = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [license, setLicense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormStep1(age, license)) scrollToSection('step2');
  };

  return (
    <section id="step1">
      <h3>SCHRITT 1</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" id="age" min="18" max="99" required value={age} onChange={(e) => setAge(e.target.value)} />
        <div>
          <span onClick={() => setGender('male')}>MÄNNLICH</span>
          <span onClick={() => setGender('female')}>WEIBLICH</span>
        </div>
        <input type="text" id="location" required value={location} onChange={(e) => setLocation(e.target.value)} />
        <input type="number" id="license" min="0" max="80" required value={license} onChange={(e) => setLicense(e.target.value)} />
        <button type="submit">NÄCHSTER SCHRITT</button>
      </form>
    </section>
  );
};

export default Step1;
```

### Formularlogik und Validierung

Die Validierungslogik wurde in eine separate Datei `utils.js` ausgelagert:

```javascript
export const validateFormStep1 = (age, license) => {
  let valid = true;
  if (age < 18 || age > 99) valid = false;
  if (license < 0 || license > 80) valid = false;
  return valid;
};
```

### Schriftarten und Stile

Die Schriftarten wurden in das Verzeichnis `src/assets/fonts/Raleway/` verschoben und in `App.css` korrekt verlinkt:

```css
@font-face {
  font-family: "Light"; 
  src: url("./assets/fonts/Raleway/Raleway-Light.ttf") format("truetype");
}

/* ... */

body {
  font-family: 'Thin';
  background-color: #303F52;
  color: #eec947;
  margin: 0;
  padding: 0;
  text-align: center;
}

/* ... */

```

### Benutzerdefinierte Selbstbeteiligung

Die Komponente `Step3` wurde angepasst, um eine benutzerdefinierte Selbstbeteiligung zu ermöglichen:

```jsx
import React, { useState } from 'react';
import { scrollToSection } from '../utils';

const Step3 = () => {
  const [insuranceType, setInsuranceType] = useState('');
  const [deductible, setDeductible] = useState('');
  const [customDeductible, setCustomDeductible] = useState('');
  const [duration, setDuration] = useState('');

  const handleDeductibleChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') setDeductible('custom');
    else setDeductible(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalDeductible = deductible === 'custom' ? customDeductible : deductible;
    scrollToSection('step4');
  };

  return (
    <section id="step3">
      <h3>SCHRITT 3</h3>
      <form onSubmit={handleSubmit}>
        <select value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)}>
          <option value="">...</option>
          <option value="haftpflicht">Haftpflicht</option>
          <option value="teilkasko">Teilkasko</option>
          <option value="vollkasko">Vollkasko</option>
        </select>
        <select value={deductible} onChange={handleDeductibleChange}>
          <option value="">...</option>
          <option value="500">500.-</option>
          <option value="1000">1000.-</option>
          <option value="1500">1500.-</option>
          <option value="custom">Andere</option>
        </select>
        {deductible === 'custom' && (
          <input 
            type="number" 
            placeholder="Eigener Betrag"
            value={customDeductible} 
            onChange={(e) => setCustomDeductible(e.target.value)}
            required 
          />
        )}
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="">...</option>
          <option value="1">1 Jahr</option>
          <option value="2">2 Jahre</option>
          <option value="3">3 Jahre</option>
        </select>
        <button type="submit">NÄCHSTER SCHRITT</button>
      </form>
    </section>
  );
};

export default Step3;

```
### Logoerstellung

Ein einfaches und elegantes Logo für "Insurica" wurde erstellt, das die Farben #303F52 und #eec947 verwendet.

## Detailierter Planungsverlauf

1. **Initialisierung des Projekts**:
    
    - Ein neues React-Projekt wurde mit `create-react-app` erstellt.
    - Die grundlegende Projektstruktur wurde festgelegt.
2. **Aufteilung der HTML-Datei in React-Komponenten**:
    
    - Die ursprüngliche `index.html` Datei wurde analysiert und in mehrere React-Komponenten aufgeteilt (`Header`, `Step1`, `Step2`, `Step3`, `Step4`, `Step5`, `Step6`).
3. **Validierungslogik und Hilfsfunktionen**:
    
    - Die Validierungslogik für Formulare wurde in `utils.js` ausgelagert.
    - Funktionen zum Scrollen zwischen den Abschnitten und zur Berechnung der Versicherungsprämie und Kreditkosten wurden implementiert.
4. **Schriftarten und Stile**:
    
    - Die benötigten Schriftarten wurden in das Projektverzeichnis kopiert und in `App.css` verlinkt.
    - Globale Stile wurden in `App.css` definiert.
5. **Implementierung der Benutzerdefinierten Selbstbeteiligung**:
    
    - In der Komponente `Step3` wurde ein Eingabefeld für benutzerdefinierte Selbstbeteiligung hinzugefügt, das angezeigt wird, wenn die Option "Andere" ausgewählt wird.
6. **Logoerstellung**:
    
    - Ein Logo für "Insurica" wurde entworfen und in das Projekt integriert.

## Autor

- Dominik Hämmerle
