
import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'Anti Wrinkle Treatment',
    'Dermal Fillers',
    'Secret RF',
    'HarmonyCA',
    'Profhilo',
    'Facials',
    'Sclreotherapy',
    'LED',
    'Fat Dissolve',
    'Growth Factors',
    'Specail Package For time Clinic',
    'Consultation',
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setStep(2);
  };

  const handleBack = () => {
    setSelectedOption(null);
    setStep(1);
  };

  return (
    <div className="App">
      <header >
        <div>
          <h1>Choose Service</h1>
        </div>
        <div className='Header'>
          <p>Step {step}/2</p>
        </div>  
      </header>
      <main className='Main-part'>
        
        {step === 1 ? (
          
          <ul className='Lista'>
            <div className='Second-part'>
            {options.map((option, index) => (
              
              <li key={index} className='Buttons'>
                <button onClick={() => handleOptionSelect(option)}>{option}</button>
              </li>
              
            ))}
            </div>
          </ul>
          
        ) : (
          <div className='Step-2'>
            <h2>Selected Option:</h2>
            <p>{selectedOption}</p>
            <button onClick={handleBack}>Back</button>
          </div>
        )}

        <div className='consult'>
          <p>Not sure about Consultation type? Please, call <p className='phone'>0203 7959063</p></p>
        </div>
        
      </main>
      <footer className='Footer'>
        <div>
            Powered By Pabau
        </div>
      </footer>
    </div>
  );
}

export default App;







