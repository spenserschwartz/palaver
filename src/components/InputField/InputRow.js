import React, { useState } from 'react';
import { displayName } from '../../helpers/functions';
import './styles.css';

const InputRow = ({ row, index }) => {
  const [input, setInput] = useState('');

  const inputProps = {};
  inputProps.required = row === 'personalIn' ? false : true;
  inputProps.className = row === 'personalIn' ? 'largeInput' : 'smallInput';

  return (
    <div className="inputRow">
      <div className="inputLabel">{displayName(row)}</div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id={row}
        {...inputProps}
      />
    </div>
  );
};

export default InputRow;
