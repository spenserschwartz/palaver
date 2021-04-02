import React, { useState } from 'react';
import {
  LocalStorageField,
  InputField,
  ReduxField,
  ResultsField,
  ExcelField,
} from './components';
import { inputObjectTemplate } from './helpers';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment } from './redux/actions';

function App() {
  const [inputObject, setInputObject] = useState(inputObjectTemplate);
  const [excelObject, setExcelObject] = useState({});
  const [excelData, setExcelData] = useState([]);

  const counter = useSelector((state) => state.counter);
  const arrayZ = useSelector((state) => state.arrayz);
  const inputObjectZ = useSelector((state) => state.inputObjectZ);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>Incrementy 3</button>

      <div>
        <p>arrayZ</p>
        {arrayZ.map((el) => (
          <div>{el}</div>
        ))}
      </div>

      <div>
        <h5>inputObjectZ</h5>
        {inputObjectZ.jobTitle}
      </div>

      <ReduxField />

      <ExcelField
        excelObject={excelObject}
        setExcelObject={setExcelObject}
        excelData={excelData}
        setExcelData={setExcelData}
      />

      <LocalStorageField />

      <InputField
        inputObject={inputObject}
        setInputObject={setInputObject}
        excelObject={excelObject}
        setExcelObject={setExcelObject}
        excelData={excelData}
        setExcelData={setExcelData}
      />

      <ResultsField inputObject={inputObject} setInputObject={setInputObject} />
    </div>
  );
}

export default App;
