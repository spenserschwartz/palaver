import React, { useState } from 'react';
import {
  LocalStorageField,
  InputField,
  ResultsField,
  ExcelField,
} from './components';
import { inputObjectTemplate } from './helpers';
import './App.css';

function App() {
  const [inputObject, setInputObject] = useState(inputObjectTemplate);

  return (
    <div className="App">
      <ExcelField />
      <LocalStorageField />

      <InputField inputObject={inputObject} setInputObject={setInputObject} />

      <ResultsField inputObject={inputObject} setInputObject={setInputObject} />
    </div>
  );
}

export default App;
