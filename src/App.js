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
  const [excelObject, setExcelObject] = useState({});

  return (
    <div className="App">
      <ExcelField excelObject={excelObject} setExcelObject={setExcelObject} />

      <LocalStorageField />

      <InputField
        inputObject={inputObject}
        setInputObject={setInputObject}
        excelObject={excelObject}
        setExcelObject={setExcelObject}
      />

      <ResultsField inputObject={inputObject} setInputObject={setInputObject} />
    </div>
  );
}

export default App;
