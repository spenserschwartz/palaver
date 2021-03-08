import React, { useState } from 'react';
import { displayName } from '../../helpers/functions';
import './styles.css';

const LocalStorageTextBox = ({ localStorageObjectKey, localStorageObject }) => {
  const [input, updateInput] = useState(
    localStorageObject[localStorageObjectKey]
  );

  return (
    <div className="localStorageTextBox">
      <h3>{displayName(localStorageObjectKey)}</h3>
      <textarea
        className="localStorageText"
        value={input}
        onChange={(e) => updateInput(e.target.value)}
      />
    </div>
  );
};

export default LocalStorageTextBox;
