import React, { useState } from 'react';
import {
  LocalStorageField,
  InputField,
  ReduxField,
  ResultsField,
  ExcelField,
} from './components';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment } from './redux/actions';

function App() {
  const [excelObject, setExcelObject] = useState({});
  const [excelData, setExcelData] = useState([]);

  const counter = useSelector((state) => state.counter);
  const arrayZ = useSelector((state) => state.arrayz);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>Incrementy 3</button>

      <div>
        <p>arrayZ</p>
        {arrayZ.map((el, i) => (
          <div key={i}>{el}</div>
        ))}
      </div>

      <ReduxField />

      <ExcelField setExcelObject={setExcelObject} />

      <LocalStorageField />

      <InputField />

      <ResultsField />
    </div>
  );
}

export default App;
