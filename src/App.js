import React, { useState } from 'react';
import StepsForm from './components/StepsForm';
import StepsTable from './components/StepsTable';
import './App.css';

function App() {
  const [steps, setSteps] = useState([]);

  const addStep = (date, distance) => {
    setSteps(prevSteps => {
      const existing = prevSteps.find(step => step.date === date);
      if (existing) {
        return prevSteps.map(step =>
            step.date === date ? { ...step, distance: step.distance + distance } : step
        );
      }
      return [...prevSteps, { date, distance }].sort((a, b) => new Date(b.date) - new Date(a.date));
    });
  };

  const deleteStep = (date) => {
    setSteps(prevSteps => prevSteps.filter(step => step.date !== date));
  };

  const editStep = (step) => {
    // This can be expanded to fill the form with the step data for editing
  };

  return (
      <div className="App">
        <StepsForm onAdd={addStep} />
        <StepsTable steps={steps} onDelete={deleteStep} onEdit={editStep} />
      </div>
  );
}

export default App;
