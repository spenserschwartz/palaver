import React from "react";
import {
  LocalStorageField,
  InputField,
  ReduxField,
  ResultsField,
  ExcelField,
} from "./components";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/actions";

function App() {
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

      <ExcelField />

      <LocalStorageField />

      <InputField />

      <ResultsField />
    </div>
  );
}

export default App;
