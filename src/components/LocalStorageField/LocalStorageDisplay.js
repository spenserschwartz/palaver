import React from 'react';
import './styles.css';
import LocalStorageTextBox from './LocalStorageTextBox';
import { inputObjectTemplate } from '../../helpers';

const LocalStorageDisplay = ({ localObject }) => {
  const localStorageObject = localObject.companyName
    ? localObject
    : inputObjectTemplate;

  return (
    <div>
      <h2>Local Storage Display</h2>
      <div className="localStorageDisplay">
        {Object.keys(localStorageObject).map((localStorageObjectKey, i) => (
          <LocalStorageTextBox
            key={i}
            localStorageObjectKey={localStorageObjectKey}
            localStorageObject={localStorageObject}
          />
        ))}
      </div>
    </div>
  );
};

export default LocalStorageDisplay;
