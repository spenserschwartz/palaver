import React, { useState, useEffect } from 'react';
import { displayName } from '../../helpers/functions';
import './styles.css';

const LocalStorageTextBox = ({ localObjectKey, localObject }) => {
  const [input, updateInput] = useState('');

  // Async to display the current localStorage values in text box
  useEffect(() => {
    updateInput(localObject[localObjectKey]);
  }, [localObject, localObjectKey]);

  return (
    <div className="localStorageTextBox">
      <h3>{displayName(localObjectKey)}</h3>
      <textarea
        className="localStorageText"
        value={input}
        onChange={(e) => updateInput(e.target.value)}
      />
    </div>
  );
};

export default LocalStorageTextBox;
