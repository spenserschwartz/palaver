import React, {useState} from 'react';
import './App.css';

import {LocalStorageField, InputField, ResultsField} from './components'

//import fetchLocalStorage from './Data';   // Fetch local storage
import {inputObjectTemplate, introMessageTemplate1} from './helpers'


function App() {
  //const [palaverObject, setPalaverObject] = useState(fetchLocalStorage());


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
