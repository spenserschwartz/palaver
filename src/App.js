import React, {useState} from 'react';
import './App.css';

import {LocalStorageField, InputField, ResultsField} from './components'
import {inputObjectTemplate} from './helpers'


function App() {
  const [inputObject, setInputObject] = useState(inputObjectTemplate);

  return (
    <div className="App">
      <LocalStorageField inputObject={inputObject} setInputObject={setInputObject}
      />

      <InputField inputObject={inputObject} setInputObject={setInputObject} />

      <ResultsField inputObject={inputObject} setInputObject={setInputObject} />
      
    </div>
  );
}

export default App;
