import React from 'react';
import './styles.css';
import LocalStorageTextBox from './LocalStorageTextBox';

const LocalStorageDisplay = ({ localObject }) => {
  return (
    <div>
      <h2>Local Storage Display</h2>
      <div className="localStorageDisplay">
        {Object.keys(localObject).map((localObjectKey, i) => (
          <LocalStorageTextBox
            key={i}
            localObjectKey={localObjectKey}
            localObject={localObject}
          />
        ))}
      </div>
    </div>
  );
};

export default LocalStorageDisplay;
