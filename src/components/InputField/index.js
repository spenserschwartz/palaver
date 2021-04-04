import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';

import AddToTableButton from './AddToTableButton';
import InputRow from './InputRow';

import { generateMessage } from '../../redux/actions';

const InputField = () => {
  const dispatch = useDispatch();
  const inputObject = useSelector((state) => state.inputObject);

  const generate = (e) => {
    dispatch(generateMessage());
    e.preventDefault();
  };

  return (
    <div className="inputField">
      <h1>Input Field</h1>

      <form className="introMessageForm" onSubmit={(e) => generate(e)}>
        <div>
          {Object.keys(inputObject).map((row, i) => (
            <InputRow key={i} row={row} index={i} />
          ))}
        </div>
        <input
          type="submit"
          className=" button generateButton"
          value="Generate"
        />
      </form>

      <AddToTableButton />
    </div>
  );
};

export default InputField;
